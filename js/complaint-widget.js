/**
 * complaint-widget.js — drop-in "Report a Problem" button + modal.
 *
 * Include AFTER js/utils.js on any page where the user is already
 * logged in:
 *   <script src="js/complaint-widget.js"></script>
 *
 * It injects a floating button (bottom-right) that opens a small form.
 * Submissions are written to the `complaints` Firestore collection,
 * which the separate Super Admin panel (physio-admin/) reads from.
 * No other wiring needed — it reads the current user via getCurrentUser().
 */
(function () {
  function injectStyles() {
    if (document.getElementById('cw-styles')) return;
    const style = document.createElement('style');
    style.id = 'cw-styles';
    style.textContent = `
      .cw-fab {
        position:fixed; bottom:22px; right:22px; z-index:9997;
        width:52px; height:52px; border-radius:50%;
        background:linear-gradient(135deg, var(--forest-deep,#1A3020), var(--forest,#2D4A35));
        color:#FAF7F2; border:none; cursor:pointer; font-size:22px;
        display:flex; align-items:center; justify-content:center;
        box-shadow:0 10px 30px rgba(26,48,32,.35);
        transition:transform .2s ease;
      }
      .cw-fab:hover { transform:translateY(-3px) scale(1.05); }
      .cw-modal-bg {
        display:none; position:fixed; inset:0; z-index:9998; background:rgba(20,20,20,.5);
        backdrop-filter:blur(4px); align-items:center; justify-content:center; padding:20px;
      }
      .cw-modal-bg.show { display:flex; }
      .cw-modal {
        width:100%; max-width:420px; background:#FAF7F2; border-radius:20px;
        padding:26px 24px 22px; box-shadow:0 20px 60px rgba(0,0,0,.25);
        font-family:'DM Sans', sans-serif;
      }
      .cw-title { font-family:'Playfair Display', serif; font-size:18px; font-weight:700; color:#2D4A35; margin-bottom:4px; }
      .cw-sub { font-size:12.5px; color:#8A8A8A; margin-bottom:16px; line-height:1.5; }
      .cw-label { display:block; font-size:11.5px; font-weight:700; color:#4A4A4A; margin-bottom:6px; }
      .cw-input, .cw-textarea {
        width:100%; padding:11px 13px; border-radius:10px; border:1px solid rgba(90,122,98,.2);
        background:white; font-family:'DM Sans', sans-serif; font-size:13.5px; margin-bottom:14px; outline:none;
      }
      .cw-textarea { min-height:90px; resize:vertical; line-height:1.6; }
      .cw-input:focus, .cw-textarea:focus { border-color:#5A7A62; }
      .cw-btn { width:100%; padding:12px; border-radius:100px; border:none; cursor:pointer;
        background:linear-gradient(135deg,#5A7A62,#7A9E82); color:white; font-weight:700; font-size:13.5px; }
      .cw-btn:disabled { opacity:.6; }
      .cw-close { position:absolute; top:16px; right:18px; background:none; border:none; font-size:18px; color:#8A8A8A; cursor:pointer; }
      .cw-msg { font-size:12px; margin-bottom:10px; min-height:14px; }
      .cw-msg.err { color:#C84A4A; }
      .cw-msg.ok { color:#3D8B5B; }
    `;
    document.head.appendChild(style);
  }

  function injectMarkup() {
    if (document.getElementById('cwFab')) return;
    const wrap = document.createElement('div');
    wrap.innerHTML = `
      <button class="cw-fab" id="cwFab" title="Report a problem">🆘</button>
      <div class="cw-modal-bg" id="cwModalBg">
        <div class="cw-modal" style="position:relative;">
          <button class="cw-close" id="cwClose">✕</button>
          <div class="cw-title">Report a Problem</div>
          <div class="cw-sub">This goes straight to the Physio Motion support team.</div>
          <label class="cw-label">Subject</label>
          <input class="cw-input" id="cwSubject" placeholder="Short summary of the issue">
          <label class="cw-label">Details</label>
          <textarea class="cw-textarea" id="cwMessage" placeholder="Tell us what happened…"></textarea>
          <div class="cw-msg" id="cwMsg"></div>
          <button class="cw-btn" id="cwSubmit">Send Report</button>
        </div>
      </div>`;
    document.body.appendChild(wrap);

    document.getElementById('cwFab').onclick = () => document.getElementById('cwModalBg').classList.add('show');
    document.getElementById('cwClose').onclick = () => document.getElementById('cwModalBg').classList.remove('show');
    document.getElementById('cwModalBg').onclick = (e) => { if (e.target.id === 'cwModalBg') e.currentTarget.classList.remove('show'); };
    document.getElementById('cwSubmit').onclick = submitComplaint;
  }

  async function submitComplaint() {
    const subject = document.getElementById('cwSubject').value.trim();
    const message = document.getElementById('cwMessage').value.trim();
    const msgEl = document.getElementById('cwMsg');
    const btn = document.getElementById('cwSubmit');
    msgEl.textContent = ''; msgEl.className = 'cw-msg';
    if (!subject || !message) { msgEl.textContent = 'Please fill in both fields.'; msgEl.className = 'cw-msg err'; return; }
    if (!window.FIREBASE_ENABLED || !window._fbDb) { msgEl.textContent = 'Cannot connect right now — please try again later.'; msgEl.className = 'cw-msg err'; return; }
    const user = (typeof getCurrentUser === 'function') ? getCurrentUser() : null;
    btn.disabled = true; btn.textContent = 'Sending…';
    try {
      await window._fbDb.collection('complaints').add({
        fromName: user ? user.name : 'Unknown', fromEmail: user ? user.email : null,
        fromRole: user ? user.role : 'other', subject, message, status: 'open', adminNotes: '',
        createdAt: new Date().toISOString(), source: 'in_app_widget'
      });
      msgEl.textContent = '✅ Sent — thank you, our team will follow up.'; msgEl.className = 'cw-msg ok';
      document.getElementById('cwSubject').value = '';
      document.getElementById('cwMessage').value = '';
      setTimeout(() => document.getElementById('cwModalBg').classList.remove('show'), 1400);
    } catch (e) {
      msgEl.textContent = 'Something went wrong. Please try again.'; msgEl.className = 'cw-msg err';
    } finally {
      btn.disabled = false; btn.textContent = 'Send Report';
    }
  }

  function init() {
    injectStyles();
    injectMarkup();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
