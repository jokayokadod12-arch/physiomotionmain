/**
 * exercises-videos.js
 * 5 exercises per Type × Body Part combination
 * Add YouTube ID to each exercise when available
 */

// ═══════════════════════════════════════════════════════════
//  HOW TO ADD VIDEO LINKS:
//  Find the exercise by id, set youtube: 'VIDEO_ID'
//  YouTube ID = the code after ?v= or youtu.be/
//  Example: https://youtu.be/dQw4w9WgXcQ → youtube:''
// ═══════════════════════════════════════════════════════════

var EXERCISES = [

// ══════════════════════════════════════════════════════
// 😌 PAIN RELIEF
// ══════════════════════════════════════════════════════

// Pain Relief — Neck
{id:1001,type:'pain-relief',part:'neck',title:'Cervical Retraction (Chin Tuck)',titleAr:'سحب الذقن للرقبة',desc:'Reduce neck pain and forward head posture with gentle chin tucks',duration:'8 min',level:'Beginner',youtube:'T64es5lGZr8'},
{id:1002,type:'pain-relief',part:'neck',title:'Upper Trap Stretch',titleAr:'تمدد عضلة شبه المنحرف العلوية',desc:'Lateral neck stretch targeting upper trapezius tightness',duration:'5 min',level:'Beginner',youtube:'-r0eoFS7_5Q'},
{id:1003,type:'pain-relief',part:'neck',title:'Levator Scapulae Stretch',titleAr:'تمدد رافعة الكتف',desc:'Diagonal neck stretch for levator scapulae pain relief',duration:'5 min',level:'Beginner',youtube:'GSoXPJRnR6E'},
{id:1004,type:'pain-relief',part:'neck',title:'Cervical Self-Traction',titleAr:'جر الرقبة الذاتي',desc:'Gentle decompression technique using hands for neck pain',duration:'8 min',level:'Beginner',youtube:'ZnD995gh8-s'},
{id:1005,type:'pain-relief',part:'neck',title:'SNAG for Cervical Pain',titleAr:'تقنية سناج للرقبة',desc:'Sustained Natural Apophyseal Glide for neck pain relief',duration:'10 min',level:'Intermediate',youtube:'WYgjwEWH95U'},
{id:1006,type:'pain-relief',part:'neck',title:'Neck Traction with Towel',titleAr:'تمدد الرقبة بالمنشفة',desc:'Gentle towel-assisted neck traction to relieve cervical tension',duration:'25 min',level:'Beginner',youtube:'QF_ubbr_RUE'},

// Pain Relief — Shoulder
{id:1011,type:'pain-relief',part:'shoulder',title:'Pendulum Exercises',titleAr:'تمارين البندول للكتف',desc:'Codman pendulum swings to decompress shoulder joint',duration:'8 min',level:'Beginner',youtube:'QF_ubbr_RUE'},
{id:1012,type:'pain-relief',part:'shoulder',title:'Posterior Shoulder Stretch (Sleeper)',titleAr:'تمدد الكتف الخلفي',desc:'Reduce posterior capsule tightness and impingement pain',duration:'8 min',level:'Beginner',youtube:'FODQxJh5PeI'},
{id:1013,type:'pain-relief',part:'shoulder',title:'Cross-Body Shoulder Stretch',titleAr:'تمدد الكتف العرضي',desc:'Horizontal adduction stretch for rotator cuff pain relief',duration:'5 min',level:'Beginner',youtube:'veZWtNGOxhE'},
{id:1014,type:'pain-relief',part:'shoulder',title:'Frozen Shoulder Pendulums',titleAr:'بندول الكتف المتجمد',desc:'Progressive pendulum program for adhesive capsulitis',duration:'12 min',level:'Beginner',youtube:'d_w7K2ntVCA'},
{id:1015,type:'pain-relief',part:'shoulder',title:'Shoulder Distraction Stretch',titleAr:'تمدد تشتيت الكتف',desc:'Joint distraction technique to reduce shoulder impingement',duration:'8 min',level:'Intermediate',youtube:'WaR_T0aUoew'},
{id:1016,type:'pain-relief',part:'shoulder',title:'Posterior Capsule Stretch',titleAr:'تمدد المحفظة الخلفية للكتف',desc:'Cross-body focused stretch to ease posterior capsule tightness',duration:'15 min',level:'Beginner',youtube:'CzT3oE7DgWM'},

// Pain Relief — Elbow
{id:1021,type:'pain-relief',part:'elbow',title:'Tennis Elbow Eccentric Stretch',titleAr:'تمارين الكوع التنسي اللامركزي',desc:'Wrist extension eccentric loading for lateral epicondylitis',duration:'10 min',level:'Beginner',youtube:'7KzKaVlvxKQ'},
{id:1022,type:'pain-relief',part:'elbow',title:'Golfer\'s Elbow Stretch',titleAr:'تمارين الكوع الغولفي',desc:'Wrist flexor stretch for medial epicondylitis pain relief',duration:'8 min',level:'Beginner',youtube:'CzT3oE7DgWM'},
{id:1023,type:'pain-relief',part:'elbow',title:'Elbow Flexion Stretch',titleAr:'تمدد ثني الكوع',desc:'Passive elbow extension stretch for flexion contracture',duration:'8 min',level:'Beginner',youtube:'VV7zsl6LafM'},
{id:1024,type:'pain-relief',part:'elbow',title:'Biceps Tendon Pain Relief',titleAr:'تخفيف ألم وتر العضلة ذات الرأسين',desc:'Eccentric biceps loading for distal biceps tendinopathy',duration:'10 min',level:'Intermediate',youtube:'yPagCi2WZJE'},
{id:1025,type:'pain-relief',part:'elbow',title:'Elbow Joint Mobilization',titleAr:'تحريك مفصل الكوع',desc:'Self-mobilization for elbow stiffness and pain',duration:'10 min',level:'Beginner',youtube:'ZroW4ten1Ww'},
{id:1026,type:'pain-relief',part:'elbow',title:'Radial Nerve Glide',titleAr:'انزلاق العصب الكعبري',desc:'Nerve gliding technique to relieve radial nerve irritation at the elbow',duration:'20 min',level:'All Levels',youtube:'f2lHpWNaQaQ'},

// Pain Relief — Wrist & Hand
{id:1031,type:'pain-relief',part:'wrist-hand',title:'Carpal Tunnel Relief Stretches',titleAr:'تمارين تخفيف متلازمة النفق الرسغي',desc:'Median nerve glides and wrist stretches for CTS',duration:'8 min',level:'Beginner',youtube:'tH0AuoLAJBg'},
{id:1032,type:'pain-relief',part:'wrist-hand',title:'Tendon Gliding Exercises',titleAr:'تمارين انزلاق الأوتار',desc:'Finger tendon glide sequence for carpal tunnel and stiffness',duration:'8 min',level:'Beginner',youtube:'m_YP7ofbQM0'},
{id:1033,type:'pain-relief',part:'wrist-hand',title:'De Quervain\'s Thumb Stretch',titleAr:'تمدد إبهام ديكيرفان',desc:'Finkelstein stretch for De Quervain\'s tenosynovitis',duration:'5 min',level:'Beginner',youtube:'f2lHpWNaQaQ'},
{id:1034,type:'pain-relief',part:'wrist-hand',title:'Wrist Flexor Stretch',titleAr:'تمدد باسطات الرسغ',desc:'Prayer position and wrist extension stretch',duration:'5 min',level:'Beginner',youtube:'0PeVmTMdWhk'},
{id:1035,type:'pain-relief',part:'wrist-hand',title:'Trigger Finger Release',titleAr:'تحرير الإصبع الزناد',desc:'Passive finger extension exercises for trigger finger',duration:'8 min',level:'Beginner',youtube:'n0w4RzSqVaY'},
{id:1036,type:'pain-relief',part:'wrist-hand',title:'Wrist Extensor Stretch',titleAr:'تمدد باسطات الرسغ',desc:'Wrist extensor stretch to relieve tension from repetitive strain',duration:'18 min',level:'Advanced',youtube:'-g0nuyTHMrI'},

// Pain Relief — Back
{id:1041,type:'pain-relief',part:'back',title:'McKenzie Press-Up (Extension)',titleAr:'تمارين ماكنزي للظهر',desc:'Lumbar extension press-up for disc-related back pain',duration:'8 min',level:'Beginner',youtube:'YERVv2S-vKc'},
{id:1042,type:'pain-relief',part:'back',title:'Piriformis Stretch',titleAr:'تمدد العضلة الكمثرية',desc:'Deep hip rotator stretch for sciatic pain relief',duration:'8 min',level:'Beginner',youtube:'aSQfNtYRzEc'},
{id:1043,type:'pain-relief',part:'back',title:'Knee-to-Chest Stretch',titleAr:'تمدد الركبة للصدر',desc:'Single and double knee-to-chest for lumbar decompression',duration:'8 min',level:'Beginner',youtube:'4UoITjubrgE'},
{id:1044,type:'pain-relief',part:'back',title:'Lumbar Rotation Stretch',titleAr:'تمدد تدوير القطني',desc:'Supine lumbar rotation for facet joint and muscle pain',duration:'8 min',level:'Beginner',youtube:'-g0nuyTHMrI'},
{id:1045,type:'pain-relief',part:'back',title:'Cat-Cow Spinal Mobility',titleAr:'تمرين القطة والبقرة',desc:'Segmental spinal mobility to reduce stiffness and pain',duration:'8 min',level:'Beginner',youtube:'Sws_GwrlYO0'},
{id:1046,type:'pain-relief',part:'back',title:'Lower Back Decompression',titleAr:'تخفيف ضغط أسفل الظهر',desc:'Decompression positioning to relieve lower back pain and pressure',duration:'25 min',level:'Advanced',youtube:'RyQxcegmp3M'},

// Pain Relief — Hip
{id:1051,type:'pain-relief',part:'hip',title:'Hip Flexor Stretch (Kneeling)',titleAr:'تمدد مثني الورك ركوعًا',desc:'Kneeling hip flexor stretch for anterior hip and back pain',duration:'8 min',level:'Beginner',youtube:'Q4Ko275cluo'},
{id:1052,type:'pain-relief',part:'hip',title:'IT Band Foam Rolling',titleAr:'تدليك الحزمة الظنبوبية الوترية',desc:'Foam roller technique for iliotibial band tightness and pain',duration:'10 min',level:'Beginner',youtube:'eI9qLfSlCuI'},
{id:1053,type:'pain-relief',part:'hip',title:'90/90 Hip Stretch',titleAr:'تمدد الورك 90/90',desc:'Seated 90/90 position for hip internal and external rotation',duration:'10 min',level:'All Levels',youtube:'jk2g0aBRwmU'},
{id:1054,type:'pain-relief',part:'hip',title:'Greater Trochanteric Pain Relief',titleAr:'تخفيف ألم المدور الأكبر',desc:'Gluteal tendinopathy management — avoid hip adduction',duration:'10 min',level:'Beginner',youtube:'SoNcamRSzaw'},
{id:1055,type:'pain-relief',part:'hip',title:'Hip Joint Distraction',titleAr:'تشتيت مفصل الورك',desc:'Traction mobilization for hip osteoarthritis pain',duration:'10 min',level:'Intermediate',youtube:'RyQxcegmp3M'},
{id:1056,type:'pain-relief',part:'hip',title:'Glute Medius Release',titleAr:'تحرير العضلة الألوية المتوسطة',desc:'Self-release technique for glute medius tightness and lateral hip pain',duration:'10 min',level:'All Levels',youtube:'A6xAC0RGGaQ'},

// Pain Relief — Knee
{id:1061,type:'pain-relief',part:'knee',title:'Quad Sets & Short Arc Quads',titleAr:'تقلصات الرباعية والقوس القصير',desc:'Isometric quads and limited ROM exercise for knee pain',duration:'10 min',level:'Beginner',youtube:'XNe_Kgw6860'},
{id:1062,type:'pain-relief',part:'knee',title:'Patellofemoral Pain — Taping',titleAr:'تلصيق الرضفة لتخفيف الألم',desc:'McConnell taping technique and VMO activation',duration:'10 min',level:'Beginner',youtube:'tuA9yGQZOII'},
{id:1063,type:'pain-relief',part:'knee',title:'Knee OA Pain Relief Protocol',titleAr:'تخفيف ألم التهاب مفصل الركبة',desc:'Low-impact exercises for knee osteoarthritis pain management',duration:'12 min',level:'Beginner',youtube:'0CodCXxgMk4'},
{id:1064,type:'pain-relief',part:'knee',title:'Hamstring Stretch for Knee Pain',titleAr:'تمدد عضلات الجانب الخلفي',desc:'Supine hamstring stretch to reduce posterior knee tension',duration:'8 min',level:'Beginner',youtube:'hfEb7dJYZ0E'},
{id:1065,type:'pain-relief',part:'knee',title:'Iliotibial Band Stretch',titleAr:'تمدد الحزمة الظنبوبية الوترية',desc:'Standing and side-lying IT band stretch for lateral knee pain',duration:'8 min',level:'Beginner',youtube:'xtjV4zma2XY'},
{id:1066,type:'pain-relief',part:'knee',title:'Patellar Tendon Pain Relief',titleAr:'تخفيف ألم وتر الرضفة',desc:'Gentle loading and stretching to ease patellar tendon pain',duration:'10 min',level:'Beginner',youtube:'K7_xP7A-OCI'},

// Pain Relief — Ankle & Foot
{id:1071,type:'pain-relief',part:'ankle-foot',title:'Plantar Fascia Stretch',titleAr:'تمدد اللفافة الأخمصية',desc:'Morning plantar fascia stretch for plantar fasciitis',duration:'5 min',level:'Beginner',youtube:'A6xAC0RGGaQ'},
{id:1072,type:'pain-relief',part:'ankle-foot',title:'Achilles Tendon Stretch',titleAr:'تمدد وتر أكيلس',desc:'Standing gastroc and soleus stretch for Achilles pain',duration:'8 min',level:'Beginner',youtube:'byCTWYxlPfU'},
{id:1073,type:'pain-relief',part:'ankle-foot',title:'Ankle Joint Mobilization',titleAr:'تحريك مفصل الكاحل',desc:'Talocrural mobilization for ankle stiffness and pain',duration:'10 min',level:'Intermediate',youtube:'k4PyL1GjeVs'},
{id:1074,type:'pain-relief',part:'ankle-foot',title:'Foot Intrinsic Muscle Exercises',titleAr:'تمارين عضلات القدم الجوهرية',desc:'Towel scrunches and marble pickups for foot pain',duration:'8 min',level:'Beginner',youtube:'0PeVmTMdWhk'},
{id:1075,type:'pain-relief',part:'ankle-foot',title:'Peroneal Stretch & Mobilization',titleAr:'تمدد العضلة الشظوية',desc:'Lateral ankle and peroneal tendon pain relief exercises',duration:'8 min',level:'Beginner',youtube:'_uCUCmVpU88'},
{id:1076,type:'pain-relief',part:'ankle-foot',title:'Ankle Inversion Stretch',titleAr:'تمدد انقلاب الكاحل',desc:'Stretch targeting ankle inversion pain and lateral tightness',duration:'8 min',level:'Intermediate',youtube:'5ekCSD-E7Q0'},

// ══════════════════════════════════════════════════════
// 💪 STRENGTHENING
// ══════════════════════════════════════════════════════

// Strengthening — Neck
{id:2001,type:'strengthening',part:'neck',title:'Deep Cervical Flexor Training',titleAr:'تقوية عضلات الرقبة العميقة',desc:'Craniocervical flexion test and DNF activation program',duration:'15 min',level:'Intermediate',youtube:'WqjmUloV4Fs'},
{id:2002,type:'strengthening',part:'neck',title:'Cervical Extensor Strengthening',titleAr:'تقوية عضلات مد الرقبة',desc:'Prone neck extension for cervical extensor endurance',duration:'12 min',level:'Intermediate',youtube:'uW9XIVVxlzU'},
{id:2003,type:'strengthening',part:'neck',title:'Neck Isometrics — All Directions',titleAr:'تمارين الرقبة الإيزومترية',desc:'Isometric resistance in flexion, extension, and rotation',duration:'10 min',level:'Beginner',youtube:'K7_xP7A-OCI'},
{id:2004,type:'strengthening',part:'neck',title:'Scapular Strengthening for Neck',titleAr:'تقوية الكتف للرقبة',desc:'Middle and lower trap strengthening to reduce neck load',duration:'15 min',level:'Intermediate',youtube:'2Afm2uIDNRw'},
{id:2005,type:'strengthening',part:'neck',title:'Cervical Lateral Flexion Resistance',titleAr:'مقاومة الانثناء الجانبي للرقبة',desc:'Lateral neck strengthening with resistance band',duration:'10 min',level:'Intermediate',youtube:'p0PcmXJai2A'},
{id:2006,type:'strengthening',part:'neck',title:'Chin Tuck Against Resistance',titleAr:'تمرين الذقن المقاوم',desc:'Chin tuck against light resistance to build deep neck flexor strength',duration:'5 min',level:'Advanced',youtube:'cIUiXdiTcLU'},

// Strengthening — Shoulder
{id:2011,type:'strengthening',part:'shoulder',title:'Rotator Cuff External Rotation',titleAr:'تقوية العضلات المثبتة للكتف - الدوران الخارجي',desc:'Side-lying and band external rotation for rotator cuff',duration:'15 min',level:'Intermediate',youtube:'jJo1CbgXb_A'},
{id:2012,type:'strengthening',part:'shoulder',title:'Scapular Stabilization — YTW',titleAr:'تمارين YTW لتثبيت الكتف',desc:'Y, T, W exercises for lower trap and serratus anterior',duration:'15 min',level:'Intermediate',youtube:'WoP0-kLXsRo'},
{id:2013,type:'strengthening',part:'shoulder',title:'Shoulder Press Progression',titleAr:'تمرين ضغط الكتف التدريجي',desc:'Overhead press from 90° to full range for shoulder strength',duration:'20 min',level:'Advanced',youtube:'o8lN7lWWlRQ'},
{id:2014,type:'strengthening',part:'shoulder',title:'Serratus Anterior Activation',titleAr:'تفعيل العضلة المنشارية الأمامية',desc:'Wall slides and push-up plus for serratus strengthening',duration:'12 min',level:'Beginner',youtube:'5ekCSD-E7Q0'},
{id:2015,type:'strengthening',part:'shoulder',title:'Internal Rotation Strengthening',titleAr:'تقوية الدوران الداخلي للكتف',desc:'Resistance band internal rotation for subscapularis',duration:'12 min',level:'Intermediate',youtube:'s4wUKmr2xtA'},
{id:2016,type:'strengthening',part:'shoulder',title:'Prone Y Raises',titleAr:'رفعات Y بوضع الانبطاح',desc:'Prone Y raises to strengthen lower trapezius and scapular stabilizers',duration:'10 min',level:'Beginner',youtube:'3NXv0Nany-Q'},

// Strengthening — Elbow
{id:2021,type:'strengthening',part:'elbow',title:'Elbow Flexion — Bicep Curls',titleAr:'تقوية عضلة ذات الرأسين',desc:'Progressive biceps curls for elbow flexion strength',duration:'15 min',level:'Beginner',youtube:'Nr-sPLLOIwE'},
{id:2022,type:'strengthening',part:'elbow',title:'Tricep Extension Strengthening',titleAr:'تقوية عضلة ثلاثية الرؤوس',desc:'Overhead and kickback triceps exercises',duration:'15 min',level:'Beginner',youtube:'aSEvWA-dGJ8'},
{id:2023,type:'strengthening',part:'elbow',title:'Wrist Extensor Eccentric Loading',titleAr:'التحميل اللامركزي لباسطات الرسغ',desc:'Eccentric wrist extension for lateral epicondylitis rehab',duration:'12 min',level:'Intermediate',youtube:'5o38j28wx70'},
{id:2024,type:'strengthening',part:'elbow',title:'Pronation / Supination Loading',titleAr:'تقوية تدوير الساعد',desc:'Forearm rotation with hammer or band for elbow rehab',duration:'12 min',level:'Intermediate',youtube:'63N_0rzD3KI'},
{id:2025,type:'strengthening',part:'elbow',title:'Elbow Post-Surgery Strengthening',titleAr:'تقوية الكوع بعد الجراحة',desc:'Progressive elbow strengthening after ligament or fracture surgery',duration:'20 min',level:'Advanced',youtube:'cIUiXdiTcLU'},
{id:2026,type:'strengthening',part:'elbow',title:'Hammer Curls for Elbow',titleAr:'تمرين مطرقة الكوع',desc:'Hammer curl variation to strengthen elbow flexors and forearm',duration:'25 min',level:'Advanced',youtube:'BcF7_fPqfxw'},

// Strengthening — Wrist & Hand
{id:2031,type:'strengthening',part:'wrist-hand',title:'Grip Strength Training',titleAr:'تدريب قوة القبضة',desc:'Hand gripper and putty exercises for grip strength',duration:'10 min',level:'Beginner',youtube:'kgqIdCwVivE'},
{id:2032,type:'strengthening',part:'wrist-hand',title:'Wrist Flexor & Extensor Loading',titleAr:'تقوية باسطات وثانيات الرسغ',desc:'Wrist curls and reverse curls with light dumbbell',duration:'12 min',level:'Beginner',youtube:'RG_rI_4zjcw'},
{id:2033,type:'strengthening',part:'wrist-hand',title:'Pinch Strength Exercises',titleAr:'تمارين قوة القرصة',desc:'Lateral, tip, and three-jaw chuck pinch exercises',duration:'10 min',level:'Beginner',youtube:'aVtjSqQTuGs'},
{id:2034,type:'strengthening',part:'wrist-hand',title:'Finger Flexor Tendon Rehab',titleAr:'إعادة تأهيل أوتار ثنّيات الأصابع',desc:'Zone 2 flexor tendon rehab protocol with exercises',duration:'15 min',level:'Intermediate',youtube:'n0w4RzSqVaY'},
{id:2035,type:'strengthening',part:'wrist-hand',title:'Radial / Ulnar Deviation Strength',titleAr:'تقوية انحراف الرسغ',desc:'Hammer exercises for radial and ulnar deviation strength',duration:'12 min',level:'Intermediate',youtube:'aVtjSqQTuGs'},
{id:2036,type:'strengthening',part:'wrist-hand',title:'Wrist Roller Exercise',titleAr:'تمرين لف الرسغ',desc:'Wrist roller exercise to build forearm and grip strength',duration:'20 min',level:'All Levels',youtube:'haKOXlWjR9M'},

// Strengthening — Back
{id:2041,type:'strengthening',part:'back',title:'Bird-Dog Exercise',titleAr:'تمرين طائر الكلب للظهر',desc:'Contralateral arm-leg raise for lumbar stabilization',duration:'12 min',level:'Beginner',youtube:'ww-6lRXvI9Y'},
{id:2042,type:'strengthening',part:'back',title:'Dead Bug Exercise',titleAr:'تمرين الخطأة الميتة',desc:'Core stability with contralateral limb extension',duration:'12 min',level:'Intermediate',youtube:'8NBNM8haZx0'},
{id:2043,type:'strengthening',part:'back',title:'Glute Bridge — Single Leg',titleAr:'جسر الأرداف أحادي الساق',desc:'Progressive bridging for lumbar and gluteal strength',duration:'15 min',level:'Intermediate',youtube:'3NXv0Nany-Q'},
{id:2044,type:'strengthening',part:'back',title:'Superman Exercise',titleAr:'تمرين سوبرمان',desc:'Prone back extension for thoracolumbar extensor strength',duration:'10 min',level:'Beginner',youtube:'STvo35VczKI'},
{id:2045,type:'strengthening',part:'back',title:'Romanian Deadlift for Back Rehab',titleAr:'الرفعة الرومانية لإعادة تأهيل الظهر',desc:'Hip hinge pattern for lumbar and hamstring strengthening',duration:'20 min',level:'Advanced',youtube:'uhghy9pFIPY'},
{id:2046,type:'strengthening',part:'back',title:'Prone Back Extension',titleAr:'مد الظهر بوضع الانبطاح',desc:'Prone extension exercise to strengthen the lower back extensors',duration:'5 min',level:'All Levels',youtube:'uRQiLfcJ71E'},

// Strengthening — Hip
{id:2051,type:'strengthening',part:'hip',title:'Clamshell Exercise',titleAr:'تمرين المحار للورك',desc:'Side-lying hip abduction for glute med activation',duration:'12 min',level:'Beginner',youtube:'vsQugiJgZZE'},
{id:2052,type:'strengthening',part:'hip',title:'Hip Abduction — Standing Band',titleAr:'تمرين ربط الورك واقفًا',desc:'Standing hip abduction with resistance band',duration:'12 min',level:'Intermediate',youtube:'CNosLXpX8no'},
{id:2053,type:'strengthening',part:'hip',title:'Glute Bridge Progression',titleAr:'تدرج جسر الأرداف',desc:'Two-leg to single-leg bridge progression',duration:'15 min',level:'Intermediate',youtube:'AVAXhy6pl7o'},
{id:2054,type:'strengthening',part:'hip',title:'Hip Extension — Prone',titleAr:'مد الورك بوضع الاستلقاء على البطن',desc:'Prone hip extension for gluteus maximus strength',duration:'12 min',level:'Beginner',youtube:'BcF7_fPqfxw'},
{id:2055,type:'strengthening',part:'hip',title:'Side-Lying Hip Strengthening',titleAr:'تقوية الورك على الجانب',desc:'Complete hip strengthening in side-lying position',duration:'18 min',level:'Intermediate',youtube:'jF6iE0shJKk'},
{id:2056,type:'strengthening',part:'hip',title:'Fire Hydrant Exercise',titleAr:'تمرين هيدرانت النار',desc:'Fire hydrant exercise to strengthen hip abductors and glutes',duration:'25 min',level:'Beginner',youtube:'4QqcbCjnnlw'},

// Strengthening — Knee
{id:2061,type:'strengthening',part:'knee',title:'Straight Leg Raise (SLR)',titleAr:'رفع الرجل المستقيمة',desc:'Quadriceps strengthening with SLR in all planes',duration:'12 min',level:'Beginner',youtube:'U4L_6JEv9Jg'},
{id:2062,type:'strengthening',part:'knee',title:'Mini Squat to Full Squat Progression',titleAr:'تدرج القرفصاء من المصغرة للكاملة',desc:'Progressive squat from 30° to full range for knee rehab',duration:'20 min',level:'Intermediate',youtube:'C0kmJabtk28'},
{id:2063,type:'strengthening',part:'knee',title:'Terminal Knee Extension (TKE)',titleAr:'تمديد الركبة النهائي',desc:'Band terminal knee extension for VMO and quad strength',duration:'12 min',level:'Beginner',youtube:'x3xhZTTfZFY'},
{id:2064,type:'strengthening',part:'knee',title:'Hamstring Strengthening — Nordic',titleAr:'تقوية عضلات الجانب الخلفي نورديك',desc:'Nordic hamstring curls for posterior chain strength',duration:'15 min',level:'Advanced',youtube:'w2arL8LK_6E'},
{id:2065,type:'strengthening',part:'knee',title:'Step-Up Progression',titleAr:'تدرج الصعود على الدرجة',desc:'Forward and lateral step-up for functional knee strength',duration:'15 min',level:'Intermediate',youtube:'haKOXlWjR9M'},
{id:2066,type:'strengthening',part:'knee',title:'Spanish Squat for Knee',titleAr:'القرفصاء الإسباني للركبة',desc:'Spanish squat variation to strengthen the quadriceps and support the knee',duration:'15 min',level:'Intermediate',youtube:'oRYBJ2ESSZk'},

// Strengthening — Ankle & Foot
{id:2071,type:'strengthening',part:'ankle-foot',title:'Calf Raise Progression',titleAr:'تدرج رفع الكعب',desc:'Bilateral to single leg calf raise for Achilles rehab',duration:'15 min',level:'Beginner',youtube:'HmgXnST4Mdw'},
{id:2072,type:'strengthening',part:'ankle-foot',title:'Ankle Dorsiflexion Band Exercises',titleAr:'تقوية ثني الكاحل بالشريط',desc:'Tibialis anterior and dorsiflexor strengthening',duration:'12 min',level:'Beginner',youtube:'szca5qbIFdY'},
{id:2073,type:'strengthening',part:'ankle-foot',title:'Peroneal Strengthening',titleAr:'تقوية العضلة الشظوية',desc:'Eversion exercises for chronic ankle instability',duration:'12 min',level:'Intermediate',youtube:'KUTILNtn47E'},
{id:2074,type:'strengthening',part:'ankle-foot',title:'Intrinsic Foot Muscle Training',titleAr:'تقوية العضلات الجوهرية للقدم',desc:'Short foot exercise and toe intrinsic strengthening',duration:'10 min',level:'Beginner',youtube:'Uo77CQqkS-A'},
{id:2075,type:'strengthening',part:'ankle-foot',title:'Eccentric Heel Drop — Achilles',titleAr:'خفض الكعب اللامركزي لوتر أكيلس',desc:'Heavy slow resistance eccentric calf for Achilles tendinopathy',duration:'15 min',level:'Intermediate',youtube:'k8ipHzKeAkQ'},
{id:2076,type:'strengthening',part:'ankle-foot',title:'Toe Yoga Exercise',titleAr:'يوغا أصابع القدم',desc:'Toe yoga exercise to strengthen the small intrinsic foot muscles',duration:'18 min',level:'Beginner',youtube:'q-_M3Cfqmj4'},

// ══════════════════════════════════════════════════════
// 🤸 FLEXIBILITY
// ══════════════════════════════════════════════════════

{id:3001,type:'flexibility',part:'neck',title:'Cervical Rotation Stretching',titleAr:'تمدد دوران الرقبة',desc:'Active and passive rotation stretch for cervical flexibility',duration:'8 min',level:'Beginner',youtube:'uRQiLfcJ71E'},
{id:3002,type:'flexibility',part:'neck',title:'Full Cervical ROM Program',titleAr:'برنامج مدى الحركة الكامل للرقبة',desc:'All planes cervical flexibility: flex, ext, rot, lat flex',duration:'12 min',level:'Beginner',youtube:'rKgQNbGeKIQ'},
{id:3003,type:'flexibility',part:'neck',title:'Suboccipital Release',titleAr:'إطلاق العضلات تحت القذالية',desc:'Self-release and stretching for suboccipital tightness',duration:'8 min',level:'Beginner',youtube:'b-yngm7aYXs'},
{id:3004,type:'flexibility',part:'neck',title:'Scalene Stretching',titleAr:'تمدد عضلات السلم',desc:'Anterior and posterior scalene stretch for neck and breathing',duration:'8 min',level:'Beginner',youtube:'CzZ6P9Y6XPQ'},
{id:3005,type:'flexibility',part:'neck',title:'Neck Myofascial Release',titleAr:'الإطلاق اللفافي العضلي للرقبة',desc:'Self-massage and foam roller for cervical muscle flexibility',duration:'10 min',level:'All Levels',youtube:'Zf05OOHAV9M'},
{id:3006,type:'flexibility',part:'neck',title:'Neck Flexion Stretch',titleAr:'تمدد ثني الرقبة',desc:'Forward neck flexion stretch to improve cervical flexibility',duration:'12 min',level:'All Levels',youtube:'uEu1IbGIOKM'},

{id:3011,type:'flexibility',part:'shoulder',title:'Shoulder Cross-Body Stretch',titleAr:'تمدد الكتف العرضي',desc:'Horizontal adduction for posterior shoulder flexibility',duration:'8 min',level:'Beginner',youtube:'veZWtNGOxhE'},
{id:3012,type:'flexibility',part:'shoulder',title:'Doorway Chest Stretch',titleAr:'تمدد الصدر على الباب',desc:'Pectoralis and anterior capsule stretch using doorway',duration:'8 min',level:'Beginner',youtube:'CEQMx4zFwYs'},
{id:3013,type:'flexibility',part:'shoulder',title:'Shoulder Flexion ROM Progression',titleAr:'تدرج مدى حركة الكتف للأمام',desc:'Progressive shoulder flexion to overhead flexibility',duration:'12 min',level:'All Levels',youtube:'4QqcbCjnnlw'},
{id:3014,type:'flexibility',part:'shoulder',title:'Thoracic Rotation for Shoulder',titleAr:'تدوير الصدر لتحسين حركة الكتف',desc:'T-spine rotation to improve shoulder overhead mobility',duration:'10 min',level:'All Levels',youtube:'81kPLsMt6wY'},
{id:3015,type:'flexibility',part:'shoulder',title:'Wall Slides for Flexibility',titleAr:'انزلاق الجدار لمرونة الكتف',desc:'Overhead wall slide for shoulder blade and joint flexibility',duration:'10 min',level:'Beginner',youtube:'CYKD7-P6Zj8'},
{id:3016,type:'flexibility',part:'shoulder',title:'Sleeper Stretch Progression',titleAr:'تدرج تمدد النائم',desc:'Progressive sleeper stretch to improve shoulder internal rotation',duration:'5 min',level:'Advanced',youtube:'dpfkCmhtg6I'},

{id:3041,type:'flexibility',part:'back',title:'Child\'s Pose — Lumbar Stretch',titleAr:'وضعية الطفل لتمدد الظهر',desc:'Extended child\'s pose for thoracolumbar flexibility',duration:'8 min',level:'Beginner',youtube:'qYvYsFrTI0U'},
{id:3042,type:'flexibility',part:'back',title:'Thoracic Spine Foam Rolling',titleAr:'تدليك العمود الفقري الصدري',desc:'Thoracic extension over foam roller for stiffness',duration:'10 min',level:'All Levels',youtube:'SxQkVD0UQNg'},
{id:3043,type:'flexibility',part:'back',title:'Lumbar Lateral Flexion Stretch',titleAr:'تمدد الانثناء الجانبي القطني',desc:'Side bend stretch for lumbar and thoracolumbar flexibility',duration:'8 min',level:'Beginner',youtube:'xHG52-Kej2I'},
{id:3044,type:'flexibility',part:'back',title:'Spinal Rotation Stretch',titleAr:'تمدد تدوير العمود الفقري',desc:'Supine and seated rotation for thoracolumbar flexibility',duration:'8 min',level:'Beginner',youtube:'q-_M3Cfqmj4'},
{id:3045,type:'flexibility',part:'back',title:'Hip Flexor Lunge Stretch',titleAr:'تمدد مثني الورك بالخطوة',desc:'Kneeling lunge stretch for lumbar and hip flexibility',duration:'10 min',level:'Beginner',youtube:'jk2g0aBRwmU'},
{id:3046,type:'flexibility',part:'back',title:'Quadratus Lumborum Stretch',titleAr:'تمدد العضلة المربعة القطنية',desc:'Stretch targeting the quadratus lumborum for lower back flexibility',duration:'5 min',level:'Advanced',youtube:'ocVvCm6NdfA'},

{id:3051,type:'flexibility',part:'hip',title:'Pigeon Pose Hip Stretch',titleAr:'تمدد الورك وضعية الحمامة',desc:'Deep hip external rotation and flexor stretch',duration:'10 min',level:'All Levels',youtube:'eQm3XLANKuw'},
{id:3052,type:'flexibility',part:'hip',title:'Thomas Test Stretch — Hip Flexors',titleAr:'تمدد مثنيات الورك وضعية توماس',desc:'Supine hip flexor stretch addressing psoas tightness',duration:'10 min',level:'Beginner',youtube:'Q0XiUq9TJ2w'},
{id:3053,type:'flexibility',part:'hip',title:'Hip Adductor Stretch',titleAr:'تمدد عضلات تقريب الفخذ',desc:'Inner thigh and groin stretch in various positions',duration:'8 min',level:'Beginner',youtube:'BzAVOa8sEPc'},
{id:3054,type:'flexibility',part:'hip',title:'Figure-4 Glute Stretch',titleAr:'تمدد الأرداف وضع رقم 4',desc:'Piriformis and glute stretch in figure-4 position',duration:'8 min',level:'Beginner',youtube:'2VE_NLcNMvQ'},
{id:3055,type:'flexibility',part:'hip',title:'Hip Capsule Stretching',titleAr:'تمدد محفظة مفصل الورك',desc:'Internal and external rotation hip capsule flexibility',duration:'12 min',level:'Intermediate',youtube:'AhhcJS9JVi8'},
{id:3056,type:'flexibility',part:'hip',title:'Butterfly Stretch',titleAr:'تمدد الفراشة',desc:'Butterfly stretch to open the hips and improve groin flexibility',duration:'15 min',level:'Intermediate',youtube:'HRC4vFCqhcE'},

{id:3061,type:'flexibility',part:'knee',title:'Quadriceps Stretch — Prone',titleAr:'تمدد عضلة الفخذ الرباعية',desc:'Prone quads stretch with progressive overpressure',duration:'8 min',level:'Beginner',youtube:'uEu1IbGIOKM'},
{id:3062,type:'flexibility',part:'knee',title:'Hamstring Stretch — Supine',titleAr:'تمدد عضلات الجانب الخلفي',desc:'Active and passive hamstring stretching in supine',duration:'8 min',level:'Beginner',youtube:'Il1L75v6gq0'},
{id:3063,type:'flexibility',part:'knee',title:'Knee Flexion ROM Exercises',titleAr:'تمارين مدى ثني الركبة',desc:'Active and passive knee flexion for post-surgical rehab',duration:'12 min',level:'Beginner',youtube:'qHjwXLMM24o'},
{id:3064,type:'flexibility',part:'knee',title:'Calf Stretch for Knee Mobility',titleAr:'تمدد الساق لتحسين حركة الركبة',desc:'Gastrocnemius and soleus stretch for knee extension',duration:'8 min',level:'Beginner',youtube:'YfjeXeiREic'},
{id:3065,type:'flexibility',part:'knee',title:'Knee Extension ROM Progression',titleAr:'تدرج مدى تمديد الركبة',desc:'Progressive knee extension for contracture management',duration:'12 min',level:'Beginner',youtube:'I4xXpBmDmMw'},
{id:3066,type:'flexibility',part:'knee',title:'Standing Quad Stretch',titleAr:'تمدد الرباعية واقفاً',desc:'Standing quadriceps stretch to support knee flexibility',duration:'5 min',level:'Intermediate',youtube:'ZJhX3N2CKYw'},

{id:3071,type:'flexibility',part:'ankle-foot',title:'Calf Flexibility — Standing',titleAr:'مرونة الساق واقفًا',desc:'Gastroc and soleus stretch for ankle dorsiflexion',duration:'8 min',level:'Beginner',youtube:'mafo7o7OnFo'},
{id:3072,type:'flexibility',part:'ankle-foot',title:'Ankle Alphabet Exercises',titleAr:'تمارين أبجدية الكاحل',desc:'Full ankle ROM using the alphabet for flexibility',duration:'8 min',level:'Beginner',youtube:'dpfkCmhtg6I'},
{id:3073,type:'flexibility',part:'ankle-foot',title:'Plantar Fascia Rolling',titleAr:'تدليك اللفافة الأخمصية',desc:'Foot rolling over ball for plantar fascia flexibility',duration:'8 min',level:'Beginner',youtube:'_smM-36XAP4'},
{id:3074,type:'flexibility',part:'ankle-foot',title:'Ankle Dorsiflexion Stretch',titleAr:'تمدد ثني ظهر القدم',desc:'Wall lunge stretch for ankle dorsiflexion improvement',duration:'8 min',level:'Beginner',youtube:'ZroW4ten1Ww'},
{id:3075,type:'flexibility',part:'ankle-foot',title:'Toe Stretching and Flexibility',titleAr:'تمدد أصابع القدم',desc:'Toe flexion, extension, and spread for foot flexibility',duration:'8 min',level:'Beginner',youtube:'n0w4RzSqVaY'},
{id:3076,type:'flexibility',part:'ankle-foot',title:'Soleus Stretch',titleAr:'تمدد عضلة النعلية',desc:'Soleus stretch to improve ankle flexibility and calf mobility',duration:'25 min',level:'Intermediate',youtube:'ethylPglwug'},

// ══════════════════════════════════════════════════════
// 🚶 MOBILITY
// ══════════════════════════════════════════════════════

{id:4001,type:'mobility',part:'neck',title:'Cervical SNAG Technique',titleAr:'تقنية سناج للرقبة',desc:'Self-applied SNAG for cervical segmental mobility',duration:'10 min',level:'Intermediate',youtube:'WYgjwEWH95U'},
{id:4002,type:'mobility',part:'neck',title:'Cervical Rotation with Overpressure',titleAr:'دوران الرقبة مع ضغط إضافي',desc:'End-range mobilization for cervical rotation restriction',duration:'8 min',level:'Intermediate',youtube:'BsZmSx34hvQ'},
{id:4003,type:'mobility',part:'neck',title:'Upper Cervical Mobility — C1/C2',titleAr:'تحريك الرقبة العلوية C1/C2',desc:'Specific exercises for atlantoaxial mobility',duration:'10 min',level:'Intermediate',youtube:'_uWblWalXIE'},
{id:4004,type:'mobility',part:'neck',title:'Neck CARs (Controlled Articular Rotations)',titleAr:'التدوير المفصلي المتحكم به للرقبة',desc:'Full cervical CARs for neural mobility and joint health',duration:'10 min',level:'All Levels',youtube:'BsZmSx34hvQ'},
{id:4005,type:'mobility',part:'neck',title:'Thoracic Mobility for Cervical Spine',titleAr:'تحريك الصدر لتحسين حركة الرقبة',desc:'T-spine rotation to reduce compensatory cervical tension',duration:'10 min',level:'All Levels',youtube:'l65F8a2z10I'},
{id:4006,type:'mobility',part:'neck',title:'Neck Flexion Mobility',titleAr:'تحريك ثني الرقبة',desc:'Active mobility drill through cervical flexion',duration:'25 min',level:'Beginner',youtube:'j3iFJZ6_mKQ'},

{id:4011,type:'mobility',part:'shoulder',title:'Shoulder CARs',titleAr:'التدوير المفصلي المتحكم به للكتف',desc:'Controlled articular rotations for shoulder joint health',duration:'10 min',level:'All Levels',youtube:'NHjza05OLNE'},
{id:4012,type:'mobility',part:'shoulder',title:'Shoulder PAILS / RAILS',titleAr:'تمارين PAILS/RAILS للكتف',desc:'Progressive and regressive angular isometric loading',duration:'15 min',level:'Advanced',youtube:'B5A_mtbKqfk'},
{id:4013,type:'mobility',part:'shoulder',title:'Open and Closed Chain Shoulder Mobility',titleAr:'تحريك الكتف مفتوح ومغلق السلسلة',desc:'Wall push-ups to overhead reach mobility progression',duration:'12 min',level:'All Levels',youtube:'SqzpsLJjQho'},
{id:4014,type:'mobility',part:'shoulder',title:'Scapular Upward Rotation Drills',titleAr:'تدريبات تدوير الكتف لأعلى',desc:'Improve scapulohumeral rhythm and overhead mobility',duration:'12 min',level:'Intermediate',youtube:'CLWFwun1BfQ'},
{id:4015,type:'mobility',part:'shoulder',title:'PNF Stretching — Shoulder',titleAr:'تمدد PNF للكتف',desc:'Proprioceptive neuromuscular facilitation for shoulder ROM',duration:'15 min',level:'Advanced',youtube:'EgftVko-v7s'},
{id:4016,type:'mobility',part:'shoulder',title:'Shoulder Flexion Mobility',titleAr:'تحريك رفع الكتف',desc:'Mobility drill through shoulder flexion range',duration:'20 min',level:'Beginner',youtube:'8gs9XU1Q0sU'},

{id:4041,type:'mobility',part:'back',title:'Thoracic Extension Mobility',titleAr:'تحريك مد العمود الفقري الصدري',desc:'Extension over foam roller and chair for T-spine mobility',duration:'12 min',level:'All Levels',youtube:'OL98wofsIKU'},
{id:4042,type:'mobility',part:'back',title:'Lumbar Segmental Mobility Drills',titleAr:'تمارين حركة أجزاء العمود القطني',desc:'Level-specific lumbar mobilization exercises',duration:'15 min',level:'Intermediate',youtube:'PI3nc-nCbfw'},
{id:4043,type:'mobility',part:'back',title:'Spine CARs',titleAr:'التدوير المفصلي المتحكم به للعمود الفقري',desc:'Full spinal controlled articular rotations',duration:'12 min',level:'All Levels',youtube:'ocVvCm6NdfA'},
{id:4044,type:'mobility',part:'back',title:'Lateral Trunk Mobility',titleAr:'تحريك الجذع الجانبي',desc:'Side-bending exercises for thoracolumbar lateral mobility',duration:'10 min',level:'All Levels',youtube:'0CrX59ulj9U'},
{id:4045,type:'mobility',part:'back',title:'Back Quadruped Mobility',titleAr:'تمارين حركة الظهر على أربعة',desc:'Quadruped rocking and rotation for spine mobility',duration:'12 min',level:'Beginner',youtube:'ccFXfeRSoLo'},
{id:4046,type:'mobility',part:'back',title:'Thoracic Rotation Mobility',titleAr:'تحريك دوران الصدر',desc:'Thoracic rotation drill to improve upper back mobility',duration:'15 min',level:'Advanced',youtube:'yuG_cPsW3K0'},

{id:4051,type:'mobility',part:'hip',title:'Hip CARs',titleAr:'التدوير المفصلي المتحكم به للورك',desc:'Standing hip controlled articular rotations',duration:'10 min',level:'All Levels',youtube:'aESY3wR0hBQ'},
{id:4052,type:'mobility',part:'hip',title:'Hip 90/90 Transitions',titleAr:'انتقالات 90/90 للورك',desc:'Active 90/90 transitions for hip internal/external rotation',duration:'12 min',level:'Intermediate',youtube:'5kM-o61Z14I'},
{id:4053,type:'mobility',part:'hip',title:'Hip Flexion Mobility Drills',titleAr:'تمارين حركة ثني الورك',desc:'Active hip flexion beyond 90° for functional mobility',duration:'10 min',level:'All Levels',youtube:'9hmX3xwrUh0'},
{id:4054,type:'mobility',part:'hip',title:'Hip Extension Mobility',titleAr:'تحريك مد الورك',desc:'Active hip extension mobility for athletes and post-surgery',duration:'10 min',level:'All Levels',youtube:'HRC4vFCqhcE'},
{id:4055,type:'mobility',part:'hip',title:'Frog Stretch — Hip Adductor Mobility',titleAr:'تمدد الضفدعة لحركة الورك',desc:'Quadruped frog stretch for wide hip abductor mobility',duration:'10 min',level:'Intermediate',youtube:'hRMrq6G81p8'},
{id:4056,type:'mobility',part:'hip',title:'Hip Internal Rotation Mobility',titleAr:'تحريك الدوران الداخلي للورك',desc:'Mobility drill for hip internal rotation range',duration:'12 min',level:'All Levels',youtube:'67XP-AekUoA'},

{id:4061,type:'mobility',part:'knee',title:'Knee Flexion Mobilization',titleAr:'تحريك ثني الركبة',desc:'Active-assisted flexion mobilization for knee stiffness',duration:'10 min',level:'Beginner',youtube:'Da3uU510O_o'},
{id:4062,type:'mobility',part:'knee',title:'Knee Extension Mobilization',titleAr:'تحريك مد الركبة',desc:'Progressive extension mobilization for post-surgical rehab',duration:'12 min',level:'Beginner',youtube:'S_BQiyrFuH8'},
{id:4063,type:'mobility',part:'knee',title:'Tibiofemoral Glide Mobilization',titleAr:'تحريك انزلاق مفصل الركبة',desc:'Posterior tibial glide for improved knee flexion ROM',duration:'12 min',level:'Intermediate',youtube:'TYEpkG3tKzE'},
{id:4064,type:'mobility',part:'knee',title:'Patellar Mobilization',titleAr:'تحريك الرضفة',desc:'Superior, inferior and medial patellar mobilization',duration:'10 min',level:'Intermediate',youtube:'pScgRDILxeo'},
{id:4065,type:'mobility',part:'knee',title:'Knee Functional Mobility Drills',titleAr:'تمارين الحركة الوظيفية للركبة',desc:'Lunge variations and step patterns for functional knee mobility',duration:'15 min',level:'Intermediate',youtube:'ZJhX3N2CKYw'},
{id:4066,type:'mobility',part:'knee',title:'Knee Flexion AAROM',titleAr:'مدى حركة ثني الركبة المساعد',desc:'Active-assisted range of motion drill for knee flexion',duration:'10 min',level:'All Levels',youtube:'RvhJR9NJhks'},

{id:4071,type:'mobility',part:'ankle-foot',title:'Ankle Talocrural Mobilization',titleAr:'تحريك مفصل الكاحل العلوي',desc:'Anterior talar glide for ankle dorsiflexion mobility',duration:'10 min',level:'Intermediate',youtube:'duRz5fQf51Q'},
{id:4072,type:'mobility',part:'ankle-foot',title:'Subtalar Joint Mobilization',titleAr:'تحريك المفصل تحت الكاحل',desc:'Inversion and eversion mobility for subtalar joint',duration:'10 min',level:'Intermediate',youtube:'JzOZl2YbzeA'},
{id:4073,type:'mobility',part:'ankle-foot',title:'Ankle Circumduction Exercises',titleAr:'تمارين تدوير الكاحل',desc:'Full ankle circumduction for comprehensive mobility',duration:'8 min',level:'Beginner',youtube:'RPMQCR22qgg'},
{id:4074,type:'mobility',part:'ankle-foot',title:'Midfoot Mobility Exercises',titleAr:'تمارين حركة منتصف القدم',desc:'Lisfranc joint and midfoot mobility exercises',duration:'8 min',level:'Intermediate',youtube:'rvkyQc60-HA'},
{id:4075,type:'mobility',part:'ankle-foot',title:'Ankle Functional Mobility',titleAr:'الحركة الوظيفية للكاحل',desc:'Lunge matrix and ankle mobility for sport return',duration:'12 min',level:'All Levels',youtube:'AO8-tyuiPaE'},
{id:4076,type:'mobility',part:'ankle-foot',title:'Ankle Dorsiflexion Mobility',titleAr:'تحريك ثني الكاحل الظهري',desc:'Mobility drill to improve ankle dorsiflexion range',duration:'18 min',level:'Advanced',youtube:'QFfYomEiV7U'},

// ══════════════════════════════════════════════════════
// ⚖️ BALANCE
// ══════════════════════════════════════════════════════

{id:5001,type:'balance',part:'ankle-foot',title:'Single Leg Stance Progression',titleAr:'تدرج الوقوف على ساق واحدة',desc:'Eyes open to closed, firm to foam surface balance',duration:'12 min',level:'Beginner',youtube:'ethylPglwug'},
{id:5002,type:'balance',part:'ankle-foot',title:'BOSU Ball Balance Training',titleAr:'تدريب التوازن على كرة بوسو',desc:'Progressive BOSU balance training for ankle stability',duration:'15 min',level:'Intermediate',youtube:'RTmXddWP0pM'},
{id:5003,type:'balance',part:'ankle-foot',title:'Tandem Stance Balance',titleAr:'التوازن في الوقوف التسلسلي',desc:'Heel-to-toe tandem stance for balance improvement',duration:'10 min',level:'Beginner',youtube:'J5F2GbSxTvQ'},
{id:5004,type:'balance',part:'ankle-foot',title:'Perturbation Balance Training',titleAr:'تدريب التوازن بالاضطراب',desc:'Reactive balance exercises with unexpected perturbations',duration:'15 min',level:'Advanced',youtube:'FrKLI63xRWo'},
{id:5005,type:'balance',part:'ankle-foot',title:'Dynamic Balance — Star Excursion',titleAr:'توازن ديناميكي - بروتوكول النجمة',desc:'Star Excursion Balance Test as training protocol',duration:'15 min',level:'Intermediate',youtube:'ZG0qn9Dz1PQ'},
{id:5076,type:'balance',part:'ankle-foot',title:'Single Leg Ankle Balance',titleAr:'توازن الكاحل بساق واحدة',desc:'Single-leg ankle balance drill to improve stability',duration:'18 min',level:'Intermediate',youtube:'MkscOWI8aNc'},

{id:5011,type:'balance',part:'knee',title:'Single Leg Squat Balance',titleAr:'قرفصاء التوازن أحادي الساق',desc:'Single leg squat for knee proprioception and stability',duration:'15 min',level:'Intermediate',youtube:'XNe_Kgw6860'},
{id:5012,type:'balance',part:'knee',title:'Lateral Step-Down Balance',titleAr:'توازن الخطوة الجانبية للأسفل',desc:'Lateral step-down for knee valgus control and balance',duration:'12 min',level:'Intermediate',youtube:'tvqSpEDRFfo'},
{id:5013,type:'balance',part:'knee',title:'Knee ACL Return-to-Sport Balance',titleAr:'توازن العودة للرياضة بعد إصابة الرباط الصليبي',desc:'ACL rehab balance: T-test, cutting, landing mechanics',duration:'20 min',level:'Advanced',youtube:'tvqSpEDRFfo'},
{id:5014,type:'balance',part:'knee',title:'Unstable Surface Knee Balance',titleAr:'توازن الركبة على سطح غير مستقر',desc:'Wobble board and airex pad for knee balance training',duration:'15 min',level:'Intermediate',youtube:'J5F2GbSxTvQ'},
{id:5015,type:'balance',part:'knee',title:'Reactive Neuromuscular Training',titleAr:'التدريب العصبي العضلي التفاعلي',desc:'Perturbation training for knee joint stabilization',duration:'18 min',level:'Advanced',youtube:'FrKLI63xRWo'},
{id:5066,type:'balance',part:'knee',title:'Single Leg Knee Balance',titleAr:'توازن الركبة بساق واحدة',desc:'Single-leg balance drill to challenge knee stability',duration:'8 min',level:'Intermediate',youtube:'Mg2ar-7_HfA'},

{id:5021,type:'balance',part:'hip',title:'Single Leg Hip Balance Drills',titleAr:'تمارين توازن الورك أحادي الساق',desc:'Hip abductor balance and proprioception training',duration:'12 min',level:'Intermediate',youtube:'J5F2GbSxTvQ'},
{id:5022,type:'balance',part:'hip',title:'Hip Balance on Unstable Surface',titleAr:'توازن الورك على سطح غير مستقر',desc:'Single leg balance on foam pad with hip challenges',duration:'15 min',level:'Intermediate',youtube:'j3iFJZ6_mKQ'},
{id:5023,type:'balance',part:'hip',title:'Hip CKC Balance Progression',titleAr:'تدرج توازن الورك في السلسلة المغلقة',desc:'Closed kinetic chain hip balance with progressive load',duration:'18 min',level:'Advanced',youtube:'FrKLI63xRWo'},
{id:5024,type:'balance',part:'hip',title:'Gait and Hip Balance Training',titleAr:'تدريب توازن الورك أثناء المشي',desc:'Walking balance drills for hip stabilizer activation',duration:'15 min',level:'All Levels',youtube:'ZG0qn9Dz1PQ'},
{id:5025,type:'balance',part:'hip',title:'Fall Prevention — Hip Focus',titleAr:'منع السقوط - تركيز على الورك',desc:'Hip-focused fall prevention balance protocol',duration:'15 min',level:'Beginner',youtube:'ZG0qn9Dz1PQ'},
{id:5056,type:'balance',part:'hip',title:'Single Leg Hip Hinge Balance',titleAr:'توازن مفصلة الورك بساق واحدة',desc:'Single-leg hip hinge balance drill for hip stability',duration:'15 min',level:'Advanced',youtube:'9byZd7h51DM'},

{id:5031,type:'balance',part:'back',title:'Core Balance on Unstable Surface',titleAr:'توازن مركز الجسم على سطح غير مستقر',desc:'Sitting and standing on swiss ball for core balance',duration:'15 min',level:'Intermediate',youtube:'_DmIJ-f_Er8'},
{id:5032,type:'balance',part:'back',title:'Vestibular Balance Exercises',titleAr:'تمارين التوازن الدهليزي',desc:'Head movement balance training for vestibular rehab',duration:'12 min',level:'All Levels',youtube:'FKtXCmA9dNc'},
{id:5033,type:'balance',part:'back',title:'Balance Board for Back Stability',titleAr:'لوح التوازن لاستقرار الظهر',desc:'Rocker and wobble board exercises for spinal stability',duration:'15 min',level:'Intermediate',youtube:'hU4baJ840FU'},
{id:5034,type:'balance',part:'back',title:'Tandem Walking and Gait Balance',titleAr:'توازن المشي التسلسلي',desc:'Forward and backward tandem walking for postural balance',duration:'12 min',level:'Beginner',youtube:'gJdl-MNMxlY'},
{id:5035,type:'balance',part:'back',title:'Dual Task Balance Training',titleAr:'تدريب التوازن بمهمتين',desc:'Cognitive and motor dual task balance for fall prevention',duration:'15 min',level:'Intermediate',youtube:'cJEB5YA9nOM'},
{id:5046,type:'balance',part:'back',title:'Seated Balance on Foam',titleAr:'توازن الجلوس على الإسفنج',desc:'Seated balance drill on foam to challenge trunk control',duration:'18 min',level:'Intermediate',youtube:'nbsxHPQJRR0'},

// ══════════════════════════════════════════════════════
// 🎯 COORDINATION
// ══════════════════════════════════════════════════════

{id:6001,type:'coordination',part:'wrist-hand',title:'Fine Motor Coordination',titleAr:'تنسيق الحركات الدقيقة',desc:'Peg board, putty, and dexterity tasks for hand coordination',duration:'12 min',level:'All Levels',youtube:'-4ew_GPNCpk'},
{id:6002,type:'coordination',part:'wrist-hand',title:'Hand-Eye Coordination Drills',titleAr:'تمارين تنسيق اليد والعين',desc:'Catching, throwing, and target exercises for coordination',duration:'12 min',level:'All Levels',youtube:'tOsG9YoBdZk'},
{id:6003,type:'coordination',part:'wrist-hand',title:'Bilateral Coordination Tasks',titleAr:'مهام التنسيق الثنائي لليدين',desc:'Bilateral hand tasks requiring coordination and sequencing',duration:'10 min',level:'All Levels',youtube:'yuG_cPsW3K0'},
{id:6004,type:'coordination',part:'wrist-hand',title:'Finger Opposition and Sequencing',titleAr:'تسلسل وتقابل الأصابع',desc:'Finger-thumb opposition in sequence for neural coordination',duration:'8 min',level:'Beginner',youtube:'zKYPawvcTS4'},
{id:6005,type:'coordination',part:'wrist-hand',title:'Wrist Coordination Drills',titleAr:'تمارين تنسيق الرسغ',desc:'Figure-8 and alternating wrist coordination movements',duration:'10 min',level:'All Levels',youtube:'0OR1PmvEejc'},
{id:6036,type:'coordination',part:'wrist-hand',title:'Wrist Figure-8 Coordination',titleAr:'تناسق الرسغ بحركة الرقم 8',desc:'Figure-8 wrist movement drill for fine motor coordination',duration:'18 min',level:'Beginner',youtube:'p0gXqLXEAp4'},

{id:6011,type:'coordination',part:'ankle-foot',title:'Agility Ladder Drills',titleAr:'تمارين السلم الرشاقة',desc:'Ladder footwork patterns for foot-eye coordination',duration:'15 min',level:'Intermediate',youtube:'XUc71p4Kto8'},
{id:6012,type:'coordination',part:'ankle-foot',title:'Reactive Stepping Drills',titleAr:'تمارين الخطوات التفاعلية',desc:'Random direction stepping for ankle coordination and agility',duration:'15 min',level:'Intermediate',youtube:'fPUutZbtSUI'},
{id:6013,type:'coordination',part:'ankle-foot',title:'Foot Tapping Coordination',titleAr:'تنسيق النقر بالقدم',desc:'Rhythmic foot tapping in various sequences for coordination',duration:'10 min',level:'Beginner',youtube:'z1OhMhCZa8I'},
{id:6014,type:'coordination',part:'ankle-foot',title:'Cone Drills for Coordination',titleAr:'تمارين المخاريط للتنسيق',desc:'Cone navigation patterns for lower limb coordination',duration:'15 min',level:'Intermediate',youtube:'67XP-AekUoA'},
{id:6015,type:'coordination',part:'ankle-foot',title:'Plyometric Coordination',titleAr:'تنسيق البليومترية',desc:'Jump and landing coordination for sport return',duration:'20 min',level:'Advanced',youtube:'iICTuTZCJyM'},
{id:6076,type:'coordination',part:'ankle-foot',title:'Walking Balance Coordination',titleAr:'تناسق توازن المشي',desc:'Walking balance and coordination drill',duration:'25 min',level:'Advanced',youtube:'bOXI-wxepmI'},

{id:6021,type:'coordination',part:'back',title:'Lumbopelvic Motor Control',titleAr:'التحكم الحركي في الحوض القطني',desc:'Pelvic tilt dissociation and feedforward activation',duration:'15 min',level:'Intermediate',youtube:'DndzRZaZpQ0'},
{id:6022,type:'coordination',part:'back',title:'Spinal Coordination Exercises',titleAr:'تمارين تنسيق العمود الفقري',desc:'Segmental spinal coordination and control exercises',duration:'12 min',level:'Intermediate',youtube:'cGjZ_XAvaXI'},
{id:6023,type:'coordination',part:'back',title:'Upper-Lower Body Coordination',titleAr:'تنسيق الجزء العلوي والسفلي من الجسم',desc:'Trunk rotation coordination with arm and leg movements',duration:'15 min',level:'Intermediate',youtube:'bZO8-rx21_c'},
{id:6024,type:'coordination',part:'back',title:'Gait Coordination Training',titleAr:'تدريب تنسيق المشي',desc:'Walking pattern coordination for lumbar spine control',duration:'12 min',level:'All Levels',youtube:'boVMpZ6j3M0'},
{id:6025,type:'coordination',part:'back',title:'Proprioceptive Neuromuscular Facilitation',titleAr:'التسهيل العصبي العضلي الحسي',desc:'PNF diagonal patterns for spine and trunk coordination',duration:'18 min',level:'Advanced',youtube:'RvhJR9NJhks'},
{id:6046,type:'coordination',part:'back',title:'Trunk-Pelvis Coordination',titleAr:'تناسق الجذع والحوض',desc:'Coordination drill linking trunk and pelvis movement',duration:'10 min',level:'Beginner',youtube:'HXSZHLGNSyU'},

{id:6031,type:'coordination',part:'shoulder',title:'Scapulohumeral Rhythm Training',titleAr:'تدريب إيقاع الكتف',desc:'Smooth scapulohumeral rhythm for overhead coordination',duration:'15 min',level:'Intermediate',youtube:'kkNnc6ssbPI'},
{id:6032,type:'coordination',part:'shoulder',title:'Closed Chain Shoulder Coordination',titleAr:'تنسيق الكتف في السلسلة المغلقة',desc:'Weight bearing shoulder coordination on unstable surface',duration:'15 min',level:'Advanced',youtube:'5fXfR_q9RMU'},
{id:6033,type:'coordination',part:'shoulder',title:'Throwing Coordination Pattern',titleAr:'نمط تنسيق الرمي',desc:'Sequential shoulder coordination for throwing sports',duration:'18 min',level:'Advanced',youtube:'iAABSZ9rB5I'},
{id:6034,type:'coordination',part:'shoulder',title:'Reaching and Grasping Coordination',titleAr:'تنسيق الوصول والإمساك',desc:'Upper limb coordination for functional reaching tasks',duration:'12 min',level:'All Levels',youtube:'T_AYsUJyb4c'},
{id:6035,type:'coordination',part:'shoulder',title:'Bimanual Coordination Drills',titleAr:'تمارين التنسيق بكلتا اليدين',desc:'Two-handed coordination tasks with resistance bands',duration:'12 min',level:'Intermediate',youtube:'KfyBTZSzGoQ'},
{id:6016,type:'coordination',part:'shoulder',title:'Shoulder Rhythm Training',titleAr:'تدريب إيقاع الكتف',desc:'Scapulohumeral rhythm training for coordinated shoulder movement',duration:'12 min',level:'Advanced',youtube:'fRm7M6BBGkw'},

// ══════════════════════════════════════════════════════
// 🏃 ENDURANCE
// ══════════════════════════════════════════════════════

{id:7001,type:'endurance',part:'back',title:'Biering-Sørensen Back Endurance',titleAr:'اختبار بيرينج-سورنسن لتحمل الظهر',desc:'Prone trunk extension hold for back extensor endurance',duration:'15 min',level:'Intermediate',youtube:'G93cNF8gl4o'},
{id:7002,type:'endurance',part:'back',title:'Side Bridge Endurance',titleAr:'تحمل الجسر الجانبي',desc:'Side plank progression for lateral trunk endurance',duration:'15 min',level:'Intermediate',youtube:'ecgU1u0xST0'},
{id:7003,type:'endurance',part:'back',title:'McGill Big 3 Endurance Protocol',titleAr:'بروتوكول ماكجيل الثلاثة الكبار للتحمل',desc:'Bird-dog, curl-up, side bridge for spine endurance',duration:'20 min',level:'Intermediate',youtube:'G93cNF8gl4o'},
{id:7004,type:'endurance',part:'back',title:'Plank Hold Progression',titleAr:'تدرج الضغط المقاوم للجذع',desc:'Front plank endurance progression for core stamina',duration:'15 min',level:'Intermediate',youtube:'D1Y3OVS5gVA'},
{id:7005,type:'endurance',part:'back',title:'Walking for Lumbar Endurance',titleAr:'المشي لتحمل الظهر القطني',desc:'Nordic walking and interval walking for lumbar endurance',duration:'20 min',level:'All Levels',youtube:'CeUHVGDZD7g'},
{id:7046,type:'endurance',part:'back',title:'Prone Back Extension Hold',titleAr:'ثبات مد الظهر بالانبطاح',desc:'Sustained prone back extension hold to build extensor endurance',duration:'12 min',level:'Intermediate',youtube:'T0_QWyAelWI'},

{id:7011,type:'endurance',part:'shoulder',title:'Rotator Cuff Endurance Training',titleAr:'تدريب تحمل الكفة المدورة',desc:'High-rep external rotation with band for endurance',duration:'15 min',level:'Intermediate',youtube:'x39ISQrcXuQ'},
{id:7012,type:'endurance',part:'shoulder',title:'Shoulder Overhead Endurance',titleAr:'تحمل ضغط الكتف للأعلى',desc:'Repeated overhead reaching and pressing endurance',duration:'18 min',level:'Intermediate',youtube:'kEiWxfmTU1c'},
{id:7013,type:'endurance',part:'shoulder',title:'Scapular Endurance Protocol',titleAr:'بروتوكول تحمل الكتف',desc:'Middle and lower trap endurance with band',duration:'15 min',level:'Intermediate',youtube:'VcR3RmdkVUI'},
{id:7014,type:'endurance',part:'shoulder',title:'Arm Ergometer for Shoulder',titleAr:'جهاز تدريب الذراع للكتف',desc:'Upper body ergometer for shoulder and elbow endurance',duration:'20 min',level:'All Levels',youtube:'6u8QpNmQy_g'},
{id:7015,type:'endurance',part:'shoulder',title:'Throwing Endurance Program',titleAr:'برنامج تحمل الرمي',desc:'Interval throwing program for shoulder endurance in athletes',duration:'25 min',level:'Advanced',youtube:'1Wy8jh4QQH8'},
{id:7016,type:'endurance',part:'shoulder',title:'Shoulder Abduction Endurance',titleAr:'تحمل تبعيد الكتف',desc:'Endurance drill for shoulder abduction against sustained load',duration:'8 min',level:'Intermediate',youtube:'a01Gb7OR8sY'},

{id:7021,type:'endurance',part:'knee',title:'Cycling for Knee Endurance',titleAr:'ركوب الدراجة لتحمل الركبة',desc:'Stationary bike low-impact protocol for knee endurance',duration:'20 min',level:'All Levels',youtube:'JLy_xN22Zcs'},
{id:7022,type:'endurance',part:'knee',title:'Aquatic Walking — Knee Endurance',titleAr:'المشي المائي لتحمل الركبة',desc:'Pool walking for low-impact knee endurance building',duration:'20 min',level:'Beginner',youtube:'oy7ceiXDwII'},
{id:7023,type:'endurance',part:'knee',title:'Step-Up Endurance Protocol',titleAr:'بروتوكول تحمل الصعود',desc:'High-rep step-up and step-down for knee endurance',duration:'18 min',level:'Intermediate',youtube:'D1Y3OVS5gVA'},
{id:7024,type:'endurance',part:'knee',title:'Wall Sit Isometric Endurance',titleAr:'تحمل الجلوس على الجدار',desc:'Progressive wall sit holds for quadriceps endurance',duration:'12 min',level:'Intermediate',youtube:'ecgU1u0xST0'},
{id:7025,type:'endurance',part:'knee',title:'Walking Program — Knee OA Endurance',titleAr:'برنامج المشي لتحمل التهاب الركبة',desc:'Graded walking program for knee osteoarthritis endurance',duration:'20 min',level:'Beginner',youtube:'ZgxniVfKT4I'},

{id:7031,type:'endurance',part:'hip',title:'Hip Abductor Endurance',titleAr:'تحمل مبعدات الورك',desc:'High-rep clamshell and abduction for gluteal endurance',duration:'15 min',level:'Intermediate',youtube:'74Af2ePcKnk'},
{id:7032,type:'endurance',part:'hip',title:'Walking Lunge Endurance',titleAr:'تحمل الطعن الأمامي',desc:'Repeated walking lunges for hip extensor endurance',duration:'18 min',level:'Intermediate',youtube:'nbsxHPQJRR0'},
{id:7033,type:'endurance',part:'hip',title:'Hip Cycling Endurance',titleAr:'تحمل تدوير الورك',desc:'Stationary bike protocol for hip flexor and extensor endurance',duration:'20 min',level:'All Levels',youtube:'JLy_xN22Zcs'},
{id:7034,type:'endurance',part:'hip',title:'Stair Climbing Endurance',titleAr:'تحمل تسلق الدرج',desc:'Graded stair climbing protocol for hip endurance',duration:'15 min',level:'All Levels',youtube:'sy4BSmhHWws'},
{id:7035,type:'endurance',part:'hip',title:'Swimming Hip Endurance',titleAr:'تحمل السباحة للورك',desc:'Flutter kick and leg pull for hip endurance in pool',duration:'20 min',level:'All Levels',youtube:'oy7ceiXDwII'},

{id:7041,type:'endurance',part:'ankle-foot',title:'Repeated Calf Raise Endurance',titleAr:'تكرار رفع الكعب للتحمل',desc:'100-rep calf raise protocol for ankle-foot endurance',duration:'15 min',level:'Intermediate',youtube:'oJhJTiXsGlI'},
{id:7042,type:'endurance',part:'ankle-foot',title:'Walking and Jogging Program',titleAr:'برنامج المشي والرجوج',desc:'Interval walk-jog program for ankle foot endurance',duration:'20 min',level:'All Levels',youtube:'B5y4KPgd5so'},
{id:7043,type:'endurance',part:'ankle-foot',title:'Rope Jumping Endurance',titleAr:'تحمل تخطي الحبل',desc:'Jump rope protocol for ankle and foot endurance training',duration:'15 min',level:'Advanced',youtube:'9btnDf6UXP0'},
{id:7044,type:'endurance',part:'ankle-foot',title:'Tibialis Anterior Endurance',titleAr:'تحمل العضلة الظنبوبية الأمامية',desc:'High-rep dorsiflexion for tibialis anterior endurance',duration:'12 min',level:'Beginner',youtube:'dpfkCmhtg6I'},
{id:7045,type:'endurance',part:'ankle-foot',title:'Trail Walking — Ankle Endurance',titleAr:'المشي على الطريق لتحمل الكاحل',desc:'Uneven surface walking for functional ankle endurance',duration:'20 min',level:'All Levels',youtube:'A6xAC0RGGaQ'},

// ══════════════════════════════════════════════════════
// 🌬️ BREATHING
// ══════════════════════════════════════════════════════

{id:8001,type:'breathing',part:'back',title:'Diaphragmatic Breathing',titleAr:'التنفس الحجابي',desc:'Belly breathing for lumbar stabilization and relaxation',duration:'10 min',level:'Beginner',youtube:'UB3tSaiEbNY'},
{id:8002,type:'breathing',part:'back',title:'360° Breathing Pattern',titleAr:'نمط التنفس 360 درجة',desc:'Cylindrical breathing for optimal IAP and spine support',duration:'12 min',level:'Intermediate',youtube:'4G65o-PxzBQ'},
{id:8003,type:'breathing',part:'back',title:'Breathing Coordination with Movement',titleAr:'تنسيق التنفس مع الحركة',desc:'Integrate breathing with core exercises for back stability',duration:'15 min',level:'Intermediate',youtube:'Nxe0sFlA4HM'},
{id:8004,type:'breathing',part:'back',title:'Pursed Lip Breathing for Back Pain',titleAr:'التنفس بالشفاه المضمومة لألم الظهر',desc:'Pursed lip technique to manage pain and muscle tension',duration:'8 min',level:'Beginner',youtube:'lhIgiYzcJk4'},
{id:8005,type:'breathing',part:'back',title:'COPD Breathing Exercises',titleAr:'تمارين التنفس لانسداد الرئة',desc:'Diaphragm training and pursed-lip breathing for COPD',duration:'15 min',level:'All Levels',youtube:'7kpJ0QlRss4'},

{id:8011,type:'breathing',part:'neck',title:'Cervical Breathing Retraining',titleAr:'إعادة تدريب تنفس الرقبة',desc:'Reduce upper trapezius dominance with diaphragmatic breathing',duration:'10 min',level:'Beginner',youtube:'qCmvIXQtWJ0'},
{id:8012,type:'breathing',part:'neck',title:'Jaw and Neck Relaxation Breathing',titleAr:'تنفس استرخاء الفك والرقبة',desc:'Release jaw, neck, and suboccipital tension via breathing',duration:'10 min',level:'Beginner',youtube:'UB3tSaiEbNY'},
{id:8013,type:'breathing',part:'neck',title:'Scalene Breathing Release',titleAr:'إطلاق عضلات السلم بالتنفس',desc:'Reduce scalene overactivity through breathing pattern correction',duration:'10 min',level:'Beginner',youtube:'kgTL5G1ibIo'},
{id:8014,type:'breathing',part:'neck',title:'Cervicogenic Headache Breathing',titleAr:'تنفس الصداع العنقي',desc:'Breathing technique for headaches originating from neck tension',duration:'10 min',level:'Beginner',youtube:'Mg2ar-7_HfA'},
{id:8015,type:'breathing',part:'neck',title:'Progressive Muscle Relaxation',titleAr:'الاسترخاء العضلي التدريجي',desc:'Full body PMR with focus on neck and shoulder release',duration:'15 min',level:'All Levels',youtube:'w04SYVEuVq8'},

{id:8021,type:'breathing',part:'shoulder',title:'Breathing for Shoulder Release',titleAr:'التنفس لتحرير الكتف',desc:'Reduce pectoral and anterior shoulder tension via breathing',duration:'10 min',level:'Beginner',youtube:'dQrGBbij2TM'},
{id:8022,type:'breathing',part:'shoulder',title:'Box Breathing for Recovery',titleAr:'التنفس المربع للتعافي',desc:'4-4-4-4 box breathing for recovery and pain management',duration:'10 min',level:'Beginner',youtube:'tEmt1Znux58'},
{id:8023,type:'breathing',part:'shoulder',title:'Rib Cage Mobility and Breathing',titleAr:'حركة القفص الصدري والتنفس',desc:'Rib expansion breathing for thoracic and shoulder mobility',duration:'12 min',level:'All Levels',youtube:'5MfrNxpo0FM'},
{id:8024,type:'breathing',part:'shoulder',title:'Post-Surgical Breathing Rehab',titleAr:'إعادة تأهيل التنفس بعد الجراحة',desc:'Incentive spirometry and breathing after shoulder surgery',duration:'10 min',level:'Beginner',youtube:'EDK0Iljpp_4'},
{id:8025,type:'breathing',part:'shoulder',title:'Buteyko Method for Tension',titleAr:'طريقة بوتيكو لتخفيف التوتر',desc:'Reduce breathing volume for chronic pain and shoulder tension',duration:'15 min',level:'All Levels',youtube:'MkscOWI8aNc'},

// ── flexibility × elbow ──
,{id:3021,type:'flexibility',part:'elbow',title:'Elbow Flexion Stretching',titleAr:'تمدد ثني الكوع',desc:'Passive elbow extension to improve flexion contracture',duration:'8 min',level:'Beginner',youtube:'KUdNGfWrYrQ'}
,{id:3022,type:'flexibility',part:'elbow',title:'Elbow Extension Stretching',titleAr:'تمدد مد الكوع',desc:'Gentle elbow flexion stretch for extension contracture',duration:'8 min',level:'Beginner',youtube:'RtFXsoDUEwk'}
,{id:3023,type:'flexibility',part:'elbow',title:'Forearm Pronation/Supination Stretch',titleAr:'تمدد تكفية وتوحيش الساعد',desc:'End-range pronation and supination stretching',duration:'8 min',level:'Beginner',youtube:'VV7zsl6LafM'}
,{id:3024,type:'flexibility',part:'elbow',title:'Wrist Flexor Stretch — Elbow Extended',titleAr:'تمدد ثانيات الرسغ مع مد الكوع',desc:'Extended elbow wrist flexor stretch for lateral epicondylitis',duration:'8 min',level:'Beginner',youtube:'alnLmwMHd_Y'}
,{id:3025,type:'flexibility',part:'elbow',title:'Triceps Overhead Stretch',titleAr:'تمدد ثلاثية الرؤوس فوق الرأس',desc:'Overhead triceps stretch for elbow extension flexibility',duration:'8 min',level:'Beginner',youtube:'alnLmwMHd_Y'}
,{id:3026,type:'flexibility',part:'elbow',title:'Elbow Flexion PNF Stretch',titleAr:'تمدد PNF لثني الكوع',desc:'PNF-based stretch to improve elbow flexion range of motion',duration:'20 min',level:'Beginner',youtube:'B5A_mtbKqfk'}

// ── flexibility × wrist-hand ──
,{id:3031,type:'flexibility',part:'wrist-hand',title:'Prayer Position Wrist Stretch',titleAr:'تمدد الرسغ بوضعية الصلاة',desc:'Bilateral wrist extension in prayer position',duration:'5 min',level:'Beginner',youtube:'oRYBJ2ESSZk'}
,{id:3032,type:'flexibility',part:'wrist-hand',title:'Reverse Prayer Wrist Stretch',titleAr:'تمدد الصلاة العكسية للرسغ',desc:'Wrist flexion stretch with reverse prayer position',duration:'5 min',level:'Beginner',youtube:'pCn0XrdKvig'}
,{id:3033,type:'flexibility',part:'wrist-hand',title:'Finger Extension Stretching',titleAr:'تمدد مد الأصابع',desc:'Full finger extension stretch for flexor tightness',duration:'5 min',level:'Beginner',youtube:'m_YP7ofbQM0'}
,{id:3034,type:'flexibility',part:'wrist-hand',title:'Thumb Flexibility Exercises',titleAr:'تمارين مرونة الإبهام',desc:'Thumb opposition and circumduction for flexibility',duration:'8 min',level:'Beginner',youtube:'aVtjSqQTuGs'}
,{id:3035,type:'flexibility',part:'wrist-hand',title:'Wrist Radial/Ulnar Deviation Stretch',titleAr:'تمدد انحراف الرسغ',desc:'Side-to-side wrist flexibility for radial and ulnar deviation',duration:'8 min',level:'Beginner',youtube:'wynn9LusrgE'}
,{id:3036,type:'flexibility',part:'wrist-hand',title:'Wrist Flexor Myofascial Release',titleAr:'تحرير لفافة عضلات الرسغ',desc:'Myofascial release for tight wrist flexor muscles',duration:'8 min',level:'Advanced',youtube:'3u38oA86-R4'}

// ── mobility × elbow ──
,{id:4021,type:'mobility',part:'elbow',title:'Elbow Joint CARs',titleAr:'التدوير المفصلي المتحكم به للكوع',desc:'Controlled articular rotations for elbow joint health',duration:'10 min',level:'All Levels',youtube:'QfrtVP3dxeA'}
,{id:4022,type:'mobility',part:'elbow',title:'Elbow Active-Assisted ROM',titleAr:'تمارين مدى حركة الكوع',desc:'Active-assisted elbow ROM exercises for joint mobility',duration:'10 min',level:'Beginner',youtube:'zl5AuR7RqOE'}
,{id:4023,type:'mobility',part:'elbow',title:'Radioulnar Joint Mobilization',titleAr:'تحريك المفصل الكعبري الزندي',desc:'Forearm rotation mobilization for pronation/supination',duration:'10 min',level:'Intermediate',youtube:'VV7zsl6LafM'}
,{id:4024,type:'mobility',part:'elbow',title:'Post-Fracture Elbow Mobility',titleAr:'تحريك الكوع بعد الكسر',desc:'Progressive mobilization after elbow fracture or surgery',duration:'12 min',level:'Beginner',youtube:'Nr-sPLLOIwE'}
,{id:4025,type:'mobility',part:'elbow',title:'Elbow PAILS/RAILS',titleAr:'تمارين PAILS/RAILS للكوع',desc:'Progressive angular isometric loading for elbow mobility',duration:'15 min',level:'Advanced',youtube:'RtFXsoDUEwk'}
,{id:4026,type:'mobility',part:'elbow',title:'Elbow Flexion Mobility Drill',titleAr:'تمرين تحريك ثني الكوع',desc:'Guided drill to restore elbow flexion mobility',duration:'8 min',level:'Advanced',youtube:'K2cIep-vxJc'}

// ── mobility × wrist-hand ──
,{id:4031,type:'mobility',part:'wrist-hand',title:'Wrist CARs',titleAr:'التدوير المفصلي المتحكم به للرسغ',desc:'Full wrist controlled articular rotations in all planes',duration:'8 min',level:'All Levels',youtube:'3u38oA86-R4'}
,{id:4032,type:'mobility',part:'wrist-hand',title:'Finger Joint Mobility Drills',titleAr:'تمارين حركة مفاصل الأصابع',desc:'Individual finger MCP/PIP/DIP mobilization exercises',duration:'10 min',level:'Beginner',youtube:'5EAgnXE-fEs'}
,{id:4033,type:'mobility',part:'wrist-hand',title:'Wrist Circumduction Exercises',titleAr:'تمارين تدوير الرسغ',desc:'Full circular wrist motion for comprehensive mobility',duration:'8 min',level:'Beginner',youtube:'p97hi3NhNc8'}
,{id:4034,type:'mobility',part:'wrist-hand',title:'Post-Colles Fracture Wrist Mobility',titleAr:'تحريك الرسغ بعد كسر كولز',desc:'Progressive wrist mobility after distal radius fracture',duration:'12 min',level:'Beginner',youtube:'ZxdrkW_orFI'}
,{id:4035,type:'mobility',part:'wrist-hand',title:'Composite Finger Flexion Drills',titleAr:'تمارين ثني الأصابع التراكمي',desc:'Hook, full, and straight fist for composite finger mobility',duration:'10 min',level:'Beginner',youtube:'f2lHpWNaQaQ'}
,{id:4036,type:'mobility',part:'wrist-hand',title:'Wrist Flexion Mobility',titleAr:'تحريك ثني الرسغ',desc:'Mobility drill through wrist flexion range',duration:'20 min',level:'Beginner',youtube:'6HZOR_bCLxY'}

// ── balance × neck ──
,{id:5041,type:'balance',part:'neck',title:'Gaze Stabilization — VOR Exercises',titleAr:'تمارين استقرار النظر - VOR',desc:'Vestibulo-ocular reflex exercises: head moves, eyes fixed',duration:'10 min',level:'Beginner',youtube:'8gs9XU1Q0sU'}
,{id:5042,type:'balance',part:'neck',title:'Cervical Proprioception Training',titleAr:'تدريب الحس العميق للرقبة',desc:'Laser pointer targeting for cervical proprioception',duration:'12 min',level:'Intermediate',youtube:'Mk7v9r4acQU'}
,{id:5043,type:'balance',part:'neck',title:'Head Movement Balance Tasks',titleAr:'مهام توازن حركة الرأس',desc:'Balance tasks combined with head rotation movements',duration:'12 min',level:'Intermediate',youtube:'tjXDyeg3OmU'}
,{id:5044,type:'balance',part:'neck',title:'BPPV — Epley Maneuver',titleAr:'مناورة إبلي لدوار الوضعة',desc:'Canalith repositioning procedure for BPPV vertigo',duration:'15 min',level:'All Levels',youtube:'9SLm76jQg3g'}
,{id:5045,type:'balance',part:'neck',title:'Cervical Sensorimotor Balance',titleAr:'توازن الرقبة الحسي الحركي',desc:'Eyes closed balance with cervical position matching',duration:'12 min',level:'Intermediate',youtube:'Mk7v9r4acQU'}
,{id:5006,type:'balance',part:'neck',title:'Neck Position Sense Training',titleAr:'تدريب إحساس وضعية الرقبة',desc:'Cervical position-sense training to improve neck proprioception',duration:'25 min',level:'All Levels',youtube:'XHaJ4-2HHPE'}

// ── balance × shoulder ──
,{id:5051,type:'balance',part:'shoulder',title:'Closed Chain Shoulder Balance',titleAr:'توازن الكتف في السلسلة المغلقة',desc:'Weight bearing on hands for shoulder proprioception',duration:'12 min',level:'Intermediate',youtube:'jjCt5RYBBAI'}
,{id:5052,type:'balance',part:'shoulder',title:'Shoulder Ball Wall Bounce',titleAr:'ارتداد الكرة على الجدار للكتف',desc:'Ball bouncing on wall for shoulder joint position sense',duration:'12 min',level:'Beginner',youtube:'D4rRDhq4hvE'}
,{id:5053,type:'balance',part:'shoulder',title:'BOSU Push-Up Balance',titleAr:'توازن الضغط على البوسو',desc:'Push-ups on BOSU for shoulder balance and stability',duration:'15 min',level:'Advanced',youtube:'K2cIep-vxJc'}
,{id:5054,type:'balance',part:'shoulder',title:'Scapular Position Sense',titleAr:'حس موضع لوح الكتف',desc:'Scapular position awareness and repositioning exercises',duration:'12 min',level:'Intermediate',youtube:'72hCmUWE1L4'}
,{id:5055,type:'balance',part:'shoulder',title:'Active Joint Repositioning',titleAr:'إعادة توضع المفصل النشطة',desc:'Active shoulder joint repositioning for proprioception',duration:'10 min',level:'Intermediate',youtube:'cVnQVkE41FY'}
,{id:5016,type:'balance',part:'shoulder',title:'Shoulder Weight Bearing Balance',titleAr:'توازن تحميل وزن الكتف',desc:'Weight-bearing balance drill through the shoulder joint',duration:'5 min',level:'Intermediate',youtube:'0iskcOVWOT0'}

// ── coordination × neck ──
,{id:6041,type:'coordination',part:'neck',title:'Eye-Head Coordination Drills',titleAr:'تمارين تنسيق العين والرأس',desc:'Coordinated eye and head movement training',duration:'12 min',level:'Intermediate',youtube:'QFfYomEiV7U'}
,{id:6042,type:'coordination',part:'neck',title:'Neck and Arm Coordination',titleAr:'تنسيق الرقبة والذراع',desc:'Simultaneous neck rotation with upper limb movements',duration:'12 min',level:'Intermediate',youtube:'TEPIyU2g6Ic'}
,{id:6043,type:'coordination',part:'neck',title:'Visual Target Tracking',titleAr:'تتبع الهدف البصري',desc:'Moving target tracking with coordinated head movements',duration:'10 min',level:'Beginner',youtube:'wDq43Dwyli0'}
,{id:6044,type:'coordination',part:'neck',title:'Head-Righting Reactions',titleAr:'ردود أفعال استقامة الرأس',desc:'Automatic head-righting response training on unstable surface',duration:'10 min',level:'All Levels',youtube:'LU5naJCBsyc'}
,{id:6045,type:'coordination',part:'neck',title:'Cervical Sequential Patterns',titleAr:'الأنماط التسلسلية للرقبة',desc:'Sequential cervical movement patterns for coordination',duration:'12 min',level:'Intermediate',youtube:'2UuZzoNpZwY'}
,{id:6006,type:'coordination',part:'neck',title:'Neck-Eye Coordination Tracking',titleAr:'تتبع تناسق العين والرقبة',desc:'Coordination drill tracking eye movement with neck motion',duration:'25 min',level:'All Levels',youtube:'rd3vtwKeU30'}

// ── coordination × elbow ──
,{id:6051,type:'coordination',part:'elbow',title:'Alternating Elbow Flexion/Extension',titleAr:'تناوب ثني ومد الكوع',desc:'Rapid alternating elbow movements for coordination',duration:'10 min',level:'Beginner',youtube:'cNbFI8Gft4A'}
,{id:6052,type:'coordination',part:'elbow',title:'Pronation/Supination Rapid Alternation',titleAr:'تناوب التكفية والتوحيش السريع',desc:'Fast alternating forearm rotation for coordination',duration:'10 min',level:'Intermediate',youtube:'XHaJ4-2HHPE'}
,{id:6053,type:'coordination',part:'elbow',title:'Throwing Mechanics — Elbow Focus',titleAr:'ميكانيكا الرمي - تركيز على الكوع',desc:'Elbow coordination drills in throwing pattern',duration:'15 min',level:'Advanced',youtube:'-LfyhlA9UNM'}
,{id:6054,type:'coordination',part:'elbow',title:'Ball Catch and Release Drills',titleAr:'تمارين الإمساك والإطلاق بالكوع',desc:'Ball activities requiring elbow coordination and timing',duration:'12 min',level:'All Levels',youtube:'iAABSZ9rB5I'}
,{id:6055,type:'coordination',part:'elbow',title:'Diadochokinesis Training',titleAr:'تدريب الحركات المتناوبة السريعة',desc:'Rapid alternating elbow movement coordination training',duration:'10 min',level:'Intermediate',youtube:'ouqEYTbSZ_s'}
,{id:6026,type:'coordination',part:'elbow',title:'Elbow-Wrist Coordination',titleAr:'تناسق الكوع والرسغ',desc:'Coordination drill combining elbow and wrist movement',duration:'25 min',level:'All Levels',youtube:'lhIgiYzcJk4'}

// ── coordination × hip ──
,{id:6061,type:'coordination',part:'hip',title:'Hip and Trunk Rotation Coordination',titleAr:'تنسيق تدوير الورك والجذع',desc:'Coordinated hip rotation with opposite trunk movement',duration:'15 min',level:'Intermediate',youtube:'dMe2wEY4Atg'}
,{id:6062,type:'coordination',part:'hip',title:'Gait Coordination — Hip Focus',titleAr:'تنسيق المشي - تركيز على الورك',desc:'Hip flexor/extensor coordination during walking pattern',duration:'12 min',level:'All Levels',youtube:'oJhJTiXsGlI'}
,{id:6063,type:'coordination',part:'hip',title:'Hip Dissociation Exercises',titleAr:'تمارين تفكيك حركة الورك',desc:'Pelvis and hip dissociation for improved coordination',duration:'15 min',level:'Intermediate',youtube:'bSQBhmE91Uc'}
,{id:6064,type:'coordination',part:'hip',title:'Rhythmic Hip Movement Patterns',titleAr:'أنماط حركة الورك الإيقاعية',desc:'Dance-based rhythmic hip coordination patterns',duration:'15 min',level:'All Levels',youtube:'0iskcOVWOT0'}
,{id:6065,type:'coordination',part:'hip',title:'Hip Kick and Catch Drills',titleAr:'تمارين الركل والإمساك للورك',desc:'Coordinated hip flexion with ball catching tasks',duration:'12 min',level:'Intermediate',youtube:'T8DxMNV8T8o'}
,{id:6056,type:'coordination',part:'hip',title:'Hip-Knee Coordination',titleAr:'تناسق الورك والركبة',desc:'Coordination drill linking hip and knee movement patterns',duration:'10 min',level:'Intermediate',youtube:'bDWeLkeCbBg'}

// ── coordination × knee ──
,{id:6071,type:'coordination',part:'knee',title:'Landing Mechanics Training',titleAr:'تدريب ميكانيكا الهبوط',desc:'Jump landing with knee valgus control and coordination',duration:'20 min',level:'Advanced',youtube:'GmVrvhO2Z_4'}
,{id:6072,type:'coordination',part:'knee',title:'Alternating Knee Flexion/Extension',titleAr:'تناوب ثني ومد الركبة',desc:'Coordinated knee patterns for neuromuscular training',duration:'12 min',level:'Beginner',youtube:'5ai4HBkPvuQ'}
,{id:6073,type:'coordination',part:'knee',title:'Cutting and Direction Changes',titleAr:'تمارين القطع وتغيير الاتجاه',desc:'Agility cuts for knee coordination and sport return',duration:'20 min',level:'Advanced',youtube:'XUc71p4Kto8'}
,{id:6074,type:'coordination',part:'knee',title:'Stair Alternating Pattern',titleAr:'تناوب أنماط الدرج للركبة',desc:'Alternating step coordination for knee control',duration:'12 min',level:'Intermediate',youtube:'boVMpZ6j3M0'}
,{id:6075,type:'coordination',part:'knee',title:'Reactive Knee Perturbation',titleAr:'اضطراب الركبة التفاعلي',desc:'Unexpected perturbations for knee neuromuscular control',duration:'18 min',level:'Advanced',youtube:'f1EzHPESfjs'}
,{id:6066,type:'coordination',part:'knee',title:'Knee-Ankle Coordination',titleAr:'تناسق الركبة والكاحل',desc:'Coordination drill linking knee and ankle movement patterns',duration:'18 min',level:'Intermediate',youtube:'Zk1vdqlCFUI'}

// ── endurance × neck ──
,{id:7051,type:'endurance',part:'neck',title:'Cervical Extensor Endurance Hold',titleAr:'تحمل مد عضلات الرقبة',desc:'Prone neck extension timed holds for extensor endurance',duration:'12 min',level:'Intermediate',youtube:'CAq9vV7gkrs'}
,{id:7052,type:'endurance',part:'neck',title:'Deep Neck Flexor Endurance',titleAr:'تحمل ثنّيات الرقبة العميقة',desc:'Cranio-cervical flexion endurance for deep neck flexors',duration:'10 min',level:'Intermediate',youtube:'2Afm2uIDNRw'}
,{id:7053,type:'endurance',part:'neck',title:'Cervical Isometric Endurance',titleAr:'التحمل الإيزومتري للرقبة',desc:'Sustained isometric holds in all cervical directions',duration:'12 min',level:'Intermediate',youtube:'WFw1TJOzgNo'}
,{id:7054,type:'endurance',part:'neck',title:'Postural Endurance for Desk Work',titleAr:'تحمل الوضعية للعمل المكتبي',desc:'Endurance training for sustained sitting postures',duration:'15 min',level:'All Levels',youtube:'WFw1TJOzgNo'}
,{id:7055,type:'endurance',part:'neck',title:'Scapular Endurance for Neck Offload',titleAr:'تحمل الكتف لتخفيف حمل الرقبة',desc:'Lower trap endurance to reduce cervical spine load',duration:'15 min',level:'Intermediate',youtube:'p0PcmXJai2A'}
,{id:7006,type:'endurance',part:'neck',title:'Chin Tuck Endurance Hold',titleAr:'ثبات الذقن المطول',desc:'Sustained chin tuck hold to build deep neck flexor endurance',duration:'20 min',level:'All Levels',youtube:'BonZZhTllVg'}

// ── endurance × elbow ──
,{id:7061,type:'endurance',part:'elbow',title:'Bicep Curl Endurance Protocol',titleAr:'بروتوكول تحمل ثني الكوع',desc:'High-rep bicep curls for elbow flexor endurance',duration:'15 min',level:'Intermediate',youtube:'9byZd7h51DM'}
,{id:7062,type:'endurance',part:'elbow',title:'Tricep Endurance Training',titleAr:'تدريب تحمل ثلاثية الرؤوس',desc:'Extended triceps exercises for elbow extensor endurance',duration:'15 min',level:'Intermediate',youtube:'5o38j28wx70'}
,{id:7063,type:'endurance',part:'elbow',title:'Wrist Extension Endurance',titleAr:'تحمل مد الرسغ للكوع',desc:'Low-load wrist extension endurance for lateral elbow rehab',duration:'12 min',level:'Intermediate',youtube:'Gt2m7mPiwKQ'}
,{id:7064,type:'endurance',part:'elbow',title:'Grip and Forearm Endurance Circuit',titleAr:'دائرة تحمل القبضة والساعد',desc:'Combined grip and forearm rotation endurance circuit',duration:'15 min',level:'Intermediate',youtube:'_FkwaN7qPUs'}
,{id:7065,type:'endurance',part:'elbow',title:'Interval Throwing Endurance',titleAr:'تحمل الرمي بالفترات للكوع',desc:'Graded interval throwing program for elbow endurance',duration:'20 min',level:'Advanced',youtube:'1Wy8jh4QQH8'}
,{id:7026,type:'endurance',part:'elbow',title:'Elbow Flexion Endurance',titleAr:'تحمل ثني الكوع',desc:'Endurance drill for repeated elbow flexion',duration:'5 min',level:'All Levels',youtube:'1ZEgC8nuoP4'}

// ── endurance × wrist-hand ──
,{id:7071,type:'endurance',part:'wrist-hand',title:'Grip Timed Hold Endurance',titleAr:'تحمل القبضة بالإمساك المؤقت',desc:'Sustained grip holds for hand and wrist endurance',duration:'12 min',level:'Intermediate',youtube:'4QsU3mnsVmM'}
,{id:7072,type:'endurance',part:'wrist-hand',title:'Functional Task Endurance',titleAr:'تحمل المهام الوظيفية لليد',desc:'Sustained functional activities for hand/wrist endurance',duration:'12 min',level:'Beginner',youtube:'kgqIdCwVivE'}
,{id:7073,type:'endurance',part:'wrist-hand',title:'Wrist Flexion/Extension Endurance',titleAr:'تحمل ثني ومد الرسغ',desc:'High-rep wrist curl endurance for forearm muscles',duration:'15 min',level:'Intermediate',youtube:'RG_rI_4zjcw'}
,{id:7074,type:'endurance',part:'wrist-hand',title:'Pinch Grip Endurance',titleAr:'تحمل قبضة القرصة',desc:'Sustained pinch grip exercises for hand endurance',duration:'10 min',level:'Beginner',youtube:'pCn0XrdKvig'}
,{id:7075,type:'endurance',part:'wrist-hand',title:'Putty Exercise Endurance',titleAr:'تحمل تمارين الصلصال',desc:'Extended putty manipulation for hand and wrist endurance',duration:'15 min',level:'All Levels',youtube:'4QsU3mnsVmM'}
,{id:7036,type:'endurance',part:'wrist-hand',title:'Wrist Hold Endurance',titleAr:'تحمل ثبات الرسغ',desc:'Sustained wrist hold to build isometric endurance',duration:'10 min',level:'Intermediate',youtube:'muXPKbDxEqM'}

// ── breathing × hip ──
,{id:8031,type:'breathing',part:'hip',title:'Psoas-Diaphragm Release Breathing',titleAr:'تنفس إطلاق الحجاب الحاجز والعضلة القطنية',desc:'Release psoas-diaphragm tension through breathing technique',duration:'12 min',level:'Beginner',youtube:'_39IoaNX9VY'}
,{id:8032,type:'breathing',part:'hip',title:'Breathing for Hip Pain Management',titleAr:'التنفس لإدارة ألم الورك',desc:'Pain neuroscience breathing for hip osteoarthritis',duration:'10 min',level:'Beginner',youtube:'dQrGBbij2TM'}
,{id:8033,type:'breathing',part:'hip',title:'Pelvic Floor and Diaphragm Sync',titleAr:'تزامن قاع الحوض والحجاب الحاجز',desc:'Coordinate diaphragm with pelvic floor for hip stability',duration:'12 min',level:'Intermediate',youtube:'pdkPC-NgZAk'}
,{id:8034,type:'breathing',part:'hip',title:'Exhale-Assisted Hip Mobility',titleAr:'تحريك الورك بمساعدة الزفير',desc:'Use exhale to deepen hip stretches and mobility exercises',duration:'10 min',level:'All Levels',youtube:'5MfrNxpo0FM'}
,{id:8035,type:'breathing',part:'hip',title:'Hip Tension Relaxation Breathing',titleAr:'تنفس استرخاء توتر الورك',desc:'Progressive relaxation breathing targeting hip flexor tension',duration:'12 min',level:'Beginner',youtube:'AnvAmLqgsbc'}

// ── breathing × knee ──
,{id:8041,type:'breathing',part:'knee',title:'Breathing for Knee Pain Relief',titleAr:'التنفس لتخفيف ألم الركبة',desc:'Pain management breathing for chronic knee conditions',duration:'10 min',level:'Beginner',youtube:'a7SnJsThVws'}
,{id:8042,type:'breathing',part:'knee',title:'Pre-Surgery Breathing Preparation',titleAr:'الاستعداد التنفسي قبل جراحة الركبة',desc:'Breathing and spirometry preparation before knee surgery',duration:'10 min',level:'Beginner',youtube:'DQ_oX8yGW1s'}
,{id:8043,type:'breathing',part:'knee',title:'Post-Surgical Breathing — Knee',titleAr:'التنفس بعد جراحة الركبة',desc:'Incentive spirometry and breathing after knee surgery',duration:'10 min',level:'Beginner',youtube:'rd3vtwKeU30'}
,{id:8044,type:'breathing',part:'knee',title:'Quad Activation with Exhale',titleAr:'تفعيل الرباعية مع الزفير',desc:'Coordinate quad set activation with exhale breathing',duration:'10 min',level:'Beginner',youtube:'Nxe0sFlA4HM'}
,{id:8045,type:'breathing',part:'knee',title:'Mindful Breathing for Knee OA',titleAr:'التنفس الواعي لالتهاب مفصل الركبة',desc:'Mindfulness-based breathing for chronic knee pain management',duration:'12 min',level:'All Levels',youtube:'sN6wwkT7qxs'}

// ── breathing × ankle-foot ──
,{id:8051,type:'breathing',part:'ankle-foot',title:'Recovery Breathing for Ankle',titleAr:'التنفس التعافي للكاحل',desc:'Post-exercise breathing recovery after ankle rehabilitation',duration:'8 min',level:'Beginner',youtube:'ga_OAPf6IOI'}
,{id:8052,type:'breathing',part:'ankle-foot',title:'Acute Ankle Sprain Breathing',titleAr:'تنفس إدارة التواء الكاحل الحاد',desc:'Breathing techniques for acute ankle sprain pain management',duration:'8 min',level:'Beginner',youtube:'t0L7Aw1zLB0'}
,{id:8053,type:'breathing',part:'ankle-foot',title:'Foot Cramp Relief Breathing',titleAr:'تنفس لتخفيف تشنجات القدم',desc:'Breathing and relaxation to relieve foot and calf cramps',duration:'8 min',level:'Beginner',youtube:'jd8YGBCXkrY'}
,{id:8054,type:'breathing',part:'ankle-foot',title:'Breathing During Balance — Ankle',titleAr:'التنفس أثناء تمارين توازن الكاحل',desc:'Proper breathing pattern during ankle balance exercises',duration:'10 min',level:'All Levels',youtube:'GuRKyxcw6xQ'}
,{id:8055,type:'breathing',part:'ankle-foot',title:'Post-Surgical Ankle Breathing',titleAr:'التنفس بعد جراحة الكاحل',desc:'Breathing exercises after ankle reconstruction surgery',duration:'8 min',level:'Beginner',youtube:'fRm7M6BBGkw'}

// ── balance × elbow ──
,{id:5061,type:'balance',part:'elbow',title:'Elbow Proprioception Training',titleAr:'تدريب الحس العميق للكوع',desc:'Joint position sense retraining for elbow proprioception',duration:'10 min',level:'Intermediate',youtube:'armCuYc8gok'}
,{id:5062,type:'balance',part:'elbow',title:'Closed Chain Elbow Weight Bearing',titleAr:'تحمل وزن الكوع في السلسلة المغلقة',desc:'Elbow weight bearing on hands for joint stability',duration:'12 min',level:'Intermediate',youtube:'jjJidgVv6tk'}
,{id:5063,type:'balance',part:'elbow',title:'Elbow Repositioning Accuracy',titleAr:'دقة إعادة توضع الكوع',desc:'Active elbow repositioning for proprioception accuracy',duration:'10 min',level:'Intermediate',youtube:'WTksCJ6dZA4'}
,{id:5064,type:'balance',part:'elbow',title:'Unstable Surface Elbow Support',titleAr:'دعم الكوع على سطح غير مستقر',desc:'Elbow support on wobble cushion for stability training',duration:'12 min',level:'Advanced',youtube:'6HZOR_bCLxY'}
,{id:5065,type:'balance',part:'elbow',title:'Elbow Joint Stability Drills',titleAr:'تمارين استقرار مفصل الكوع',desc:'Dynamic elbow stabilization exercises for athletes',duration:'15 min',level:'Advanced',youtube:'6HZOR_bCLxY'}
,{id:5026,type:'balance',part:'elbow',title:'Elbow Weight Bearing on Foam',titleAr:'تحميل وزن الكوع على الإسفنج',desc:'Weight-bearing balance drill for the elbow on an unstable surface',duration:'8 min',level:'Beginner',youtube:'ecgU1u0xST0'}

// ── balance × wrist-hand ──
,{id:5071,type:'balance',part:'wrist-hand',title:'Wrist Weight Bearing Balance',titleAr:'توازن تحمل وزن الرسغ',desc:'Quadruped and plank wrist weight bearing for stability',duration:'10 min',level:'Beginner',youtube:'tH0AuoLAJBg'}
,{id:5072,type:'balance',part:'wrist-hand',title:'Hand Proprioception Exercises',titleAr:'تمارين الحس العميق لليد',desc:'Texture discrimination and object identification for hand proprioception',duration:'10 min',level:'Beginner',youtube:'oy1_nWcJ1A8'}
,{id:5073,type:'balance',part:'wrist-hand',title:'Wrist Repositioning Accuracy',titleAr:'دقة إعادة توضع الرسغ',desc:'Active wrist position matching for proprioception training',duration:'10 min',level:'Intermediate',youtube:'nyyY81RzNCQ'}
,{id:5074,type:'balance',part:'wrist-hand',title:'Finger Balance and Dexterity',titleAr:'توازن الأصابع والبراعة',desc:'Fine motor balance tasks with unstable objects',duration:'12 min',level:'All Levels',youtube:'75CCNANwYmY'}
,{id:5075,type:'balance',part:'wrist-hand',title:'Wrist Unstable Surface Training',titleAr:'تدريب الرسغ على سطح غير مستقر',desc:'Push-up on balance board for wrist stability and control',duration:'15 min',level:'Advanced',youtube:'wynn9LusrgE'}
,{id:5036,type:'balance',part:'wrist-hand',title:'Wrist Balance on Ball',titleAr:'توازن الرسغ على الكرة',desc:'Wrist balance drill using a stability ball',duration:'20 min',level:'Beginner',youtube:'6u8QpNmQy_g'}

// ── breathing × elbow ──
,{id:8061,type:'breathing',part:'elbow',title:'Pain Breathing for Elbow Conditions',titleAr:'التنفس لإدارة ألم الكوع',desc:'Pain management breathing for lateral and medial epicondylitis',duration:'8 min',level:'Beginner',youtube:'hiQFTsBzqwo'}
,{id:8062,type:'breathing',part:'elbow',title:'Pre/Post Surgery Elbow Breathing',titleAr:'التنفس قبل وبعد جراحة الكوع',desc:'Incentive spirometry and breathing for elbow surgery recovery',duration:'10 min',level:'Beginner',youtube:'B5y4KPgd5so'}
,{id:8063,type:'breathing',part:'elbow',title:'Upper Limb Tension Breathing',titleAr:'تنفس توتر الطرف العلوي',desc:'Breathing to release neural tension affecting the elbow',duration:'10 min',level:'Beginner',youtube:'UK3evBQkeEU'}
,{id:8064,type:'breathing',part:'elbow',title:'Relaxation for Elbow Overuse',titleAr:'الاسترخاء للكوع المُجهَد',desc:'Progressive relaxation breathing for elbow overuse injuries',duration:'10 min',level:'All Levels',youtube:'sTZQ1ye9vRM'}
,{id:8065,type:'breathing',part:'elbow',title:'Recovery Breathing — Elbow',titleAr:'التنفس التعافي للكوع',desc:'Post-exercise breathing recovery after elbow rehabilitation',duration:'8 min',level:'Beginner',youtube:'sTZQ1ye9vRM'}

// ── breathing × wrist-hand ──
,{id:8071,type:'breathing',part:'wrist-hand',title:'Carpal Tunnel Breathing Relief',titleAr:'تنفس تخفيف متلازمة النفق الرسغي',desc:'Breathing and median nerve tension release for CTS relief',duration:'8 min',level:'Beginner',youtube:'DQ_oX8yGW1s'}
,{id:8072,type:'breathing',part:'wrist-hand',title:'Hand Tension Release Breathing',titleAr:'تنفس إطلاق توتر اليد',desc:'Progressive muscle relaxation targeting hand and forearm tension',duration:'10 min',level:'Beginner',youtube:'a7SnJsThVws'}
,{id:8073,type:'breathing',part:'wrist-hand',title:'Post-Surgery Wrist Breathing',titleAr:'التنفس بعد جراحة الرسغ',desc:'Breathing exercises and coughing after wrist/hand surgery',duration:'8 min',level:'Beginner',youtube:'rd3vtwKeU30'}
,{id:8074,type:'breathing',part:'wrist-hand',title:'Rheumatoid Arthritis Breathing',titleAr:'تنفس التهاب المفاصل الروماتويدي',desc:'Relaxation breathing for hand pain in rheumatoid arthritis',duration:'10 min',level:'All Levels',youtube:'a7SnJsThVws'}
,{id:8075,type:'breathing',part:'wrist-hand',title:'Fine Motor Recovery Breathing',titleAr:'تنفس تعافي الحركات الدقيقة',desc:'Breathing coordination with fine motor hand recovery exercises',duration:'10 min',level:'All Levels',youtube:'Nxe0sFlA4HM'}

];

