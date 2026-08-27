/**
 * doctor-progress.js
 * Doctor view: patient completion reports + delete assignments/exercises.
 */

let allPatientData = [];
let currentDoctor  = null;

document.addEventListener('DOMContentLoaded', async () => {
  const user = requireAuth('doctor');
  if (!user) return;

  // Always fetch fresh from Firebase
  if (window.FIREBASE_ENABLED) {
    try {
      const fresh = await fbGetUser(user.email);
      if (fresh) {
        currentDoctor = fresh;
        updateCurrentUser(fresh);
      } else {
        currentDoctor = user;
      }
    } catch(e) {
      currentDoctor = user;
    }
  } else {
    currentDoctor = syncCurrentUser() || user;
  }

  await buildAndRender();
  // Keep doctor report in sync with patient completion updates.
  setInterval(() => { buildAndRender().catch(() => {}); }, 5000);
});

/* ── Build data from sentExercises + render ── */
async function buildAndRender() {
  const sent = currentDoctor.sentExercises || [];
  const map  = new Map();
  const localUsers = getAllUsers();
  const patientEmails = [...new Set(sent.map(a => a.patientEmail).filter(Boolean))];
  const freshPatients = new Map();

  // Always prefer fresh patient records from Firebase so completed exercises appear.
  await Promise.all(patientEmails.map(async (email) => {
    let p = null;
    if (window.FIREBASE_ENABLED) {
      p = await asyncGetUser(email).catch(() => null);
    }
    if (!p) p = localUsers.find(u => u.email === email) || null;
    if (p) freshPatients.set(email, p);
  }));

  sent.forEach(assignment => {
    const email   = assignment.patientEmail;
    const patient = freshPatients.get(email) || localUsers.find(u => u.email === email);
    const patAssign = patient?.exercises?.find(a => a.id === assignment.id);
    const exercises = (patAssign || assignment).exercises || [];

    if (!map.has(email)) {
      map.set(email, { name: assignment.patientName, email, assignments: [], total: 0, done: 0 });
    }

    const p = map.get(email);
    p.assignments.push({ ...assignment, exercises });
    p.total += exercises.length;
    p.done  += exercises.filter(e => e.status === 'completed').length;
  });

  allPatientData = Array.from(map.values()).map(p => ({
    ...p,
    progress: calcPercent(p.done, p.total)
  }));

  document.getElementById('statPatients').textContent    = allPatientData.length;
  document.getElementById('statAssignments').textContent = sent.length;
  const avg = allPatientData.length
    ? Math.round(allPatientData.reduce((s, p) => s + p.progress, 0) / allPatientData.length) : 0;
  document.getElementById('statAvg').textContent  = avg + '%';
  document.getElementById('statFull').textContent =
    allPatientData.filter(p => p.progress === 100).length;

  filterPatients();
}

