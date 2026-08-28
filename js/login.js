/**
 * login.js — SHA-256 hashing, no asyncGetAllUsers on load
 */

async function hashPass(pw) {
  const data = new TextEncoder().encode(pw + 'physio_2024');
  const buf  = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2,'0')).join('');
}

async function doLogin() {
  clearMsgs();
  const email = document.getElementById('loginEmail').value.trim().toLowerCase();
  const pass  = document.getElementById('loginPass').value;
  if (!email || !pass) { showMsg('loginMsg','Please fill all fields.'); return; }
  setBtn('loginBtn', true, 'Logging in…');
  try {
    let user = window.FIREBASE_ENABLED ? await asyncGetUser(email) : null;
    if (!user) user = getAllUsers().find(u => u.email === email) || null;
    if (!user) { showMsg('loginMsg','Invalid email or password.'); return; }
    const hashed = await hashPass(pass);
    if (user.pass !== hashed && user.pass !== pass) { showMsg('loginMsg','Invalid email or password.'); return; }
    if (user.pass === pass) { user.pass = hashed; await asyncSaveUser(user).catch(()=>{}); }
    // ── Admin-controlled account status (Super Admin panel) ──
    if (user.accountStatus === 'suspended') {
      showMsg('loginMsg','🚫 Your account has been suspended. Please contact support.');
      return;
    }
    if (user.role === 'doctor' && user.accountStatus === 'pending') {
      showMsg('loginMsg','⏳ Your account is awaiting admin approval. You\'ll be notified once it\'s approved.');
      return;
    }
    updateCurrentUser(user);
    // Ensure this account exists in Firestore (migrates old localStorage-only registrations)
    if (window.FIREBASE_ENABLED) {
      fbSaveUser(user).catch(() => {});
    }
    window.location.href = user.role === 'doctor' ? 'choose-year.html' : (user.role === 'student' ? 'student-dashboard.html' : 'choose-role.html');
  } catch(e) {
    showMsg('loginMsg','Something went wrong. Try again.');
  } finally {
    setBtn('loginBtn', false, 'Login');
  }
}

async function doSignup() {
  clearMsgs();
  const name  = document.getElementById('signupName').value.trim();
  const email = document.getElementById('signupEmail').value.trim().toLowerCase();
  const pass  = document.getElementById('signupPass').value;
  const role  = document.getElementById('signupRole').value;
  if (!name||!email||!pass) { showMsg('signupMsg','Please fill all fields.'); return; }
  if (pass.length < 6)      { showMsg('signupMsg','Password min 6 characters.'); return; }
  if (!/\S+@\S+\.\S+/.test(email)) { showMsg('signupMsg','Enter valid email.'); return; }
  setBtn('signupBtn', true, 'Creating…');
  try {
    let ex = window.FIREBASE_ENABLED ? await fbGetUser(email) : null;
    if (!ex) ex = getAllUsers().find(u => u.email === email) || null;
    if (ex) { showMsg('signupMsg','Email already registered.'); return; }
    const hashed = await hashPass(pass);
    const newUserObj = { name, email, pass: hashed, role, db:[], exercises:[], sentExercises:[], profile:{phone:'',specialty:'',bio:''}, createdAt: new Date().toISOString() };
    if (role === 'doctor') {
      newUserObj.acceptOnline = false; // doctor must explicitly enable in Schedule settings
      newUserObj.accountStatus = 'pending'; // requires Super Admin approval before first login
    } else {
      newUserObj.accountStatus = 'active';
    }
    await asyncSaveUser(newUserObj);
    // Switch to login
    const isMobile = window.innerWidth <= 580;
    if (isMobile) {
      document.getElementById('signupPane').classList.add('hidden-mobile');
      document.getElementById('loginPane').classList.remove('hidden-mobile');
    } else {
      document.getElementById('loginWrapper').classList.remove('show-signup');
    }
    document.getElementById('loginEmail').value = email;
    if (role === 'doctor') {
      showMsg('loginMsg','✅ Account created! It\'s pending admin approval — you\'ll be able to log in once approved.');
    } else {
      showMsg('loginMsg','✅ Account created! Please log in.');
    }
    document.getElementById('loginMsg').classList.add('ok');
  } catch(e) {
    showMsg('signupMsg','Error creating account.');
  } finally {
    setBtn('signupBtn', false, 'Create Account');
  }
}

function showMsg(id, txt) { const el=document.getElementById(id); if(el) el.textContent=txt; }
function clearMsgs() {
  ['loginMsg','signupMsg'].forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.textContent=''; el.classList.remove('ok'); }
  });
}
function setBtn(id, loading, txt) {
  const el = document.getElementById(id);
  if (el) { el.disabled=loading; el.textContent=txt; }
}