// ── Lookup maps ─────────────────────────────────────────
var TYPE_META = {
  'pain-relief':   {name:'Pain Relief',  nameAr:'تخفيف الألم',   icon:'😌'},
  'strengthening': {name:'Strengthening',nameAr:'تقوية العضلات', icon:'💪'},
  'flexibility':   {name:'Flexibility',  nameAr:'المرونة',        icon:'🤸'},
  'mobility':      {name:'Mobility',     nameAr:'الحركة',         icon:'🚶'},
  'balance':       {name:'Balance',      nameAr:'التوازن',        icon:'⚖️'},
  'coordination':  {name:'Coordination', nameAr:'التنسيق',        icon:'🎯'},
  'endurance':     {name:'Endurance',    nameAr:'التحمل',         icon:'🏃'},
  'breathing':     {name:'Breathing',    nameAr:'التنفس',         icon:'🌬️'},
};
var PART_META = {
  'neck':        {name:'Neck',         nameAr:'الرقبة',    icon:'🦒'},
  'shoulder':    {name:'Shoulder',     nameAr:'الكتف',     icon:'🤷'},
  'elbow':       {name:'Elbow',        nameAr:'الكوع',     icon:'💪'},
  'wrist-hand':  {name:'Wrist & Hand', nameAr:'الرسغ واليد',icon:'🤚'},
  'back':        {name:'Back',         nameAr:'الظهر',     icon:'🦴'},
  'hip':         {name:'Hip',          nameAr:'الورك',     icon:'🦵'},
  'knee':        {name:'Knee',         nameAr:'الركبة',    icon:'🦿'},
  'ankle-foot':  {name:'Ankle & Foot', nameAr:'الكاحل والقدم',icon:'🦶'},
};

