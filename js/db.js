/* ============================================================================
   Capa de datos sobre Supabase.
   Expone la misma interfaz tipo "Firestore" que usaba la app con localStorage
   (collection().onSnapshot/add/where/get, doc().update/delete) para no tener
   que reescribir las pantallas. Traduce camelCase (app) <-> snake_case (BD).
   Los clientes/ventas/avisos se cargan filtrados por owner_id = usuario actual.
   ========================================================================== */
const CFG = window.FUSION_CONFIG || {};
const SB = window.supabase.createClient(CFG.SUPABASE_URL, CFG.SUPABASE_ANON_KEY, {
  auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
});

const TABLES = {
  products: {
    table: 'products', pk: 'ref', scoped: false, hasUpdatedAt: true, order: 'name',
    map: { ref:'ref', name:'name', category:'category', price:'price', presentation:'presentation', days:'days',
           description:'description', image:'image_url', invima:'invima', active:'active', createdAt:'created_at' }
  },
  clients: {
    table: 'clients', pk: 'id', scoped: true, order: 'created_at',
    map: { name:'name', phone:'phone', email:'email', address:'address', notes:'notes', createdAt:'created_at' }
  },
  sales: {
    table: 'sales', pk: 'id', scoped: true, hasUpdatedAt: true, order: 'created_at',
    map: { date:'sale_date', clientId:'client_id', clientName:'client_name', vendorName:'vendor_name',
           items:'items', total:'total', notes:'notes', createdAt:'created_at' }
  },
  reminders: {
    table: 'reminders', pk: 'id', scoped: true, hasUpdatedAt: true, order: 'due_date',
    map: { clientId:'client_id', clientName:'client_name', productRef:'product_ref', productName:'product_name',
           saleId:'sale_id', saleDate:'sale_date', dueDate:'due_date', days:'days', status:'status',
           contactedAt:'contacted_at', createdAt:'created_at' }
  }
};

const SupabaseDB = (()=>{
  let userId = null;
  const cache = {};      // col -> Map(id -> objeto de la app)
  const listeners = {};  // col -> [callbacks]
  Object.keys(TABLES).forEach(c => { cache[c] = new Map(); listeners[c] = []; });

  function fromRow(col, row){
    const T = TABLES[col], o = {};
    for(const [appKey, dbKey] of Object.entries(T.map)){
      if(row[dbKey] !== undefined && row[dbKey] !== null) o[appKey] = row[dbKey];
    }
    if(col === 'sales' && o.date) o.date = String(o.date).slice(0,10);
    if(col === 'products') o.ref = row.ref;
    return o;
  }
  function toRow(col, obj){
    const T = TABLES[col], r = {};
    for(const [appKey, dbKey] of Object.entries(T.map)){
      if(obj[appKey] === undefined) continue;
      let v = obj[appKey];
      if((dbKey==='sale_date' || dbKey==='due_date') && v) v = String(v).slice(0,10);
      r[dbKey] = v;
    }
    return r;
  }
  function docsOf(col){
    return Array.from(cache[col].entries()).map(([id, data]) => ({id, data: () => data}));
  }
  function notify(col){
    const docs = docsOf(col);
    listeners[col].forEach(cb => { try{ cb({docs}); }catch(e){ console.error(e); } });
  }
  async function fetchAll(col){
    const T = TABLES[col], out = [], page = 1000;
    for(let from = 0; ; from += page){
      let q = SB.from(T.table).select('*').order(T.order, {ascending:true}).range(from, from + page - 1);
      if(T.scoped) q = q.eq('owner_id', userId);
      const { data, error } = await q;
      if(error) throw error;
      out.push(...data);
      if(data.length < page) break;
    }
    return out;
  }
  async function load(col){
    const rows = await fetchAll(col), T = TABLES[col];
    cache[col] = new Map(rows.map(r => [r[T.pk], fromRow(col, r)]));
    notify(col);
  }
  async function loadAll(){ await Promise.all(Object.keys(TABLES).map(load)); }

  function matches(obj, filters){
    return filters.every(([f, op, v]) => op === '==' ? obj[f] === v : op === '!=' ? obj[f] !== v : true);
  }
  function collection(col){
    const T = TABLES[col];
    return {
      onSnapshot(cb){
        listeners[col].push(cb);
        cb({docs: docsOf(col)});
        return () => { listeners[col] = listeners[col].filter(f => f !== cb); };
      },
      async add(obj){
        const row = toRow(col, obj);
        if(T.scoped) row.owner_id = userId;
        if(col === 'products') row.created_by = userId;
        const { data, error } = await SB.from(T.table).insert(row).select().single();
        if(error) throw error;
        const id = data[T.pk];
        cache[col].set(id, fromRow(col, data));
        notify(col);
        return { id };
      },
      where(field, op, val){
        const filters = [[field, op, val]];
        const api = {
          where(f, o, v){ filters.push([f, o, v]); return api; },
          async get(){ return { docs: docsOf(col).filter(d => matches(d.data(), filters)) }; }
        };
        return api;
      },
      async get(){ return { docs: docsOf(col) }; }
    };
  }
  function doc(path){
    const idx = path.indexOf('/');
    const col = path.slice(0, idx), id = path.slice(idx + 1), T = TABLES[col];
    return {
      async update(obj){
        const row = toRow(col, obj);
        if(T.hasUpdatedAt) row.updated_at = new Date().toISOString();
        const { data, error } = await SB.from(T.table).update(row).eq(T.pk, id).select().single();
        if(error) throw error;
        cache[col].set(id, fromRow(col, data));
        notify(col);
      },
      async delete(){
        const { error } = await SB.from(T.table).delete().eq(T.pk, id);
        if(error) throw error;
        cache[col].delete(id);
        notify(col);
      }
    };
  }
  return {
    collection, doc, loadAll, load,
    setUser(id){ userId = id; },
    reset(){ userId = null; Object.keys(TABLES).forEach(c => { cache[c] = new Map(); notify(c); }); },
    toRow, fromRow
  };
})();
