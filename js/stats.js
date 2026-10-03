/* ============================== ESTADÍSTICAS ============================== */
function statsRange(){
  const now = new Date(), t = todayISO(), p = state.statsPeriod;
  if(p==='semana'){ const d = new Date(); d.setDate(d.getDate() - ((d.getDay()+6)%7)); return [localISO(d), t]; }   // lunes → hoy
  if(p==='mes') return [t.slice(0,8)+'01', t];
  if(p==='trimestre'){ const m = Math.floor(now.getMonth()/3)*3; return [`${now.getFullYear()}-${String(m+1).padStart(2,'0')}-01`, t]; }
  if(p==='rango') return [state.statsFrom||'', state.statsTo||''];
  return ['', ''];
}
function statsSource(){
  if(state.statsScope==='all' && isAdmin()) return state.statsAll;   // null mientras carga
  return state.sales;
}
function computeStats(sales){
  const clients = {}, prods = {}, vendors = {};
  let total = 0;
  sales.forEach(s=>{
    total += s.total||0;
    const cn = s.clientName || '—';
    const c = clients[cn] = clients[cn] || {name:cn, total:0, count:0};
    c.total += s.total||0; c.count++;
    const vn = s.vendorName || '—';
    const v = vendors[vn] = vendors[vn] || {name:vn, total:0, count:0};
    v.total += s.total||0; v.count++;
    (s.items||[]).forEach(i=>{
      const k = i.ref || i.name;
      const p = prods[k] = prods[k] || {name:i.name, qty:0, revenue:0};
      p.qty += i.qty||0; p.revenue += (i.price||0)*(i.qty||0);
    });
  });
  const arr = o => Object.values(o);
  return {
    total, count: sales.length,
    topClients: arr(clients).sort((a,b)=>b.total-a.total).slice(0,8),
    topQty: arr(prods).sort((a,b)=>b.qty-a.qty).slice(0,8),
    topRevenue: arr(prods).sort((a,b)=>b.revenue-a.revenue).slice(0,8),
    vendors: arr(vendors).sort((a,b)=>b.total-a.total)
  };
}
function statsRankCard(title, hint, rows, valueFn, fmtFn, subFn){
  const max = rows.length ? Math.max(...rows.map(valueFn)) || 1 : 1;
  return `<div class="card">
    <div style="padding:14px 16px 2px;font-weight:700">${title}</div>
    ${hint?`<div style="padding:0 16px 6px;font-size:11.5px;color:var(--text-muted)">${hint}</div>`:''}
    ${rows.length ? rows.map((r,i)=>`
      <div class="list-row" style="flex-direction:column;align-items:stretch;gap:5px">
        <div style="display:flex;justify-content:space-between;gap:10px">
          <div style="min-width:0"><div class="who">${i+1}. ${esc(r.name)}</div><div class="meta">${subFn(r)}</div></div>
          <div class="amt tabular">${fmtFn(r)}</div>
        </div>
        <div style="height:6px;background:var(--brand-soft);border-radius:4px"><div style="width:${Math.max(3, Math.round(valueFn(r)/max*100))}%;height:100%;background:var(--brand);border-radius:4px"></div></div>
      </div>`).join('') : emptyState('Sin datos en este periodo')}
  </div>`;
}
function renderEstadisticas(){
  const [from, to] = statsRange();
  const src = statsSource();
  const periods = [['semana','Esta semana'],['mes','Este mes'],['trimestre','Este trimestre'],['rango','Rango libre'],['todo','Todo']];
  const chips = `<div class="chip-row">${periods.map(([id,l])=>`<div class="chip ${state.statsPeriod===id?'active':''}" data-statsperiod="${id}">${l}</div>`).join('')}</div>`;
  const scope = isAdmin() ? `<div class="chip-row">
      <div class="chip ${state.statsScope==='mine'?'active':''}" data-statsscope="mine">Mis ventas</div>
      <div class="chip ${state.statsScope==='all'?'active':''}" data-statsscope="all">Todas las vendedoras</div></div>` : '';
  const range = state.statsPeriod==='rango' ? `<div class="toolbar">
      <input type="date" id="stats-from" value="${esc(state.statsFrom)}" title="Desde" style="max-width:150px">
      <input type="date" id="stats-to" value="${esc(state.statsTo)}" title="Hasta" style="max-width:150px"></div>` : '';
  if(!src) return scope + chips + range + emptyState('Cargando…','Trayendo las ventas de todas las vendedoras.');

  const sales = src.filter(s=>{ const d=(s.date||'').slice(0,10); return (!from || d>=from) && (!to || d<=to); });
  const st = computeStats(sales);
  const label = from||to ? `${from?fmtDate(from):'inicio'} — ${to?fmtDate(to):'hoy'}` : 'Todo el historial';
  return `
  ${scope}${chips}${range}
  <div style="font-size:12.5px;color:var(--text-muted);margin:-4px 0 14px">${esc(label)}</div>
  <div class="kpi-grid" style="margin-bottom:18px">
    <div class="kpi"><div class="kpi-label">Ventas</div><div class="kpi-value tabular">${fmtCOP(st.total)}</div><div class="kpi-sub">${st.count} venta${st.count===1?'':'s'}</div></div>
    <div class="kpi"><div class="kpi-label">Ticket promedio</div><div class="kpi-value tabular">${fmtCOP(st.count? st.total/st.count : 0)}</div><div class="kpi-sub">por venta</div></div>
  </div>
  <div class="two-col">
    ${statsRankCard('Cliente que más consume', '', st.topClients, r=>r.total, r=>fmtCOP(r.total), r=>`${r.count} compra${r.count===1?'':'s'}`)}
    ${statsRankCard('Producto más solicitado', 'Por unidades vendidas', st.topQty, r=>r.qty, r=>r.qty+' u.', r=>fmtCOP(r.revenue)+' en ventas')}
  </div>
  <div class="two-col" style="margin-top:22px">
    ${statsRankCard('Producto que más ingreso deja', 'Por precio × cantidad vendida (aún no se registra el costo por producto)', st.topRevenue, r=>r.revenue, r=>fmtCOP(r.revenue), r=>r.qty+' unidades')}
    ${state.statsScope==='all' && isAdmin() ? statsRankCard('Por vendedora', '', st.vendors, r=>r.total, r=>fmtCOP(r.total), r=>`${r.count} venta${r.count===1?'':'s'}`) : ''}
  </div>`;
}
async function loadAllSalesForAdmin(){
  const out = [], page = 1000;
  for(let from = 0; ; from += page){
    const { data, error } = await SB.from('sales').select('sale_date,client_name,vendor_name,items,total')
      .order('sale_date', {ascending:true}).range(from, from + page - 1);
    if(error) throw error;
    out.push(...data);
    if(data.length < page) break;
  }
  state.statsAll = out.map(r=>({date:r.sale_date, clientName:r.client_name, vendorName:r.vendor_name, items:r.items, total:r.total}));
}
document.addEventListener('click', async (e)=>{
  const per = e.target.closest('[data-statsperiod]');
  if(per){ state.statsPeriod = per.dataset.statsperiod; render(); return; }
  const sc = e.target.closest('[data-statsscope]');
  if(sc){
    state.statsScope = sc.dataset.statsscope;
    if(state.statsScope==='all' && isAdmin()){
      state.statsAll = null; render();
      try{ await loadAllSalesForAdmin(); }catch(err){ console.error(err); toast('No se pudieron cargar las ventas de todas'); state.statsScope='mine'; }
    }
    render();
  }
});
document.addEventListener('input', (e)=>{
  if(e.target.id==='stats-from'){ state.statsFrom = e.target.value; render(); }
  if(e.target.id==='stats-to'){ state.statsTo = e.target.value; render(); }
});
