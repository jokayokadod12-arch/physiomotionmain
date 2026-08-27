/**
 * utils.js — Firebase (cloud) + localStorage (fallback)
 */

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
function requireAuth(requiredRole = null) {
  const user = getCurrentUser();
  if (!user) { window.location.href = 'login.html'; return null; }
  if (requiredRole && user.role !== requiredRole) {
    window.location.href = user.role === 'doctor' ? 'choose-year.html' : 'choose-role.html';
    return null;
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

function logout() {
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
  window.location.href = user.role === 'doctor' ? 'choose-year.html' : 'choose-role.html';
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
