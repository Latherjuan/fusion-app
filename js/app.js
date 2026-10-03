/* ============================== ICONS ============================== */
const ICONS = {
  dashboard:'<path d="M4 13h6V4H4v9Zm0 7h6v-5H4v5Zm10 0h6V11h-6v9Zm0-16v5h6V4h-6Z"/>',
  products:'<path d="M9 3h6l1 4H8l1-4Z"/><path d="M5 7h14l-1.2 12.2A2 2 0 0 1 15.8 21H8.2a2 2 0 0 1-2-1.8L5 7Z"/><path d="M9 11v6M15 11v6"/>',
  sell:'<circle cx="9" cy="20" r="1.4" fill="currentColor" stroke="none"/><circle cx="17" cy="20" r="1.4" fill="currentColor" stroke="none"/><path d="M3 4h2l2.4 12.2a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.6L21 8H6"/>',
  clients:'<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.6 2.7-6 6-6s6 2.4 6 6"/><circle cx="17" cy="9" r="2.6"/><path d="M15.5 14.3c2.6.3 4.5 2.4 4.5 5.7"/>',
  bell:'<path d="M6 10a6 6 0 0 1 12 0c0 4 1.4 5.4 2 6H4c.6-.6 2-2 2-6Z"/><path d="M9.5 19a2.5 2.5 0 0 0 5 0"/>',
  vendors:'<path d="M12 3 4 6.5V11c0 5 3.4 8.3 8 10 4.6-1.7 8-5 8-10V6.5L12 3Z"/><path d="M9 12.2l2 2 4-4.2"/>',
  search:'<circle cx="11" cy="11" r="6.5"/><path d="m20 20-3.6-3.6"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  edit:'<path d="M4 20h4L18.5 9.5a2.1 2.1 0 0 0-3-3L5 17v3Z"/>',
  trash:'<path d="M5 7h14M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m-9 0 1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1L18 7"/>',
  cart:'<circle cx="9" cy="20" r="1.4" fill="currentColor" stroke="none"/><circle cx="17" cy="20" r="1.4" fill="currentColor" stroke="none"/><path d="M3 4h2l2.4 12.2a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.6L21 8H6"/>',
  check:'<path d="m5 13 4 4L19 7"/>',
  clock:'<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  print:'<path d="M6 9V4h12v5M6 18H4a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-2M6 14h12v6H6v-6Z"/>',
  x:'<path d="M6 6l12 12M18 6 6 18"/>',
  leaf:'<path d="M5 19c9 0 14-5 14-14C10 5 5 10 5 19Z"/><path d="M5 19c2-6 5-9 10-11"/>',
  gallery:'<rect x="3" y="3" width="7.5" height="7.5" rx="1.6"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="1.6"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="1.6"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.6"/>',
  send:'<path d="M3 11 21 3l-8 18-2-8-8-2Z"/>',
  moon:'<path d="M20 14.2A8.3 8.3 0 1 1 9.8 4a6.8 6.8 0 0 0 10.2 10.2Z"/>',
  sparkle:'<path d="M12 4 13.6 9.4 19 11l-5.4 1.6L12 18l-1.6-5.4L5 11l5.4-1.6L12 4Z"/>',
  droplet:'<path d="M12 3s6.2 7.2 6.2 11.2a6.2 6.2 0 1 1-12.4 0C5.8 10.2 12 3 12 3Z"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 3v2.2M12 18.8V21M4.2 4.2l1.6 1.6M18.2 18.2l1.6 1.6M3 12h2.2M18.8 12H21M4.2 19.8l1.6-1.6M18.2 5.8l1.6-1.6"/>',
  bolt:'<path d="M13 3 5 13.5h5.2L9.5 21l8.5-11.5H13l1-6.5Z"/>',
  image:'<rect x="3" y="4.5" width="18" height="15" rx="2"/><circle cx="9" cy="10" r="1.8"/><path d="m4 17 5-4.5 3.5 3L17 11l4 4.5"/>',
  download:'<path d="M12 3v12m0 0-4.5-4.5M12 15l4.5-4.5"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/>',
  upload:'<path d="M12 21V9m0 0-4.5 4.5M12 9l4.5 4.5"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/>',
  logout:'<path d="M9 21H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/>',
  star:'<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3Z"/>',
  user:'<circle cx="12" cy="8" r="3.6"/><path d="M5 20c0-3.9 3.1-6.5 7-6.5s7 2.6 7 6.5"/>',
  chart:'<path d="M4 19h16"/><path d="M7 19V10"/><path d="M12 19V5"/><path d="M17 19v-7"/>'
};
function icon(name,size=18){return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICONS[name]||''}</svg>`;}

/* ============================== HELPERS ============================== */
const CATS = ["Magnesio y Relajación Muscular","Colágeno y Belleza","Omega y Ácidos Grasos","Vitaminas y Multivitamínicos","Salud Digestiva y Detox","Energía, Fuerza y Rendimiento","Bienestar Hormonal, Sueño y Ánimo","Articulaciones y Movilidad","Nutrición y Otros Naturales"];
const fmtCOP = n => '$ ' + Math.round(n||0).toLocaleString('es-CO');
const localISO = (d=new Date()) => new Date(d.getTime() - d.getTimezoneOffset()*60000).toISOString().slice(0,10);
const todayISO = () => localISO();
const addDays = (isoDate, days) => { const d = new Date(isoDate+'T00:00:00'); d.setDate(d.getDate()+Number(days||0)); return localISO(d); };
const fmtDate = iso => { if(!iso) return '—'; const d = new Date(iso.length<=10 ? iso+'T00:00:00' : iso); return d.toLocaleDateString('es-CO',{day:'numeric',month:'short',year:'numeric'}); };
const daysDiff = iso => Math.round((new Date(iso+'T00:00:00') - new Date(todayISO()+'T00:00:00'))/86400000);
const uid = () => Math.random().toString(36).slice(2,10);
function slugRef(s){ return (s||'').toUpperCase().trim().replace(/[^A-Z0-9]+/g,'-').replace(/^-+|-+$/g,'').slice(0,40) || ('P-'+uid()); }
function esc(s){ return String(s==null?'':s).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function toast(msg){ const t=document.getElementById('toast'); t.textContent=msg; t.classList.add('show'); clearTimeout(toast._t); toast._t=setTimeout(()=>t.classList.remove('show'),2400); }
/* ============================== STATE ============================== */
const state = {
  view: 'dashboard',
  products: [], clients: [], sales: [], reminders: [],
  ready: {products:false, clients:false, sales:false, reminders:false},
  orders: [], activeOrderKey: null, orderClientQuery: '', venderMode: 'armar',
  productSearch: '', productCat: 'Todas',
  clientSearch: '',
  reconsumoFilter: 'vencidos',
  openClientId: null,
  presetAddRef: null, showInactive: false, statsPeriod: 'mes', statsFrom: '', statsTo: '', statsScope: 'mine', statsAll: null,
  catalogSearch: '', catalogCat: 'Todas', catalogSelection: [], catalogClientName: '', catalogNote: '',
  ventasFrom: '', ventasTo: '', ventasSearch: '',
};
const CAT_TINTS = [['#E3EBD9','#3B5B34'],['#F3E4C3','#93691E'],['#DCEBE8','#2E6B63'],['#F1E1E6','#8A3B54'],['#E4E1F5','#4A3E86']];
const CAT_ICON_MAP = {'Magnesio y Relajación Muscular':'moon','Colágeno y Belleza':'sparkle','Omega y Ácidos Grasos':'droplet','Vitaminas y Multivitamínicos':'sun','Salud Digestiva y Detox':'leaf','Energía, Fuerza y Rendimiento':'bolt','Bienestar Hormonal, Sueño y Ánimo':'moon','Articulaciones y Movilidad':'vendors','Nutrición y Otros Naturales':'leaf'};
function catTint(category){ const idx = CATS.indexOf(category); return CAT_TINTS[(idx<0?0:idx) % CAT_TINTS.length]; }
function catIcon(category){ return CAT_ICON_MAP[category] || 'leaf'; }
function productImageBlock(p){
  if(p.image) return `<div class="ph-img"><img src="${p.image}" alt="${esc(p.name)}"></div>`;
  const [bg,fg] = catTint(p.category);
  return `<div class="ph-img" style="background:${bg};color:${fg}">${icon(catIcon(p.category),34)}</div>`;
}


/* ============================== SESSION (Supabase Auth) ============================== */
const LOGO_DATA_URI = 'assets/logo.png';
let SESSION = null;   // {id, email, name, role, canEditPrice, phone}
function roleLabel(role){ return role==='admin' ? 'Administrador' : 'Vendedora'; }
function isAdmin(){ return !!SESSION && SESSION.role==='admin'; }
function canEditPrice(){ return !!SESSION && !!SESSION.canEditPrice; }

let DB = null;

/* ============================== RENDER DISPATCH ============================== */
const NAV_ALL = [
  {id:'dashboard', label:'Panel', icon:'dashboard'},
  {id:'vender', label:'Vender', icon:'sell'},
  {id:'ventas', label:'Ventas', icon:'chart'},
  {id:'catalogo', label:'Catálogo', icon:'gallery'},
  {id:'clientes', label:'Clientes', icon:'clients'},
  {id:'reconsumo', label:'Reconsumo', icon:'bell'},
  {id:'estadisticas', label:'Estadísticas', icon:'star'},
  {id:'ajustes', label:'Mi cuenta', icon:'user'},
  {id:'admin', label:'Administración', icon:'vendors', admin:true},
];
function navForRole(){ return SESSION ? NAV_ALL.filter(n=>!n.admin || isAdmin()) : []; }
const TITLES = {dashboard:['Panel','Resumen del negocio de hoy'], vender:['Vender','Registra una venta y arma el carrito'], ventas:['Ventas','Historial, reporte y ganancia estimada'], catalogo:['Catálogo para clientes','Explora, filtra y arma un PDF a la medida'], clientes:['Clientes','Historial y datos de contacto'], reconsumo:['Avisos de reconsumo','A quién contactar y cuándo'], estadisticas:['Estadísticas','Mejores clientes y productos por periodo'], ajustes:['Mi cuenta','Tu perfil, importar datos y respaldo'], admin:['Administración','Personas, roles y permisos']};

function renderShell(){
  document.getElementById('nav').innerHTML = navForRole().map(n=>{
    let badge = 0;
    if(n.id==='reconsumo') badge = pendingOverdueCount();
    if(n.id==='catalogo') badge = state.catalogSelection.length;
    if(n.id==='vender') badge = state.orders.length;
    return `<div class="nav-item ${state.view===n.id?'active':''}" data-nav="${n.id}">${icon(n.icon)}<span>${n.label}</span>${badge?`<span class="nav-badge${n.id==='catalogo'?' badge-neutral':''}">${badge}</span>`:''}</div>`;
  }).join('');
  document.getElementById('page-title').textContent = TITLES[state.view][0];
  document.getElementById('page-subtitle').textContent = TITLES[state.view][1];
  document.getElementById('today-pill').textContent = new Date().toLocaleDateString('es-CO',{weekday:'long',day:'numeric',month:'long'});
  updateSessionBox();
}
function pendingOverdueCount(){ const t=todayISO(); return state.reminders.filter(r=>r.status==='pending' && r.dueDate<t).length; }

function render(){
  renderShell();
  const wrap = document.getElementById('view-wrap');
  if(!DB){ wrap.innerHTML = emptyState('No se pudo cargar el almacenamiento local','Intenta abrir el archivo de nuevo desde tu navegador.'); return; }
  const fns = {dashboard:renderDashboard, vender:renderVender, ventas:renderVentas, catalogo:renderCatalogo, clientes:renderClientes, reconsumo:renderReconsumo, estadisticas:renderEstadisticas, ajustes:renderAjustes, admin:renderAdmin};
  wrap.innerHTML = fns[state.view]();
  afterRender[state.view] && afterRender[state.view]();
}
const afterRender = {};

function emptyState(title,sub){
  return `<div class="card empty">${icon('leaf',34)}<div style="font-weight:700;color:var(--text);margin-bottom:4px">${esc(title)}</div><div>${esc(sub||'')}</div></div>`;
}

/* ============================== DASHBOARD ============================== */
function renderDashboard(){
  const t = todayISO();
  const salesToday = state.sales.filter(s=>(s.date||'').slice(0,10)===t);
  const totalToday = salesToday.reduce((a,s)=>a+(s.total||0),0);
  const activeProducts = state.products.filter(p=>p.active!==false).length;
  const overdue = state.reminders.filter(r=>r.status==='pending' && r.dueDate<t).length;
  const pendingAll = state.reminders.filter(r=>r.status==='pending').length;

  const recentSales = state.sales.slice(0,6);
  const upcoming = state.reminders.filter(r=>r.status==='pending').sort((a,b)=>a.dueDate.localeCompare(b.dueDate)).slice(0,6);

  return `
  <div class="kpi-grid">
    <div class="kpi"><div class="kpi-label">Ventas hoy</div><div class="kpi-value tabular">${fmtCOP(totalToday)}</div><div class="kpi-sub">${salesToday.length} venta${salesToday.length===1?'':'s'}</div></div>
    <div class="kpi"><div class="kpi-label">Ganancia hoy (15%)</div><div class="kpi-value tabular">${fmtCOP(totalToday*0.15)}</div><div class="kpi-sub">estimada</div></div>
    <div class="kpi"><div class="kpi-label">Clientes</div><div class="kpi-value tabular">${state.clients.length}</div><div class="kpi-sub">registrados</div></div>
    <div class="kpi"><div class="kpi-label">Productos activos</div><div class="kpi-value tabular">${activeProducts}</div><div class="kpi-sub">de ${state.products.length} en catálogo</div></div>
    <div class="kpi"><div class="kpi-label">Avisos pendientes</div><div class="kpi-value tabular ${overdue?'warn':''}">${pendingAll}</div><div class="kpi-sub">${overdue?overdue+' vencidos':'al día'}</div></div>
  </div>

  <div class="two-col" style="margin-top:22px">
    <div class="card">
      <div style="padding:14px 16px 6px;font-weight:700">Ventas recientes</div>
      ${recentSales.length? recentSales.map(s=>`
        <div class="list-row">
          <div><div class="who">${esc(s.clientName||'Cliente')}</div><div class="meta">${fmtDate(s.date)} · ${esc(s.vendorName||'—')}</div></div>
          <div class="amt tabular">${fmtCOP(s.total)}</div>
        </div>`).join('') : emptyState('Aún no hay ventas','Registra la primera venta desde "Vender".')}
    </div>
    <div class="card">
      <div style="padding:14px 16px 6px;font-weight:700">Próximos avisos de reconsumo</div>
      ${upcoming.length? upcoming.map(r=>reminderMini(r)).join('') : emptyState('Sin avisos próximos','Aparecerán cuando registres ventas.')}
    </div>
  </div>`;
}
function reminderMini(r){
  const d = daysDiff(r.dueDate); const overdue = d<0;
  return `<div class="list-row">
    <span class="rem-dot" style="background:${overdue?'var(--danger)':'var(--accent)'}"></span>
    <div style="min-width:0"><div class="who">${esc(r.clientName)}</div><div class="meta">${esc(r.productName)}</div></div>
    <div class="amt" style="font-family:'Manrope';font-size:12px;color:${overdue?'var(--danger)':'var(--text-muted)'}">${overdue? Math.abs(d)+'d vencido' : (d===0?'hoy':'en '+d+'d')}</div>
  </div>`;
}

function posProductCard(p, order){
  const inCart = order && order.items.find(i=>i.ref===p.ref);
  return `<div class="pos-card" data-product-card="${esc(p.ref)}">
    <div class="pos-name">${esc(p.name)}</div>
    <div class="pos-price tabular">${fmtCOP(p.price)}</div>
    <button class="padd ${inCart?'in-cart':''}" data-action="add-to-cart" data-ref="${esc(p.ref)}">${inCart? `${icon('check',13)} ${inCart.qty} en carrito` : `${icon('plus',13)} Agregar`}</button>
  </div>`;
}

/* ============================== VENTAS (historial + reporte) ============================== */
function salesInRange(){
  let list = state.sales.slice();
  if(state.ventasFrom) list = list.filter(s=> (s.date||'').slice(0,10) >= state.ventasFrom);
  if(state.ventasTo) list = list.filter(s=> (s.date||'').slice(0,10) <= state.ventasTo);
  const q = state.ventasSearch.trim().toLowerCase();
  if(q) list = list.filter(s=> `${s.clientName||''} ${s.vendorName||''}`.toLowerCase().includes(q));
  return list;
}
function renderVentas(){
  const list = salesInRange().slice().sort((a,b)=> (b.date||'').localeCompare(a.date||''));
  const total = list.reduce((a,s)=>a+(s.total||0),0);
  const ganancia = total*0.15;
  return `
  <div class="toolbar">
    <div class="search-box">${icon('search',15)}<input type="text" id="ventas-search" placeholder="Buscar cliente o vendedora…" value="${esc(state.ventasSearch)}"></div>
    <input type="date" id="ventas-from" value="${esc(state.ventasFrom)}" title="Desde" style="max-width:150px">
    <input type="date" id="ventas-to" value="${esc(state.ventasTo)}" title="Hasta" style="max-width:150px">
    <div class="spacer" style="flex:1"></div>
    <button class="btn btn-ghost btn-sm" data-action="ventas-clear-filters">${icon('x',13)} Limpiar</button>
    <button class="btn btn-accent" data-action="print-ventas-report">${icon('print',14)} Generar reporte</button>
  </div>
  <div class="kpi-grid" style="margin-bottom:18px">
    <div class="kpi"><div class="kpi-label">Ventas en el rango</div><div class="kpi-value tabular">${fmtCOP(total)}</div><div class="kpi-sub">${list.length} venta${list.length===1?'':'s'}</div></div>
    <div class="kpi"><div class="kpi-label">Ganancia estimada (15%)</div><div class="kpi-value tabular">${fmtCOP(ganancia)}</div><div class="kpi-sub">sobre el total del rango</div></div>
  </div>
  <div class="card table-wrap">
    ${list.length? `<table class="data"><thead><tr><th>Fecha</th><th>Cliente</th><th>Vendedora</th><th>Productos</th><th>Total</th></tr></thead><tbody>
      ${list.map(s=>`<tr data-open-sale="${s.id}" style="cursor:pointer"><td>${fmtDate(s.date)}</td><td><b>${esc(s.clientName||'—')}</b></td><td>${esc(s.vendorName||'—')}</td><td>${(s.items||[]).map(i=>esc(i.name)+' ×'+i.qty).join(', ')}</td><td class="tabular">${fmtCOP(s.total)}</td></tr>`).join('')}
    </tbody></table>` : emptyState('No hay ventas en este rango','Ajusta las fechas o el filtro de búsqueda.')}
  </div>`;
}
function buildVentasReport(){
  const list = salesInRange().slice().sort((a,b)=> (a.date||'').localeCompare(b.date||''));
  const total = list.reduce((a,s)=>a+(s.total||0),0);
  const ganancia = total*0.15;
  const area = document.getElementById('print-area');
  const rangeLabel = (state.ventasFrom||state.ventasTo) ? `${state.ventasFrom?fmtDate(state.ventasFrom):'inicio'} — ${state.ventasTo?fmtDate(state.ventasTo):'hoy'}` : 'Todo el historial';
  area.innerHTML = `<div class="pdf-catalog">
    <div class="pdf-cat-head">
      <div style="display:flex;align-items:center;gap:10px"><img src="${LOGO_DATA_URI}" style="width:38px;height:38px;border-radius:50%"><div><h2>Fusión de Sabor Natural</h2><div style="font-size:11px;color:#666">Reporte de ventas · ${esc(rangeLabel)}</div></div></div>
      <div style="text-align:right;font-size:11px;color:#666">Generado ${fmtDate(new Date().toISOString())}${currentVendorName()?('<br>por '+esc(currentVendorName())):''}</div>
    </div>
    <div style="display:flex;gap:22px;margin:14px 0;font-size:13px">
      <div><b>${fmtCOP(total)}</b> en ventas</div>
      <div><b>${fmtCOP(ganancia)}</b> ganancia estimada (15%)</div>
      <div><b>${list.length}</b> venta${list.length===1?'':'s'}</div>
    </div>
    <table style="width:100%;border-collapse:collapse;font-size:11.5px">
      <thead><tr style="text-align:left;border-bottom:2px solid #20391F"><th style="padding:5px 6px">Fecha</th><th style="padding:5px 6px">Cliente</th><th style="padding:5px 6px">Vendedora</th><th style="padding:5px 6px">Productos</th><th style="padding:5px 6px;text-align:right">Total</th></tr></thead>
      <tbody>
        ${list.map(s=>`<tr style="border-bottom:1px solid #e3d9bf"><td style="padding:5px 6px">${fmtDate(s.date)}</td><td style="padding:5px 6px">${esc(s.clientName||'—')}</td><td style="padding:5px 6px">${esc(s.vendorName||'—')}</td><td style="padding:5px 6px">${(s.items||[]).map(i=>esc(i.name)+' ×'+i.qty).join(', ')}</td><td style="padding:5px 6px;text-align:right">${fmtCOP(s.total)}</td></tr>`).join('')}
      </tbody>
    </table>
  </div>`;
  window.print();
}
function openSaleDetail(id){
  const s = state.sales.find(x=>x.id===id); if(!s) return;
  openModal({title:'Venta · '+esc(s.clientName||'—'), wide:true, body:`
    <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:14px;color:var(--text-muted);font-size:13px">
      <div>${icon('clock',13)} ${fmtDate(s.date)} · atendido por ${esc(s.vendorName||'—')}</div>
      ${s.notes?`<div style="font-style:italic">${esc(s.notes)}</div>`:''}
    </div>
    <div class="card" style="max-height:220px;overflow-y:auto">${(s.items||[]).map(i=>`<div class="list-row"><div><div class="who">${esc(i.name)}</div><div class="meta">${fmtCOP(i.price)} c/u × ${i.qty}</div></div><div class="amt tabular">${fmtCOP(i.price*i.qty)}</div></div>`).join('')||emptyState('Sin productos')}</div>
    <div class="cart-total" style="margin-top:10px"><span class="lbl">Total</span><span class="val tabular">${fmtCOP(s.total)}</span></div>
  `, footer:`
    <button class="btn btn-danger" data-action="delete-sale" data-id="${s.id}">${icon('trash',14)} Eliminar</button>
    <button class="btn btn-primary" data-action="edit-sale" data-id="${s.id}">${icon('edit',14)} Editar</button>
  `});
}
function saleForm(s){
  const items = s.items||[];
  const clientOptions = state.clients.slice().sort((a,b)=>a.name.localeCompare(b.name)).map(c=>`<option value="${esc(c.id)}" ${c.id===s.clientId?'selected':''}>${esc(c.name)}</option>`).join('');
  const activeProducts = state.products.filter(p=>p.active!==false).sort((a,b)=>a.name.localeCompare(b.name));
  const productOptions = activeProducts.map(p=>`<option value="${esc(p.ref)}">${esc(p.name)} — ${fmtCOP(p.price)}</option>`).join('');
  return `<form id="modal-form" data-form="sale">
    <input type="hidden" name="saleId" value="${esc(s.id)}">
    <div class="field-row">
      <div class="field"><label class="field-label">Cliente</label><select name="clientId">${clientOptions}</select></div>
      <div class="field"><label class="field-label">Fecha de la venta</label><input type="date" name="date" required value="${esc((s.date||'').slice(0,10))}"></div>
    </div>
    <div class="field"><label class="field-label">Productos</label>
      <div id="sale-edit-items" style="display:flex;flex-direction:column;gap:6px">
        ${items.map(i=>`<div class="cart-item" data-sale-item-row data-ref="${esc(i.ref)}" data-price="${i.price}" data-name="${esc(i.name)}" data-presentation="${esc(i.presentation||'')}">
          <div><div class="ci-name">${esc(i.name)}</div><div class="ci-sub">${fmtCOP(i.price)} c/u</div></div>
          <input type="number" min="0" value="${i.qty}" class="tabular" style="width:56px" data-sale-item-qty>
          <button type="button" class="icon-btn" data-action="sale-edit-remove-item">${icon('x',13)}</button>
        </div>`).join('') || `<div style="color:var(--text-faint);font-size:13px">Sin productos</div>`}
      </div>
    </div>
    <div class="field-row" style="align-items:flex-end">
      <div class="field" style="flex:1"><label class="field-label">Agregar producto</label><select id="sale-edit-add-product"><option value="">Elegir producto…</option>${productOptions}</select></div>
      <button type="button" class="btn btn-ghost" id="sale-edit-add-btn">${icon('plus',14)} Agregar</button>
    </div>
    <div class="field"><label class="field-label">Notas</label><textarea name="notes">${esc(s.notes||'')}</textarea></div>
  </form>`;
}

/* ============================== CATÁLOGO PARA CLIENTES ============================== */
function renderCatalogo(){
  const q = state.catalogSearch.trim().toLowerCase();
  const list = state.products.filter(p=>(p.active!==false || (isAdmin() && state.showInactive)) && (!q || `${p.name} ${p.ref}`.toLowerCase().includes(q)) && (state.catalogCat==='Todas'||p.category===state.catalogCat));
  const cats = ['Todas', ...CATS.filter(c=>state.products.some(x=>x.category===c))];
  const groups = {};
  list.forEach(p=>{ (groups[p.category]=groups[p.category]||[]).push(p); });
  const orderedCats = Object.keys(groups).sort((a,b)=>CATS.indexOf(a)-CATS.indexOf(b));
  const n = state.catalogSelection.length;

  return `
  <div class="toolbar">
    <div class="search-box">${icon('search',15)}<input type="text" id="catalog-search" placeholder="Buscar producto o referencia…" value="${esc(state.catalogSearch)}"></div>
    <div class="spacer" style="flex:1"></div>
    ${isAdmin()? `<label style="font-size:12.5px;color:var(--text-muted);display:flex;align-items:center;gap:6px;cursor:pointer"><input type="checkbox" data-action="toggle-show-inactive" ${state.showInactive?'checked':''}> Ver dados de baja</label>` : ''}
    ${n? `<button class="btn btn-ghost" data-action="clear-catalog-selection">${icon('x',14)} Vaciar selección (${n})</button>` : ''}
  </div>
  <div class="toolbar" style="margin-top:-8px">
    <button class="btn btn-primary" data-action="new-product">${icon('plus',15)} Agregar producto</button>
  </div>
  <div class="chip-row">${cats.map(c=>`<div class="chip ${state.catalogCat===c?'active':''}" data-catalogchip="${esc(c)}">${esc(c)}</div>`).join('')}</div>
  ${orderedCats.length? orderedCats.map(cat=>`
    <div class="cat-group">
      <div class="cat-title">${esc(cat)} <span style="color:var(--text-faint);font-weight:600;text-transform:none;letter-spacing:0">(${groups[cat].length})</span></div>
      <div class="catalog-grid">${groups[cat].map(catalogCard).join('')}</div>
    </div>`).join('') : emptyState('No hay productos con ese filtro','Ajusta la búsqueda o la categoría.')}
  ${n? `<div class="selection-bar">
      <div>${icon('gallery',16)} <b>${n}</b> producto${n===1?'':'s'} seleccionado${n===1?'':'s'} para el cliente</div>
      <button class="btn btn-accent" data-action="open-catalog-pdf">${icon('send',15)} Generar PDF para cliente</button>
    </div>` : ''}
  `;
}
function catalogCard(p){
  const selected = state.catalogSelection.includes(p.ref);
  return `<div class="catalog-card ${selected?'selected':''}" data-catalog-card="${esc(p.ref)}" style="${p.active===false?'opacity:.55':''}">
    ${productImageBlock(p)}
    <div style="display:flex;justify-content:space-between;gap:8px;align-items:flex-start;margin-top:10px">
      <div><div class="cname">${esc(p.name)}</div><div class="cref">REF ${esc(p.ref)} · ${esc(p.presentation||'')}</div></div>
      <div class="cprice tabular">${fmtCOP(p.price)}</div>
    </div>
    <p class="cdesc">${esc(p.description||'Sin reseña disponible.')}</p>
    <button class="btn ${selected?'btn-primary':'btn-ghost'} btn-sm" data-action="toggle-catalog-select" data-ref="${esc(p.ref)}" style="justify-content:center">${icon(selected?'check':'plus',13)} ${selected?'En selección':'Agregar a selección'}</button>
    ${isAdmin()? `<div style="display:flex;gap:6px;margin-top:6px"><button class="btn btn-ghost btn-sm" style="flex:1;justify-content:center" data-action="edit-product" data-ref="${esc(p.ref)}">${icon('edit',13)} Editar</button><button class="btn btn-ghost btn-sm" style="flex:1;justify-content:center" data-action="toggle-product-active" data-ref="${esc(p.ref)}">${p.active===false?'Reactivar':'Dar de baja'}</button></div>` : ''}
  </div>`;
}
function productForm(p){
  const editing = !!p; p = p || {};
  return `<form id="modal-form" data-form="product">
    ${editing?`<input type="hidden" name="ref" value="${esc(p.ref)}">`:''}
    <div class="field"><label class="field-label">Nombre del producto</label><input type="text" name="name" required placeholder="Ej: Isoflavonas de Soya" value="${esc(p.name||'')}"></div>
    <div class="field-row">
      <div class="field"><label class="field-label">Categoría</label><select name="category">${CATS.map(c=>`<option value="${esc(c)}" ${c===p.category?'selected':''}>${esc(c)}</option>`).join('')}</select></div>
      <div class="field"><label class="field-label">Precio (COP)</label><input type="number" name="price" min="0" step="1000" required placeholder="Ej: 60000" value="${p.price!=null?p.price:''}"></div>
    </div>
    <div class="field-row">
      <div class="field"><label class="field-label">Presentación</label><input type="text" name="presentation" placeholder="Ej: 120 Unidades · 102 g" value="${esc(p.presentation||'')}"></div>
      <div class="field"><label class="field-label">Días para reconsumo</label><input type="number" name="days" min="1" value="${p.days||30}"></div>
    </div>
    <div class="field"><label class="field-label">Descripción / beneficios</label><textarea name="description" placeholder="Ej: Soporte hormonal, antioxidante natural, contribuye a la salud ósea.">${esc(p.description||'')}</textarea></div>
    <div class="field"><label class="field-label">Foto del producto ${editing?'(deja vacío para conservar la actual)':'(opcional)'}</label><input type="file" name="image" accept="image/*" capture="environment"></div>
  </form>`;
}
function fileToCompressedDataUrl(file, maxDim, quality){
  return new Promise((resolve, reject)=>{
    if(!file || !file.size){ resolve(null); return; }
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('read-error'));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error('image-error'));
      img.onload = () => {
        let w = img.width, h = img.height;
        if(w>h){ if(w>maxDim){ h = Math.round(h*maxDim/w); w = maxDim; } }
        else{ if(h>maxDim){ w = Math.round(w*maxDim/h); h = maxDim; } }
        const canvas = document.createElement('canvas');
        canvas.width = w; canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#fff'; ctx.fillRect(0,0,w,h);
        ctx.drawImage(img, 0, 0, w, h);
        resolve(canvas.toDataURL('image/jpeg', quality||0.82));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}
function openCatalogPdfModal(){
  openModal({title:'Generar PDF para el cliente', body:`
    <div class="field"><label class="field-label">Nombre del cliente (opcional)</label><input type="text" id="pdf-client-name" value="${esc(state.catalogClientName)}" placeholder="Ej: María Fernanda Ríos"></div>
    <div class="field"><label class="field-label">Mensaje o recomendación (opcional)</label><textarea id="pdf-note" placeholder="Ej: selección para mejorar el sueño y bajar el estrés">${esc(state.catalogNote)}</textarea></div>
    <div style="font-size:12.5px;color:var(--text-muted)">${state.catalogSelection.length} producto(s) incluidos en el PDF.</div>
  `, footer:`<button class="btn btn-ghost" data-action="close-modal">Cancelar</button><button class="btn btn-primary" data-action="build-catalog-pdf">${icon('print',14)} Generar / Imprimir</button><button class="btn btn-accent" data-action="share-catalog-pdf-whatsapp">${icon('send',14)} Compartir por WhatsApp</button>`});
}
const FLYER_ICONS = ['bolt','moon','leaf','sparkle','droplet','sun','check','clock'];
function extractBenefits(desc, max){
  max = max || 4;
  const text = (desc||'').trim();
  if(!text) return [];
  const sentences = text.split(/\.(?:\s+|$)/).map(s=>s.trim()).filter(Boolean);
  const clauses = [];
  sentences.forEach(s=>{
    s.split(/,\s*| y (?=[a-záéíóúñA-ZÁÉÍÓÚÑ])/).forEach(c=>{
      c = c.trim();
      if(c) clauses.push(c.charAt(0).toUpperCase()+c.slice(1));
    });
  });
  return (clauses.length? clauses : [text]).slice(0,max);
}
function chunkCatalogPages(items, maxPerPage){
  const n = items.length;
  if(!n) return [];
  const pageCount = Math.ceil(n/maxPerPage);
  const base = Math.floor(n/pageCount);
  const extra = n % pageCount;
  const pages = [];
  let idx = 0;
  for(let p=0;p<pageCount;p++){
    const size = base + (p<extra?1:0);
    pages.push(items.slice(idx, idx+size));
    idx += size;
  }
  return pages;
}
function renderCatalogPdfArea(){
  const clientName = (document.getElementById('pdf-client-name')||{}).value || '';
  const note = (document.getElementById('pdf-note')||{}).value || '';
  state.catalogClientName = clientName; state.catalogNote = note;
  const items = state.products.filter(p=>state.catalogSelection.includes(p.ref));
  // up to 6 products per page, but balanced across pages so a lone leftover
  // item never ends up alone on an almost-empty page (e.g. 7 -> 4+3, not 6+1)
  const pages = chunkCatalogPages(items, 6);
  const area = document.getElementById('print-area');
  area.innerHTML = `<div class="pdf-catalog">
    ${pages.map((pageItems,pi)=>{
      const cols = pageItems.length;
      const maxBenefits = cols<=2? 4 : (cols<=4? 3 : 2);
      return `
    <div class="pdf-page">
      <div class="pdf-page-leaf tl">${icon('leaf',95)}</div>
      <div class="pdf-page-leaf br">${icon('leaf',95)}</div>
      ${pi===0? `
      <div class="flyer-head">
        <img src="${LOGO_DATA_URI}">
        <h1>SUPLEMENTOS QUE<br>IMPULSAN TU <em>BIENESTAR</em></h1>
      </div>
      <div class="flyer-badges"><span class="flyer-pill">${icon('leaf',11)} Nutrición · Energía · Bienestar</span></div>
      <div class="flyer-sub">Fórmulas seleccionadas para acompañar tu rutina y tu estilo de vida</div>
      ${clientName? `<div class="flyer-cat-client">Para: <b>${esc(clientName)}</b></div>`:''}
      ${note? `<div class="flyer-cat-note">${esc(note)}</div>`:''}
      ` : `<div class="flyer-sub" style="margin-bottom:2px">Fusión de Sabor Natural${clientName?(' · Para: '+esc(clientName)):''} · página ${pi+1} de ${pages.length}</div>`}
      <div class="flyer-grid cols-${cols}">
        ${pageItems.map(p=>{
          const [bg,fg] = catTint(p.category);
          const benefits = extractBenefits(p.description, maxBenefits);
          return `
          <div class="flyer-card">
            <div class="flyer-eyebrow" style="color:${fg}">${esc(p.category)}</div>
            <div class="flyer-card-name">${esc(p.name)}</div>
            <div class="flyer-media" style="background:${bg}">
              ${p.image? `<img src="${p.image}" alt="${esc(p.name)}">` : `<div class="flyer-media-ph" style="color:${fg}">${icon(catIcon(p.category),34)}</div>`}
            </div>
            <div class="flyer-pres">${esc(p.presentation||'')}</div>
            <div class="flyer-price">${fmtCOP(p.price)}</div>
            <ul class="flyer-benefits">
              ${benefits.map((b,bi)=>`<li class="flyer-benefit"><span class="flyer-bicon" style="background:${bg};color:${fg}">${icon(FLYER_ICONS[bi%FLYER_ICONS.length],11)}</span><span>${esc(b)}</span></li>`).join('')}
            </ul>
          </div>`;
        }).join('')}
      </div>
      ${pi===pages.length-1? `<div class="flyer-foot"><div class="flyer-foot-title">TU BIENESTAR, NUESTRA PRIORIDAD</div><div class="flyer-foot-sub">¿Dudas o quieres hacer tu pedido? Escríbenos${currentVendorContactLine()? (': '+esc(currentVendorContactLine())) : ''} · Fusión de Sabor Natural</div></div>`:''}
    </div>`;
    }).join('')}
  </div>`;
  return {clientName, note, pageCount: pages.length};
}
function buildCatalogPdf(){
  if(!state.catalogSelection.length){ toast('Selecciona al menos un producto'); return; }
  renderCatalogPdfArea();
  closeModal();
  window.print();
}
async function shareCatalogPdfWhatsapp(){
  if(!state.catalogSelection.length){ toast('Selecciona al menos un producto'); return; }
  const btn = document.querySelector('[data-action="share-catalog-pdf-whatsapp"]');
  const btnLabel = `${icon('send',14)} Compartir por WhatsApp`;
  if(btn){ btn.disabled = true; btn.innerHTML = 'Generando PDF…'; }
  const area = document.getElementById('print-area');
  const prevCss = area.style.cssText;
  try{
    const {clientName} = renderCatalogPdfArea();
    area.style.cssText = 'display:block;position:fixed;left:-9999px;top:0;width:680px;background:#F7F1E4;z-index:-1';
    await new Promise(r=>setTimeout(r,120));
    const pageEls = Array.from(document.querySelectorAll('#print-area .pdf-page'));
    if(!pageEls.length) throw new Error('no-pages');
    const jsPDFCtor = (window.jspdf && window.jspdf.jsPDF);
    if(!jsPDFCtor || !window.html2canvas) throw new Error('libs-missing');
    const pdf = new jsPDFCtor({unit:'mm', format:'a4', orientation:'portrait'});
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    // Render all pages in parallel (not one-by-one) so the whole PDF is ready
    // as fast as possible — with many products, a slow sequential render can
    // outlast the browser's "user just tapped a button" window and the native
    // share sheet then refuses to open.
    const canvases = await Promise.all(pageEls.map(el => html2canvas(el, {scale:2, backgroundColor:'#F7F1E4', useCORS:true})));
    canvases.forEach((canvas,i)=>{
      if(!canvas.width || !canvas.height) throw new Error('empty-canvas');
      const imgData = canvas.toDataURL('image/jpeg', 0.92);
      const imgH = Math.min(pageWidth * canvas.height / canvas.width, pageHeight);
      if(i>0) pdf.addPage();
      pdf.addImage(imgData, 'JPEG', 0, 0, pageWidth, imgH);
    });
    const fileName = `Catalogo-Fusion${clientName? '-'+slugRef(clientName) : ''}.pdf`;
    const blob = pdf.output('blob');
    const file = new File([blob], fileName, {type:'application/pdf'});
    const waMsg = clientName? `Hola ${clientName}, te comparto el catálogo de Fusión de Sabor Natural 🌿` : 'Te comparto el catálogo de Fusión de Sabor Natural 🌿';
    // The PDF itself is already generated at this point — from here on we only
    // try to hand it off. If the native share sheet fails or isn't available
    // (common with several pages, since by then the "user gesture" window the
    // browser requires for navigator.share may have expired) we always fall
    // back to a plain download instead of reporting an error, since the PDF
    // is valid either way.
    let shared = false;
    if(navigator.canShare && navigator.canShare({files:[file]})){
      try{
        await navigator.share({files:[file], title:'Catálogo Fusión de Sabor Natural', text: waMsg});
        shared = true;
        toast('PDF compartido');
      }catch(shareErr){
        if(shareErr && shareErr.name==='AbortError'){ closeModal(); return; }
        console.warn('navigator.share falló, se descarga el PDF en su lugar:', shareErr);
      }
    }
    if(!shared){
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a'); a.href = url; a.download = fileName; document.body.appendChild(a); a.click(); a.remove();
      setTimeout(()=>URL.revokeObjectURL(url), 6000);
      window.open(`https://wa.me/?text=${encodeURIComponent(waMsg+' (adjunta el PDF que se acaba de descargar)')}`, '_blank');
      toast('PDF descargado. Adjúntalo en el chat de WhatsApp que se abrió.');
    }
    closeModal();
  }catch(e){
    console.error(e);
    toast('No se pudo generar el PDF para compartir. Intenta de nuevo o usa el botón Generar / Imprimir.');
  }finally{
    area.style.cssText = prevCss;
    if(btn){ btn.disabled=false; btn.innerHTML = btnLabel; }
  }
}

