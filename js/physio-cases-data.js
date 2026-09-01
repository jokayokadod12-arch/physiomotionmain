/**
 * physio-cases-data.js — PHYSIO CASES module
 * Static content: categories + interactive patient cases.
 * Each case = a short "patient" (progressive history reveal) + a treatment-journey
 * of multiple-choice steps (Diagnosis → Assessment/Precautions → Modalities → Exercise Plan).
 *
 * Scoring: each question = 10 points. A case's max score = questions.length * 10.
 */
'use strict';

const PHYSIO_CASE_CATEGORIES = [
  { id: 'neck',        label: 'Neck',            icon: '🦴', color: '#9B59B6' },
  { id: 'upper-limb',  label: 'Upper Limb',      icon: '💪', color: '#e91e63' },
  { id: 'trunk',       label: 'Trunk & Spine',   icon: '🧍', color: '#B8943F' },
  { id: 'lower-limb',  label: 'Lower Limb',      icon: '🦵', color: '#3D8B5B' },
  { id: 'neuro-other', label: 'Neuro & Other',   icon: '🧠', color: '#4A6FA5' },
];

const PHYSIO_CASES = [

/* ══════════════════════════ NECK ══════════════════════════ */

{
  id: 'cervical-spondylosis', category: 'neck', difficulty: 'Beginner',
  title: "Cervical Spondylosis",
  tagline: 'Chronic neck degeneration in an older adult',
  patient: { name: 'Mr. Adel, 58', role: 'Office manager', avatar: '🧑‍🦳',
    history: [
      "I've had a stiff, aching neck for months — it's slowly gotten worse.",
      "Some mornings it's so stiff I can barely turn my head to check my blind spot while driving.",
      "Lately I get a tingling feeling running down my right arm into my fingers.",
      "It's always worse after a long day at my desk, and hot showers seem to help a little."
    ] },
  briefing: "A middle-aged patient presents with gradual, progressive neck stiffness and pain. Degenerative changes at the cervical spine (disc thinning, osteophyte formation, facet arthritis) can narrow the space around the nerve roots, producing referred arm symptoms as the condition advances.",
  steps: [
    { stage: 'Recognize the Case', prompt: 'Given this gradual, progressive presentation with morning stiffness and radiating arm symptoms, what is the most likely diagnosis?',
      options: ['Acute torticollis', 'Cervical spondylosis', 'Bell\'s palsy', 'Carpal tunnel syndrome'], correct: 1,
      explanation: 'Slow, progressive degenerative neck pain in an older adult, with occasional nerve-root symptoms, is the classic picture of cervical spondylosis.' },
    { stage: 'Assessment', prompt: 'The tingling running into his hand suggests degeneration is starting to affect which structure?',
      options: ['A cervical nerve root', 'The facial nerve', 'The median nerve at the wrist', 'The sciatic nerve'], correct: 0,
      explanation: 'Osteophytes and disc narrowing in spondylosis can compress an exiting cervical nerve root, producing arm pain, weakness, or paraesthesia.' },
    { stage: 'Physical Agents', prompt: 'Which modality combination and timing best matches the standard protocol for this condition?',
      options: ['TENS 20 min, Ultrasound 5 min, Hot packs 15 min, Massage 5 min', 'Cryotherapy 30 min only', 'Ultrasound 20 min, no heat', 'Traction only, no other modalities'], correct: 0,
      explanation: 'The typical physical-agent package for cervical spondylosis pairs TENS (20 min), ultrasound (5 min), hot packs (15 min) and massage (5 min) before exercise.' },
    { stage: 'Exercise Plan', prompt: 'After the modalities, what should the exercise plan progress through, in order?',
      options: ['Strengthening → stretching → ROM', 'ROM/stretching first, then strengthening in all directions (10 reps each)', 'Isometrics only, forever', 'Aggressive manipulation on day one'], correct: 1,
      explanation: 'Start with gentle stretching of tight cervical muscles and active ROM, then add strengthening in all directions once mobility improves.' },
  ],
  summary: "Cervical spondylosis is managed conservatively: heat/electrotherapy to settle pain, then a graded ROM → stretching → strengthening program. Watch for red-flag nerve-root or cord signs that would need medical referral."
},

{
  id: 'cervical-disc-prolapse', category: 'neck', difficulty: 'Intermediate',
  title: "Cervical Disc Prolapse",
  tagline: 'Radiating arm pain with a positive traction history',
  patient: { name: 'Mrs. Hala, 45', role: 'Pregnant, 2nd trimester', avatar: '🤰',
    history: [
      "My neck pain shoots down my arm whenever I look up or tilt my head to that side.",
      "I've also noticed my grip feels a little weaker on that hand.",
      "By the way — I'm about 5 months pregnant, I hope that doesn't change anything!",
      "I read online that 'traction' might help — is that something you'd use on me?"
    ] },
  briefing: "A central or lateral disc fragment presses on a nerve root (radiculopathy) or, more centrally, the cord itself (myelopathy). Treatment mirrors cervical spondylosis but traction is a key additional tool — with important contraindications and precautions to screen for first.",
  steps: [
    { stage: 'Recognize the Case', prompt: 'Arm pain reproduced by neck movement, with mild grip weakness, most strongly suggests:',
      options: ['Cervical disc prolapse causing radiculopathy', 'De Quervain\'s tenosynovitis', 'Adhesive capsulitis', 'Torticollis'], correct: 0,
      explanation: 'Herniated disc material compressing a nerve root produces arm pain provoked by neck movement plus motor/sensory signs — classic radiculopathy.' },
    { stage: 'Precautions', prompt: 'She is 5 months pregnant and asks about cervical traction. What should you do?',
      options: ['Apply strong traction — pregnancy is not relevant to the neck', 'Treat pregnancy as a precaution and proceed cautiously / modify the plan', 'Refuse to treat her at all', 'Apply traction only in prone lying'], correct: 1,
      explanation: 'Pregnancy is listed as a precaution (not an absolute stop) for cervical traction — proceed carefully, monitor response, and adapt positioning/dosage.' },
    { stage: 'Contraindication Check', prompt: 'Which of these, if present, would be an absolute CONTRAINDICATION to cervical traction?',
      options: ['Mild joint stiffness', 'Active spinal infection or a spinal tumour', 'Slight postural fatigue', 'Preference for sitting exercises'], correct: 1,
      explanation: 'Spinal infection, active inflammatory joint disease, osteoporosis, spinal cancers, and central cord compression are contraindications to traction.' },
    { stage: 'Treatment Technique', prompt: 'For nerve compression symptoms into the arm, which additional technique is most appropriate alongside standard modalities?',
      options: ['Median/radial/ulnar nerve gliding exercises', 'High-velocity spinal manipulation only', 'Deep transverse friction over the epicondyle', 'Ignore the arm and treat the neck only'], correct: 0,
      explanation: 'Gentle neural gliding (median, radial, ulnar nerve as relevant) helps mobilize an irritated nerve root pathway alongside the general cervical program.' },
  ],
  summary: "Cervical disc prolapse is treated like spondylosis, plus traction (screened for contraindications/precautions) and nerve-gliding techniques when arm symptoms are present."
},

{
  id: 'torticollis', category: 'neck', difficulty: 'Beginner',
  title: "Congenital Torticollis",
  tagline: 'A 3-month-old with a tilted head',
  patient: { name: 'Baby Nour, 3 months', role: 'Referred by pediatrician', avatar: '👶',
    history: [
      "(Mother speaking) She always turns her head to the left and tilts it to the right.",
      "I've noticed she prefers to look at me from one side only.",
      "There's a small firm lump on the side of her neck the doctor felt.",
      "What can I do at home between our sessions?"
    ] },
  briefing: "Congenital muscular torticollis results from unilateral shortening/fibrosis of the sternocleidomastoid, producing a lateral head tilt to one side with rotation to the other. Early, gentle, play-based intervention is key.",
  steps: [
    { stage: 'Recognize the Case', prompt: 'A lateral head tilt to one side with the chin rotated to the OTHER side in an infant is most consistent with:',
      options: ['Erb\'s palsy', 'Congenital muscular torticollis', 'Cervical spondylosis', 'Ankylosing spondylitis'], correct: 1,
      explanation: 'Torticollis classically shows head tilt to one side + rotation to the opposite side, from a tight/shortened sternocleidomastoid.' },
    { stage: 'Assessment', prompt: 'The firm lump the mother feels in the muscle belly is best explained by:',
      options: ['A bone fracture', 'Endomysial fibrosis with collagen deposition in the SCM', 'A brachial plexus injury', 'Facial nerve swelling'], correct: 1,
      explanation: 'The classic "sternomastoid tumour" felt in infancy is fibrous tissue and collagen deposition within the shortened muscle, not a true tumour.' },
    { stage: 'Treatment Technique', prompt: 'Which hands-on technique directly stretches the tight side (say, tightness on the LEFT)?',
      options: ['Tilt the right ear toward the right shoulder', 'Tilt the right ear toward the LEFT shoulder while stabilizing the left shoulder down', 'Only massage the unaffected side', 'Avoid touching the neck entirely'], correct: 1,
      explanation: 'To stretch a tight left SCM: stabilize/depress the left shoulder and side-bend the head so the right ear moves toward the left shoulder, held 10–15 sec.' },
    { stage: 'Home / Positioning Advice', prompt: 'Which piece of positioning advice for the parents is most appropriate?',
      options: ['Always keep toys on the tight side so the baby never turns away from it', 'Place toys/mirrors on the side AWAY from the restriction to encourage active turning', 'Avoid tummy time completely', 'Keep the baby flat on the back all day for safety'], correct: 1,
      explanation: 'Positioning toys, feeding position, and crib setup should encourage the baby to actively look/reach away from the restricted side, plus regular supervised tummy time.' },
  ],
  summary: "Congenital torticollis responds well to early massage, passive/active ROM, positioning, and parent-led home stretching/play strategies — most infants improve significantly with conservative therapy alone."
},

{
  id: 'erbs-palsy', category: 'neck', difficulty: 'Intermediate',
  title: "Erb's Palsy (Brachial Plexus Injury)",
  tagline: 'Newborn with a limp arm after a difficult delivery',
  patient: { name: 'Baby Youssef, 6 weeks', role: 'Post difficult vaginal delivery', avatar: '👶',
    history: [
      "(Mother speaking) His right arm has been floppy since birth — the delivery was difficult, his shoulder got stuck.",
      "He doesn't lift that arm up like his other one; it just hangs by his side, turned inward.",
      "The pediatrician mentioned nerves near the shoulder, roots C5 and C6 I think.",
      "Should I still move his arm myself, or will that hurt him?"
    ] },
  briefing: "Erb's (Erb–Duchenne) palsy is a C5–C6 (occasionally + C7) brachial plexus traction injury, usually from shoulder dystocia during birth. The arm typically rests adducted, internally rotated, with the elbow extended and forearm pronated ('waiter's tip' posture).",
  steps: [
    { stage: 'Recognize the Case', prompt: 'An arm held adducted, internally rotated and pronated after a difficult delivery, with C5–C6 root involvement, is:',
      options: ['Erb\'s palsy', 'Bell\'s palsy', 'Congenital torticollis', 'Colles fracture'], correct: 0,
      explanation: 'This is the classic "waiter\'s tip" posture of Erb\'s palsy from a traction injury to the upper brachial plexus (C5–C6).' },
    { stage: 'Precaution', prompt: 'The mother asks if she should move the arm herself. What is the best guidance?',
      options: ['Never touch the arm until age 2', 'Yes — gentle, frequent passive ROM during the day (diaper changes, play) helps prevent contracture', 'Only a surgeon may move the arm', 'Immobilize the whole arm permanently'], correct: 1,
      explanation: 'Frequent gentle passive/active-assisted ROM throughout the day, done while the baby is relaxed, helps prevent joint contractures without causing harm.' },
    { stage: 'Treatment Focus', prompt: 'Which of these is a core goal of therapy for Erb\'s palsy?',
      options: ['Preventing joint contractures while promoting nerve recovery and normal motor patterns', 'Building maximum resisted strength immediately', 'Keeping the arm in a sling permanently', 'Avoiding all sensory stimulation to the arm'], correct: 0,
      explanation: 'Therapy focuses on protecting the joint (contracture prevention), supporting nerve recovery, maintaining ROM, and later building strength and function.' },
    { stage: 'Adjunct Treatment', prompt: 'Besides ROM and strengthening, which adjuncts are commonly used in Erb\'s palsy management?',
      options: ['Static/dynamic splinting and sensory awareness activities', 'High-velocity spinal manipulation', 'Traction to the cervical spine', 'Ultrasound over the fontanelle'], correct: 0,
      explanation: 'Splinting (resting hand/wrist, elbow extension splints) protects against contracture, while sensory activities (massage, visual attention to the arm) support awareness and use.' },
  ],
  summary: "Erb's palsy management blends protective positioning/splinting, gentle progressive ROM and strengthening through developmental activities, and a strong home-exercise program taught to the family."
},

/* ══════════════════════════ UPPER LIMB ══════════════════════════ */

{
  id: 'adhesive-capsulitis', category: 'upper-limb', difficulty: 'Intermediate',
  title: "Adhesive Capsulitis (Frozen Shoulder)",
  tagline: 'Progressive shoulder stiffness, worse at night',
  patient: { name: 'Mrs. Salma, 52', role: 'Diabetic, right-handed', avatar: '👩',
    history: [
      "My shoulder pain is constant, and it's much worse at night — I can't sleep on that side.",
      "Cold weather seems to make it worse too.",
      "I can barely lift my arm sideways or turn it outward anymore.",
      "Even bumping it lightly on a door causes terrible pain and cramping."
    ] },
  briefing: "Adhesive capsulitis is inflammation and stiffening of the glenohumeral joint capsule, most notably restricting abduction and external rotation, with pain that is often worse at night and in cold weather.",
  steps: [
    { stage: 'Recognize the Case', prompt: 'Constant shoulder pain, worse at night/cold weather, with marked loss of abduction AND external rotation, suggests:',
      options: ['Adhesive capsulitis (frozen shoulder)', 'Supraspinatus tendonitis', 'Colles fracture', 'Carpal tunnel syndrome'], correct: 0,
      explanation: 'Global capsular restriction (abduction + external rotation), night pain, and cold-weather aggravation are hallmark features of frozen shoulder.' },
    { stage: 'Staging', prompt: 'In Stage 1 (early/acute), which exercise is the classic gentle starting point?',
      options: ['Overhead barbell press', 'Pendulum exercises and gentle stretching', 'Maximal resisted external rotation', 'Aggressive manual mobilization to end-range'], correct: 1,
      explanation: 'Stage 1 emphasizes pain control and gentle mobility: pendulum swings, light stretching, cervical AROM, and gentle wall-climbing as tolerated.' },
    { stage: 'Progression', prompt: 'In Stage 2, what is introduced that was NOT part of Stage 1?',
      options: ['PNF shoulder-wheel patterns and light 1–2 lb resistance work up to ~50% normal load', 'Complete rest with no movement', 'Ice packs only, no exercise', 'Immediate return to overhead sport'], correct: 0,
      explanation: 'Stage 2 introduces PNF patterns, controlled lifting/pushing/pulling progressed to about 50% of normal load, and light resistance.' },
    { stage: 'Final Stage', prompt: 'What defines readiness/content of Stage 3?',
      options: ['Progressing to ~100% of normal load and overhead activities', 'Staying at pendulum exercises forever', 'Only ultrasound, no active exercise', 'Immobilizing the shoulder in a sling'], correct: 0,
      explanation: 'Stage 3 progresses strength work up to full/normal load and reintroduces functional overhead activity.' },
  ],
  summary: "Frozen shoulder is treated with heat/electrotherapy for pain, then a staged mobility → controlled strengthening → full-load/overhead progression, respecting the patient's pain response at each stage."
},

{
  id: 'supraspinatus-tendonitis', category: 'upper-limb', difficulty: 'Beginner',
  title: "Supraspinatus Tendonitis",
  tagline: 'Painful arc with overhead activity',
  patient: { name: 'Coach Tarek, 40', role: 'Amateur tennis player', avatar: '🎾',
    history: [
      "My shoulder hurts specifically when I lift my arm out to the side, especially overhead serves.",
      "It's been building up gradually with all the extra coaching hours I've been doing.",
      "There's a pinching feeling right at the top of my shoulder.",
      "Rest helps a bit, but it comes right back once I play again."
    ] },
  briefing: "Repetitive overuse causes the supraspinatus tendon to become inflamed as it impinges beneath the acromion, particularly with overhead/abduction movements — very common in sports and manual work.",
  steps: [
    { stage: 'Recognize the Case', prompt: 'Pain specifically with abduction/overhead activity, a "pinching" sensation under the acromion, and a resistive-overuse history point to:',
      options: ['Supraspinatus tendonitis', 'Torticollis', 'Ankylosing spondylitis', 'De Quervain\'s tenosynovitis'], correct: 0,
      explanation: 'Supraspinatus impinges under the acromion during abduction; overuse produces exactly this pattern of pain.' },
    { stage: 'Early Management', prompt: 'What is the FIRST priority in early management?',
      options: ['Aggressive strengthening immediately', 'Avoiding movements that aggravate pain, plus gentle pendulum ROM (Codman\'s exercises)', 'Full immobilization in a cast', 'Ignore it and keep playing through pain'], correct: 1,
      explanation: 'Early management avoids aggravating repetitive movement and uses gentle ROM (Codman\'s pendulum) to maintain motion and prevent secondary stiffness.' },
    { stage: 'Strengthening Focus', prompt: 'Once pain has settled, which muscle groups should the strengthening program target?',
      options: ['External rotators, internal rotators, biceps, deltoid, and scapular stabilizers', 'Only the deltoid', 'Only the forearm flexors', 'Only the hip abductors'], correct: 0,
      explanation: 'A full rotator-cuff and scapular-stabilizer strengthening program (external/internal rotators, biceps, deltoid, scapular muscles) supports the tendon and joint mechanics.' },
    { stage: 'Exercise Selection', prompt: 'Which exercise is a classic early rotator-cuff strengthening choice for this condition?',
      options: ['Sidelying external rotation with a light dumbbell', 'Barbell back squat', 'Calf raises', 'Cervical traction'], correct: 0,
      explanation: 'Sidelying external rotation isolates the external rotators/supraspinatus in a low-impingement position — a standard early-stage exercise.' },
  ],
  summary: "Supraspinatus tendonitis: settle the irritation first (activity modification + gentle ROM), then progressively strengthen the whole cuff and scapular stabilizers before returning to overhead sport."
},

{
  id: 'shoulder-dislocation', category: 'upper-limb', difficulty: 'Intermediate',
  title: "Anterior Shoulder Dislocation",
  tagline: 'Fall onto an abducted, externally rotated arm',
  patient: { name: 'Karim, 24', role: 'Football player, post-reduction', avatar: '⚽',
    history: [
      "I fell and my arm got forced backward and out to the side — it popped out of place.",
      "They reduced it in the ER; now it's in a sling.",
      "My shoulder still feels 'loose', like it could happen again.",
      "When can I start moving it and going back to sport?"
    ] },
  briefing: "Anterior dislocation (97% of shoulder dislocations) occurs when the arm is forced into excessive abduction and external rotation. Rehab is staged: protect the healing capsule first, then rebuild strength/proprioception, then return to sport.",
  steps: [
    { stage: 'Recognize the Case', prompt: 'A fall with the arm forced into abduction + external rotation, followed by a visibly deformed shoulder that needed reduction, is most consistent with:',
      options: ['Anterior shoulder dislocation', 'Posterior shoulder dislocation', 'Colles fracture', 'Adhesive capsulitis'], correct: 0,
      explanation: 'Anterior dislocation is caused by excessive abduction + external rotation and accounts for the vast majority of shoulder dislocations.' },
    { stage: 'Acute Phase Goal', prompt: 'In Phase I (Acute), what is the primary rehab goal?',
      options: ['Maximal overhead strengthening', 'Maintain anterior-inferior joint stability while protecting the healing capsule (immobilization, ROM of elbow/wrist/hand, pain-free isometrics)', 'Immediate return to contact sport', 'Aggressive external rotation stretching to end-range'], correct: 1,
      explanation: 'Acute phase protects stability with immobilization and pain-free isometrics, while keeping the elbow/wrist/hand mobile — full ROM stretching is deferred.' },
    { stage: 'Precaution', prompt: 'For a patient with ANTERIOR instability specifically, which movement should be avoided in early ROM work?',
      options: ['Excessive external rotation and horizontal abduction', 'Elbow flexion', 'Wrist circles', 'Gentle pendulum swings'], correct: 0,
      explanation: 'Excessive external rotation/horizontal abduction stresses the anterior capsule that was just injured, and should be avoided until stability improves.' },
    { stage: 'Later-Phase Exercise', prompt: 'Which exercise belongs in the LATER (Advanced Strengthening) phase, not the acute phase?',
      options: ['Bench press in restricted horizontal abduction and full-ROM strengthening', 'Ankle pumps', 'Immobilization in a sling', 'Ice only, no exercise'], correct: 0,
      explanation: 'Bench press (with restricted horizontal abduction) and progression to full-ROM strengthening belong to the advanced phase once stability and ROM are restored.' },
  ],
  summary: "Anterior dislocation rehab moves from protected immobilization and isometrics, through ROM and proprioception work avoiding the vulnerable position, to full-load strengthening before sport return."
},

{
  id: 'tennis-elbow', category: 'upper-limb', difficulty: 'Beginner',
  title: "Lateral Epicondylitis (Tennis Elbow)",
  tagline: 'Tender outer elbow, worse with gripping',
  patient: { name: 'Mona, 35', role: 'Works on a computer & plays tennis on weekends', avatar: '🎾',
    history: [
      "The outside of my elbow is really tender to touch.",
      "It hurts more when I grip something tightly, even shaking hands.",
      "Bending my wrist down with my elbow straight also brings on the pain.",
      "I've been told my wrist and shoulder muscles are weaker on that side."
    ] },
  briefing: "Lateral epicondylitis is the most common elbow overuse syndrome, involving the common extensor tendon origin at the lateral epicondyle, provoked by resisted wrist/finger extension and gripping.",
  steps: [
    { stage: 'Recognize the Case', prompt: 'Tenderness at the lateral epicondyle, pain with resisted wrist extension/gripping, and pain on passive wrist flexion with the elbow extended, points to:',
      options: ['Lateral epicondylitis (tennis elbow)', 'Carpal tunnel syndrome', 'De Quervain\'s tenosynovitis', 'Colles fracture'], correct: 0,
      explanation: 'This is the textbook clinical picture of tennis elbow: extensor tendon origin tenderness, pain with resisted extension and gripping.' },
    { stage: 'Modalities', prompt: 'Which modality combination is typically used for this condition?',
      options: ['Ultrasound (5 min) and TENS (20 min)', 'Traction only', 'Hot packs for 60 minutes, nothing else', 'Faradic stimulation to the face'], correct: 0,
      explanation: 'Standard physical-agent treatment for tennis elbow includes ultrasound (5 min) and TENS (20 min) as part of the plan.' },
    { stage: 'Manual Therapy', prompt: 'Which specific manual technique, combined with deep transverse friction, is classically used (Cyriax approach)?',
      options: ['Mill\'s manipulation', 'McKenzie extension', 'Williams flexion exercises', 'Codman\'s pendulum'], correct: 0,
      explanation: 'Cyriax physiotherapy pairs deep transverse friction massage with Mill\'s manipulation — a high-velocity, low-amplitude thrust through the olecranon in a specific set-up position.' },
    { stage: 'Contraindication', prompt: 'Which of these would be a contraindication to Cyriax deep friction / manipulation for this elbow?',
      options: ['Active infection or bursitis at the site', 'Mild forearm tightness', 'Slight loss of grip strength', 'Being right-handed'], correct: 0,
      explanation: 'Active infection, bursitis, nerve disorders, and soft-tissue ossification/calcification are contraindications to Cyriax friction and manipulation.' },
  ],
  summary: "Tennis elbow responds to activity modification, ultrasound/TENS, and — where appropriate — Cyriax deep friction with Mill's manipulation, always screening contraindications first."
},

{
  id: 'colles-fracture', category: 'upper-limb', difficulty: 'Beginner',
  title: "Colles Fracture",
  tagline: 'Fall on an outstretched hand, cast just removed',
  patient: { name: 'Mr. Sami, 61', role: 'Retired, cast removed 6 weeks ago', avatar: '🧓',
    history: [
      "I fell forward and put my hand out to catch myself.",
      "My wrist has been in a cast for weeks; it just came off.",
      "It's so stiff now — I can barely bend it at all.",
      "My fingers feel a bit clumsy too, like I've forgotten how to use them."
    ] },
  briefing: "A Colles fracture is a distal radius fracture from a fall on an outstretched hand, with dorsal/radial displacement. After immobilization, therapy focuses on regaining wrist and hand mobility, strength, and function.",
  steps: [
    { stage: 'Recognize the Case', prompt: 'A fall on an outstretched hand followed by cast immobilization of the wrist matches:',
      options: ['Colles fracture', 'Femoral shaft fracture', 'Meniscal tear', 'Bell\'s palsy'], correct: 0,
      explanation: 'Colles fracture is the classic distal radius fracture from a fall onto an outstretched hand ("FOOSH").' },
    { stage: 'Joint Mobilization', prompt: 'To specifically improve pronation/supination at the distal radioulnar joint, which glide is used?',
      options: ['Dorsal-palmar glide at the radiocarpal joint', 'Dorsal-ventral glide at the distal radioulnar joint', 'Medial-lateral glide of the elbow', 'Anterior glide of the shoulder'], correct: 1,
      explanation: 'Moving the ulna dorsal/palmar relative to the radius (distal radioulnar joint glide) increases joint play for pronation and supination.' },
    { stage: 'Early Active Exercise', prompt: 'Which exercise is appropriate EARLY in the supervised active program?',
      options: ['Isometric wrist flexor/extensor contractions progressing to active ROM', 'Maximal resisted deadlift', 'Return to boxing training', 'Full weight-bearing push-ups immediately'], correct: 0,
      explanation: 'The program starts with isometrics for wrist flexors/extensors, then progresses to active ROM, assisted stretching, and gradual weight-bearing.' },
    { stage: 'Functional Progression', prompt: 'What is the final stage of the rehabilitation program aiming for?',
      options: ['Return to pre-accident functional activities like writing, typing, and cooking', 'Permanent avoidance of hand use', 'Only isometric exercise forever', 'Immediate unrestricted heavy lifting'], correct: 0,
      explanation: 'Functional activities (writing, typing, cooking, and other pre-injury tasks) are the ultimate goal once strength and mobility are restored.' },
  ],
  summary: "Colles fracture rehab progresses through joint mobilization, isometrics, active ROM/stretching, intrinsic hand strengthening, and finally graded return to functional activities."
},

{
  id: 'carpal-tunnel-syndrome', category: 'upper-limb', difficulty: 'Beginner',
  title: "Carpal Tunnel Syndrome",
  tagline: 'Numb, tingling hand from repetitive typing',
  patient: { name: 'Rania, 33', role: 'Data entry clerk', avatar: '👩‍💻',
    history: [
      "My hand feels numb and tingly, especially at night — it wakes me up.",
      "I type for 8 hours a day at work.",
      "My thumb and first two fingers feel the worst.",
      "Sometimes I drop things without realizing my grip has weakened."
    ] },
  briefing: "Carpal tunnel syndrome results from median nerve compression at the wrist, often aggravated by repetitive wrist/hand movements such as typing, and produces pain, numbness/tingling and functional hand impairment.",
  steps: [
    { stage: 'Recognize the Case', prompt: 'Nocturnal numbness/tingling in the thumb and first two fingers with a repetitive-typing history is classic for:',
      options: ['Carpal tunnel syndrome', 'De Quervain\'s tenosynovitis', 'Torticollis', 'Ankylosing spondylitis'], correct: 0,
      explanation: 'Median nerve compression at the carpal tunnel classically causes night-time numbness/tingling in the thumb, index, and middle fingers.' },
    { stage: 'Nerve Structure', prompt: 'Which nerve is compressed in carpal tunnel syndrome?',
      options: ['The median nerve', 'The ulnar nerve', 'The radial nerve', 'The facial nerve'], correct: 0,
      explanation: 'The median nerve passes through the carpal tunnel and becomes compressed with increased synovial pressure/tendon swelling.' },
    { stage: 'Signature Technique', prompt: 'Which specific home exercise technique is a hallmark tool for carpal tunnel symptom management?',
      options: ['Tendon gliding exercises (open hand → hook fist → full fist → straight fist → "L" position)', 'Cervical traction', 'Mill\'s manipulation', 'Pendulum exercises'], correct: 0,
      explanation: 'Tendon gliding exercises move the flexor tendons through a sequence of hand positions to reduce pressure and improve gliding within the carpal tunnel.' },
    { stage: 'Strengthening', prompt: 'Once symptoms settle, which strengthening approach is appropriate?',
      options: ['Intrinsic hand exercises (theraputty squeezing, towel wringing) and graded weighted wrist work', 'Immediate maximal deadlifting', 'Avoid ever using the hand again', 'Cervical manipulation only'], correct: 0,
      explanation: 'Intrinsic hand-muscle work and graded wrist strengthening (biceps curls, wrist flexion/extension with light weights) support the functional recovery plan.' },
  ],
  summary: "Carpal tunnel syndrome is managed with modalities, tendon-gliding exercises, ergonomic/activity modification, and a graded strengthening program back to functional tasks."
},

{
  id: 'de-quervains-tenosynovitis', category: 'upper-limb', difficulty: 'Beginner',
  title: "De Quervain's Tenosynovitis",
  tagline: 'Painful thumb-side of the wrist in a new mother',
  patient: { name: 'Yasmin, 29', role: 'New mother, carries baby often', avatar: '🤱',
    history: [
      "The side of my wrist near my thumb is really painful.",
      "It's worse whenever I lift my baby with my thumb tucked under her arms.",
      "There's some swelling right at that spot too.",
      "Even twisting a doorknob makes it worse."
    ] },
  briefing: "De Quervain's tenosynovitis is painful inflammation of the extensor pollicis brevis and abductor pollicis longus tendons at the radial wrist, aggravated by thumb abduction, gripping, and ulnar deviation — very common in new parents ('mommy thumb').",
  steps: [
    { stage: 'Recognize the Case', prompt: 'Pain and swelling at the radial wrist/thumb base, worse with thumb abduction and gripping (e.g., lifting a baby), suggests:',
      options: ['De Quervain\'s tenosynovitis', 'Carpal tunnel syndrome', 'Colles fracture', 'Tennis elbow'], correct: 0,
      explanation: 'De Quervain\'s classically affects new parents from repetitive thumb abduction/lifting, causing pain right over the radial styloid tendons.' },
    { stage: 'Initial Management', prompt: 'What should INITIAL management include?',
      options: ['Immobilizing the thumb/wrist with a splint and avoiding repetitive thumb movements/pinching', 'Immediate aggressive thumb stretching to end range', 'Ignore it — no modification needed', 'Only heavy resistance training'], correct: 0,
      explanation: 'Early management rests the irritated tendons with a splint and activity modification (avoid repetitive thumb movement and pinching).' },
    { stage: 'Signature Test/Stretch', prompt: 'Which stretch specifically targets the extensor pollicis longus / thumb tendons in this condition?',
      options: ['EPL stretch (fingers curled around thumb, wrist bent toward the little-finger side)', 'Pendulum exercise', 'Hamstring stretch', 'Neck side-bending'], correct: 0,
      explanation: 'The EPL stretch — curling the fingers around the thumb and gently bending the wrist toward the ulnar side — directly stretches the involved tendons.' },
    { stage: 'Strengthening', prompt: 'Which strengthening tool is commonly used once acute pain has settled?',
      options: ['Tennis ball squeeze and wrist range-of-motion/strengthening exercises', 'High-impact plyometrics', 'Cervical traction', 'Bench press'], correct: 0,
      explanation: 'A tennis ball squeeze plus graded wrist ROM/strengthening (with light added weight) rebuilds tolerance once the acute inflammation has settled.' },
  ],
  summary: "De Quervain's tenosynovitis: rest/splint first, then targeted stretching (EPL stretch) and progressive strengthening, always avoiding the provoking thumb-pinch movement early on."
},

/* ══════════════════════════ TRUNK & SPINE ══════════════════════════ */

{
  id: 'lumbar-spondylosis', category: 'trunk', difficulty: 'Beginner',
  title: "Lumbar Spondylosis",
  tagline: 'Chronic low back stiffness in an older adult',
  patient: { name: 'Mr. Fathy, 63', role: 'Retired', avatar: '🧑‍🦳',
    history: [
      "My lower back has been stiff and achy for years, it just keeps progressing.",
      "It's worse after standing for a long time.",
      "I feel like my range of motion is really limited now.",
      "Nothing sudden happened — it just crept up on me."
    ] },
  briefing: "Lumbar spondylosis is progressive, irreversible degeneration of the lumbar vertebrae from cumulative mechanical stress, producing osteophytes, possible neural foraminal narrowing, and joint stiffness.",
  steps: [
    { stage: 'Recognize the Case', prompt: 'Slowly progressive, irreversible low back stiffness in an older adult with no clear trauma points to:',
      options: ['Lumbar spondylosis', 'Acute lumbar disc prolapse', 'Ankylosing spondylitis', 'Femoral shaft fracture'], correct: 0,
      explanation: 'Progressive degenerative change without acute trauma, in an older patient, is the classic picture of lumbar spondylosis.' },
    { stage: 'Modalities', prompt: 'Which modality package matches the standard protocol for this condition?',
      options: ['TENS 20 min, Ultrasound 5 min, Hot packs 15 min, Massage 5 min', 'Ice only for 45 minutes', 'Faradic stimulation to the face', 'None — modalities are contraindicated'], correct: 0,
      explanation: 'The standard package mirrors that used for cervical spondylosis: TENS, ultrasound, hot packs, and massage before exercise.' },
    { stage: 'Exercise Program', prompt: 'Which structured exercise program is the classic choice for this condition?',
      options: ['Williams flexion exercises (pelvic tilt, knee-to-chest, partial sit-up, hamstring/hip flexor stretch, squat)', 'McKenzie extension protocol only', 'Complete bed rest', 'Maximal deadlifting from day one'], correct: 0,
      explanation: 'Williams flexion exercises (pelvic tilt, single/double knee-to-chest, partial sit-ups, hamstring and hip-flexor stretches, and squats) are the classic program for lumbar spondylosis.' },
    { stage: 'Exercise Detail', prompt: 'In the Williams program, the "Double Knee to Chest" exercise is held for how long, and repeated how often?',
      options: ['Held 10 seconds, up to 15 times per day', 'Held 1 second, 100 times per day', 'Held 5 minutes, once a week', 'Not held at all, just bounced'], correct: 0,
      explanation: 'The double knee-to-chest stretch is held about 10 seconds and repeated up to 15 times per day, as with the other Williams flexion exercises.' },
  ],
  summary: "Lumbar spondylosis: modalities for pain, followed by the Williams flexion program to mobilize the lumbar spine and stretch the posterior chain and hip flexors."
},

{
  id: 'lumbar-disc-prolapse', category: 'trunk', difficulty: 'Intermediate',
  title: "Lumbar Disc Prolapse",
  tagline: 'Acute low back pain radiating down the leg',
  patient: { name: 'Hassan, 34', role: 'Warehouse worker', avatar: '👷',
    history: [
      "I lifted a heavy box and felt a sudden 'pop' in my lower back.",
      "The pain now shoots down the back of my leg.",
      "Bending forward makes it much worse; leaning back actually feels a little better.",
      "I heard sit-ups might help — should I be doing those right now?"
    ] },
  briefing: "A lumbar disc prolapse ('herniated' or 'slipped' disc) pushes disc material through a tear in the annulus, which may compress a nerve root and cause radicular leg pain — often provoked by flexion and eased by extension in the acute stage.",
  steps: [
    { stage: 'Recognize the Case', prompt: 'Sudden onset after lifting, with leg pain worsened by forward bending and eased by extension, best fits:',
      options: ['Lumbar disc prolapse', 'Ankylosing spondylitis', 'Total hip replacement recovery', 'Scoliosis'], correct: 0,
      explanation: 'A sudden mechanical event (lifting) with flexion-aggravated, extension-relieved radicular pain is typical of an acute disc prolapse.' },
    { stage: 'Precaution', prompt: 'He asks about doing sit-ups right now. What is the correct guidance?',
      options: ['Flexion exercises should be avoided in acute disc herniation', 'Sit-ups are the first-line treatment for this condition', 'Any exercise is fine, no restriction', 'Only cervical exercises are relevant here'], correct: 0,
      explanation: 'Flexion-based exercises (like sit-ups) are avoided in acute disc herniation because flexion increases posterior disc pressure and can worsen symptoms.' },
    { stage: 'Signature Program', prompt: 'Which exercise program is specifically indicated here (extension-biased), rather than the flexion program used for spondylosis?',
      options: ['McKenzie back extension exercises (prone lying → prone press-ups → progressive extension)', 'Williams flexion exercises', 'Kegel exercises', 'Mill\'s manipulation'], correct: 0,
      explanation: 'The McKenzie extension protocol (prone lying, prone-on-elbows, prone press-ups, progressive extension with pillows, standing extension) is the classic choice when symptoms centralize with extension.' },
    { stage: 'Traction Precaution', prompt: 'If traction is being considered and there is CENTRAL disc herniation with cord pressure, what should you do?',
      options: ['Proceed with strong traction regardless', 'Recognize this as a contraindication to traction and avoid it', 'Apply traction only in prone position, ignoring the contraindication', 'Increase traction force to compensate'], correct: 1,
      explanation: 'Central spinal cord pressure (e.g. from a central disc herniation) is a listed contraindication to spinal traction.' },
  ],
  summary: "Acute lumbar disc prolapse favors an extension-biased (McKenzie) approach, avoiding flexion early on, with traction used cautiously and only once contraindications are ruled out."
},

{
  id: 'ankylosing-spondylitis', category: 'trunk', difficulty: 'Intermediate',
  title: "Ankylosing Spondylitis",
  tagline: 'Progressive spinal stiffness in a young adult',
  patient: { name: 'Omar, 27', role: 'Gradually stiffening posture', avatar: '🧑',
    history: [
      "My back and neck have gotten stiffer and stiffer over the past couple of years.",
      "It's worst in the morning and actually improves a bit as I move around during the day.",
      "My doctor mentioned my spine might start to look like 'bamboo' on X-ray if untreated.",
      "My hips have started to feel stiff too."
    ] },
  briefing: "Ankylosing spondylitis (Bechterew's disease) is a spondyloarthritis of the spine and pelvis, with progressive stiffness from bony fusion at the joint capsule/cartilage, most affecting the axial skeleton and sacroiliac joints — giving the classic 'bamboo spine' appearance.",
  steps: [
    { stage: 'Recognize the Case', prompt: 'Progressive axial stiffness in a young adult, worse in the morning and improving with activity, with sacroiliac/hip involvement, points to:',
      options: ['Ankylosing spondylitis', 'Lumbar disc prolapse', 'Colles fracture', 'Adhesive capsulitis'], correct: 0,
      explanation: 'Morning stiffness that improves with movement, in a young adult with axial/SI joint involvement, is the classic inflammatory pattern of AS.' },
    { stage: 'Pathology Recognition', prompt: 'The "bamboo spine" appearance on X-ray reflects which underlying process?',
      options: ['Bone formation/fusion at the joint capsule and cartilage over time (syndesmophyte formation)', 'A single acute fracture', 'Disc herniation only', 'Muscle tears'], correct: 0,
      explanation: 'Progressive syndesmophyte formation and eventual fusion across the discs/joints creates the classic rigid "bamboo spine" appearance.' },
    { stage: 'Treatment Goal', prompt: 'What is the overall goal of the structured exercise program in AS?',
      options: ['Increase mobility and correct/limit postural deformity through rotation, extension and stretching exercises', 'Complete immobilization to protect the spine', 'Heavy axial-loaded lifting only', 'Avoid all exercise indefinitely'], correct: 0,
      explanation: 'The AS exercise program (seated rotation, head turning, trunk curl/stretch, full back stretch, back arch) is designed to maintain mobility and slow postural deformity, since the disease itself cannot be reversed.' },
    { stage: 'Exercise Detail', prompt: 'In the "Full Back Stretch" (four-point kneeling) exercise, what movement is performed?',
      options: ['Sink bottom toward the heels and chest toward the floor from an all-fours position, breathing out into the stretch', 'Standing on one leg with eyes closed', 'Maximal cervical traction', 'Deep transverse friction over the spine'], correct: 0,
      explanation: 'From four-point kneeling, the patient sinks the hips back toward the heels and chest toward the floor (like "child\'s pose"), exhaling into the stretch.' },
  ],
  summary: "Ankylosing spondylitis is managed with a structured, progressive mobility program (rotation, extension, stretching) to preserve function and slow the postural deformity that comes from spinal fusion."
},

{
  id: 'scoliosis', category: 'trunk', difficulty: 'Intermediate',
  title: "Scoliosis",
  tagline: 'A teenage patient with an asymmetric spine',
  patient: { name: 'Layla, 14', role: 'Noticed by school screening', avatar: '🧒',
    history: [
      "My school nurse noticed my shoulders and hips look uneven.",
      "I don't really have pain, I just noticed my clothes hang differently now.",
      "One shoulder blade seems to stick out more than the other.",
      "My doctor said the cause isn't clear — is that normal?"
    ] },
  briefing: "Scoliosis is a lateral (sideways) curvature of the spine, sometimes with a rotational component causing a rib 'gibbous'. It may be congenital, idiopathic (most common — cause unknown), or secondary to a neuromuscular condition.",
  steps: [
    { stage: 'Recognize the Case', prompt: 'A painless, asymmetric spine noticed at a school screening in an adolescent, with unclear cause, is most likely:',
      options: ['Idiopathic scoliosis', 'Ankylosing spondylitis', 'Lumbar disc prolapse', 'Femoral shaft fracture'], correct: 0,
      explanation: 'Idiopathic scoliosis (cause unknown, sub-classified by age of onset) is the most common type and often first noticed at school screening in adolescence.' },
    { stage: 'Classification', prompt: 'If scoliosis is caused by a known neuromuscular condition such as cerebral palsy, how is it classified?',
      options: ['Secondary scoliosis', 'Congenital scoliosis', 'Idiopathic scoliosis', 'Post-traumatic torticollis'], correct: 0,
      explanation: 'Scoliosis resulting from a primary neuromuscular condition (e.g., cerebral palsy, spina bifida, spinal muscular atrophy) is classified as secondary.' },
    { stage: 'Treatment Sequence', prompt: 'What comes FIRST in the treatment session, before targeted stretching?',
      options: ['A warm-up (e.g. 8 minutes on a treadmill or elliptical)', 'Maximal resistance training', 'Cervical traction', 'Deep transverse friction'], correct: 0,
      explanation: 'Sessions begin with a general warm-up (about 8 minutes of treadmill/elliptical) before moving into specific stretching and mobilizing exercises.' },
    { stage: 'Exercise Goal', prompt: 'The "child position" (four-point kneeling, sinking hips to heels) exercise mainly targets which goal?',
      options: ['Stretching the thoracic paravertebral, lumbar and gluteal regions while mobilizing the spine', 'Building maximal grip strength', 'Improving cardiovascular endurance only', 'Reducing carpal tunnel symptoms'], correct: 0,
      explanation: 'The child position stretches the thoracic paravertebral, lumbar, and gluteal regions and helps mobilize the vertebral spine as part of the scoliosis program.' },
  ],
  summary: "Scoliosis management (for milder, non-surgical cases) uses a warm-up plus a structured sequence of spinal-mobilizing and stretching exercises to support posture and flexibility."
},

/* ══════════════════════════ LOWER LIMB ══════════════════════════ */

{
  id: 'total-hip-replacement', category: 'lower-limb', difficulty: 'Intermediate',
  title: "Total Hip Replacement (Post-Op)",
  tagline: 'Day 3 after elective total hip arthroplasty',
  patient: { name: 'Mrs. Faten, 68', role: 'Post-op day 3, osteoarthritis', avatar: '👵',
    history: [
      "My new hip feels good so far, but I'm nervous about moving wrong.",
      "The nurse told me not to cross my legs or bend past 90 degrees — why is that?",
      "I'm using a walker right now to get around.",
      "When can I go back to driving and using the shower normally?"
    ] },
  briefing: "Total hip replacement (THA) rehab must respect hip precautions for about 3 months to protect the new joint, then progress through staged weight-bearing, strengthening, and functional/gait retraining.",
  steps: [
    { stage: 'Precautions', prompt: 'Which of these is one of the standard total hip precautions to follow for about 3 months post-op?',
      options: ['Avoid hip flexion past 90°, avoid internal rotation, avoid crossing the midline', 'Avoid all standing completely', 'Avoid using crutches or a walker', 'Avoid drinking water'], correct: 0,
      explanation: 'Standard THA precautions include avoiding hip flexion beyond 90°, internal rotation of the leg, crossing the midline, and sitting on low/soft surfaces.' },
    { stage: 'Early Phase Exercise', prompt: 'Which exercise is appropriate in PHASE 1 (Weeks 1–3) of the post-op protocol?',
      options: ['Quad sets, glut sets, heel slides, supine hip abduction', 'Running on a treadmill', 'Deep squats past 90° hip flexion', 'Contact sport drills'], correct: 0,
      explanation: 'Phase 1 focuses on gentle activation exercises like quad sets, glut sets, heel slides, and supine hip abduction — well within the precautions.' },
    { stage: 'Driving / Weight-bearing', prompt: 'When is driving typically permitted after THA?',
      options: ['Not until off pain medication and walking without a cane, usually around 6 weeks', 'Immediately after surgery', 'Only after 3 years', 'As soon as the patient wants'], correct: 0,
      explanation: 'Driving is prohibited for about the first 6 weeks, or until the patient is off pain medication and walking without a cane.' },
    { stage: 'Cardio Choice', prompt: 'In Phase 3 (Week 7 – 3 months), which cardio activity should be AVOIDED, and why?',
      options: ['Treadmill walking — because of joint compression on the new hip', 'Stationary cycling — no reason to avoid it', 'Aquatic exercise — no reason to avoid it', 'Elliptical — no reason to avoid it'], correct: 0,
      explanation: 'Treadmill walking is specifically avoided in this phase due to the compressive load it places on the new joint; elliptical, cycling, and aquatic exercise are preferred.' },
  ],
  summary: "THA rehab: protect the joint with precautions for ~3 months, progress gently through gravity-eliminated then resisted exercises, and choose low-impact cardio options until later phases."
},

{
  id: 'femoral-shaft-fracture', category: 'lower-limb', difficulty: 'Advanced',
  title: "Femoral Shaft Fracture",
  tagline: 'Post-operative fixation after a motor accident',
  patient: { name: 'Mostafa, 29', role: 'Post-op, motorcycle accident', avatar: '🏍️',
    history: [
      "I broke my thigh bone in the accident — it took a lot of force apparently.",
      "I'm not allowed to put weight on it yet, I'm non-weight-bearing.",
      "My knee feels stiff since the surgery.",
      "How long until I can walk normally again?"
    ] },
  briefing: "Femoral shaft fractures require a large-force trauma (e.g., road traffic accidents) and are serious injuries needing 3–6 months to heal. Post-op rehab is staged around gradually increasing weight-bearing status.",
  steps: [
    { stage: 'Recognize the Case', prompt: 'A fracture of the largest bone in the body from a high-energy trauma, needing 3–6 months to heal, describes:',
      options: ['A femoral shaft fracture', 'A Colles fracture', 'De Quervain\'s tenosynovitis', 'A meniscal tear'], correct: 0,
      explanation: 'The femur is the largest, strongest bone; fracturing it needs high-energy trauma and a long healing timeline (3–6 months).' },
    { stage: 'Phase I Focus', prompt: 'In Phase I (Weeks 0–4, non-weight-bearing), what is emphasized?',
      options: ['Gentle ROM of hip/knee/ankle, isometrics, and modalities like Faradic stimulation for muscle re-education', 'Full weight-bearing squats', 'Running program', 'Return to contact sport'], correct: 0,
      explanation: 'While non-weight-bearing, therapy focuses on gentle ROM, isometric strengthening, and modalities (e.g. Faradic stimulation) for muscle re-education and swelling control.' },
    { stage: 'Weight-bearing Progression', prompt: 'What typically changes between Phase I and Phase II of this protocol?',
      options: ['Weight-bearing progresses per physician orders and closed-chain strengthening (mini-squats, step-ups) is introduced', 'The patient is discharged with no further therapy', 'All modalities are stopped', 'The brace is removed permanently on day 1'], correct: 0,
      explanation: 'Phase II (weeks 4–8) introduces progressive weight-bearing (per physician orders) and adds closed-chain work like mini-squats and heel/toe raises.' },
    { stage: 'Fitness Conditioning', prompt: 'Which conditioning tools are appropriate in Phase II for fitness, while protecting the healing bone?',
      options: ['Stationary bicycle and pool therapy', 'Heavy barbell squats', 'Plyometric box jumps', 'Contact sport scrimmage'], correct: 0,
      explanation: 'Stationary cycling and pool therapy provide low-impact cardiovascular conditioning appropriate for a still-healing femoral shaft fracture.' },
  ],
  summary: "Femoral shaft fracture rehab is staged carefully around weight-bearing status set by the surgeon, moving from gentle ROM/isometrics to closed-chain strengthening and eventually gait/balance training."
},

{
  id: 'knee-osteoarthritis', category: 'lower-limb', difficulty: 'Beginner',
  title: "Knee Osteoarthritis",
  tagline: 'Chronic knee pain and swelling in an active older adult',
  patient: { name: 'Mrs. Nadia, 60', role: 'Enjoys doubles tennis', avatar: '👵',
    history: [
      "My knee has been aching and swelling for a while, especially after doubles tennis.",
      "I've noticed my knees look a bit bowed when I stand.",
      "I've gained a little weight over the past year too.",
      "I'm worried I'll have to give up tennis completely — do I really have to stop?"
    ] },
  briefing: "Knee OA is degeneration of the articular cartilage causing pain, swelling, and reduced tolerance for activity. Management is multi-modal: activity modification, footwear, weight management, pain control, and targeted exercise — not necessarily total activity cessation.",
  steps: [
    { stage: 'Recognize the Case', prompt: 'Activity-related knee pain and swelling in an older adult with varus (bow-legged) alignment best fits:',
      options: ['Knee osteoarthritis', 'Meniscal repair recovery', 'Ankle ligament sprain', 'Post-ACL reconstruction'], correct: 0,
      explanation: 'Degenerative pain/swelling tied to activity load, with possible varus/valgus malalignment, is the classic presentation of knee OA.' },
    { stage: 'Activity Advice', prompt: 'What is the best advice regarding her tennis?',
      options: ['Modify activity to a tolerable level (e.g., limit frequency/intensity) rather than stopping completely', 'She must stop tennis forever immediately', 'No modification needed at all', 'Switch only to high-impact running instead'], correct: 0,
      explanation: 'Activity modification — finding the level of activity the knee tolerates without a significant symptom flare — is preferred over complete cessation.' },
    { stage: 'Mechanical Aid', prompt: 'For a patient with varus (bow-legged) alignment, which mechanical aid is described as helpful?',
      options: ['Unloading wedges in the shoes to shift load off the affected compartment', 'A rigid full-leg cast', 'Ankle weights during walking', 'High heels'], correct: 0,
      explanation: 'Unloading wedges redistribute load away from the more stressed side of the joint in varus/valgus malalignment, helping pain and reducing wear.' },
    { stage: 'Home Exercise', prompt: 'Which home exercise is specifically listed for knee OA and targets the hip external rotators/abductors using a resistance band around the knees?',
      options: ['The "clam" exercise', 'Mill\'s manipulation', 'EPL stretch', 'Pendulum exercise'], correct: 0,
      explanation: 'The clam exercise — sidelying, band around the knees, lifting the top knee without rotating the hip back — targets hip abductor/external rotator strength important for knee OA.' },
  ],
  summary: "Knee OA management blends activity modification, appropriate footwear/wedges, weight management, pain control, and a structured home exercise program (quad sets, clams, leg raises, bridging, calf raises)."
},

{
  id: 'post-acl-reconstruction', category: 'lower-limb', difficulty: 'Advanced',
  title: "Post-ACL Reconstruction",
  tagline: 'Day 1 after ACL graft surgery, athlete',
  patient: { name: 'Kareem, 22', role: 'Basketball player, ACL graft yesterday', avatar: '🏀',
    history: [
      "I tore my ACL doing a pivoting move on the court, and had surgery yesterday.",
      "My knee is in a brace locked straight right now.",
      "They gave me a CPM machine to use.",
      "I really want to know — when can I get back to playing?"
    ] },
  briefing: "ACL injuries commonly occur in pivoting sports (football, basketball). Post-reconstruction rehab is a carefully staged process protecting the new graft while restoring motion, strength, and eventually sport-specific function — return to sport is typically not before ~6 months.",
  steps: [
    { stage: 'Recognize the Case', prompt: 'A pivoting-sport knee injury requiring surgical graft reconstruction, now day 1 post-op, describes:',
      options: ['Post-ACL reconstruction rehabilitation', 'Meniscal repair only', 'Knee osteoarthritis', 'Ankle ligament sprain'], correct: 0,
      explanation: 'ACL tears are classically from pivoting sports; this patient is now in the immediate post-operative reconstruction phase.' },
    { stage: 'POD 1 Exercise', prompt: 'On Post-Op Day 1, which exercises are appropriate?',
      options: ['Ankle pumps, passive knee extension to zero, straight leg raises, quad/glut sets', 'Full squats to 90°', 'Jogging on a treadmill', 'Return-to-sport agility drills'], correct: 0,
      explanation: 'Day 1 focuses on ankle pumps, achieving full passive extension, straight leg raises, and quad/glut activation — very gentle, protective work.' },
    { stage: 'Maximum Protection Phase', prompt: 'What is the main GOAL of the Maximum Protection Phase (weeks 2–6)?',
      options: ['Absolute control of external forces to protect the graft while decreasing swelling and preventing quad atrophy', 'Maximal resisted leg press', 'Full return to competitive sport', 'Removing the brace completely on day 1'], correct: 0,
      explanation: 'This phase prioritizes graft protection, controlling swelling/fibrosis, and preventing quad atrophy — not aggressive loading.' },
    { stage: 'Return-to-Sport Criteria', prompt: 'Which criterion is part of clearance to RETURN TO SPORT at ~6 months?',
      options: ['Knee flexion beyond 130°, hamstring and quad strength at least 80% of the normal leg, no swelling, running program completed', 'Any amount of swelling is fine', 'No strength testing required', 'Return is always fixed at exactly 6 weeks regardless of progress'], correct: 0,
      explanation: 'Return-to-sport criteria include adequate ROM (>130° flexion), at least 80% strength symmetry for hamstrings/quads, no swelling, good stability, and a completed running program — usually around 4–6 months.' },
  ],
  summary: "ACL reconstruction rehab is a long, criteria-based journey: protect the graft early, restore ROM/strength through controlled and then advanced phases, and only clear return to sport once objective strength/function criteria are met."
},

{
  id: 'meniscal-repair', category: 'lower-limb', difficulty: 'Intermediate',
  title: "Meniscal Repair",
  tagline: 'Locking knee, post keyhole meniscus surgery',
  patient: { name: 'Ziad, 26', role: 'Recreational footballer, post keyhole surgery', avatar: '⚽',
    history: [
      "My knee kept locking and catching before the surgery.",
      "It was a minimally invasive 'keyhole' procedure to repair the meniscus.",
      "Right now I'm in a hinged brace, locked straight, and touch-toe weight-bearing.",
      "How soon can I put full weight on it?"
    ] },
  briefing: "A meniscal repair is a minimally invasive keyhole procedure to fix a torn meniscus. Recovery is staged carefully around ROM limits and weight-bearing percentages, protecting the repair site while it heals.",
  steps: [
    { stage: 'Recognize the Case', prompt: 'Pre-op knee locking/catching, followed by minimally invasive keyhole surgery, describes:',
      options: ['Meniscal repair', 'Total hip replacement', 'Femoral shaft fracture', 'Bell\'s palsy'], correct: 0,
      explanation: 'Mechanical locking/catching is a classic meniscal symptom, and the described procedure is a keyhole (arthroscopic) meniscal repair.' },
    { stage: 'Stage 1 Weight-bearing', prompt: 'In Stage 1 (Day 1–2 weeks), what is the weight-bearing status?',
      options: ['Touch-toe weight-bearing (TTWB) with the brace locked in full extension', 'Full unrestricted weight-bearing', 'Completely non-weight-bearing with no brace', 'Weight-bearing only on the unaffected leg forever'], correct: 0,
      explanation: 'Stage 1 keeps the patient touch-toe weight-bearing with the brace locked at full extension to protect the repair site.' },
    { stage: 'Weight-bearing Progression', prompt: 'By what stage does weight-bearing typically progress to 100%?',
      options: ['By around 8–9 weeks (Stage 3, 6–10 weeks)', 'On day 1 post-op', 'Never — permanent partial weight-bearing', 'Only after 12 months'], correct: 0,
      explanation: 'Weight-bearing is progressed gradually: 25% around 4–6 weeks, 50% then up to 75% by week 7, and 100% by about week 8–9.' },
    { stage: 'Return to Sport', prompt: 'What is required before resuming main sport participation?',
      options: ['Near-full ROM and at least ~80% quad/hamstring strength versus the other leg, usually achieved by 4–5 months', 'Return is allowed immediately once the brace is off', 'No strength criteria are needed', 'Only pain level is checked, nothing else'], correct: 0,
      explanation: 'Return to sport requires near-full ROM and roughly 80% strength symmetry versus the uninvolved leg — typically reached by about 4–5 months.' },
  ],
  summary: "Meniscal repair rehab is a carefully staged, criteria-based progression through ROM and weight-bearing limits, protecting the healing repair before returning to full sport participation."
},

{
  id: 'ankle-ligament-sprain', category: 'lower-limb', difficulty: 'Beginner',
  title: "Ankle Ligament Sprain",
  tagline: 'Rolled ankle stepping off a curb',
  patient: { name: 'Dina, 21', role: 'University student', avatar: '🧑‍🎓',
    history: [
      "I rolled my ankle stepping off a curb — my foot turned inward.",
      "It swelled up quickly and bruised on the outside of my ankle.",
      "It's painful to put weight on it now.",
      "How long until I can walk normally, or run again?"
    ] },
  briefing: "Ankle sprains are common, with inversion injuries (85% of cases) most often tearing the anterior talofibular ligament (ATFL) on the lateral aspect of the ankle.",
  steps: [
    { stage: 'Recognize the Case', prompt: 'An inward-turning ("inversion") ankle injury with swelling/bruising on the OUTSIDE of the ankle most likely involves:',
      options: ['The anterior talofibular ligament (lateral ankle sprain)', 'The deltoid ligament (medial ankle sprain)', 'The Achilles tendon rupture', 'The medial meniscus'], correct: 0,
      explanation: 'Inversion sprains (85% of all ankle sprains) most commonly injure the ATFL on the lateral side of the ankle.' },
    { stage: 'Modalities', prompt: 'Which modality package is standard for the acute/subacute phase of this injury?',
      options: ['TENS 20 min, Ultrasound 5 min, Hot packs 15 min, Massage 5 min', 'Only prolonged heat for hours', 'Immediate high-velocity manipulation', 'Complete rest with no modalities at all'], correct: 0,
      explanation: 'The standard modality package used across many of these musculoskeletal conditions (TENS, ultrasound, hot packs, massage) also applies here once the acute swelling is controlled.' },
    { stage: 'ROM Exercise', prompt: 'Which simple ROM exercise is a classic early choice for ankle sprains?',
      options: ['The "alphabet exercise" — writing letters in the air with the toes', 'Deep squats', 'Cervical traction', 'Mill\'s manipulation'], correct: 0,
      explanation: 'The alphabet exercise takes the ankle through its full range of motion in a fun, functional way and is a classic early-stage choice.' },
    { stage: 'Strengthening Progression', prompt: 'Once ROM/swelling/pain are controlled, which strengthening approach should begin?',
      options: ['Isometrics in all 4 directions, progressing to resisted tubing exercises through inversion/eversion/plantarflexion/dorsiflexion', 'Immediate return to competitive running', 'Only passive stretching forever', 'Skip strengthening — go straight to sport'], correct: 0,
      explanation: 'Strengthening begins with gentle isometrics against an immovable object, then progresses to resisted tubing work through all four ankle movement directions.' },
  ],
  summary: "Ankle sprain rehab progresses from modality-based pain/swelling control, through full ROM exercises, into a structured strengthening and proprioception program before returning to sport."
},

/* ══════════════════════════ NEURO & OTHER ══════════════════════════ */

{
  id: 'stroke-rehabilitation', category: 'neuro-other', difficulty: 'Advanced',
  title: "Stroke Rehabilitation",
  tagline: 'Weakness on one side after a cerebrovascular accident',
  patient: { name: 'Mr. Gaber, 66', role: '2 weeks post-stroke', avatar: '🧑‍🦽',
    history: [
      "My left arm and leg feel weak since my stroke two weeks ago.",
      "My family has to help me get out of bed.",
      "I have trouble finding the right words sometimes too.",
      "Will I ever get full movement back?"
    ] },
  briefing: "A stroke (cerebrovascular accident) results from disturbed blood supply to the brain (ischemia or hemorrhage), often causing one-sided weakness, speech difficulty, or visual impairment. Rehab is graded — from passive movement to active resisted training and functional/balance work.",
  steps: [
    { stage: 'Recognize the Case', prompt: 'Sudden one-sided weakness and word-finding difficulty following a disturbance in brain blood supply describes:',
      options: ['Stroke (cerebrovascular accident)', 'Bell\'s palsy', 'Erb\'s palsy', 'Carpal tunnel syndrome'], correct: 0,
      explanation: 'CVA/stroke causes focal brain dysfunction from ischemia or hemorrhage, commonly producing one-sided (hemiparetic) weakness and speech difficulty.' },
    { stage: 'Early ROM Principle', prompt: 'When performing PASSIVE range of motion on a weak limb with limited range, what is the key rule?',
      options: ['Move only within a pain-free range, slowly, respecting available motion — never force through resistance or pain', 'Force through any resistance to "break up" stiffness', 'Skip passive ROM entirely', 'Only move the unaffected side'], correct: 0,
      explanation: 'Passive ROM must stay within pain-free range, performed slowly and carefully — forcing movement risks joint or soft-tissue injury.' },
    { stage: 'Exercise Progression', prompt: 'What is the purpose of "active-assistive" range of motion in this patient?',
      options: ['Strengthening a limb that does not yet have full active range, with the therapist partially assisting the movement', 'Testing maximal resisted strength', 'Replacing all passive ROM permanently', 'Only used for the unaffected side'], correct: 0,
      explanation: 'Active-assistive ROM helps a weak limb move through more range than it could manage alone, bridging from passive movement toward independent active movement.' },
    { stage: 'Functional Training', prompt: 'Which category of exercise specifically targets tasks like buttoning clothes, feeding, and writing?',
      options: ['Fine motor skills training', 'Balance exercises', 'Weight-bearing exercises', 'Stretching exercises'], correct: 0,
      explanation: 'Fine motor skills training focuses the hand for manipulating small objects — essential for buttoning, feeding, writing, and similar daily tasks.' },
  ],
  summary: "Stroke rehabilitation progresses through passive → active-assistive → active → resisted exercise, alongside stretching, weight-bearing, balance, and fine-motor work tailored to the patient's recovery stage."
},

{
  id: 'bells-palsy', category: 'neuro-other', difficulty: 'Beginner',
  title: "Bell's Palsy",
  tagline: 'Sudden one-sided facial droop',
  patient: { name: 'Amira, 38', role: 'Woke up with facial weakness', avatar: '🧑',
    history: [
      "I woke up yesterday and one side of my face just wouldn't move properly.",
      "I can't fully close my eye on that side.",
      "My mouth droops on that side too — it happened overnight.",
      "Will facial massage actually help me recover faster?"
    ] },
  briefing: "Bell's palsy is facial paralysis from dysfunction of the facial nerve (cranial nerve VII), producing sudden partial or complete one-sided facial weakness, often with inability to close the eye on the affected side.",
  steps: [
    { stage: 'Recognize the Case', prompt: 'Sudden, overnight one-sided facial weakness with inability to fully close the eye describes:',
      options: ["Bell's palsy (facial nerve/CN VII dysfunction)", 'Erb\'s palsy', 'A stroke affecting the limbs only', 'Torticollis'], correct: 0,
      explanation: 'Bell\'s palsy is a rapid-onset, usually one-sided facial paralysis from facial nerve (CN VII) dysfunction, often with incomplete eye closure.' },
    { stage: 'Modalities', prompt: 'Which modalities are typically used in Bell\'s palsy management?',
      options: ['Faradic stimulation, infrared, and facial massage', 'Spinal traction', 'Deep transverse friction over the epicondyle', 'Cervical manipulation'], correct: 0,
      explanation: 'Faradic (electrical) stimulation, infrared heat, and facial massage are the classic modality combination used for Bell\'s palsy.' },
    { stage: 'Massage Technique', prompt: 'In the "half circular" massage technique, what does the therapist\'s hand on the AFFECTED side do?',
      options: ['Pushes downward, as the other hand pulls upward, correcting the mouth position', 'Stays completely still', 'Only pulls upward, never down', 'Applies deep transverse friction only'], correct: 0,
      explanation: 'In the half-circular technique, the affected-side hand pushes downward while the other hand pulls upward, symbolically/mechanically correcting the drooped mouth position.' },
    { stage: 'Home Exercise', prompt: 'Which of these is a typical home exercise instruction for Bell\'s palsy?',
      options: ['Smiling with teeth showing, raising the eyebrows, and closing the eyes with effort', 'Cervical traction', 'Deep squats', 'Wrist tendon gliding'], correct: 0,
      explanation: 'Home facial exercises target the affected muscles directly: smiling with teeth showing, raising/lowering eyebrows, closing eyes firmly, and puffing cheeks.' },
  ],
  summary: "Bell's palsy is managed with electrical stimulation, heat, and specific facial massage techniques, plus a structured home program of facial expression exercises performed consistently for best recovery."
},

];

function getPhysioCaseById(id) { return PHYSIO_CASES.find(c => c.id === id) || null; }
function getPhysioCasesByCategory(catId) { return PHYSIO_CASES.filter(c => c.category === catId); }
function getPhysioCategoryMeta(catId) { return PHYSIO_CASE_CATEGORIES.find(c => c.id === catId) || null; }
function physioCaseMaxScore(c) { return c.steps.length * 10; }