var currentUser  = null;
var selectedIds  = new Set();
var selectedPat  = null;
var allPatients  = [];
var currentVideos= [];

document.addEventListener('DOMContentLoaded', async function() {
  currentUser = requireAuth();
  if (!currentUser) return;

  var params  = new URLSearchParams(window.location.search);
  var typeId  = params.get('type');
  var partId  = params.get('part');
  var deptId  = params.get('dept');

  // Legacy dept support
  if (deptId && !typeId) {
    var legMap = {women:{type:'flexibility',part:'hip'},orthopedic:{type:'strengthening',part:'knee'},musculoskeletal:{type:'pain-relief',part:'back'},neuromuscular:{type:'balance',part:'ankle-foot'}};
    var mapped = legMap[deptId];
    if (mapped) { window.location.href='exercises-videos.html?type='+mapped.type+'&part='+mapped.part; return; }
  }

  if (!typeId && !partId) { window.location.href='therapeutic-exercises.html'; return; }

  // Filter
  currentVideos = EXERCISES.filter(function(e) {
    return (!typeId||e.type===typeId) && (!partId||e.part===partId);
  });
  if (!currentVideos.length && typeId) {
    currentVideos = EXERCISES.filter(function(e){ return e.type===typeId; });
  }

  var isAr    = (localStorage.getItem('patientLang')||'en') === 'ar';
  var typeMeta= typeId ? TYPE_META[typeId] : null;
  var partMeta= partId ? PART_META[partId] : null;
  document.getElementById('deptIcon').textContent = typeMeta ? typeMeta.icon : '🏋️';
  document.getElementById('deptName').textContent =
    [isAr?(typeMeta&&typeMeta.nameAr):(typeMeta&&typeMeta.name),
     isAr?(partMeta&&partMeta.nameAr):(partMeta&&partMeta.name)].filter(Boolean).join(' — ');
  document.getElementById('deptDesc').textContent =
    currentVideos.length + ' exercises' + (partMeta?' for '+(isAr?partMeta.nameAr:partMeta.name):'');

  if (currentUser.role === 'doctor') {
    document.getElementById('doctorPanel').style.display = 'block';
    await loadPatients();
  }
  renderCards();

  document.addEventListener('click', function(e) {
    var sw = document.getElementById('searchWrap');
    if (sw && !sw.contains(e.target)) document.getElementById('patientDropdown').classList.remove('open');
  });
});

