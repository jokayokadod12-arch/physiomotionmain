/**
 * my-exercises.js
 * Patient view — list assigned exercise plans, mark complete, delete.
 */

let currentUser = null;

document.addEventListener('DOMContentLoaded', async () => {
  currentUser = requireAuth('patient');
  if (!currentUser) return;

  document.getElementById('plansContainer').innerHTML =
    '<div style="text-align:center;padding:40px;color:rgba(224,247,250,.4);">⏳ Loading exercises…</div>';

  // Always fetch fresh from Firebase — doctor may have sent from another device
  if (window.FIREBASE_ENABLED) {
    try {
      const fresh = await fbGetUser(currentUser.email);
      if (fresh) {
        currentUser = fresh;
        updateCurrentUser(fresh);
        const users = getAllUsers();
        const idx = users.findIndex(u => u.email === fresh.email);
        if (idx !== -1) users[idx] = fresh; else users.push(fresh);
        saveUsers(users);
      }
    } catch(e) {
      console.warn('Firebase fetch failed, using localStorage:', e);
      currentUser = syncCurrentUser() || currentUser;
    }
  } else {
    currentUser = syncCurrentUser() || currentUser;
  }

  render();
});

// ── Render ──────────────────────────────────────────────────
function render() {
  const exercises = currentUser.exercises || [];

  let totalEx = 0, doneEx = 0;
  exercises.forEach(plan => {
    if (!Array.isArray(plan.exercises)) return;
    totalEx += plan.exercises.length;
    doneEx  += plan.exercises.filter(e => e.status === 'completed').length;
  });

  document.getElementById('statTotal').textContent = totalEx;
  document.getElementById('statDone').textContent  = doneEx;
  document.getElementById('statRate').textContent  = calcPercent(doneEx, totalEx) + '%';

  const container = document.getElementById('plansContainer');

  if (!exercises.length) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📋</div>
        <h2>No Exercises Assigned</h2>
        <p>Your doctor hasn't assigned any exercises yet.<br>Check back later.</p>
      </div>`;
    return;
  }

  const sorted = [...exercises].sort((a, b) => (b.id || 0) - (a.id || 0));
  container.innerHTML = sorted.map(plan => buildPlanCard(plan)).join('');
}

function buildPlanCard(plan) {
  if (!Array.isArray(plan.exercises)) return '';

  const realIndex = (currentUser.exercises || []).findIndex(p => p.id === plan.id);
  const done      = plan.exercises.filter(e => e.status === 'completed').length;
  const total     = plan.exercises.length;
  const progress  = calcPercent(done, total);

  const noteHtml = (plan.doctorNote || plan.message) ? `
    <div class="doctor-note">
      <h4>📝 Message from Dr. ${escHtml(plan.doctorName || 'Doctor')}:</h4>
      <p>${escHtml(plan.doctorNote || plan.message)}</p>
    </div>` : '';

  const exItems = plan.exercises.map((ex, exIdx) => {
    const isDone = ex.status === 'completed';
    return `
      <div class="exercise-item ${isDone ? 'completed' : ''}">
        <div class="ex-num">${isDone ? '✓' : exIdx + 1}</div>
        <div class="ex-details">
          <h3>${escHtml(ex.title || 'Untitled')}</h3>
          <p>${escHtml(ex.desc || 'No description')}</p>
          <div class="ex-meta">
            <span>⏱ ${escHtml(ex.duration || '—')}</span>
            <span>📊 ${escHtml(ex.level || '—')}</span>
            ${ex.assignedDate  ? `<span>📅 Assigned: ${escHtml(ex.assignedDate)}</span>` : ''}
            ${ex.completedDate ? `<span>✅ Completed: ${escHtml(ex.completedDate)}</span>` : ''}
          </div>
          <div class="ex-actions-row">
            <button class="btn-watch" onclick="watchVideo('${escHtml(ex.youtubeId || ex.videoSrc || '')}','${escHtml(ex.title || '')}')">▶ Watch Video</button>
            ${isDone
              ? `<span class="completed-badge">✓ Completed</span>`
              : `<button class="btn-complete" onclick="markComplete(${realIndex}, ${exIdx})">Mark as Complete</button>`}
            <button class="btn-del-ex" onclick="deleteExercise(${realIndex}, ${exIdx})" title="Remove this exercise">✕ Remove</button>
          </div>
        </div>
      </div>`;
  }).join('');

  return `
    <div class="assignment-card" id="plan-${plan.id}">
      <div class="assignment-header">
        <div>
          <h2>Plan from Dr. ${escHtml(plan.doctorName || 'Unknown')}</h2>
          <div class="meta">Assigned on ${escHtml(plan.date || 'Unknown date')}</div>
          ${plan.department ? `<span class="badge badge-blue mt-1">${escHtml(plan.department)}</span>` : ''}
        </div>
        <div style="display:flex;align-items:center;gap:14px;">
          <div class="count-box">
            <div class="big-num">${done}/${total}</div>
            <div class="small-label">completed</div>
          </div>
          <button class="btn-del-plan" onclick="deletePlan(${realIndex})" title="Remove entire plan">🗑 Remove Plan</button>
        </div>
      </div>

      ${noteHtml}

      <div class="prog-bar-wrap">
        <div class="prog-bar-fill" style="width:${progress}%"></div>
      </div>
      <div class="prog-label">${progress}% Complete</div>

      ${exItems}
    </div>`;
}

// ── Delete entire plan ──────────────────────────────────────
async function deletePlan(planIndex) {
  const ok = await customConfirm('Remove this entire exercise plan?', {
    title: 'Remove Plan', icon: '🗑️', confirmLabel: 'Remove', danger: true
  });
  if (!ok) return;

  currentUser.exercises = (currentUser.exercises || []).filter((_, i) => i !== planIndex);
  await asyncSaveUser(currentUser);
  render();
}

// ── Delete single exercise ──────────────────────────────────
async function deleteExercise(planIndex, exIndex) {
  const ok = await customConfirm('Remove this exercise?', {
    title: 'Remove Exercise', icon: '🗑️', confirmLabel: 'Remove', danger: true
  });
  if (!ok) return;

  const plan = currentUser.exercises?.[planIndex];
  if (!plan) return;

  plan.exercises = plan.exercises.filter((_, i) => i !== exIndex);
  if (plan.exercises.length === 0) {
    currentUser.exercises = currentUser.exercises.filter((_, i) => i !== planIndex);
  }

  await asyncSaveUser(currentUser);
  render();
}

// ── Mark complete ───────────────────────────────────────────
async function markComplete(planIndex, exIndex) {
  const ok = await customConfirm('Mark this exercise as completed?', {
    title: 'Mark Complete', icon: '✅', confirmLabel: 'Mark Done', danger: false
  });
  if (!ok) return;

  const plan = currentUser.exercises?.[planIndex];
  if (!plan) return;
  const ex = plan.exercises?.[exIndex];
  if (!ex) return;

  ex.status        = 'completed';
  ex.completedDate = new Date().toLocaleString();

  await asyncSaveUser(currentUser);
  await syncCompletionToDoctor(plan, ex);
  render();

  if (plan.exercises.every(e => e.status === 'completed')) {
    setTimeout(() => alert('🎉 Congratulations! You\'ve completed all exercises in this plan!'), 300);
  }
}

// Mirror the completion status onto the doctor's own sentExercises copy so
// Patient Files / Doctor Progress reflect it immediately, even without a
// live re-fetch of the patient record.
async function syncCompletionToDoctor(plan, ex) {
  const doctorEmail = plan.doctorEmail || ex.doctorEmail;
  if (!doctorEmail) return;
  try {
    let docUser = window.FIREBASE_ENABLED ? await fbGetUser(doctorEmail) : null;
    if (!docUser) docUser = getAllUsers().find(u => u.email === doctorEmail);
    if (!docUser || !Array.isArray(docUser.sentExercises)) return;

    const docAssign = docUser.sentExercises.find(a => String(a.id) === String(plan.id));
    if (!docAssign || !Array.isArray(docAssign.exercises)) return;

    const docEx = docAssign.exercises.find(e => String(e.id) === String(ex.id));
    if (!docEx) return;

    docEx.status       = ex.status;
    docEx.completedDate = ex.completedDate;

    await asyncSaveUser(docUser);
  } catch (e) {
    console.warn('Could not sync completion to doctor record:', e);
  }
}

// ── Watch video ─────────────────────────────────────────────
// ── Watch video — in-page YouTube modal ─────────────────────
function watchVideo(src, title) {
  if (!src || src.trim() === '') {
    alert('No video available for this exercise yet.');
    return;
  }
  // Extract YouTube ID from any format
  var ytId = '';
  var em = src.match(/youtube\.com\/embed\/([^?&"']+)/);  if (em) ytId = em[1];
  var wm = src.match(/youtube\.com\/watch\?v=([^&"']+)/); if (wm) ytId = wm[1];
  var sm = src.match(/youtu\.be\/([^?&"']+)/);             if (sm) ytId = sm[1];
  if (!ytId && /^[A-Za-z0-9_-]{11}$/.test(src.trim()))    ytId = src.trim();

  if (!ytId) { window.open(src, '_blank'); return; }

  // Build or reuse modal
  var modal = document.getElementById('_patVidModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = '_patVidModal';
    modal.style.cssText = 'position:fixed;inset:0;background:rgba(1,8,20,.96);z-index:9999;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(10px);padding:20px;';
    modal.innerHTML =
      '<div id="_patVidInner" style="position:relative;width:100%;max-width:900px;display:flex;flex-direction:column;align-items:center;gap:14px;">' +
        '<button onclick="closePatVideo()" style="position:absolute;top:-14px;right:-14px;width:38px;height:38px;border-radius:50%;background:rgba(71,181,255,.12);border:1px solid rgba(71,181,255,.35);color:#47B5FF;font-size:22px;cursor:pointer;display:flex;align-items:center;justify-content:center;z-index:10;transition:.2s;" onmouseover="this.style.background=\'rgba(71,181,255,.28)\'" onmouseout="this.style.background=\'rgba(71,181,255,.12)\'">×</button>' +
        '<div id="_patVidWrap" style="position:relative;width:100%;padding-top:56.25%;border-radius:14px;overflow:hidden;box-shadow:0 24px 70px rgba(0,0,0,.85),0 0 40px rgba(71,181,255,.12);border:1px solid rgba(71,181,255,.15);"></div>' +
        '<div id="_patVidTitle" style="font-family:\'Orbitron\',monospace;font-size:13px;color:rgba(224,247,250,.7);letter-spacing:.5px;text-align:center;max-width:700px;line-height:1.4;"></div>' +
        '<a id="_patVidYtBtn" href="#" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:8px 18px;border-radius:8px;background:rgba(255,0,0,.12);border:1px solid rgba(255,80,80,.3);color:#ff6060;font-family:\'Rajdhani\',sans-serif;font-size:13px;font-weight:700;cursor:pointer;text-decoration:none;">▶ Open in YouTube</a>' +
      '</div>';
    modal.addEventListener('click', function(e){ if(e.target===modal) closePatVideo(); });
    document.body.appendChild(modal);
  }

  // Inject iframe
  var wrap = document.getElementById('_patVidWrap');
  var old  = wrap.querySelector('iframe');
  if (old) old.remove();
  var iframe = document.createElement('iframe');
  iframe.src = 'https://www.youtube.com/embed/' + ytId + '?autoplay=1&rel=0&modestbranding=1';
  iframe.allow = 'autoplay; encrypted-media; fullscreen; picture-in-picture';
  iframe.allowFullscreen = true;
  iframe.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;border:none;';
  wrap.appendChild(iframe);

  document.getElementById('_patVidTitle').textContent = title || '';
  document.getElementById('_patVidYtBtn').href = 'https://www.youtube.com/watch?v=' + ytId;
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closePatVideo() {
  var modal = document.getElementById('_patVidModal');
  if (!modal) return;
  var wrap  = document.getElementById('_patVidWrap');
  var iframe = wrap && wrap.querySelector('iframe');
  if (iframe) iframe.remove();
  modal.style.display = 'none';
  document.body.style.overflow = '';
}

// ── Util ────────────────────────────────────────────────────
function escHtml(str) {
  return String(str)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}

// ESC to close modal
document.addEventListener('keydown', function(e){
  if (e.key === 'Escape') closePatVideo();
});