/* ============================== CLIENTES ============================== */
function clientStats(cid){
  const sales = state.sales.filter(s=>s.clientId===cid);
  const last = sales[0];
  const nextRem = state.reminders.filter(r=>r.clientId===cid && r.status==='pending').sort((a,b)=>a.dueDate.localeCompare(b.dueDate))[0];
  return {count: sales.length, last, nextRem};
}
function renderClientes(){
  const q = state.clientSearch.trim().toLowerCase();
  const list = state.clients.filter(c=> !q || `${c.name} ${c.phone||''}`.toLowerCase().includes(q));
  return `
  <div class="toolbar">
    <div class="search-box">${icon('search',15)}<input type="text" id="client-search" placeholder="Buscar cliente o teléfono…" value="${esc(state.clientSearch)}"></div>
    <div class="spacer" style="flex:1"></div>
    <button class="btn btn-accent" data-action="new-client">${icon('plus',15)} Nuevo cliente</button>
  </div>
  <div class="card table-wrap">
    ${list.length? `<table class="data"><thead><tr><th>Nombre</th><th>Teléfono</th><th>Compras</th><th>Última compra</th><th>Próximo aviso</th></tr></thead><tbody>
      ${list.map(c=>{
        const st = clientStats(c.id);
        return `<tr data-open-client="${c.id}">
          <td><b>${esc(c.name)}</b></td>
          <td>${esc(c.phone||'—')}</td>
          <td class="tabular">${st.count}</td>
          <td>${st.last? fmtDate(st.last.date):'—'}</td>
          <td>${st.nextRem? `<span class="${daysDiff(st.nextRem.dueDate)<0?'badge badge-overdue':'badge badge-pending'}">${fmtDate(st.nextRem.dueDate)}</span>` : '—'}</td>
        </tr>`;
      }).join('')}
    </tbody></table>` : emptyState('No hay clientes todavía','Agrega tu primer cliente para empezar a vender.')}
  </div>`;
}
function clientForm(c){
  c = c || {name:'',phone:'',email:'',address:'',notes:''};
  return `<form id="modal-form" data-form="client">
    <div class="field"><label class="field-label">Nombre completo</label><input type="text" name="name" required value="${esc(c.name)}"></div>
    <div class="field-row">
      <div class="field"><label class="field-label">Teléfono</label><input type="tel" name="phone" value="${esc(c.phone)}"></div>
      <div class="field"><label class="field-label">Correo</label><input type="email" name="email" value="${esc(c.email)}"></div>
    </div>
    <div class="field"><label class="field-label">Dirección</label><input type="text" name="address" value="${esc(c.address)}"></div>
    <div class="field"><label class="field-label">Notas</label><textarea name="notes">${esc(c.notes)}</textarea></div>
  </form>`;
}
function openClientDetail(id){
  const c = state.clients.find(x=>x.id===id); if(!c) return;
  const sales = state.sales.filter(s=>s.clientId===id);
  const rems = state.reminders.filter(r=>r.clientId===id).sort((a,b)=>a.dueDate.localeCompare(b.dueDate));
  openModal({title:c.name, wide:true, body:`
    <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:14px;color:var(--text-muted);font-size:13px">
      <div>${c.phone?('📞 '+esc(c.phone)):''} ${c.email?(' · ✉ '+esc(c.email)):''}</div>
      ${c.address?`<div>${esc(c.address)}</div>`:''}
      ${c.notes?`<div style="font-style:italic">${esc(c.notes)}</div>`:''}
    </div>
    <div style="font-weight:700;margin:14px 0 6px">Historial de compras (${sales.length})</div>
    <div class="card" style="max-height:180px;overflow-y:auto">${sales.length? sales.map(s=>`<div class="list-row"><div><div class="who">${fmtDate(s.date)}</div><div class="meta">${s.items.map(i=>i.name+' ×'+i.qty).join(', ')}</div></div><div class="amt tabular">${fmtCOP(s.total)}</div></div>`).join(''):emptyState('Sin compras aún')}</div>
    <div style="font-weight:700;margin:14px 0 6px">Avisos de reconsumo</div>
    <div class="card" style="max-height:180px;overflow-y:auto">${rems.length? rems.map(r=>reminderRow(r,true)).join(''):emptyState('Sin avisos')}</div>
  `, footer:`
    <button class="btn btn-danger" data-action="delete-client" data-id="${c.id}">${icon('trash',14)} Eliminar</button>
    <button class="btn btn-ghost" data-action="edit-client" data-id="${c.id}">${icon('edit',14)} Editar</button>
    <button class="btn btn-primary" data-action="sell-to-client" data-id="${c.id}">${icon('sell',14)} Vender a este cliente</button>
  `});
}

