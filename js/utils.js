/**
 * utils.js — Firebase (cloud) + localStorage (fallback)
 */

/* ── Custom confirm modal (replaces native browser confirm() popup) ── */
function _injectConfirmModalStyles() {
  if (document.getElementById('_customConfirmStyles')) return;
  const style = document.createElement('style');
  style.id = '_customConfirmStyles';
  style.textContent = `
  .cc-overlay{
    display:flex;position:fixed;inset:0;z-index:99999;
    background:rgba(26,26,26,.45);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);
    justify-content:center;align-items:center;padding:20px;
    opacity:0;transition:opacity .2s ease;
  }
  .cc-overlay.cc-show{opacity:1;}
  .cc-box{
    background:var(--bg-card,#FFFFFF);
    border:1px solid var(--border,rgba(90,122,98,.15));
    border-radius:var(--radius-sm,16px);
    width:100%;max-width:340px;
    padding:26px 24px 20px;
    text-align:center;
    box-shadow:0 20px 60px rgba(44,44,44,.22);
    transform:translateY(10px) scale(.97);transition:transform .22s cubic-bezier(.34,1.4,.64,1);
    font-family:'DM Sans',sans-serif;
  }
  .cc-overlay.cc-show .cc-box{transform:translateY(0) scale(1);}
  .cc-icon{
    width:46px;height:46px;border-radius:50%;margin:0 auto 14px;
    display:flex;align-items:center;justify-content:center;
    background:var(--sage-dim,rgba(90,122,98,.12));
    font-size:20px;
  }
  .cc-title{
    font-family:'Playfair Display',serif;
    font-size:17px;font-weight:700;color:var(--charcoal,#2C2C2C);
    margin-bottom:6px;
  }
  .cc-msg{
    font-size:13px;line-height:1.6;color:var(--text-sec,#4A4A4A);
    margin-bottom:20px;white-space:pre-line;
  }
  .cc-actions{display:flex;gap:10px;}
  .cc-btn{
    flex:1;padding:11px 14px;border-radius:var(--radius-xs,10px);
    border:none;cursor:pointer;font-family:'DM Sans',sans-serif;
    font-weight:600;font-size:13px;transition:.2s;
  }
  .cc-btn-cancel{
    background:var(--cream-warm,#F5EFE4);color:var(--charcoal,#2C2C2C);
    border:1px solid var(--border,rgba(90,122,98,.18));
  }
  .cc-btn-cancel:hover{background:var(--cream-deep,#EDE3D4);}
  .cc-btn-confirm{
    background:var(--sage,#5A7A62);color:#fff;
    box-shadow:0 4px 14px rgba(90,122,98,.3);
  }
  .cc-btn-confirm:hover{background:var(--forest,#2D4A35);transform:translateY(-1px);}
  .cc-btn-confirm.cc-danger{background:var(--danger,#C84A4A);box-shadow:0 4px 14px rgba(200,74,74,.3);}
  .cc-btn-confirm.cc-danger:hover{background:#A93A3A;}
  `;
  document.head.appendChild(style);
}

/**
 * Custom styled confirm dialog — replaces the native browser confirm() box.
 * Returns a Promise<boolean> resolved true (confirmed) or false (cancelled).
 * Usage: const ok = await customConfirm('Logout?'); if (ok) { ... }
 */