/* ── Render ── */
function renderPatients(patients) {
  const el = document.getElementById('patientsContainer');

  if (!patients.length) {
    el.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">👥</div>
        <h2>No Patients Yet</h2>
        <p>Assign exercises via the Exercises Library to see reports here.</p>
      </div>`;
    return;
  }

  const sorted = [...patients].sort((a, b) => a.progress - b.progress);

  el.innerHTML = sorted.map(p => {
    let labelCls = 'prog-low', labelTxt = 'Needs Work';
    if (p.progress >= 80)      { labelCls = 'prog-excellent'; labelTxt = 'Excellent'; }
    else if (p.progress >= 50) { labelCls = 'prog-good';      labelTxt = 'Good Progress'; }

    const barColor = p.progress >= 80 ? 'var(--success)'
                   : p.progress >= 50 ? 'var(--warning)' : 'var(--danger)';

    const assignsHtml = p.assignments.map(a => {
      const t   = (a.exercises || []).length;
      const d   = (a.exercises || []).filter(e => e.status === 'completed').length;
      const pct = calcPercent(d, t);
      const full = pct === 100;
      const fc   = full ? 'var(--success)' : 'var(--warning)';

      const exList = (a.exercises || []).map((ex, ei) => {
        const done = ex.status === 'completed';
        return `
          <div class="ex-row ${done ? 'ex-done' : ''}">
            <span class="ex-status">${done ? '✅' : '⏳'}</span>
            <span class="ex-name">${ex.title || ex.name || 'Exercise ' + (ei+1)}</span>
            <button class="btn-del-ex" title="Remove this exercise"
              onclick="deleteExercise('${a.id}', ${ei}, '${p.email}')">✕</button>
          </div>`;
      }).join('');

      return `
        <div class="assign-item ${full ? 'full' : ''}" id="assign-${a.id}">
          <div class="ai-row">
            <span class="ai-title">${a.department || 'Exercise Plan'}</span>
            <span class="ai-date">${a.date || ''}</span>
            <button class="btn-del-assign" title="Remove entire assignment"
              onclick="deleteAssignment('${a.id}', '${p.email}')">🗑 Remove</button>
          </div>
          <div class="mini-bar">
            <span>${d}/${t}</span>
            <div class="mini-track"><div class="mini-fill" style="width:${pct}%;background:${fc};"></div></div>
            <span>${pct}%</span>
          </div>
          <div class="ex-list">${exList}</div>
        </div>`;
    }).join('');

    return `
      <div class="patient-card">
        <div class="pt-header">
          <div>
            <h3>${p.name}</h3>
            <div class="pt-email">${p.email}</div>
          </div>
          <span class="prog-label ${labelCls}">${labelTxt} (${p.progress}%)</span>
        </div>
        <div class="overall-prog">
          <div class="row">
            <span>Overall Progress</span>
            <span>${p.done} of ${p.total} exercises</span>
          </div>
          <div class="progress-bar-track" style="height:14px;">
            <div class="progress-bar-fill" style="height:14px;width:${p.progress}%;background:${barColor};"></div>
          </div>
        </div>
        <div class="assign-list">${assignsHtml}</div>
      </div>`;
  }).join('');
}

/* ── Delete entire assignment ── */
async function deleteAssignment(assignId, patientEmail) {
  const ok = await customConfirm('Remove this assignment permanently?', {
    title: 'Remove Assignment', icon: '🗑️', confirmLabel: 'Remove', danger: true
  });
  if (!ok) return;

  currentDoctor.sentExercises = (currentDoctor.sentExercises || [])
    .filter(a => String(a.id) !== String(assignId));

  await _saveDoctor();
  await buildAndRender();
}

/* ── Delete one exercise ── */
async function deleteExercise(assignId, exIndex, patientEmail) {
  const ok = await customConfirm('Remove this exercise permanently?', {
    title: 'Remove Exercise', icon: '🗑️', confirmLabel: 'Remove', danger: true
  });
  if (!ok) return;

  const assign = (currentDoctor.sentExercises || [])
    .find(a => String(a.id) === String(assignId));
  if (!assign) return;

  assign.exercises = (assign.exercises || []).filter((_, i) => i !== exIndex);

  if (assign.exercises.length === 0) {
    currentDoctor.sentExercises = currentDoctor.sentExercises
      .filter(a => String(a.id) !== String(assignId));
  }

  await _saveDoctor();
  await buildAndRender();
}

/* ── Save doctor to Firebase + localStorage (full overwrite) ── */
async function _saveDoctor() {
  await asyncSaveUser(currentDoctor);
}

/* ── Filter ── */
function filterPatients() {
  const q      = document.getElementById('searchInput').value.toLowerCase();
  const status = document.getElementById('statusFilter').value;

  let filtered = allPatientData.filter(p =>
    p.name.toLowerCase().includes(q) || p.email.toLowerCase().includes(q)
  );

  if (status !== 'all') {
    filtered = filtered.filter(p => {
      if (status === 'excellent') return p.progress >= 80;
      if (status === 'good')      return p.progress >= 50 && p.progress < 80;
      if (status === 'low')       return p.progress < 50;
      return true;
    });
  }

  renderPatients(filtered);
}