/* ============================== VENDER (POS) ============================== */
function activeOrder(){ return state.orders.find(o=>o.key===state.activeOrderKey) || null; }
function orderTotal(o){ return o.items.reduce((a,i)=>a+i.price*i.qty,0); }
function createOrder(client){
  const key = uid();
  state.orders.push({key, client, items:[], notes:''});
  state.activeOrderKey = key;
  return key;
}
function renderVender(){
  if(state.presetAddRef){ if(state.activeOrderKey) addToCart(state.presetAddRef); state.presetAddRef=null; }
  if(state.venderMode==='validar') return renderValidarVentas();

  const q = state.productSearch.trim().toLowerCase();
  const list = state.products.filter(p=>p.active!==false
    && (!q || `${p.name} ${p.ref}`.toLowerCase().includes(q))
    && (state.productCat==='Todas' || p.category===state.productCat));
  const cats = ['Todas', ...CATS.filter(c=>state.products.some(p=>p.category===c && p.active!==false))];
  const order = activeOrder();
  const total = order? orderTotal(order) : 0;

  return `
  <div class="vender-topbar">
    <div class="vender-topbar-row">
      <div class="order-chips">
        ${state.orders.map(o=>`<div class="order-chip ${o.key===state.activeOrderKey?'active':''}" data-order-chip="${o.key}">
          <span>${esc(o.client.name)}</span><span class="oc-count">${o.items.length}</span>
          <button class="oc-x" data-action="discard-order" data-key="${o.key}" title="Descartar pedido">${icon('x',11)}</button>
        </div>`).join('')}
        <button class="chip" data-action="new-order-chip">${icon('plus',12)} Cliente</button>
      </div>
      <div class="spacer" style="flex:1"></div>
      ${state.orders.length? `<button class="btn btn-ghost btn-sm" data-action="vender-mode-validar">${icon('check',13)} Validar ventas<span class="nav-badge badge-neutral" style="margin-left:6px">${state.orders.length}</span></button>`:''}
    </div>
    ${order? `<div class="vender-topbar-row" style="margin-top:10px">
      <div style="font-size:13px"><b>${esc(order.client.name)}</b> · ${order.items.length} producto${order.items.length===1?'':'s'}</div>
      <div class="spacer" style="flex:1"></div>
      <div class="cart-total-mini tabular">${fmtCOP(total)}</div>
      <button class="btn btn-primary btn-sm" data-action="execute-order" data-key="${order.key}" ${!order.items.length?'disabled':''}>${icon('check',14)} Ejecutar venta</button>
    </div>` : `<div class="vender-topbar-row" style="margin-top:10px">
      <input type="text" id="order-client-query" placeholder="Buscar o escribir nombre de cliente nuevo…" value="${esc(state.orderClientQuery)}" style="max-width:340px">
    </div>
    ${state.orderClientQuery.trim()? clientSuggestions() : ''}`}
  </div>

  <div class="pos-grid">
    <div>
      <div class="toolbar">
        <div class="search-box" style="max-width:none;flex:1">${icon('search',15)}<input type="text" id="pos-search" placeholder="Buscar producto…" value="${esc(state.productSearch)}"></div>
      </div>
      <div class="chip-row">${cats.map(c=>`<div class="chip ${state.productCat===c?'active':''}" data-catchip="${esc(c)}">${esc(c)}</div>`).join('')}</div>
      <div class="pos-products">
        ${list.length? `<div class="prod-grid prod-grid-dense">${list.map(p=>posProductCard(p, order)).join('')}</div>` : emptyState('Sin resultados','Prueba con otro nombre, referencia o categoría.')}
      </div>
    </div>
    <div class="card cart-panel">
      <div style="font-weight:700;font-size:15px">${icon('cart',16)} ${order? esc(order.client.name) : 'Carrito'}</div>
      ${order? `
      <div class="cart-items">${order.items.length? order.items.map(i=>cartRow(i,order.key)).join('') : `<div style="color:var(--text-faint);font-size:13px;padding:8px 0">Agrega productos desde la izquierda</div>`}</div>
      <div class="field"><label class="field-label">Notas de la venta (opcional)</label><input type="text" id="sale-notes" data-key="${order.key}" value="${esc(order.notes||'')}" placeholder="Ej: paga contraentrega"></div>
      <div class="cart-total"><span class="lbl">Total</span><span class="val tabular">${fmtCOP(total)}</span></div>
      <button class="btn btn-primary" style="justify-content:center;padding:12px" data-action="execute-order" data-key="${order.key}" ${!order.items.length?'disabled':''}>${icon('check',16)} Ejecutar venta</button>
      ` : `<div style="color:var(--text-faint);font-size:13px;padding:8px 0">Elige o crea un cliente arriba para empezar un pedido.</div>`}
    </div>
  </div>`;
}
function renderValidarVentas(){
  return `
  <div class="toolbar">
    <button class="btn btn-ghost btn-sm" data-action="vender-mode-armar">${icon('sell',13)} Volver a armar pedidos</button>
    <div class="spacer" style="flex:1"></div>
    ${state.orders.length? `<button class="btn btn-primary" data-action="execute-all-orders">${icon('check',15)} Ejecutar todas (${state.orders.length})</button>` : ''}
  </div>
  ${state.orders.length? state.orders.map(o=>`
    <div class="card" style="margin-bottom:12px;padding:14px 16px">
      <div style="display:flex;justify-content:space-between;align-items:center;gap:10px">
        <div><div style="font-weight:700">${esc(o.client.name)}</div><div style="font-size:11.5px;color:var(--text-muted)">${o.items.length} producto${o.items.length===1?'':'s'}</div></div>
        <div class="cart-total-mini tabular">${fmtCOP(orderTotal(o))}</div>
      </div>
      <div style="margin-top:8px;font-size:12.5px;color:var(--text-muted)">${o.items.map(i=>esc(i.name)+' ×'+i.qty).join(', ')||'Sin productos'}</div>
      <div style="display:flex;gap:8px;margin-top:12px">
        <button class="btn btn-ghost btn-sm" data-action="discard-order" data-key="${o.key}">${icon('trash',13)} Descartar</button>
        <button class="btn btn-ghost btn-sm" data-action="edit-order" data-key="${o.key}" style="margin-left:auto">${icon('edit',13)} Editar</button>
        <button class="btn btn-primary btn-sm" data-action="execute-order" data-key="${o.key}" ${!o.items.length?'disabled':''}>${icon('check',13)} Ejecutar</button>
      </div>
    </div>`).join('') : emptyState('No hay pedidos por validar','Arma pedidos para uno o varios clientes y vuelve aquí a confirmarlos todos juntos.')}
  `;
}
function cartRow(i, orderKey){
  const prod = state.products.find(p=>p.ref===i.ref);
  const catalogPrice = prod ? prod.price : i.price;
  const isCustomPrice = canEditPrice() && prod && i.price !== catalogPrice;
  return `<div class="cart-item">
    <div style="min-width:0">
      <div class="ci-name">${esc(i.name)}</div>
      <div class="ci-sub">precio c/u${isCustomPrice? ` · <button type="button" data-action="cart-price-reset" data-key="${orderKey}" data-ref="${esc(i.ref)}" style="background:none;border:none;padding:0;color:var(--brand-fill-strong);text-decoration:underline;font-size:11px;cursor:pointer">volver a ${fmtCOP(catalogPrice)}</button>` : ''}</div>
    </div>
    ${canEditPrice() ? `<input type="number" inputmode="numeric" class="tabular cart-price-input" min="0" step="1000" value="${i.price}" data-key="${orderKey}" data-ref="${esc(i.ref)}" title="Precio unitario para esta venta" style="width:88px;flex:0 0 auto">` : `<div class="tabular" style="width:88px;flex:0 0 auto;text-align:right;font-weight:600">${fmtCOP(i.price)}</div>`}
    <div class="qty-ctrl">
      <button data-action="cart-dec" data-key="${orderKey}" data-ref="${esc(i.ref)}">−</button>
      <span class="tabular">${i.qty}</span>
      <button data-action="cart-inc" data-key="${orderKey}" data-ref="${esc(i.ref)}">+</button>
    </div>
    <button class="icon-btn" data-action="cart-remove" data-key="${orderKey}" data-ref="${esc(i.ref)}">${icon('x',13)}</button>
  </div>`;
}
function clientSuggestions(){
  const q = state.orderClientQuery.trim().toLowerCase();
  if(!q) return '';
  const matches = state.clients.filter(c=>c.name.toLowerCase().includes(q)).slice(0,5);
  return `<div class="suggest-list">
    ${matches.map(c=>`<div class="suggest-item" data-action="pick-order-client" data-id="${c.id}"><b>${esc(c.name)}</b> ${c.phone?('· '+esc(c.phone)):''}</div>`).join('')}
    <div class="suggest-item" data-action="quick-order-client" style="color:var(--brand-strong);font-weight:700">${icon('plus',12)} Crear cliente y pedido para “${esc(state.orderClientQuery)}”</div>
  </div>`;
}
function addToCart(ref){
  const order = activeOrder();
  if(!order){ toast('Elige o crea un cliente primero'); return; }
  const p = state.products.find(x=>x.ref===ref); if(!p) return;
  const existing = order.items.find(i=>i.ref===ref);
  if(existing) existing.qty++; else order.items.push({ref:p.ref,name:p.name,price:p.price,presentation:p.presentation,qty:1});
  render();
}
function setCartPrice(orderKey, ref, price){
  const o = state.orders.find(x=>x.key===orderKey);
  const it = o && o.items.find(x=>x.ref===ref);
  if(it && canEditPrice()) it.price = Math.max(0, Number(price)||0);
}

