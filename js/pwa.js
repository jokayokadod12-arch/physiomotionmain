/**
 * pwa.js — PWA Install Handler (v2)
 * Handles Android native prompt + iOS step-by-step modal
 */

let _pwaPrompt = null;
const _isIOS     = /iphone|ipad|ipod/i.test(navigator.userAgent);
const _isAndroid = /android/i.test(navigator.userAgent);
const _isMobile  = _isIOS || _isAndroid;
const _isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;

// ── Catch Android Chrome native install prompt ────────────
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  _pwaPrompt = e;
  if (!_isStandalone) _showInstallButtons();
});

window.addEventListener('DOMContentLoaded', () => {
  if (_isStandalone) return _hideInstallButtons();
  if (_isMobile)     _showInstallButtons();
  _buildInstallModal();
});

function _showInstallButtons() {
  document.querySelectorAll('[id$="InstallBtn"], .btn-install-pwa, .nav-install').forEach(b => {
    b.style.display = '';
    b.classList.add('visible');
  });
}
function _hideInstallButtons() {
  document.querySelectorAll('[id$="InstallBtn"], .btn-install-pwa, .nav-install').forEach(b => {
    b.style.display = 'none';
  });
}

// ── Main install function called by buttons ───────────────
async function installPWA() {
  // Android Chrome — trigger native prompt directly
  if (_pwaPrompt) {
    _pwaPrompt.prompt();
    const { outcome } = await _pwaPrompt.userChoice;
    if (outcome === 'accepted') {
      _pwaPrompt = null;
      _hideInstallButtons();
    }
    return;
  }
  // iOS or Android without prompt — show beautiful modal
  _openInstallModal();
}

