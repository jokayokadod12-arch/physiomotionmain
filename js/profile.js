/**
 * profile.js — Full profile with specialties, clinic, address, student support
 */

const PHYSIO_SPECIALTIES = [
  { value: 'cardiovascular',    label: 'Cardiovascular & Pulmonary',   code: 'CCS' },
  { value: 'electrophysiology', label: 'Clinical Electrophysiology',   code: 'ECS' },
  { value: 'geriatrics',        label: 'Geriatrics',                   code: 'GCS' },
  { value: 'neurology',         label: 'Neurology',                    code: 'NCS' },
  { value: 'oncology',          label: 'Oncology',                     code: ''    },
  { value: 'orthopaedics',      label: 'Orthopaedics (Bone & Joints)', code: 'OCS' },
  { value: 'pediatrics',        label: 'Pediatrics',                   code: 'PCS' },
  { value: 'sports',            label: 'Sports Physiotherapy',         code: 'SCS' },
  { value: 'womens_health',     label: "Women's Health",               code: 'WCS' },
  { value: 'wound_management',  label: 'Wound Management',             code: ''    },
];

let currentUser = null;

document.addEventListener('DOMContentLoaded', () => {
  currentUser = requireAuth();
  if (!currentUser) return;

  const role = currentUser.role;
  const roleLabels = { doctor: 'Doctor', patient: 'Patient', student: 'College Student' };
  document.getElementById('displayRole').textContent  = roleLabels[role] || (role.charAt(0).toUpperCase() + role.slice(1));
  document.getElementById('displayEmail').textContent = currentUser.email;

  const initials = (currentUser.name || '?').split(' ').map(n => n[0]).join('').toUpperCase().slice(0,2);
  document.getElementById('avatar').textContent = initials;

  document.getElementById('nameInput').value  = currentUser.name  || '';
  document.getElementById('phoneInput').value = currentUser.profile?.phone || '';
  document.getElementById('bioInput').value   = currentUser.profile?.bio   || '';

  if (role === 'doctor') {
    document.getElementById('doctorFields').style.display = 'block';
    buildSpecialtySelect(currentUser.profile?.specialty || '');
    document.getElementById('clinicInput').value  = currentUser.profile?.clinic  || '';
    document.getElementById('addressInput').value = currentUser.profile?.address || '';
    document.getElementById('yearsInput').value   = currentUser.profile?.years   || '';
  }
  if (role === 'student') {
    document.getElementById('studentFields').style.display = 'block';
    document.getElementById('universityInput').value = currentUser.profile?.university || '';
    document.getElementById('yearStudyInput').value  = currentUser.profile?.yearStudy  || '';
  }
});

function buildSpecialtySelect(currentVal) {
  const sel = document.getElementById('specialtySelect');
  sel.innerHTML = '<option value="">— Select Specialty —</option>';
  PHYSIO_SPECIALTIES.forEach(s => {
    const opt = document.createElement('option');
    opt.value = s.value;
    opt.textContent = s.label + (s.code ? ' (' + s.code + ')' : '');
    if (s.value === currentVal) opt.selected = true;
    sel.appendChild(opt);
  });
}

async function saveProfile() {
  const name  = document.getElementById('nameInput').value.trim();
  const phone = document.getElementById('phoneInput').value.trim();
  const bio   = document.getElementById('bioInput').value.trim();
  if (!name) { alert('Please enter your name.'); return; }

  currentUser.name = name;
  currentUser.profile = currentUser.profile || {};
  currentUser.profile.phone = phone;
  currentUser.profile.bio   = bio;

  if (currentUser.role === 'doctor') {
    const specVal = document.getElementById('specialtySelect').value;
    const specObj = PHYSIO_SPECIALTIES.find(s => s.value === specVal);
    currentUser.profile.specialty      = specVal;
    currentUser.profile.specialtyLabel = specObj ? specObj.label : '';
    currentUser.profile.specialtyCode  = specObj ? specObj.code  : '';
    currentUser.profile.clinic  = document.getElementById('clinicInput').value.trim();
    currentUser.profile.address = document.getElementById('addressInput').value.trim();
    currentUser.profile.years   = document.getElementById('yearsInput').value.trim();
    currentUser.isPublicDoctor  = true;
  }
  if (currentUser.role === 'student') {
    currentUser.profile.university = document.getElementById('universityInput').value.trim();
    currentUser.profile.yearStudy  = document.getElementById('yearStudyInput').value.trim();
  }

  await asyncSaveUser(currentUser);
  updateCurrentUser(currentUser);
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0,2);
  document.getElementById('avatar').textContent = initials;
  alert('Profile updated!');
}