/* ============================== RECONSUMO ============================== */
function renderReconsumo(){
  const t = todayISO();
  let list = state.reminders.filter(r=>{
    if(state.reconsumoFilter==='vencidos') return r.status==='pending' && r.dueDate<t;
    if(state.reconsumoFilter==='proximos') return r.status==='pending' && r.dueDate>=t && r.dueDate<=addDays(t,7);
    if(state.reconsumoFilter==='pendientes') return r.status==='pending';
    if(state.reconsumoFilter==='historial') return r.status!=='pending';
    return true;
  }).sort((a,b)=> state.reconsumoFilter==='historial' ? (b.dueDate.localeCompare(a.dueDate)) : a.dueDate.localeCompare(b.dueDate));

  const tabs = [['vencidos','Vencidos'],['proximos','Próximos 7 días'],['pendientes','Todos pendientes'],['historial','Historial']];
  return `
  <div class="chip-row">${tabs.map(([id,label])=>`<div class="chip ${state.reconsumoFilter===id?'active':''}" data-reconchip="${id}">${label}</div>`).join('')}</div>
  <div class="card">${list.length? list.map(r=>reminderRow(r)).join('') : emptyState('Nada por aquí','No hay avisos en este filtro.')}</div>`;
}
function reminderRow(r, compact){
  const d = daysDiff(r.dueDate); const overdue = d<0 && r.status==='pending';
  let badge;
  if(r.status==='contacted') badge = `<span class="badge badge-contacted">Contactado</span>`;
  else if(r.status==='renewed') badge = `<span class="badge badge-off">Renovado</span>`;
  else if(r.status==='dismissed') badge = `<span class="badge badge-off">Descartado</span>`;
  else badge = overdue ? `<span class="badge badge-overdue">${Math.abs(d)}d vencido</span>` : `<span class="badge badge-pending">${d===0?'Hoy':'En '+d+'d'}</span>`;
  return `<div class="rem-row">
    <span class="rem-dot" style="background:${overdue?'var(--danger)':'var(--accent)'}"></span>
    <div class="rem-main"><div class="n">${esc(r.clientName)}</div><div class="m">${esc(r.productName)} · vence ${fmtDate(r.dueDate)}</div></div>
    ${badge}
    ${!compact && r.status==='pending' ? `<div class="rem-actions">
      <button class="btn btn-ghost btn-sm" data-action="rem-snooze" data-id="${r.id}">+7d</button>
      <button class="btn btn-ghost btn-sm" data-action="rem-contact" data-id="${r.id}">Contactado</button>
      <button class="btn btn-primary btn-sm" data-action="rem-sell" data-id="${r.id}">Vender</button>
    </div>` : ''}
  </div>`;
}