function getTitle(v) {
  var isAr = (localStorage.getItem('patientLang')||'en') === 'ar';
  return (isAr && v.titleAr) ? v.titleAr : v.title;
}
function getLevelText(v) {
  var isAr = (localStorage.getItem('patientLang')||'en') === 'ar';
  var map = {Beginner:'مبتدئ',Intermediate:'متوسط',Advanced:'متقدم','All Levels':'جميع المستويات'};
  return isAr ? (map[v.level]||v.level) : v.level;
}

function renderCards() {
  var isDoctor = currentUser && currentUser.role === 'doctor';
  var grid     = document.getElementById('videosGrid');
  if (!currentVideos.length) {
    grid.innerHTML='<div style="grid-column:1/-1;text-align:center;padding:40px;color:rgba(255,255,255,.35)"><div style="font-size:40px;margin-bottom:12px">🔍</div><div>No exercises found.<br><button class="btn btn-light" style="margin-top:14px" onclick="window.location.href=\'therapeutic-exercises.html\'">← Choose Different Category</button></div></div>';
    return;
  }
  grid.innerHTML = currentVideos.map(function(v) {
    var hasVideo = !!v.youtube;
    var thumb = hasVideo
      ? '<img src="https://img.youtube.com/vi/'+v.youtube+'/mqdefault.jpg" style="width:100%;height:100%;object-fit:cover;" alt="'+escH(v.title)+'">'
      : '<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:32px;opacity:.2">🎬</div>';
    var cb = isDoctor ? '<input type="checkbox" class="vid-checkbox" id="chk-'+v.id+'" onchange="toggleVideo('+v.id+')">' : '';
    return '<div class="video-card" id="vc-'+v.id+'">'+cb+
      '<div class="vid-thumb" onclick="'+(hasVideo?"playVideo('"+v.youtube+"','"+escH(getTitle(v))+"')":'showNoVideo("'+escH(v.title)+'")')+'">'+
      thumb+'<div class="thumb-overlay"></div><div class="play-circle">'+(hasVideo?'▶':'⏳')+'</div></div>'+
      '<div class="vid-info"><h3>'+escH(getTitle(v))+'</h3>'+
      '<p>'+escH(v.desc)+'</p>'+
      '<div class="vid-meta"><span>⏱ '+v.duration+'</span><span>📊 '+getLevelText(v)+'</span></div>'+
      '</div></div>';
  }).join('');
}

