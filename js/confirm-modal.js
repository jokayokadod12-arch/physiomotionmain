/**
 * confirm-modal.js — standalone custom confirm dialog.
 * Same implementation as the one bundled in utils.js, extracted here for
 * pages that don't load the full utils.js (to avoid clashing with their
 * own local getSessions/saveSessions helpers).
 * Usage: const ok = await customConfirm('Delete this?'); if (ok) { ... }
 */
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