function updateSessionBox(){
  const nameEl = document.getElementById('session-name'), roleEl = document.getElementById('session-role');
  if(!SESSION || !nameEl) return;
  nameEl.textContent = SESSION.name;
  roleEl.textContent = roleLabel(SESSION.role);
}
function currentVendorName(){ return SESSION ? SESSION.name : ''; }
function currentVendorPhone(){ return SESSION && SESSION.phone ? SESSION.phone : ''; }
function currentVendorContactLine(){
  if(!SESSION || !SESSION.phone) return '';
  return `${SESSION.phone} (pregunta por ${SESSION.name||''})`;
}

/* ============================== MODAL ============================== */
function openModal({title, body, footer, wide}){
  document.getElementById('modal').className = 'modal'+(wide?' wide':'');
  document.getElementById('modal').innerHTML = `<div class="modal-head"><h3>${esc(title)}</h3><button class="close-x" data-action="close-modal">${icon('x',16)}</button></div><div class="modal-body">${body}</div>${footer?`<div class="modal-foot">${footer}</div>`:''}`;
  document.getElementById('modal-overlay').classList.add('show');
}
function closeModal(){ document.getElementById('modal-overlay').classList.remove('show'); }

/* ============================== DB WIRE-UP ============================== */
let dbBound = false;
async function initDb(){
  DB = SupabaseDB;
  SupabaseDB.setUser(SESSION.id);
  if(!dbBound){
    dbBound = true;
    const bind = (col, key) => DB.collection(col).onSnapshot(snap=>{
      state[key] = snap.docs.map(d=>({id:d.id, ...d.data()}));
      if(key==='reminders' || key==='sales') state[key].sort((a,b)=> (b.dueDate||b.date||'').localeCompare(a.dueDate||a.date||'') || (b.createdAt||'').localeCompare(a.createdAt||''));
      if(key==='clients') state[key].sort((a,b)=> (a.name||'').localeCompare(b.name||''));
      state.ready[key]=true;
      render();
    });
    bind('products','products'); bind('clients','clients'); bind('sales','sales'); bind('reminders','reminders');
  }
  try{ await SupabaseDB.loadAll(); }
  catch(err){ console.error(err); toast('No se pudieron cargar los datos. Revisa tu conexión.'); }
}

