/* ============================== FOTOS DE PRODUCTO (Storage) ============================== */
async function uploadProductImage(ref, blob){
  const bucket = (window.FUSION_CONFIG && FUSION_CONFIG.PRODUCT_BUCKET) || 'product-images';
  const path = `${ref}-${Date.now()}.jpg`;
  const { error } = await SB.storage.from(bucket).upload(path, blob, {contentType:'image/jpeg', upsert:false});
  if(error) throw error;
  return SB.storage.from(bucket).getPublicUrl(path).data.publicUrl;
}

/* ============================== ADMINISTRACIÓN ============================== */
state.profiles = [];
state.profilesLoaded = false;

async function loadProfiles(force){
  if(!isAdmin() || (state.profilesLoaded && !force)) return;
  const { data, error } = await SB.from('profiles').select('*').order('created_at', {ascending:true});
  if(error){ console.error(error); toast('No se pudo cargar la lista de personas'); return; }
  state.profiles = data; state.profilesLoaded = true;
  render();
}
afterRender.admin = () => { loadProfiles(false); };

function renderAdmin(){
  if(!isAdmin()) return emptyState('Sin acceso','Esta pantalla es solo para administradores.');
  const rows = state.profiles.slice().sort((a,b)=>(a.active===b.active?0:a.active?1:-1)).map(p=>{
    const me = p.id === SESSION.id;
    return `<tr>
      <td><input type="text" data-profile-field="full_name" data-id="${p.id}" value="${esc(p.full_name||'')}" placeholder="Nombre" style="min-width:140px"></td>
      <td><input type="text" data-profile-field="phone" data-id="${p.id}" value="${esc(p.phone||'')}" placeholder="+57…" style="min-width:130px"></td>
      <td>${esc(p.email)}${p.active?'':' <span class="badge badge-overdue">Pendiente</span>'}</td>
      <td><select data-profile-field="role" data-id="${p.id}" ${me?'disabled title="No puedes cambiar tu propio rol"':''}>
        <option value="vendedora" ${p.role==='vendedora'?'selected':''}>Vendedora</option>
        <option value="admin" ${p.role==='admin'?'selected':''}>Administrador</option></select></td>
      <td style="text-align:center"><input type="checkbox" data-profile-field="can_edit_price" data-id="${p.id}" ${p.can_edit_price?'checked':''}></td>
      <td style="text-align:center"><input type="checkbox" data-profile-field="active" data-id="${p.id}" ${p.active?'checked':''} ${me?'disabled':''}></td>
    </tr>`;
  }).join('');
  return `
  <div style="font-size:13px;color:var(--text-muted);margin-bottom:14px">Cada persona aparece aquí después de entrar por primera vez con su correo. <b>Edita precio</b> permite cambiar el precio de un producto al vender. Las cuentas nuevas aparecen como <b>Pendiente</b>: marca <b>Activa</b> para aprobarlas. Desactivar a alguien le bloquea el acceso (sus datos se conservan).</div>
  <div class="toolbar"><div class="spacer" style="flex:1"></div><button class="btn btn-ghost btn-sm" data-action="reload-profiles">Actualizar lista</button></div>
  <div class="card table-wrap">${state.profilesLoaded
    ? `<table class="data"><thead><tr><th>Nombre</th><th>Teléfono</th><th>Correo</th><th>Rol</th><th>Edita precio</th><th>Activa (aprobada)</th></tr></thead><tbody>${rows}</tbody></table>`
    : emptyState('Cargando…')}</div>`;
}
document.addEventListener('change', async (e)=>{
  const f = e.target.dataset && e.target.dataset.profileField;
  if(!f) return;
  const id = e.target.dataset.id;
  let value = e.target.type==='checkbox' ? e.target.checked : e.target.value.trim();
  if(f==='full_name' || f==='phone') value = value || null;
  const { data, error } = await SB.from('profiles').update({[f]: value}).eq('id', id).select().single();
  if(error){ console.error(error); toast('No se pudo guardar el cambio'); await loadProfiles(true); return; }
  const i = state.profiles.findIndex(p=>p.id===id); if(i>=0) state.profiles[i] = data;
  toast('Guardado');
});

