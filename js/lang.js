/**
 * lang.js — Arabic/English toggle for all patient pages
 * Include this in every patient page BEFORE other scripts
 */

// ═══════════════════════════════════════════════════════════
//  TRANSLATIONS
// ═══════════════════════════════════════════════════════════
var TRANSLATIONS = {

  // ── Global UI ──
  'My Exercises':              'تمريناتي',
  'My Progress':               'تقدمي',
  'My Nutrition Plans':        'خطط التغذية',
  'Pain Assistant':            'مساعد الألم',
  'Dashboard':                 'لوحة التحكم',
  'Logout':                    'تسجيل الخروج',
  'Profile':                   'الملف الشخصي',
  '← Dashboard':              '→ لوحة التحكم',
  '← Back':                   '→ رجوع',

  // ── my-exercises ──
  'Complete your prescribed physiotherapy programme': 'أكمل برنامج العلاج الطبيعي الموصوف لك',
  'Total Assigned':   'إجمالي المعين',
  'Completed':        'مكتمل',
  'Completion Rate':  'نسبة الإتمام',
  'No exercises assigned yet.': 'لا توجد تمارين معينة بعد.',
  'Your physiotherapist will assign exercises here.': 'سيقوم معالجك الفيزيائي بتعيين التمارين هنا.',
  'Mark Complete':    'تم الإنجاز',
  'Watch Video':      'شاهد الفيديو',
  'Completed ✓':      'تم ✓',
  "Doctor's Note:":   'ملاحظة الطبيب:',
  'exercises':        'تمارين',
  'completed':        'مكتملة',
  'Duration':         'المدة',
  'Level':            'المستوى',
  'Assigned':         'تاريخ التعيين',

  // ── progress ──
  'Total Exercises':  'إجمالي التمارين',
  'Pending':          'معلق',
  'Overall Progress': 'التقدم الكلي',
  'Progress Overview':'نظرة عامة على التقدم',
  'Progress by Assignment': 'التقدم حسب المهمة',
  'Loading…':         'جاري التحميل…',

  // ── pain assistant ──
  'Describe your pain': 'صف ألمك',
  'Where is your pain?':'أين يوجد الألم؟',
  'Get AI Guidance':    'احصل على إرشادات',
  'Analyzing…':         'جاري التحليل…',

  // ── nutrition ──
  'Nutrition Plans sent to you by your physiotherapist': 'خطط التغذية المرسلة من معالجك',
  'No nutrition plans yet.': 'لا توجد خطط تغذية بعد.',
  'Daily Target':      'الهدف اليومي',
  'BMR':               'معدل الأيض الأساسي',
  'BMI':               'مؤشر كتلة الجسم',
  'Protein/day':       'البروتين/يوم',
  'Carbs/day':         'الكربوهيدرات/يوم',
  'Fat/day':           'الدهون/يوم',
  'View':              'عرض',
  'Print PDF':         'طباعة PDF',
  'Delete':            'حذف',
  '7-DAY MEAL PLAN':   'خطة الوجبات لـ 7 أيام',
  'LIFESTYLE TIPS':    'نصائح نمط الحياة',
  'Breakfast':         'الإفطار',
  'Lunch':             'الغداء',
  'Dinner':            'العشاء',
  'Snack':             'وجبة خفيفة',

  // levels
  'Beginner':          'مبتدئ',
  'Intermediate':      'متوسط',
  'Advanced':          'متقدم',
  'All Levels':        'جميع المستويات',

  // exercise types
  'Pain Relief':       'تخفيف الألم',
  'Strengthening':     'تقوية العضلات',
  'Flexibility':       'المرونة',
  'Mobility':          'الحركة',
  'Balance':           'التوازن',
  'Coordination':      'التنسيق',
  'Endurance':         'التحمل',
  'Breathing':         'التنفس',

  // body parts
  'Neck':              'الرقبة',
  'Shoulder':          'الكتف',
  'Elbow':             'الكوع',
  'Wrist & Hand':      'الرسغ واليد',
  'Back':              'الظهر',
  'Hip':               'الورك',
  'Knee':              'الركبة',
  'Ankle & Foot':      'الكاحل والقدم',
};

// ═══════════════════════════════════════════════════════════
//  CORE LANGUAGE ENGINE
// ═══════════════════════════════════════════════════════════
var _currentLang = localStorage.getItem('patientLang') || 'en';

function setPatientLang(lang) {
  _currentLang = lang;
  localStorage.setItem('patientLang', lang);

  var ar = lang === 'ar';
  document.documentElement.lang = lang;
  document.documentElement.dir  = ar ? 'rtl' : 'ltr';

  // Toggle buttons
  var btnEn = document.getElementById('btnLangEn');
  var btnAr = document.getElementById('btnLangAr');
  if (btnEn) btnEn.classList.toggle('active', !ar);
  if (btnAr) btnAr.classList.toggle('active',  ar);

  // Translate all elements with data-en / data-ar
  document.querySelectorAll('[data-en]').forEach(function(el) {
    var txt = el.getAttribute('data-' + lang);
    if (txt) el.textContent = txt;
  });

  // Auto-translate known text nodes by dictionary
  translatePage(ar);

  // RTL font
  if (ar) {
    document.body.style.fontFamily = "'Cairo', 'Rajdhani', sans-serif";
  } else {
    document.body.style.fontFamily = "'Rajdhani', sans-serif";
  }
}

function translatePage(ar) {
  if (ar) {
    translateElements();
  } else {
    // Reload page content to restore English (re-render)
    if (window._reRenderPage) window._reRenderPage();
    else restoreEnglish();
  }
}

function translateElements() {
  // Translate text nodes that match our dictionary
  var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
  var nodes = [];
  var node;
  while (node = walker.nextNode()) {
    var parent = node.parentNode;
    if (parent.tagName === 'SCRIPT' || parent.tagName === 'STYLE') continue;
    nodes.push(node);
  }
  nodes.forEach(function(n) {
    var trimmed = n.textContent.trim();
    if (TRANSLATIONS[trimmed]) {
      n.textContent = n.textContent.replace(trimmed, TRANSLATIONS[trimmed]);
    }
  });
}

function restoreEnglish() {
  // Restore by translating back using reverse map
  var reverseMap = {};
  Object.keys(TRANSLATIONS).forEach(function(k) { reverseMap[TRANSLATIONS[k]] = k; });
  var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
  var nodes = [];
  var node;
  while (node = walker.nextNode()) {
    var parent = node.parentNode;
    if (parent.tagName === 'SCRIPT' || parent.tagName === 'STYLE') continue;
    nodes.push(node);
  }
  nodes.forEach(function(n) {
    var trimmed = n.textContent.trim();
    if (reverseMap[trimmed]) {
      n.textContent = n.textContent.replace(trimmed, reverseMap[trimmed]);
    }
  });
}

// Apply saved language when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  if (_currentLang === 'ar') {
    setPatientLang('ar');
  }
});