/* ============================== RESPALDO / RESTAURAR ============================== */
async function exportBackup(){
  try{
    const snapshot = {clients: state.clients, sales: state.sales, reminders: state.reminders};
    const payload = {app:'fusion-sabor-natural', backupVersion:1, exportedAt:new Date().toISOString(), vendorId: SESSION?SESSION.id:'', vendorName: SESSION?SESSION.name:'', data: snapshot};
    const json = JSON.stringify(payload, null, 2);
    const filename = `fusion-respaldo-${SESSION?SESSION.id:'app'}-${todayISO()}.json`;
    const file = new File([json], filename, {type:'application/json'});
    if(navigator.share && (!navigator.canShare || navigator.canShare({files:[file]}))){
      try{
        await navigator.share({files:[file], title:'Respaldo Fusión de Sabor Natural', text:'Respaldo de tus datos — guárdalo en tu Drive'});
        toast('Respaldo generado');
        return;
      }catch(err){
        if(err && err.name==='AbortError') return;
        // if native share fails for any other reason, fall through to a plain download
      }
    }
    const url = URL.createObjectURL(file);
    const a = document.createElement('a');
    a.href = url; a.download = filename;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(()=>URL.revokeObjectURL(url), 4000);
    toast('Respaldo descargado — súbelo a tu Drive');
  }catch(err){
    console.error(err);
    toast('No se pudo generar el respaldo');
  }
}

async function registerSale(orderKey, opts){
  opts = opts || {};
  const vendorName = currentVendorName();
  const order = state.orders.find(o=>o.key===orderKey);
  if(!vendorName || !order || !order.items.length) return false;
  const total = orderTotal(order);
  const notes = order.notes || '';
  const date = todayISO();
  const items = order.items.map(i=>({ref:i.ref,name:i.name,price:i.price,qty:i.qty,presentation:i.presentation}));
  try{
    const saleRef = await DB.collection('sales').add({date, clientId: order.client.id, clientName: order.client.name, vendorName, items, total, notes});
    for(const it of items){
      const prod = state.products.find(p=>p.ref===it.ref);
      const days = prod && prod.days ? prod.days : 30;
      const existing = await DB.collection('reminders').where('clientId','==',order.client.id).where('productRef','==',it.ref).where('status','==','pending').get();
      for(const doc of existing.docs){ await DB.doc('reminders/'+doc.id).update({status:'renewed'}); }
      await DB.collection('reminders').add({clientId: order.client.id, clientName: order.client.name, productRef: it.ref, productName: it.name, saleId: saleRef.id, saleDate: date.slice(0,10), dueDate: addDays(date.slice(0,10), days), days, status:'pending', createdAt: date});
    }
    state.orders = state.orders.filter(o=>o.key!==orderKey);
    if(state.activeOrderKey===orderKey) state.activeOrderKey = null;
    if(!opts.silent){ showReceipt({clientName: order.client.name, vendorName, items, total, date, notes}); toast('Venta registrada'); }
    render();
    return true;
  }catch(e){ console.error(e); toast('No se pudo registrar la venta de '+order.client.name); render(); return false; }
}