/* ============================== MI CUENTA ============================== */
function renderAjustes(){
  return `
  <div class="card" style="padding:16px 18px;max-width:560px">
    <div style="font-weight:700;margin-bottom:10px">Mi perfil</div>
    <form id="profile-form">
      <div class="field"><label class="field-label">Nombre (aparece en tus ventas y en el PDF del catálogo)</label><input type="text" id="profile-name" required value="${esc(SESSION.name)}"></div>
      <div class="field"><label class="field-label">Teléfono de contacto (para el PDF del catálogo)</label><input type="text" id="profile-phone" value="${esc(SESSION.phone||'')}" placeholder="+57 300 000 0000"></div>
      <div class="field"><label class="field-label">Correo</label><input type="text" value="${esc(SESSION.email)}" disabled></div>
      <div style="font-size:12.5px;color:var(--text-muted);margin-bottom:12px">Rol: <b>${roleLabel(SESSION.role)}</b> · Precio editable al vender: <b>${canEditPrice()?'sí':'no'}</b></div>
      <button type="submit" class="btn btn-primary">Guardar perfil</button>
    </form>
  </div>

  <div class="card" style="margin-top:20px;padding:16px 18px;max-width:560px">
    <div style="font-weight:700;margin-bottom:4px">${icon('download',15)} Importar mis datos</div>
    <div style="font-size:12.5px;color:var(--text-muted);margin-bottom:12px">Pasa tus clientes, ventas y avisos desde el archivo de respaldo (.json) de la versión anterior de la app. Se hace una sola vez.</div>
    <button class="btn btn-primary" data-action="backup-restore">${icon('upload',14)} Importar respaldo</button>
  </div>

  <div class="card" style="margin-top:20px;padding:16px 18px;max-width:560px">
    <div style="font-weight:700;margin-bottom:4px">${icon('upload',15)} Descargar una copia</div>
    <div style="font-size:12.5px;color:var(--text-muted);margin-bottom:12px">Tus datos ya viven en la nube. Esta copia es opcional, por si quieres guardar una en tu Drive.</div>
    <button class="btn btn-ghost" data-action="backup-export">${icon('upload',14)} Descargar copia</button>
  </div>`;
}
document.addEventListener('submit', async (e)=>{
  if(e.target.id!=='profile-form') return;
  e.preventDefault();
  const name = document.getElementById('profile-name').value.trim();
  const phone = document.getElementById('profile-phone').value.trim() || null;
  if(!name){ toast('Escribe tu nombre'); return; }
  const { error } = await SB.from('profiles').update({full_name:name, phone}).eq('id', SESSION.id);
  if(error){ console.error(error); toast('No se pudo guardar'); return; }
  SESSION.name = name; SESSION.phone = phone || '';
  render(); toast('Perfil guardado');
});

/* ============================== NOMBRE EN EL PRIMER INGRESO ============================== */
function askFirstName(){
  openModal({title:'¡Bienvenida!', body:`
    <div style="font-size:13.5px;color:var(--text-muted);margin-bottom:12px">Escribe tu nombre: aparecerá en tus ventas y recibos.</div>
    <div class="field"><label class="field-label">Tu nombre</label><input type="text" id="first-name" placeholder="Ej: Luz Marina"></div>`,
    footer:`<button class="btn btn-primary" data-action="save-first-name">Continuar</button>`});
}
document.addEventListener('click', async (e)=>{
  if(!e.target.closest('[data-action="save-first-name"]')) return;
  const name = (document.getElementById('first-name').value||'').trim();
  if(!name){ toast('Escribe tu nombre'); return; }
  const { error } = await SB.from('profiles').update({full_name:name}).eq('id', SESSION.id);
  if(error){ console.error(error); toast('No se pudo guardar'); return; }
  SESSION.name = name; closeModal(); render();
});

