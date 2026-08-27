/**
 * progress.js — Patient progress page
 */

let currentUser = null;

document.addEventListener('DOMContentLoaded', async () => {
  currentUser = requireAuth('patient');
  if (!currentUser) return;

  // Get fresh data from Firebase
  if (window.FIREBASE_ENABLED) {
    const fresh = await asyncGetUser(currentUser.email).catch(() => null);
    if (fresh) { currentUser = fresh; updateCurrentUser(fresh); }
  } else {
    currentUser = syncCurrentUser() || currentUser;
  }

  render();
});

function render() {
  const exercises = currentUser.exercises || [];

  // Totals
  let total = 0, done = 0, pending = 0;
  exercises.forEach(plan => {
    if (!Array.isArray(plan.exercises)) return;
    total   += plan.exercises.length;
    done    += plan.exercises.filter(e => e.status === 'completed').length;
    pending += plan.exercises.filter(e => e.status !== 'completed').length;
  });
  const overallPct = calcPercent(done, total);

  document.getElementById('statTotal').textContent   = total;
  document.getElementById('statDone').textContent    = done;
  document.getElementById('statPending').textContent = pending;
  document.getElementById('statRate').textContent    = overallPct + '%';

  // Chart
  const chartEl = document.getElementById('chartArea');
  if (total === 0) {
    chartEl.innerHTML = `
      <div style="text-align:center;padding:30px;color:var(--text-muted);">
        <div style="font-size:48px;margin-bottom:12px;">📊</div>
        <p>No exercises assigned yet — your progress will appear here.</p>
      </div>`;
  } else {
    const donePct    = calcPercent(done, total);
    const pendingPct = calcPercent(pending, total);
    chartEl.innerHTML = `
      <div class="chart-bar-row">
        <div class="chart-bar-label">
          <span style="color:var(--success)">✓ Completed (${done})</span>
          <span style="color:var(--success)">${donePct}%</span>
        </div>
        <div class="progress-bar-track" style="height:28px;border-radius:8px;">
          <div class="progress-bar-fill" style="height:28px;width:${donePct}%;border-radius:8px;background:var(--success);"></div>
        </div>
      </div>
      <div class="chart-bar-row" style="margin-bottom:0">
        <div class="chart-bar-label">
          <span style="color:var(--warning)">⏳ Pending (${pending})</span>
          <span style="color:var(--warning)">${pendingPct}%</span>
        </div>
        <div class="progress-bar-track" style="height:28px;border-radius:8px;">
          <div class="progress-bar-fill" style="height:28px;width:${pendingPct}%;border-radius:8px;background:var(--warning);"></div>
        </div>
      </div>`;
  }

  // Per assignment list
  const listEl = document.getElementById('assignList');
  if (exercises.length === 0) {
    listEl.innerHTML = `<p style="color:var(--text-muted);text-align:center;padding:30px;">No assignments yet.</p>`;
    return;
  }

  const sorted = [...exercises].sort((a, b) => (b.id || 0) - (a.id || 0));

  listEl.innerHTML = sorted.map((plan, idx) => {
    if (!Array.isArray(plan.exercises)) return '';
    const t = plan.exercises.length;
    const d = plan.exercises.filter(e => e.status === 'completed').length;
    const p = t - d;
    const pct = calcPercent(d, t);
    const barColor = pct >= 70 ? 'var(--success)' : pct >= 30 ? 'var(--warning)' : 'var(--danger)';
    // Find real index in original array
    const realIdx = currentUser.exercises.findIndex(pl => pl.id === plan.id);

    return `
      <div class="assign-prog">
        <div class="assign-header" style="display:flex;justify-content:space-between;align-items:flex-start;">
          <div>
            <h3>From Dr. ${plan.doctorName || 'Unknown'}</h3>
            <div class="meta">${plan.date || 'Unknown date'}</div>
            ${plan.department ? `<span class="badge badge-blue mt-1">${plan.department}</span>` : ''}
          </div>
          <button onclick="deletePlan(${realIdx})"
            style="background:rgba(255,60,60,.1);border:1px solid rgba(255,60,60,.25);
            color:#ff6b6b;padding:6px 14px;border-radius:8px;cursor:pointer;
            font-family:'Rajdhani',sans-serif;font-size:13px;font-weight:600;
            transition:all .2s;flex-shrink:0;margin-left:12px;"
            onmouseover="this.style.background='rgba(255,60,60,.2)'"
            onmouseout="this.style.background='rgba(255,60,60,.1)'">
            🗑 Remove
          </button>
        </div>
        <div class="progress-bar-track" style="height:16px;margin-top:14px;">
          <div class="progress-bar-fill" style="height:16px;width:${pct}%;background:${barColor};"></div>
        </div>
        <div class="prog-numbers">
          <span>${d} of ${t} completed</span>
          <span>${pct}%</span>
        </div>
        <div class="breakdown">
          <div class="item done">✓ ${d} Completed</div>
          <div class="item pending">⏳ ${p} Pending</div>
        </div>
      </div>`;
  }).join('');
}

async function deletePlan(planIndex) {
  if (!confirm('Remove this exercise plan from your progress?\nThis only affects your view.')) return;

  currentUser.exercises = (currentUser.exercises || []).filter((_, i) => i !== planIndex);

  await asyncSaveUser(currentUser).catch(() => {
    const users = getAllUsers();
    const i = users.findIndex(u => u.email === currentUser.email);
    if (i !== -1) { users[i] = currentUser; saveUsers(users); }
  });
  updateCurrentUser(currentUser);
  render();
}