function showReceipt(sale){
  const area = document.getElementById('print-area');
  area.innerHTML = `<div class="receipt">
    <div style="display:flex;align-items:center;gap:8px;justify-content:center"><img src="${LOGO_DATA_URI}" style="width:26px;height:26px;border-radius:50%"><h2 style="margin:0">Fusión de Sabor Natural</h2></div>
    <div style="font-size:11px;color:#666;text-align:center">Bienestar y suplementación natural</div>
    <hr>
    <div class="rline"><span>Fecha</span><span>${fmtDate(sale.date)}</span></div>
    <div class="rline"><span>Cliente</span><span>${esc(sale.clientName)}</span></div>
    <div class="rline"><span>Atendido por</span><span>${esc(sale.vendorName)}</span></div>
    <hr>
    ${sale.items.map(i=>`<div class="rline"><span>${esc(i.name)} ×${i.qty}</span><span>${fmtCOP(i.price*i.qty)}</span></div>`).join('')}
    <hr>
    <div class="rline rtotal"><span>Total</span><span>${fmtCOP(sale.total)}</span></div>
    ${sale.notes?`<div style="font-size:11px;margin-top:8px;color:#666">${esc(sale.notes)}</div>`:''}
    <div style="text-align:center;font-size:11px;color:#888;margin-top:14px">¡Gracias por tu compra!</div>
  </div>`;
  openModal({title:'Venta registrada', body:`<div id="receipt-preview" style="border:1px solid var(--border);border-radius:10px;padding:6px;background:#fff;color:#111">${area.innerHTML}</div>`, footer:`<button class="btn btn-ghost" data-action="close-modal">Cerrar</button><button class="btn btn-primary" data-action="print-receipt">${icon('print',14)} Imprimir</button>`});
}

/* ============================== EVENT DELEGATION ============================== */
document.addEventListener('click', async (e)=>{
  const nav = e.target.closest('[data-nav]');
  if(nav){ state.view = nav.dataset.nav; state.productSearch=''; document.getElementById('sidebar').classList.remove('open'); render(); return; }

  if(e.target.closest('#hamburger')){ document.getElementById('sidebar').classList.toggle('open'); return; }

  const catchip = e.target.closest('[data-catchip]'); if(catchip){ state.productCat = catchip.dataset.catchip; render(); return; }
  const reconchip = e.target.closest('[data-reconchip]'); if(reconchip){ state.reconsumoFilter = reconchip.dataset.reconchip; render(); return; }
  const catalogchip = e.target.closest('[data-catalogchip]'); if(catalogchip){ state.catalogCat = catalogchip.dataset.catalogchip; render(); return; }

  if(e.target.closest('[data-action="toggle-show-inactive"]')){ state.showInactive = e.target.closest('[data-action="toggle-show-inactive"]').checked; render(); return; }
  const editProd = e.target.closest('[data-action="edit-product"]'); if(editProd){
    const p = state.products.find(x=>x.ref===editProd.dataset.ref); if(!p) return;
    openModal({title:'Editar producto', body:productForm(p), footer:`<button class="btn btn-ghost" data-action="close-modal">Cancelar</button><button class="btn btn-primary" data-action="submit-modal">Guardar cambios</button>`});
    return;
  }
  const togProd = e.target.closest('[data-action="toggle-product-active"]'); if(togProd){
    const p = state.products.find(x=>x.ref===togProd.dataset.ref); if(!p) return;
    const baja = p.active!==false;
    if(baja && !confirm(`¿Dar de baja "${p.name}"? Dejará de aparecer en el catálogo y en Vender (las ventas anteriores se conservan).`)) return;
    try{ await DB.doc('products/'+p.ref).update({active: !baja}); state.catalogSelection = state.catalogSelection.filter(r=>r!==p.ref); toast(baja?'Producto dado de baja':'Producto reactivado'); }
    catch(err){ console.error(err); toast('No se pudo cambiar el producto'); }
    return;
  }

  const toggleSel = e.target.closest('[data-action="toggle-catalog-select"]'); if(toggleSel){
    const ref = toggleSel.dataset.ref;
    const i = state.catalogSelection.indexOf(ref);
    if(i===-1) state.catalogSelection.push(ref); else state.catalogSelection.splice(i,1);
    render(); return;
  }
  if(e.target.closest('[data-action="clear-catalog-selection"]')){ state.catalogSelection=[]; render(); return; }
  if(e.target.closest('[data-action="open-catalog-pdf"]')){ openCatalogPdfModal(); return; }
  if(e.target.closest('[data-action="build-catalog-pdf"]')){ buildCatalogPdf(); return; }
  if(e.target.closest('[data-action="share-catalog-pdf-whatsapp"]')){ await shareCatalogPdfWhatsapp(); return; }

  const addBtn = e.target.closest('[data-action="add-to-cart"]'); if(addBtn){ addToCart(addBtn.dataset.ref); return; }
  const inc = e.target.closest('[data-action="cart-inc"]'); if(inc){ const o=state.orders.find(x=>x.key===inc.dataset.key); const i=o&&o.items.find(x=>x.ref===inc.dataset.ref); if(i) i.qty++; render(); return; }
  const dec = e.target.closest('[data-action="cart-dec"]'); if(dec){ const o=state.orders.find(x=>x.key===dec.dataset.key); if(o){ const i=o.items.find(x=>x.ref===dec.dataset.ref); if(i){ i.qty--; if(i.qty<=0) o.items=o.items.filter(x=>x.ref!==dec.dataset.ref);} } render(); return; }
  const remIt = e.target.closest('[data-action="cart-remove"]'); if(remIt){ const o=state.orders.find(x=>x.key===remIt.dataset.key); if(o) o.items=o.items.filter(x=>x.ref!==remIt.dataset.ref); render(); return; }
  const priceReset = e.target.closest('[data-action="cart-price-reset"]'); if(priceReset){ const o=state.orders.find(x=>x.key===priceReset.dataset.key); const it=o&&o.items.find(x=>x.ref===priceReset.dataset.ref); const prod=state.products.find(p=>p.ref===priceReset.dataset.ref); if(it&&prod) it.price=prod.price; render(); return; }

  const discardOrder = e.target.closest('[data-action="discard-order"]'); if(discardOrder){
    const key = discardOrder.dataset.key;
    state.orders = state.orders.filter(o=>o.key!==key);
    if(state.activeOrderKey===key) state.activeOrderKey = null;
    render(); return;
  }
  const editOrder = e.target.closest('[data-action="edit-order"]'); if(editOrder){ state.activeOrderKey = editOrder.dataset.key; state.venderMode='armar'; render(); return; }
  const orderChip = e.target.closest('[data-order-chip]'); if(orderChip){ state.activeOrderKey = orderChip.dataset.orderChip; render(); return; }
  if(e.target.closest('[data-action="new-order-chip"]')){ state.activeOrderKey = null; state.orderClientQuery=''; render(); return; }
  if(e.target.closest('[data-action="vender-mode-validar"]')){ state.venderMode='validar'; render(); return; }
  if(e.target.closest('[data-action="vender-mode-armar"]')){ state.venderMode='armar'; render(); return; }

  const pickOrderClient = e.target.closest('[data-action="pick-order-client"]'); if(pickOrderClient){
    const c = state.clients.find(x=>x.id===pickOrderClient.dataset.id); if(!c) return;
    const existingOrder = state.orders.find(o=>o.client.id===c.id);
    if(existingOrder) state.activeOrderKey = existingOrder.key; else createOrder({id:c.id, name:c.name, phone:c.phone});
    state.orderClientQuery=''; render(); return;
  }
  const quickOrderClient = e.target.closest('[data-action="quick-order-client"]'); if(quickOrderClient){
    const name = state.orderClientQuery.trim(); if(!name) return;
    try{ const ref = await DB.collection('clients').add({name, phone:'', email:'', address:'', notes:'', createdAt:new Date().toISOString()});
      createOrder({id:ref.id, name}); state.orderClientQuery=''; render(); toast('Cliente creado'); }catch(err){ console.error(err); toast('No se pudo crear el cliente'); }
    return;
  }
  const execOrder = e.target.closest('[data-action="execute-order"]'); if(execOrder){ await registerSale(execOrder.dataset.key); return; }
  if(e.target.closest('[data-action="execute-all-orders"]')){
    const keys = state.orders.map(o=>o.key);
    let ok=0;
    for(const key of keys){ const success = await registerSale(key, {silent:true}); if(success) ok++; }
    toast(`${ok} venta${ok===1?'':'s'} registrada${ok===1?'':'s'}`);
    state.venderMode='armar'; render();
    return;
  }

  const remSnooze = e.target.closest('[data-action="rem-snooze"]'); if(remSnooze){ await DB.doc('reminders/'+remSnooze.dataset.id).update({dueDate: addDays(state.reminders.find(r=>r.id===remSnooze.dataset.id).dueDate,7)}); toast('Pospuesto 7 días'); return; }
  const remContact = e.target.closest('[data-action="rem-contact"]'); if(remContact){ await DB.doc('reminders/'+remContact.dataset.id).update({status:'contacted', contactedAt:new Date().toISOString()}); toast('Marcado como contactado'); return; }
  const remSell = e.target.closest('[data-action="rem-sell"]'); if(remSell){
    const r = state.reminders.find(x=>x.id===remSell.dataset.id); if(!r) return;
    const existingOrder = state.orders.find(o=>o.client.id===r.clientId);
    if(existingOrder) state.activeOrderKey = existingOrder.key; else createOrder({id:r.clientId, name:r.clientName});
    state.presetAddRef=r.productRef; state.view='vender'; state.venderMode='armar'; render(); return;
  }
  const sellToClient = e.target.closest('[data-action="sell-to-client"]'); if(sellToClient){
    const c = state.clients.find(x=>x.id===sellToClient.dataset.id); if(!c) return;
    closeModal();
    const existingOrder = state.orders.find(o=>o.client.id===c.id);
    if(existingOrder) state.activeOrderKey = existingOrder.key; else createOrder({id:c.id, name:c.name, phone:c.phone});
    state.view='vender'; state.venderMode='armar'; render(); return;
  }

  if(e.target.closest('[data-action="ventas-clear-filters"]')){ state.ventasFrom=''; state.ventasTo=''; state.ventasSearch=''; render(); return; }
  if(e.target.closest('[data-action="print-ventas-report"]')){ buildVentasReport(); return; }

  if(e.target.closest('[data-action="new-client"]')){ openModal({title:'Nuevo cliente', body:clientForm(), footer:`<button class="btn btn-ghost" data-action="close-modal">Cancelar</button><button class="btn btn-primary" data-action="submit-modal">Guardar</button>`}); return; }
  if(e.target.closest('[data-action="new-product"]')){ openModal({title:'Agregar producto', body:productForm(), footer:`<button class="btn btn-ghost" data-action="close-modal">Cancelar</button><button class="btn btn-primary" data-action="submit-modal">Guardar producto</button>`}); return; }
  const editC = e.target.closest('[data-action="edit-client"]'); if(editC){ const c=state.clients.find(x=>x.id===editC.dataset.id); openModal({title:'Editar cliente', body:clientForm(c)+`<input type="hidden" name="id" value="${c.id}">`, footer:`<button class="btn btn-ghost" data-action="close-modal">Cancelar</button><button class="btn btn-primary" data-action="submit-modal">Guardar cambios</button>`}); return; }
  const delC = e.target.closest('[data-action="delete-client"]'); if(delC){ if(confirm('¿Eliminar este cliente?')){ await DB.doc('clients/'+delC.dataset.id).delete(); closeModal(); toast('Cliente eliminado'); } return; }

  const editS = e.target.closest('[data-action="edit-sale"]'); if(editS){ const s=state.sales.find(x=>x.id===editS.dataset.id); if(!s) return; openModal({title:'Editar venta', wide:true, body:saleForm(s), footer:`<button class="btn btn-ghost" data-action="close-modal">Cancelar</button><button class="btn btn-primary" data-action="submit-modal">Guardar cambios</button>`}); return; }
  const delS = e.target.closest('[data-action="delete-sale"]'); if(delS){
    if(confirm('¿Eliminar esta venta? También se quitarán sus avisos de reconsumo pendientes.')){
      const id = delS.dataset.id;
      const remSnap = await DB.collection('reminders').where('saleId','==',id).get();
      for(const d of remSnap.docs){ await DB.doc('reminders/'+d.id).delete(); }
      await DB.doc('sales/'+id).delete();
      closeModal(); toast('Venta eliminada');
    }
    return;
  }
  const rmSaleItem = e.target.closest('[data-action="sale-edit-remove-item"]'); if(rmSaleItem){ rmSaleItem.closest('[data-sale-item-row]').remove(); return; }
  const addSaleItemBtn = e.target.closest('#sale-edit-add-btn'); if(addSaleItemBtn){
    const sel = document.getElementById('sale-edit-add-product');
    const ref = sel.value; if(!ref) return;
    const container = document.getElementById('sale-edit-items');
    const existing = container.querySelector(`[data-sale-item-row][data-ref="${CSS.escape(ref)}"]`);
    if(existing){ const qi=existing.querySelector('[data-sale-item-qty]'); qi.value = (parseInt(qi.value,10)||0)+1; sel.value=''; return; }
    const prod = state.products.find(p=>p.ref===ref); if(!prod){ sel.value=''; return; }
    const empty = container.querySelector('div[style*="text-faint"]'); if(empty) empty.remove();
    container.insertAdjacentHTML('beforeend', `<div class="cart-item" data-sale-item-row data-ref="${esc(prod.ref)}" data-price="${prod.price}" data-name="${esc(prod.name)}" data-presentation="${esc(prod.presentation||'')}">
      <div><div class="ci-name">${esc(prod.name)}</div><div class="ci-sub">${fmtCOP(prod.price)} c/u</div></div>
      <input type="number" min="0" value="1" class="tabular" style="width:56px" data-sale-item-qty>
      <button type="button" class="icon-btn" data-action="sale-edit-remove-item">${icon('x',13)}</button>
    </div>`);
    sel.value='';
    return;
  }

  if(e.target.closest('[data-action="logout"]')){ await doLogout(); return; }

  const openClient = e.target.closest('[data-open-client]'); if(openClient){ openClientDetail(openClient.dataset.openClient); return; }
  const openSale = e.target.closest('[data-open-sale]'); if(openSale){ openSaleDetail(openSale.dataset.openSale); return; }

  if(e.target.closest('[data-action="backup-export"]')){ exportBackup(); return; }
  if(e.target.closest('[data-action="backup-restore"]')){ openImportModal(); return; }

  if(e.target.closest('[data-action="close-modal"]')){ closeModal(); return; }
  if(e.target.closest('[data-action="print-receipt"]')){ window.print(); return; }
  if(e.target.closest('[data-action="submit-modal"]')){ document.getElementById('modal-form').requestSubmit(); return; }
});

