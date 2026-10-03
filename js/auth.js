/* ============================== LOGIN (enlace mágico) / ARRANQUE ============================== */
const $ = id => document.getElementById(id);

function showLogin(msg){
  $('shell').style.display = 'none';
  $('login-screen').style.display = 'flex';
  const err = $('login-error');
  if(msg){ err.textContent = msg; err.style.display = 'block'; } else err.style.display = 'none';
  $('login-form').style.display = ''; $('login-sent').style.display = 'none';
}
function bootApp(){
  $('login-screen').style.display = 'none';
  $('shell').style.display = 'flex';
  state.view = 'dashboard';
  render();
  initDb();
}
async function startFromAuthSession(session){
  if(SESSION && SESSION.id === session.user.id) return;
  const { data: prof, error } = await SB.from('profiles').select('*').eq('id', session.user.id).single();
  if(error || !prof){
    console.error(error);
    await SB.auth.signOut();
    showLogin('No se pudo cargar tu perfil. Intenta de nuevo.');
    return;
  }
  if(!prof.active){
    await SB.auth.signOut();
    showLogin('Tu cuenta está pendiente de aprobación (o desactivada). Avísale al administrador y vuelve a intentar.');
    return;
  }
  SESSION = {id:prof.id, email:prof.email, name:prof.full_name||'', role:prof.role, canEditPrice:prof.can_edit_price, phone:prof.phone||''};
  bootApp();
  if(!SESSION.name) askFirstName();
}
async function doLogout(){
  await SB.auth.signOut();
}
function resetAfterLogout(){
  SESSION = null;
  SupabaseDB.reset();
  Object.assign(state, {products:[], clients:[], sales:[], reminders:[], orders:[], activeOrderKey:null, catalogSelection:[], profiles:[], profilesLoaded:false, statsAll:null, statsScope:'mine'});
  closeModal();
  showLogin();
}

$('login-form').addEventListener('submit', async (e)=>{
  e.preventDefault();
  const email = $('login-email').value.trim().toLowerCase();
  const btn = $('login-btn');
  if(String(CFG.SUPABASE_URL||'').includes('TU-PROYECTO')){ showLogin('Falta configurar config.js con los datos de Supabase.'); return; }
  btn.disabled = true; btn.textContent = 'Enviando…';
  const { error } = await SB.auth.signInWithOtp({email, options:{shouldCreateUser:true, emailRedirectTo: location.origin + location.pathname}});
  btn.disabled = false; btn.textContent = 'Enviarme el enlace';
  if(error){ console.error(error); showLogin(error.status===429 ? 'Pediste demasiados enlaces. Espera un minuto e intenta de nuevo.' : 'No se pudo enviar el enlace. Revisa el correo e intenta de nuevo.'); return; }
  $('login-error').style.display = 'none';
  $('login-form').style.display = 'none'; $('login-sent').style.display = 'block';
});
$('login-retry').addEventListener('click', ()=>showLogin());

// No hacer llamadas a Supabase directamente dentro del callback (puede bloquear): se difiere con setTimeout.
SB.auth.onAuthStateChange((event, session)=>{
  if(event === 'SIGNED_OUT'){ setTimeout(resetAfterLogout, 0); return; }
  if(session && (event === 'INITIAL_SESSION' || event === 'SIGNED_IN')){ setTimeout(()=>startFromAuthSession(session), 0); return; }
  if(event === 'INITIAL_SESSION' && !session) showLogin();
});

// Al volver a la pestaña, refresca los datos (por si se editó desde otro dispositivo)
let lastRefresh = Date.now();
document.addEventListener('visibilitychange', ()=>{
  if(document.visibilityState === 'visible' && SESSION && Date.now() - lastRefresh > 60000){
    lastRefresh = Date.now();
    SupabaseDB.loadAll().catch(err=>console.error(err));
  }
});