function playVideo(youtubeId, title) {
  var modal   = document.getElementById('videoModal');
  var wrap    = document.getElementById('vidRatioWrap');
  var titleEl = document.getElementById('videoTitle');
  var ytLink  = document.getElementById('vidYtLink');
  // Remove any old iframe
  var old = wrap.querySelector('iframe.yt-frame');
  if (old) old.remove();
  // Create fresh iframe
  var iframe = document.createElement('iframe');
  iframe.className = 'yt-frame';
  iframe.src = 'https://www.youtube.com/embed/' + youtubeId + '?autoplay=1&rel=0&modestbranding=1';
  iframe.allow = 'autoplay; encrypted-media; fullscreen; picture-in-picture';
  iframe.allowFullscreen = true;
  wrap.appendChild(iframe);
  // Update title + YT link
  titleEl.textContent = title;
  ytLink.href = 'https://www.youtube.com/watch?v=' + youtubeId;
  // Show modal
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function showNoVideo(title){ alert('"'+title+'"\n\nVideo coming soon.'); }
function closeVideo(){
  var modal = document.getElementById('videoModal');
  var wrap  = document.getElementById('vidRatioWrap');
  var iframe = wrap.querySelector('iframe.yt-frame');
  if (iframe) iframe.remove();
  modal.classList.remove('open');
  document.body.style.overflow = '';
}
function handleModalClick(e){ if(e.target===document.getElementById('videoModal')) closeVideo(); }

async function loadPatients() {
  if(window.FIREBASE_ENABLED){try{var cloud=await fbGetAllUsers();if(cloud.length>0){var local=getAllUsers();cloud.forEach(function(cu){var i=local.findIndex(function(u){return u.email===cu.email;});if(i!==-1)local[i]=cu;else local.push(cu);});saveUsers(local);allPatients=cloud.filter(function(u){return u.role==='patient';});return;}}catch(e){}}
  allPatients=getAllUsers().filter(function(u){return u.role==='patient';});
}
function searchPatients(){
  var q=document.getElementById('searchInput').value.trim().toLowerCase();
  var dd=document.getElementById('patientDropdown');
  if(!q){dd.classList.remove('open');return;}
  var found=allPatients.filter(function(p){return p.name.toLowerCase().includes(q)||p.email.toLowerCase().includes(q);});
  dd.innerHTML=found.length?found.map(function(p){return '<div class="patient-option" onclick="selectPatient(\''+p.email+'\')"><strong>'+p.name+'</strong><small>'+p.email+'</small></div>';}).join(''):'<div class="no-results">No patients found</div>';
  dd.classList.add('open');
}
function selectPatient(email){
  selectedPat=allPatients.find(function(p){return p.email===email;});
  if(!selectedPat)return;
  document.getElementById('patientDropdown').classList.remove('open');
  document.getElementById('searchInput').style.display='none';
  document.getElementById('spName').textContent=selectedPat.name+' ('+selectedPat.email+')';
  document.getElementById('selectedPatientBox').classList.add('show');
  updateSendBtn();
}
function changePatient(){selectedPat=null;document.getElementById('searchInput').style.display='';document.getElementById('searchInput').value='';document.getElementById('searchInput').focus();document.getElementById('selectedPatientBox').classList.remove('show');updateSendBtn();}
function toggleVideo(id){
  var chk=document.getElementById('chk-'+id);var card=document.getElementById('vc-'+id);
  if(chk.checked){selectedIds.add(id);card.classList.add('selected');}else{selectedIds.delete(id);card.classList.remove('selected');}
  document.getElementById('selCount').textContent='Selected: '+selectedIds.size+' exercise'+(selectedIds.size!==1?'s':'');
  updateSendBtn();
}
function updateSendBtn(){document.getElementById('sendBtn').disabled=!(selectedPat&&selectedIds.size>0);}

async function sendExercises(){
  if(!selectedPat||selectedIds.size===0)return;
  var sendBtn=document.getElementById('sendBtn');sendBtn.disabled=true;sendBtn.textContent='Sending…';
  var note=document.getElementById('doctorNote').value.trim();
  var exercises=[...selectedIds].map(function(id){
    var v=EXERCISES.find(function(e){return e.id===id;});
    return {id:id,title:v.title,titleAr:v.titleAr||'',desc:v.desc,duration:v.duration,level:v.level,
      type:v.type,part:v.part,typeName:TYPE_META[v.type]?TYPE_META[v.type].name:'',partName:PART_META[v.part]?PART_META[v.part].name:'',
      typeNameAr:TYPE_META[v.type]?TYPE_META[v.type].nameAr:'',partNameAr:PART_META[v.part]?PART_META[v.part].nameAr:'',
      videoUrl:v.youtube?'https://www.youtube.com/embed/'+v.youtube+'?rel=0&modestbranding=1':'',
      youtubeId:v.youtube||'',assignedDate:new Date().toLocaleString(),status:'pending',completedDate:null,
      doctorName:currentUser.name,doctorEmail:currentUser.email};
  });
  var assignment={id:Date.now(),doctorName:currentUser.name,doctorEmail:currentUser.email,
    patientName:selectedPat.name,patientEmail:selectedPat.email,date:new Date().toLocaleString(),
    exercises:exercises,department:document.getElementById('deptName').textContent,doctorNote:note,message:note};
  try{
    var patUser=window.FIREBASE_ENABLED?await fbGetUser(selectedPat.email):null;
    var docUser=window.FIREBASE_ENABLED?await fbGetUser(currentUser.email):null;
    var users=getAllUsers();
    if(!patUser)patUser=users.find(function(u){return u.email===selectedPat.email;});
    if(!docUser)docUser=users.find(function(u){return u.email===currentUser.email;});
    if(!patUser){alert('Error: patient not found');return;}
    if(!Array.isArray(patUser.exercises))patUser.exercises=[];
    if(!Array.isArray(docUser.sentExercises))docUser.sentExercises=[];
    patUser.exercises.push(assignment);docUser.sentExercises.push(assignment);
    await asyncSaveUser(patUser);await asyncSaveUser(docUser);
    var msg=document.getElementById('successMsg');
    msg.innerHTML='✅ Sent <strong>'+selectedIds.size+' exercises</strong> to <strong>'+selectedPat.name+'</strong>!';
    msg.classList.add('show');
    selectedIds.clear();selectedPat=null;
    document.querySelectorAll('.vid-checkbox').forEach(function(cb){cb.checked=false;});
    document.querySelectorAll('.video-card').forEach(function(c){c.classList.remove('selected');});
    document.getElementById('selCount').textContent='Selected: 0 exercises';
    document.getElementById('doctorNote').value='';
    document.getElementById('searchInput').style.display='';document.getElementById('searchInput').value='';
    document.getElementById('selectedPatientBox').classList.remove('show');updateSendBtn();
    setTimeout(function(){msg.classList.remove('show');},5000);
  }catch(e){console.error(e);alert('Error sending. Please try again.');}
  finally{sendBtn.disabled=false;sendBtn.textContent='📤 Send Exercises to Patient';}
}
function escH(s){return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');}

// ESC key to close modal
document.addEventListener('keydown', function(e){ if(e.key==='Escape') closeVideo(); });