document.addEventListener('input', (e)=>{
  if(e.target.id==='prod-search'||e.target.id==='pos-search'){ state.productSearch = e.target.value; const pos=e.target.selectionStart; render(); const el=document.getElementById(e.target.id); if(el){el.focus(); el.setSelectionRange(pos,pos);} }
  if(e.target.id==='client-search'){ state.clientSearch = e.target.value; const pos=e.target.selectionStart; render(); const el=document.getElementById('client-search'); if(el){el.focus(); el.setSelectionRange(pos,pos);} }
  if(e.target.id==='order-client-query'){ state.orderClientQuery = e.target.value; const pos=e.target.selectionStart; render(); const el=document.getElementById('order-client-query'); if(el){el.focus(); el.setSelectionRange(pos,pos);} }
  if(e.target.id==='catalog-search'){ state.catalogSearch = e.target.value; const pos=e.target.selectionStart; render(); const el=document.getElementById('catalog-search'); if(el){el.focus(); el.setSelectionRange(pos,pos);} }
  if(e.target.id==='sale-notes'){ const o=state.orders.find(x=>x.key===e.target.dataset.key); if(o) o.notes = e.target.value; }
  if(e.target.classList.contains('cart-price-input')){
    const key = e.target.dataset.key, ref = e.target.dataset.ref;
    setCartPrice(key, ref, e.target.value);
    render();
    // number inputs don't support setSelectionRange, so just refocus (caret lands at the end)
    const el = document.querySelector(`.cart-price-input[data-key="${CSS.escape(key)}"][data-ref="${CSS.escape(ref)}"]`);
    if(el) el.focus();
  }
  if(e.target.id==='ventas-search'){ state.ventasSearch = e.target.value; const pos=e.target.selectionStart; render(); const el=document.getElementById('ventas-search'); if(el){el.focus(); el.setSelectionRange(pos,pos);} }
  if(e.target.id==='ventas-from'){ state.ventasFrom = e.target.value; render(); }
  if(e.target.id==='ventas-to'){ state.ventasTo = e.target.value; render(); }
});
document.addEventListener('submit', async (e)=>{
  if(e.target.id!=='modal-form') return;
  e.preventDefault();
  const form = e.target; const type = form.dataset.form; const fd = new FormData(form);
  let submitBtn = null;
  try{
    if(type==='client'){
      const data = {name:fd.get('name').trim(), phone:fd.get('phone')||'', email:fd.get('email')||'', address:fd.get('address')||'', notes:fd.get('notes')||''};
      const id = fd.get('id');
      if(id) await DB.doc('clients/'+id).update(data); else await DB.collection('clients').add({...data, createdAt:new Date().toISOString()});
      toast('Cliente guardado');
    }
    if(type==='product'){
      submitBtn = document.querySelector('[data-action="submit-modal"]');
      if(submitBtn){ submitBtn.disabled = true; submitBtn.textContent = 'Guardando…'; }
      const name = (fd.get('name')||'').trim();
      if(!name){ toast('Ponle un nombre al producto'); if(submitBtn){ submitBtn.disabled=false; submitBtn.textContent='Guardar producto'; } return; }
      let imageBlob = null;
      try{ const du = await fileToCompressedDataUrl(fd.get('image'), 480, 0.82); if(du) imageBlob = await (await fetch(du)).blob(); }
      catch(err){ console.error(err); toast('No se pudo procesar la foto, se guardará sin imagen'); }
      const fields = {
        name,
        category: fd.get('category') || CATS[0],
        price: Number(fd.get('price'))||0,
        presentation: (fd.get('presentation')||'').trim(),
        days: Number(fd.get('days'))||30,
        description: (fd.get('description')||'').trim()
      };
      const editingRef = fd.get('ref');
      if(editingRef){
        if(imageBlob) fields.image = await uploadProductImage(editingRef, imageBlob);
        await DB.doc('products/'+editingRef).update(fields);
        toast('Producto actualizado');
      }else{
        let ref = slugRef(name);
        const existingRefs = new Set(state.products.map(p=>p.ref));
        if(existingRefs.has(ref)) ref = ref + '-' + uid().slice(0,4).toUpperCase();
        if(imageBlob) fields.image = await uploadProductImage(ref, imageBlob);
        await DB.collection('products').add({ref, ...fields, active: true});
        toast('Producto agregado al catálogo');
      }
    }
    if(type==='sale'){
      const id = fd.get('saleId');
      const clientId = fd.get('clientId');
      const client = state.clients.find(c=>c.id===clientId);
      const dateStr = fd.get('date');
      if(!client || !dateStr){ toast('Elige un cliente y una fecha'); return; }
      const notes = (fd.get('notes')||'').trim();
      const rows = form.querySelectorAll('[data-sale-item-row]');
      const items = [];
      rows.forEach(row=>{
        const qty = parseInt(row.querySelector('[data-sale-item-qty]').value, 10) || 0;
        if(qty>0){
          items.push({ref: row.dataset.ref, name: row.dataset.name, price: Number(row.dataset.price)||0, qty, presentation: row.dataset.presentation||''});
        }
      });
      if(!items.length){ toast('Agrega al menos un producto a la venta'); return; }
      const total = items.reduce((a,i)=>a+i.price*i.qty,0);
      const prevDateTime = state.sales.find(x=>x.id===id);
      const timePart = (prevDateTime && prevDateTime.date && prevDateTime.date.includes('T')) ? prevDateTime.date.slice(prevDateTime.date.indexOf('T')) : 'T12:00:00.000Z';
      const newDate = dateStr;
      await DB.doc('sales/'+id).update({date: newDate, clientId: client.id, clientName: client.name, notes, items, total});

      // Reconcile reconsumo alerts tied to this sale with the (possibly new) items/date
      const remSnap = await DB.collection('reminders').where('saleId','==',id).get();
      const existingByRef = {};
      remSnap.docs.forEach(d=>{ existingByRef[d.data().productRef] = d; });
      const newRefs = new Set(items.map(i=>i.ref));
      for(const it of items){
        const prod = state.products.find(p=>p.ref===it.ref);
        const days = prod && prod.days ? prod.days : 30;
        const dueDate = addDays(dateStr, days);
        const exDoc = existingByRef[it.ref];
        if(exDoc){ await DB.doc('reminders/'+exDoc.id).update({dueDate, days, productName: it.name, clientId: client.id, clientName: client.name, saleDate: dateStr}); }
        else{ await DB.collection('reminders').add({clientId: client.id, clientName: client.name, productRef: it.ref, productName: it.name, saleId: id, saleDate: dateStr, dueDate, days, status:'pending', createdAt: new Date().toISOString()}); }
      }
      for(const d of remSnap.docs){
        const ref = d.data().productRef;
        if(!newRefs.has(ref) && d.data().status==='pending'){ await DB.doc('reminders/'+d.id).delete(); }
      }
      toast('Venta actualizada');
    }
    closeModal();
  }catch(err){
    console.error(err);
    toast('No se pudo guardar');
    if(submitBtn){ submitBtn.disabled=false; submitBtn.textContent = type==='product' ? 'Guardar producto' : 'Guardar'; }
  }
});