function customConfirm(message, opts) {
  opts = opts || {};
  const title = opts.title || 'Confirm';
  const icon = opts.icon || '❓';
  const confirmLabel = opts.confirmLabel || 'Yes';
  const cancelLabel = opts.cancelLabel || 'Cancel';
  const danger = !!opts.danger;

  _injectConfirmModalStyles();

  return new Promise((resolve) => {
    const overlay = document.createElement('div');
    overlay.className = 'cc-overlay';
    overlay.innerHTML = `
      <div class="cc-box">
        <div class="cc-icon">${icon}</div>
        <div class="cc-title">${title}</div>
        <div class="cc-msg">${message}</div>
        <div class="cc-actions">
          <button class="cc-btn cc-btn-cancel" data-cc="cancel">${cancelLabel}</button>
          <button class="cc-btn cc-btn-confirm${danger ? ' cc-danger' : ''}" data-cc="confirm">${confirmLabel}</button>
        </div>
      </div>`;
    document.body.appendChild(overlay);
    requestAnimationFrame(() => overlay.classList.add('cc-show'));

    function close(result) {
      overlay.classList.remove('cc-show');
      setTimeout(() => overlay.remove(), 180);
      document.removeEventListener('keydown', onKey);
      resolve(result);
    }
    function onKey(e) {
      if (e.key === 'Escape') close(false);
      if (e.key === 'Enter') close(true);
    }
    document.addEventListener('keydown', onKey);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) close(false);
      const btn = e.target.closest('[data-cc]');
      if (btn) close(btn.dataset.cc === 'confirm');
    });
  });
}

function _db() {
  if (window._fbDb) return window._fbDb;
  if (window.FIREBASE_ENABLED && window.firebase && firebase.apps.length) {
    window._fbDb = firebase.firestore();
    return window._fbDb;
  }
  return null;
}

async function fbGetUser(email) {
  const db = _db();
  if (!db) return null;
  try {
    const snap = await Promise.race([
      db.collection('users').doc(email).get(),
      new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), 5000))
    ]);
    return snap.exists ? snap.data() : null;
  } catch(e) { console.warn('fbGetUser error:', e.message); return null; }
}

async function fbSaveUser(userData) {
  const db = _db();
  if (!db) return;
  // Merge to avoid dropping fields (e.g. acceptOnline) when callers send partial objects.
  try { await db.collection('users').doc(userData.email).set(userData, { merge: true }); }
  catch(e) { console.warn('fbSaveUser error:', e); }
}

async function fbGetAllUsers() {
  const db = _db();
  if (!db) return [];
  try {
    const snap = await Promise.race([
      db.collection('users').get(),
      new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), 5000))
    ]);
    return snap.docs.map(d => d.data());
  } catch(e) { console.warn('fbGetAllUsers error:', e.message); return []; }
}

async function fbGetSessions(email) {
  const db = _db();
  if (!db) return [];
  try {
    const snap = await db.collection('romSessions').where('doctorEmail', '==', email).get();
    return snap.docs.map(d => d.data());
  } catch(e) { return []; }
}

async function fbSaveSession(session) {
  const db = _db();
  if (!db) return;
  try { await db.collection('romSessions').doc(String(session.id)).set(session); } catch(e) {}
}

async function fbDeleteSession(sessionId) {
  const db = _db();
  if (!db) return;
  try { await db.collection('romSessions').doc(String(sessionId)).delete(); } catch(e) {}
}

// ── Local storage helpers ─────────────────────────────────
function getCurrentUser() {
  try { return JSON.parse(localStorage.getItem('currentUser')); } catch { return null; }
}
function updateCurrentUser(user) {
  localStorage.setItem('currentUser', JSON.stringify(user));
}
function getAllUsers() {
  try { return JSON.parse(localStorage.getItem('users')) || []; } catch { return []; }
}
function saveUsers(users) {
  localStorage.setItem('users', JSON.stringify(users));
}
function getSessions(email) {
  try { return JSON.parse(localStorage.getItem('romDB_' + email)) || []; } catch { return []; }
}
function saveSessions(email, sessions) {
  localStorage.setItem('romDB_' + email, JSON.stringify(sessions));
  if (window.FIREBASE_ENABLED) sessions.forEach(s => fbSaveSession(s).catch(() => {}));
}

// ── Cloud-first async functions ───────────────────────────
async function asyncGetUser(email) {
  if (window.FIREBASE_ENABLED) {
    const u = await fbGetUser(email);
    if (u) {
      const users = getAllUsers();
      const idx = users.findIndex(x => x.email === email);
      if (idx !== -1) users[idx] = u; else users.push(u);
      saveUsers(users);
      return u;
    }
  }
  return getAllUsers().find(u => u.email === email) || null;
}