/* ============================== IMPORTAR MIS DATOS (JSON de la app anterior) ============================== */
let importData = null;
function normalizeBackup(payload){
  const d = payload && payload.data ? payload.data : payload;
  const toArr = x => Array.isArray(x) ? x : (x && typeof x==='object' ? Object.entries(x).map(([id,v])=>({id, ...v})) : []);
  return {clients: toArr(d.clients), sales: toArr(d.sales), reminders: toArr(d.reminders), products: toArr(d.products)};
}
function openImportModal(){
  importData = null;
  openModal({title:'Importar mis datos', body:`
    <div style="font-size:13.5px;color:var(--text-muted);margin-bottom:12px">Elige el archivo de respaldo (.json) que descargaste de la versión anterior. Se agregarán tus clientes, ventas y avisos a tu cuenta.</div>
    <input type="file" id="import-file" accept="application/json,.json">
    <div id="import-summary" style="margin-top:12px;font-size:13px"></div>`,
    footer:`<button class="btn btn-ghost" data-action="close-modal">Cancelar</button><button class="btn btn-primary" data-action="run-import" disabled>Importar</button>`});
}
document.addEventListener('change', async (e)=>{
  if(e.target.id!=='import-file') return;
  const file = e.target.files && e.target.files[0]; if(!file) return;
  const out = document.getElementById('import-summary'), btn = document.querySelector('[data-action="run-import"]');
  try{
    const payload = JSON.parse(await file.text());
    const n = normalizeBackup(payload);
    if(!n.clients.length && !n.sales.length && !n.reminders.length) throw new Error('vacío');
    importData = n;
    const extra = n.products.filter(p=>!state.products.some(x=>x.ref===p.ref)).length;
    out.innerHTML = `Listo para importar: <b>${n.clients.length}</b> clientes, <b>${n.sales.length}</b> ventas, <b>${n.reminders.length}</b> avisos${extra?` y <b>${extra}</b> producto(s) que no están en el catálogo`:''}.`;
    btn.disabled = false;
  }catch(err){
    console.error(err); importData = null; btn.disabled = true;
    out.innerHTML = '<span style="color:var(--danger)">Ese archivo no parece un respaldo válido.</span>';
  }
});
async function insertChunks(table, rows, select){
  const out = [];
  for(let i = 0; i < rows.length; i += 200){
    let q = SB.from(table).insert(rows.slice(i, i + 200));
    if(select) q = q.select(select);
    const { data, error } = await q;
    if(error) throw error;
    if(select) out.push(...data);
  }
  return out;
}
const saleDateOf = v => !v ? todayISO() : (String(v).length <= 10 ? String(v) : localISO(new Date(v)));
async function runImport(){
  const n = importData; if(!n) return;
  if((state.clients.length || state.sales.length) && !confirm('Tu cuenta ya tiene datos. Si importas otra vez el mismo archivo se duplicarán. ¿Continuar?')) return;
  const btn = document.querySelector('[data-action="run-import"]');
  btn.disabled = true; btn.textContent = 'Importando…';
  const uid_ = SESSION.id;
  try{
    // 1) productos propios que no existen en el catálogo compartido
    const missing = n.products.filter(p=>p.ref && p.name && !state.products.some(x=>x.ref===p.ref));
    for(const p of missing){
      let image_url = null;
      if(p.image && String(p.image).startsWith('data:')){
        try{ image_url = await uploadProductImage(p.ref, await (await fetch(p.image)).blob()); }catch(err){ console.warn('foto no subida', p.ref, err); }
      }
      await insertChunks('products', [{ref:p.ref, name:p.name, category:p.category||CATS[0], price:Number(p.price)||0, presentation:p.presentation||null,
        days:Number(p.days)||30, description:p.description||null, invima:p.invima||null, image_url, active:p.active!==false, created_by:uid_}]);
    }
    if(missing.length) await SupabaseDB.load('products');
    const known = new Set(state.products.map(p=>p.ref));
    // 2) clientes
    const cRows = n.clients.map(c=>({owner_id:uid_, name:c.name||'Sin nombre', phone:c.phone||null, email:c.email||null, address:c.address||null, notes:c.notes||null,
      created_at: c.createdAt || undefined}));
    const cNew = await insertChunks('clients', cRows, 'id');
    const cMap = {}; n.clients.forEach((c,i)=>{ if(c.id) cMap[c.id] = cNew[i].id; });
    // si un ID de cliente ya no existe (cliente recreado), se enlaza por nombre
    const cByName = {}; n.clients.forEach((c,i)=>{ cByName[(c.name||'').trim().toLowerCase()] = cNew[i].id; });
    const cid = (id, name) => cMap[id] || cByName[(name||'').trim().toLowerCase()] || null;
    // 3) ventas
    const sRows = n.sales.map(s=>({owner_id:uid_, client_id:cid(s.clientId, s.clientName), client_name:s.clientName||null, vendor_name:s.vendorName||SESSION.name,
      sale_date:saleDateOf(s.date), items:s.items||[], total:Number(s.total)||0, notes:s.notes||null}));
    const sNew = await insertChunks('sales', sRows, 'id');
    const sMap = {}; n.sales.forEach((s,i)=>{ if(s.id) sMap[s.id] = sNew[i].id; });
    // 4) avisos
    const okStatus = ['pending','contacted','renewed','dismissed'];
    const rRows = n.reminders.filter(r=>r.dueDate).map(r=>({owner_id:uid_, client_id:cid(r.clientId, r.clientName), client_name:r.clientName||null,
      product_ref: known.has(r.productRef) ? r.productRef : null, product_name:r.productName||null, sale_id:sMap[r.saleId]||null,
      sale_date:r.saleDate||null, due_date:String(r.dueDate).slice(0,10), days:Number(r.days)||null,
      status: okStatus.includes(r.status) ? r.status : 'pending', contacted_at:r.contactedAt||null}));
    await insertChunks('reminders', rRows);
    await SupabaseDB.loadAll();
    closeModal();
    toast(`Importado: ${cNew.length} clientes, ${sNew.length} ventas, ${rRows.length} avisos`);
  }catch(err){
    console.error(err);
    toast('La importación falló a la mitad. Avísale al administrador antes de reintentar.');
    btn.disabled = false; btn.textContent = 'Importar';
  }
}
document.addEventListener('click', (e)=>{
  if(e.target.closest('[data-action="run-import"]')) runImport();
  if(e.target.closest('[data-action="reload-profiles"]')) loadProfiles(true);
});