// ── Build the install modal once ─────────────────────────
function _buildInstallModal() {
  if (document.getElementById('pwaInstallModal')) return;

  const isIOS = _isIOS;
  const platform = isIOS ? 'ios' : 'android';

  const modal = document.createElement('div');
  modal.id = 'pwaInstallModal';
  modal.style.cssText = `
    display:none; position:fixed; inset:0; z-index:9999;
    align-items:flex-end; justify-content:center;
    background:rgba(0,0,0,.55); backdrop-filter:blur(8px);
  `;

  modal.innerHTML = `
    <div id="pwaSheet" style="
      background:#FAF7F2;
      border-radius:28px 28px 0 0;
      width:100%; max-width:520px;
      padding:28px 24px 40px;
      box-shadow:0 -24px 80px rgba(0,0,0,.25);
      transform:translateY(100%);
      transition:transform .38s cubic-bezier(.34,1,.64,1);
      position:relative;
    ">
      <!-- Handle bar -->
      <div style="width:40px;height:4px;border-radius:4px;background:rgba(90,122,98,.25);margin:0 auto 24px;"></div>

      <!-- App icon + title -->
      <div style="display:flex;align-items:center;gap:16px;margin-bottom:24px;">
        <img src="icons/icon-192.png" style="width:64px;height:64px;border-radius:18px;box-shadow:0 8px 24px rgba(45,74,53,.25);" onerror="this.style.display='none'">
        <div>
          <div style="font-family:'Playfair Display',serif;font-size:19px;font-weight:700;color:#2D4A35;line-height:1.2;">Physio Motion</div>
          <div style="font-size:13px;color:rgba(90,122,98,.7);margin-top:3px;">Install as a mobile app — free</div>
          <div style="display:flex;align-items:center;gap:5px;margin-top:5px;">
            <span style="font-size:12px;color:#B8943F;font-weight:600;">★★★★★</span>
            <span style="font-size:11px;color:rgba(44,44,44,.45);">Egypt's #1 Physio Platform</span>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div style="height:1px;background:rgba(90,122,98,.12);margin-bottom:22px;"></div>

      <!-- Steps -->
      <div style="font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:rgba(90,122,98,.6);margin-bottom:14px;">How to install</div>

      <div id="pwaSteps" style="display:flex;flex-direction:column;gap:13px;margin-bottom:28px;">
        ${isIOS ? `
          <div style="display:flex;align-items:flex-start;gap:14px;">
            <div style="width:34px;height:34px;border-radius:10px;background:rgba(90,122,98,.1);border:1px solid rgba(90,122,98,.2);display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;">⬆</div>
            <div><div style="font-size:14px;font-weight:600;color:#2C2C2C;margin-bottom:2px;">Tap the Share button</div><div style="font-size:12px;color:rgba(44,44,44,.5);line-height:1.5;">At the bottom of Safari — the box with an arrow pointing up</div></div>
          </div>
          <div style="display:flex;align-items:flex-start;gap:14px;">
            <div style="width:34px;height:34px;border-radius:10px;background:rgba(90,122,98,.1);border:1px solid rgba(90,122,98,.2);display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;">➕</div>
            <div><div style="font-size:14px;font-weight:600;color:#2C2C2C;margin-bottom:2px;">Tap "Add to Home Screen"</div><div style="font-size:12px;color:rgba(44,44,44,.5);line-height:1.5;">Scroll down in the share menu to find this option</div></div>
          </div>
          <div style="display:flex;align-items:flex-start;gap:14px;">
            <div style="width:34px;height:34px;border-radius:10px;background:rgba(90,122,98,.1);border:1px solid rgba(90,122,98,.2);display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;">✅</div>
            <div><div style="font-size:14px;font-weight:600;color:#2C2C2C;margin-bottom:2px;">Tap "Add"</div><div style="font-size:12px;color:rgba(44,44,44,.5);line-height:1.5;">The app will appear on your home screen instantly</div></div>
          </div>
        ` : `
          <div style="display:flex;align-items:flex-start;gap:14px;">
            <div style="width:34px;height:34px;border-radius:10px;background:rgba(90,122,98,.1);border:1px solid rgba(90,122,98,.2);display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;">⋮</div>
            <div><div style="font-size:14px;font-weight:600;color:#2C2C2C;margin-bottom:2px;">Tap the menu button</div><div style="font-size:12px;color:rgba(44,44,44,.5);line-height:1.5;">Three dots in the top-right corner of Chrome</div></div>
          </div>
          <div style="display:flex;align-items:flex-start;gap:14px;">
            <div style="width:34px;height:34px;border-radius:10px;background:rgba(90,122,98,.1);border:1px solid rgba(90,122,98,.2);display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;">📲</div>
            <div><div style="font-size:14px;font-weight:600;color:#2C2C2C;margin-bottom:2px;">Tap "Add to Home screen"</div><div style="font-size:12px;color:rgba(44,44,44,.5);line-height:1.5;">Or "Install app" if the option appears at the top</div></div>
          </div>
          <div style="display:flex;align-items:flex-start;gap:14px;">
            <div style="width:34px;height:34px;border-radius:10px;background:rgba(90,122,98,.1);border:1px solid rgba(90,122,98,.2);display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;">✅</div>
            <div><div style="font-size:14px;font-weight:600;color:#2C2C2C;margin-bottom:2px;">Tap "Add" or "Install"</div><div style="font-size:12px;color:rgba(44,44,44,.5);line-height:1.5;">The app icon appears on your home screen</div></div>
          </div>
        `}
      </div>

      <!-- Benefit pills -->
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:28px;">
        <span style="padding:5px 12px;border-radius:100px;background:rgba(90,122,98,.1);color:#5A7A62;font-size:11px;font-weight:600;border:1px solid rgba(90,122,98,.18);">⚡ Instant launch</span>
        <span style="padding:5px 12px;border-radius:100px;background:rgba(90,122,98,.1);color:#5A7A62;font-size:11px;font-weight:600;border:1px solid rgba(90,122,98,.18);">📶 Works offline</span>
        <span style="padding:5px 12px;border-radius:100px;background:rgba(90,122,98,.1);color:#5A7A62;font-size:11px;font-weight:600;border:1px solid rgba(90,122,98,.18);">🔔 Push notifications</span>
        <span style="padding:5px 12px;border-radius:100px;background:rgba(90,122,98,.1);color:#5A7A62;font-size:11px;font-weight:600;border:1px solid rgba(90,122,98,.18);">🆓 Free · No App Store</span>
      </div>

      <!-- CTA button -->
      <button onclick="_closeInstallModal()" style="
        width:100%; padding:16px; border-radius:16px;
        background:linear-gradient(135deg,#1A3020,#5A7A62);
        color:#fff; font-family:'DM Sans',sans-serif;
        font-size:15px; font-weight:700; border:none; cursor:pointer;
        box-shadow:0 8px 28px rgba(45,74,53,.35);
        letter-spacing:.3px;
      ">Got it — I'll install it now ✓</button>

      <button onclick="_closeInstallModal()" style="
        width:100%; padding:12px; margin-top:10px; border-radius:12px;
        background:transparent; color:rgba(44,44,44,.4);
        font-size:13px; border:none; cursor:pointer;
      ">Maybe later</button>
    </div>
  `;

  modal.addEventListener('click', (e) => {
    if (e.target === modal) _closeInstallModal();
  });

  document.body.appendChild(modal);
}

function _openInstallModal() {
  const modal = document.getElementById('pwaInstallModal');
  if (!modal) return;
  modal.style.display = 'flex';
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.getElementById('pwaSheet').style.transform = 'translateY(0)';
    });
  });
}

function _closeInstallModal() {
  const sheet = document.getElementById('pwaSheet');
  const modal = document.getElementById('pwaInstallModal');
  if (!sheet) return;
  sheet.style.transform = 'translateY(100%)';
  setTimeout(() => { if (modal) modal.style.display = 'none'; }, 400);
}

// ── Register Service Worker ───────────────────────────────
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js').catch(() => {});
  });
}