async function asyncSaveUser(userData) {
  const users = getAllUsers();
  const idx = users.findIndex(u => u.email === userData.email);
  if (idx !== -1) users[idx] = userData; else users.push(userData);
  saveUsers(users);
  if (window.FIREBASE_ENABLED) await fbSaveUser(userData);
  const cu = getCurrentUser();
  if (cu && cu.email === userData.email) updateCurrentUser(userData);
}

async function asyncGetAllUsers() {
  if (window.FIREBASE_ENABLED) {
    const cloud = await fbGetAllUsers();
    if (cloud.length > 0) {
      const local = getAllUsers();
      cloud.forEach(cu => {
        const i = local.findIndex(u => u.email === cu.email);
        if (i !== -1) local[i] = cu; else local.push(cu);
      });
      saveUsers(local);
      return local;
    }
  }
  return getAllUsers();
}

// ── Auth ──────────────────────────────────────────────────
function dashboardUrlForRole(role) {
  if (role === 'doctor') return 'choose-year.html';
  if (role === 'student') return 'student-dashboard.html';
  return 'choose-role.html';
}

function requireAuth(requiredRole = null) {
  const user = getCurrentUser();
  if (!user) { window.location.href = 'login.html'; return null; }
  if (requiredRole) {
    const allowedRoles = Array.isArray(requiredRole) ? requiredRole : [requiredRole];
    if (!allowedRoles.includes(user.role)) {
      window.location.href = dashboardUrlForRole(user.role);
      return null;
    }
  }
  // Silently refresh user data from Firestore in background
  if (window.FIREBASE_ENABLED) {
    fbGetUser(user.email).then(fresh => {
      if (fresh) updateCurrentUser(fresh);
    }).catch(() => {});
  }
  return user;
}

function syncCurrentUser() {
  const cu = getCurrentUser();
  if (!cu) return null;
  const fresh = getAllUsers().find(u => u.email === cu.email);
  if (fresh) { updateCurrentUser(fresh); return fresh; }
  return cu;
}

async function logout() {
  const ok = await customConfirm('Are you sure you want to log out?', {
    title: 'Logout', icon: '🚪', confirmLabel: 'Logout', cancelLabel: 'Cancel', danger: true
  });
  if (!ok) return;
  // Clear all session and cached data to prevent any cross-account data leakage
  localStorage.removeItem('currentUser');
  // Clear any other keys that might contain user-specific cached data
  const keysToKeep = ['users']; // Keep the users list for login lookups
  Object.keys(localStorage).forEach(key => {
    if (!keysToKeep.includes(key)) {
      // Remove any user-session keys (appointments cache, chat cache, etc.)
      if (key.startsWith('psch_') || key.startsWith('appt_') || key.startsWith('chat_') || key.startsWith('notif_')) {
        localStorage.removeItem(key);
      }
    }
  });
  window.location.href = 'login.html';
}

function goHome() {
  const user = getCurrentUser();
  if (!user) { window.location.href = 'login.html'; return; }
  window.location.href = dashboardUrlForRole(user.role);
}
function goProfile() { window.location.href = 'profile.html'; }
function formatDate(d) { return d || '—'; }
function calcPercent(done, total) {
  if (!total) return 0;
  return Math.round((done / total) * 100);
}

// ── Shared notification badge ─────────────────────────────
async function updateBadge() {
  const user = getCurrentUser();
  if (!user || !window.FIREBASE_ENABLED) return;
  try {
    const notifs = await dbGetNotifs(user.email);
    const unread = notifs.filter(n => !n.read).length;
    const badge = document.getElementById('chatBadge');
    if (badge) {
      badge.style.display = unread > 0 ? 'inline-block' : 'none';
      badge.textContent   = unread > 0 ? unread : '';
    }
  } catch(e) {}
}
