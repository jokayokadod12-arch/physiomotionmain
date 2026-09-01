/**
 * anatomy-data.js — ANATOMY module (pilot region: Upper Limb)
 * Static content only. All explanations are written from scratch based on
 * standard musculoskeletal-anatomy knowledge (not copied from any textbook).
 * Diagrams are original simplified silhouettes with a highlight marker —
 * not reproductions of any published illustration.
 *
 * Structure mirrors a standard PT anatomy curriculum: Bones → Joints → Muscles
 * (grouped) → 30-question MCQ self-test per region.
 */
'use strict';

const ANATOMY_REGIONS = [
  { id: 'upper-limb', label: 'Upper Limb', sub: 'Shoulder · Elbow · Forearm · Wrist · Hand', icon: '💪', color: '#5A7A62', status: 'ready' },
  { id: 'lower-limb', label: 'Lower Limb', sub: 'Pelvis · Knee · Ankle · Foot', icon: '🦵', color: '#B8943F', status: 'soon' },
  { id: 'trunk-spine', label: 'Trunk & Spine', sub: 'Vertebral column · Thorax', icon: '🧍', color: '#4A6FA5', status: 'soon' },
  { id: 'head-neck', label: 'Head & Neck', sub: 'Skull · Cervical spine · Face', icon: '🧠', color: '#9B59B6', status: 'soon' },
];

// Reusable silhouette diagrams (original line art). Each muscle/bone points to
// a view + normalized x/y (0–100) where the highlight marker is drawn.
const ANATOMY_DIAGRAMS = {
  'shoulder-ant': { view: 'Shoulder & Arm — Front', viewBox: '0 0 200 260',
    svg: `<path d="M100 20c-14 0-24 9-24 22 0 6 2 11 5 15-16 6-27 18-30 34l-8 62c-1 8 3 15 11 17 7 2 14-3 16-10l10-46 2 70-4 70c-1 8 5 15 13 15s14-6 14-14l3-64 3 64c0 8 6 14 14 14s14-7 13-15l-4-70 2-70 10 46c2 7 9 12 16 10 8-2 12-9 11-17l-8-62c-3-16-14-28-30-34 3-4 5-9 5-15 0-13-10-22-24-22z" fill="none" stroke="var(--sage-light)" stroke-width="2.2"/>` },
  'shoulder-post': { view: 'Shoulder & Arm — Back', viewBox: '0 0 200 260',
    svg: `<path d="M100 20c-14 0-24 9-24 22 0 6 2 11 5 15-16 6-27 18-30 34l-8 62c-1 8 3 15 11 17 7 2 14-3 16-10l10-46 2 70-4 70c-1 8 5 15 13 15s14-6 14-14l3-64 3 64c0 8 6 14 14 14s14-7 13-15l-4-70 2-70 10 46c2 7 9 12 16 10 8-2 12-9 11-17l-8-62c-3-16-14-28-30-34 3-4 5-9 5-15 0-13-10-22-24-22z" fill="none" stroke="var(--gold-light)" stroke-width="2.2"/>
      <path d="M70 60 L100 100 L130 60" fill="none" stroke="var(--gold-light)" stroke-width="1.4" stroke-dasharray="3 3"/>` },
  'forearm-ant': { view: 'Forearm & Hand — Palm side', viewBox: '0 0 160 240',
    svg: `<path d="M80 10 L70 110 C60 120 40 130 34 150 L28 200 C27 208 33 214 40 213 C46 212 50 207 51 200 L58 155 L60 220 C60 228 66 234 74 234 C82 234 88 228 88 220 L88 160 L92 220 C92 228 98 234 106 234 C114 234 120 228 120 220 L120 155 L127 200 C128 207 132 212 138 213 C145 214 151 208 150 200 L144 150 C138 130 118 120 108 110 L90 10 Z" fill="none" stroke="var(--sage-light)" stroke-width="2.2"/>` },
  'forearm-post': { view: 'Forearm & Hand — Back side', viewBox: '0 0 160 240',
    svg: `<path d="M80 10 L70 110 C60 120 40 130 34 150 L28 200 C27 208 33 214 40 213 C46 212 50 207 51 200 L58 155 L60 220 C60 228 66 234 74 234 C82 234 88 228 88 220 L88 160 L92 220 C92 228 98 234 106 234 C114 234 120 228 120 220 L120 155 L127 200 C128 207 132 212 138 213 C145 214 151 208 150 200 L144 150 C138 130 118 120 108 110 L90 10 Z" fill="none" stroke="var(--gold-light)" stroke-width="2.2"/>` },
};

function anatMarker(diagramId, x, y) {
  return { diagram: diagramId, x, y };
}

// ─── BONES ───────────────────────────────────────────────
const ANATOMY_BONES = {
  'upper-limb': [
    { id:'clavicle', name:'Clavicle', group:'Shoulder Girdle',
      summary:'The collarbone — an S-shaped strut that braces the shoulder out from the sternum.',
      details:'Runs horizontally between the sternum (medial end) and the acromion of the scapula (lateral end). It is one of the most commonly fractured bones (often from a fall onto an outstretched hand or direct blow to the shoulder).',
      landmarks:['Sternal (medial) end', 'Acromial (lateral) end', 'Conoid tubercle'],
      marker: anatMarker('shoulder-ant', 50, 20) },
    { id:'scapula', name:'Scapula', group:'Shoulder Girdle',
      summary:'The flat, triangular "shoulder blade" that floats over the ribcage, anchored only by muscle.',
      details:'Provides the socket (glenoid fossa) for the humeral head and a broad surface for many shoulder muscles to attach. Its mobility on the rib cage (scapulothoracic motion) is essential for full overhead reach — this is the basis of "scapulohumeral rhythm".',
      landmarks:['Glenoid fossa', 'Acromion process', 'Coracoid process', 'Spine of scapula', 'Superior/inferior angle'],
      marker: anatMarker('shoulder-post', 55, 30) },
    { id:'humerus', name:'Humerus', group:'Arm',
      summary:'The single long bone of the upper arm, from shoulder to elbow.',
      details:'Its rounded head sits in the glenoid fossa to form the very mobile (but less stable) glenohumeral joint. Distally it flares into two condyles (capitulum and trochlea) that articulate with the radius and ulna at the elbow.',
      landmarks:['Head', 'Greater & lesser tubercle', 'Deltoid tuberosity', 'Medial/lateral epicondyle', 'Capitulum', 'Trochlea'],
      marker: anatMarker('shoulder-ant', 50, 55) },
    { id:'radius', name:'Radius', group:'Forearm',
      summary:'The lateral (thumb-side) forearm bone — it rotates around the ulna to turn the palm up or down.',
      details:'Small proximally (radial head), wide distally, opposite of the ulna. Its rotation at the proximal and distal radioulnar joints produces pronation and supination.',
      landmarks:['Radial head', 'Radial tuberosity', 'Styloid process'],
      marker: anatMarker('forearm-ant', 35, 15) },
    { id:'ulna', name:'Ulna', group:'Forearm',
      summary:'The medial (pinky-side) forearm bone — large proximally, forms the main elbow hinge.',
      details:'Its olecranon and trochlear notch wrap around the humeral trochlea, giving the elbow its stable hinge motion. It stays relatively fixed while the radius rotates around it.',
      landmarks:['Olecranon process', 'Trochlear notch', 'Coronoid process', 'Styloid process'],
      marker: anatMarker('forearm-post', 65, 15) },
    { id:'carpals', name:'Carpal Bones (×8)', group:'Wrist',
      summary:'Two rows of four small bones that make up the wrist.',
      details:'Proximal row: Scaphoid, Lunate, Triquetrum, Pisiform. Distal row: Trapezium, Trapezoid, Capitate, Hamate. The scaphoid is the most frequently fractured carpal bone (classic "fall on outstretched hand" injury) and is prone to poor healing due to its blood supply.',
      landmarks:['Scaphoid', 'Lunate', 'Triquetrum', 'Pisiform', 'Trapezium', 'Trapezoid', 'Capitate', 'Hamate'],
      marker: anatMarker('forearm-ant', 50, 65) },
    { id:'metacarpals', name:'Metacarpals (×5)', group:'Hand',
      summary:'The five bones forming the palm, one per finger/thumb ray.',
      details:'Numbered 1 (thumb) to 5 (little finger). Their heads form the knuckles (MCP joints).',
      landmarks:['Base', 'Shaft', 'Head'],
      marker: anatMarker('forearm-ant', 50, 78) },
    { id:'phalanges', name:'Phalanges', group:'Hand',
      summary:'The finger and thumb bones — 14 in total per hand.',
      details:'The thumb has 2 (proximal, distal); each finger has 3 (proximal, middle, distal).',
      landmarks:['Proximal phalanx', 'Middle phalanx', 'Distal phalanx'],
      marker: anatMarker('forearm-ant', 50, 90) },
  ]
};

// ─── JOINTS ──────────────────────────────────────────────
const ANATOMY_JOINTS = {
  'upper-limb': [
    { id:'sternoclavicular', name:'Sternoclavicular (SC) Joint', type:'Saddle',
      summary:'The only bony connection between the arm and the axial skeleton.', marker: anatMarker('shoulder-ant', 45, 15) },
    { id:'acromioclavicular', name:'Acromioclavicular (AC) Joint', type:'Plane/gliding',
      summary:'Where the clavicle meets the acromion; a common site of "separated shoulder" injuries from a fall onto the shoulder tip.', marker: anatMarker('shoulder-ant', 60, 18) },
    { id:'glenohumeral', name:'Glenohumeral (GH) Joint', type:'Ball and socket',
      summary:'The main shoulder joint — the most mobile joint in the body, which is exactly why it is also the least stable and most frequently dislocated.', marker: anatMarker('shoulder-ant', 52, 32) },
    { id:'elbow-complex', name:'Elbow Joint Complex', type:'Hinge (humeroulnar) + pivot (humeroradial)',
      summary:'Functions as a hinge for flexion/extension while the radial head also rotates for pronation/supination.', marker: anatMarker('forearm-ant', 50, 8) },
    { id:'radioulnar', name:'Radioulnar Joints (proximal + distal)', type:'Pivot',
      summary:'Working together, these two joints let the radius rotate around the ulna to pronate/supinate the forearm.', marker: anatMarker('forearm-ant', 45, 40) },
    { id:'wrist', name:'Wrist (Radiocarpal) Joint', type:'Condyloid',
      summary:'Between the distal radius and the proximal carpal row; allows flexion, extension, radial/ulnar deviation.', marker: anatMarker('forearm-ant', 50, 58) },
    { id:'hand-joints', name:'Hand Joints (CMC, MCP, IP)', type:'Saddle / condyloid / hinge',
      summary:'CMC joints (base of fingers) mostly glide; MCP knuckles allow flexion + some ab/adduction; IP joints are pure hinges.', marker: anatMarker('forearm-ant', 50, 85) },
  ]
};

// ─── MUSCLES (grouped) ───────────────────────────────────
const ANATOMY_MUSCLE_GROUPS = {
  'upper-limb': [
    { group: 'Superficial Shoulder Movers', muscles: [
      { id:'deltoid', name:'Deltoid', origin:'Lateral 1/3 of clavicle, acromion, spine of scapula', insertion:'Deltoid tuberosity of humerus',
        action:'Anterior fibers flex/internally rotate; middle fibers abduct; posterior fibers extend/externally rotate the shoulder.',
        note:'The main prime mover for shoulder abduction after the first ~15° (which supraspinatus initiates).', marker: anatMarker('shoulder-ant', 30, 45) },
      { id:'pec-major', name:'Pectoralis Major', origin:'Clavicle, sternum, upper costal cartilages', insertion:'Lateral lip of bicipital groove (humerus)',
        action:'Flexes, adducts, and internally rotates the shoulder.', note:'Big, powerful "pushing" muscle — think push-ups and bench press.', marker: anatMarker('shoulder-ant', 45, 45) },
      { id:'lat-dorsi', name:'Latissimus Dorsi', origin:'Lower thoracic/lumbar spine, iliac crest, lower ribs', insertion:'Floor of bicipital groove (humerus)',
        action:'Extends, adducts, and internally rotates the shoulder.', note:'The "climbing" muscle — pulling the body up toward a fixed arm (pull-ups).', marker: anatMarker('shoulder-post', 45, 55) },
      { id:'trapezius', name:'Trapezius', origin:'Occiput, spinous processes C7–T12', insertion:'Clavicle, acromion, spine of scapula',
        action:'Upper fibers elevate; middle fibers retract; lower fibers depress the scapula — together they upwardly rotate it for overhead reach.', note:'Often overworked/tight in people who sit at a desk all day.', marker: anatMarker('shoulder-post', 50, 25) },
      { id:'teres-major', name:'Teres Major', origin:'Inferior angle of scapula', insertion:'Medial lip of bicipital groove (humerus)',
        action:'Extends, adducts, internally rotates the shoulder.', note:"Nicknamed \"lat's little helper\" for sharing latissimus dorsi's action.", marker: anatMarker('shoulder-post', 40, 42) },
    ]},
    { group: 'Rotator Cuff (Deep Stabilizers)', muscles: [
      { id:'supraspinatus', name:'Supraspinatus', origin:'Supraspinous fossa of scapula', insertion:'Greater tubercle of humerus',
        action:'Initiates the first ~15° of shoulder abduction and stabilizes the humeral head in the glenoid.', note:'The most commonly injured rotator-cuff muscle/tendon.', marker: anatMarker('shoulder-post', 52, 22) },
      { id:'infraspinatus', name:'Infraspinatus', origin:'Infraspinous fossa of scapula', insertion:'Greater tubercle of humerus',
        action:'Externally rotates the shoulder; stabilizes the humeral head.', marker: anatMarker('shoulder-post', 52, 35) },
      { id:'teres-minor', name:'Teres Minor', origin:'Lateral border of scapula', insertion:'Greater tubercle of humerus',
        action:'Externally rotates the shoulder; stabilizes the humeral head.', marker: anatMarker('shoulder-post', 42, 38) },
      { id:'subscapularis', name:'Subscapularis', origin:'Subscapular fossa (anterior scapula)', insertion:'Lesser tubercle of humerus',
        action:'Internally rotates the shoulder; stabilizes the humeral head (the only rotator-cuff muscle on the front of the scapula).', marker: anatMarker('shoulder-ant', 55, 35) },
    ]},
    { group: 'Scapular Stabilizers', muscles: [
      { id:'rhomboids', name:'Rhomboids (Major & Minor)', origin:'Spinous processes C7–T5', insertion:'Medial border of scapula',
        action:'Retract and downwardly rotate the scapula; hold the scapula against the rib cage.', marker: anatMarker('shoulder-post', 50, 20) },
      { id:'levator-scap', name:'Levator Scapulae', origin:'Transverse processes C1–C4', insertion:'Superior angle of scapula',
        action:'Elevates the scapula; helps rotate the neck.', note:'Common source of "stiff neck" tightness.', marker: anatMarker('shoulder-post', 45, 10) },
      { id:'serratus-ant', name:'Serratus Anterior', origin:'Ribs 1–8/9 (lateral surface)', insertion:'Medial border of scapula (anterior surface)',
        action:'Protracts the scapula and rotates it upward — essential for full overhead pushing/punching motions.', note:'Weakness causes a "winged scapula".', marker: anatMarker('shoulder-ant', 25, 55) },
    ]},
    { group: 'Elbow & Forearm Movers', muscles: [
      { id:'biceps-brachii', name:'Biceps Brachii', origin:'Long head: supraglenoid tubercle; Short head: coracoid process', insertion:'Radial tuberosity',
        action:'Flexes the elbow and supinates the forearm; assists shoulder flexion.', marker: anatMarker('shoulder-ant', 50, 60) },
      { id:'triceps-brachii', name:'Triceps Brachii', origin:'Long head: infraglenoid tubercle; Lateral & medial heads: posterior humerus', insertion:'Olecranon process of ulna',
        action:'Extends the elbow; the long head also assists shoulder extension.', marker: anatMarker('shoulder-post', 50, 60) },
      { id:'brachialis', name:'Brachialis', origin:'Distal anterior humerus', insertion:'Coronoid process of ulna',
        action:'Pure elbow flexor — works regardless of forearm position (unlike biceps).', marker: anatMarker('forearm-ant', 45, 5) },
      { id:'brachioradialis', name:'Brachioradialis', origin:'Lateral supracondylar ridge of humerus', insertion:'Styloid process of radius',
        action:'Flexes the elbow; strongest when the forearm is in mid-pronation ("hammer curl" muscle).', marker: anatMarker('forearm-ant', 25, 20) },
      { id:'pronator-teres', name:'Pronator Teres', origin:'Medial epicondyle of humerus, coronoid process of ulna', insertion:'Lateral surface of radius',
        action:'Pronates the forearm (turns palm down); assists elbow flexion.', marker: anatMarker('forearm-ant', 55, 15) },
      { id:'supinator', name:'Supinator', origin:'Lateral epicondyle of humerus, proximal ulna', insertion:'Proximal lateral radius',
        action:'Supinates the forearm (turns palm up).', marker: anatMarker('forearm-post', 60, 18) },
    ]},
    { group: 'Wrist & Finger Movers (Extrinsic)', muscles: [
      { id:'fcr', name:'Flexor Carpi Radialis', origin:'Medial epicondyle of humerus', insertion:'Base of 2nd/3rd metacarpal',
        action:'Flexes and radially deviates the wrist.', marker: anatMarker('forearm-ant', 40, 35) },
      { id:'fcu', name:'Flexor Carpi Ulnaris', origin:'Medial epicondyle, olecranon', insertion:'Pisiform, hamate, 5th metacarpal',
        action:'Flexes and ulnarly deviates the wrist.', marker: anatMarker('forearm-ant', 65, 35) },
      { id:'fds', name:'Flexor Digitorum Superficialis', origin:'Medial epicondyle, radius', insertion:'Middle phalanges of fingers 2–5',
        action:'Flexes the PIP joints (and assists MCP/wrist flexion).', marker: anatMarker('forearm-ant', 50, 45) },
      { id:'ecrl-b', name:'Extensor Carpi Radialis Longus & Brevis', origin:'Lateral supracondylar ridge / lateral epicondyle', insertion:'Base of 2nd/3rd metacarpal',
        action:'Extends and radially deviates the wrist.', marker: anatMarker('forearm-post', 35, 30) },
      { id:'ecu', name:'Extensor Carpi Ulnaris', origin:'Lateral epicondyle, ulna', insertion:'Base of 5th metacarpal',
        action:'Extends and ulnarly deviates the wrist.', marker: anatMarker('forearm-post', 65, 35) },
      { id:'ed', name:'Extensor Digitorum', origin:'Lateral epicondyle of humerus', insertion:'Extensor expansions of fingers 2–5',
        action:'Extends the fingers and assists wrist extension.', marker: anatMarker('forearm-post', 50, 45) },
    ]},
    { group: 'Intrinsic Hand Muscles', muscles: [
      { id:'thenar', name:'Thenar Group (Abd./Flex./Opponens Pollicis Brevis)', origin:'Flexor retinaculum, carpal bones', insertion:'Base of thumb (1st metacarpal/proximal phalanx)',
        action:'Abduct, flex, and oppose the thumb — the base of the thumb pad.', marker: anatMarker('forearm-ant', 30, 78) },
      { id:'hypothenar', name:'Hypothenar Group (Abd./Flex./Opponens Digiti Minimi)', origin:'Flexor retinaculum, hamate', insertion:'Base of little finger (5th metacarpal/proximal phalanx)',
        action:'Abduct, flex, and oppose the little finger — the base of the pinky pad.', marker: anatMarker('forearm-ant', 70, 78) },
      { id:'lumbricals', name:'Lumbricals', origin:'Tendons of flexor digitorum profundus', insertion:'Extensor expansions of fingers',
        action:'Flex the MCP joints while extending the IP joints — the classic "pen-holding" position.', marker: anatMarker('forearm-ant', 50, 88) },
      { id:'interossei', name:'Interossei (Palmar & Dorsal)', origin:'Shafts of metacarpals', insertion:'Base of proximal phalanges / extensor expansions',
        action:'Palmar interossei ADduct the fingers; dorsal interossei ABduct the fingers ("PAD/DAB" rule). Both assist lumbricals at the MCP/IP joints.', marker: anatMarker('forearm-post', 50, 88) },
    ]},
  ]
};

// ─── QUIZ (30 MCQ) ───────────────────────────────────────
const ANATOMY_QUIZZES = {
  'upper-limb': {
    title: 'Upper Limb Anatomy Quiz',
    questions: [
      { q:'Which bone is the only bony link between the arm and the axial skeleton?', options:['Scapula','Clavicle','Humerus','Sternum'], correct:1 },
      { q:'The glenoid fossa, which receives the humeral head, is part of which bone?', options:['Clavicle','Humerus','Scapula','Radius'], correct:2 },
      { q:'Which joint is most frequently injured by a fall directly onto the tip of the shoulder?', options:['Sternoclavicular joint','Acromioclavicular joint','Glenohumeral joint','Elbow joint'], correct:1 },
      { q:'Which rotator cuff muscle initiates the first ~15° of shoulder abduction?', options:['Infraspinatus','Subscapularis','Supraspinatus','Teres minor'], correct:2 },
      { q:'Which rotator cuff muscle is the ONLY one located on the anterior (front) surface of the scapula?', options:['Supraspinatus','Subscapularis','Teres minor','Infraspinatus'], correct:1 },
      { q:'Which two rotator cuff muscles are the prime external rotators of the shoulder?', options:['Supraspinatus & subscapularis','Infraspinatus & teres minor','Subscapularis & teres minor','Supraspinatus & infraspinatus'], correct:1 },
      { q:'Weakness of which muscle classically produces a "winged scapula"?', options:['Trapezius','Rhomboids','Serratus anterior','Levator scapulae'], correct:2 },
      { q:'Which muscle is nicknamed the "climbing" muscle for pulling the body up toward a fixed hand (e.g. pull-ups)?', options:['Pectoralis major','Deltoid','Latissimus dorsi','Teres minor'], correct:2 },
      { q:'The lower fibers of which muscle depress the scapula, working with the upper fibers (elevation) and middle fibers (retraction)?', options:['Trapezius','Rhomboids','Serratus anterior','Levator scapulae'], correct:0 },
      { q:'Which humeral landmark is the insertion point for the deltoid?', options:['Greater tubercle','Deltoid tuberosity','Bicipital groove','Lateral epicondyle'], correct:1 },
      { q:'The elbow\'s hinge motion (flexion/extension) primarily occurs at which joint?', options:['Proximal radioulnar joint','Humeroradial joint','Humeroulnar joint','Distal radioulnar joint'], correct:2 },
      { q:'Pronation and supination of the forearm occur mainly at which joint(s)?', options:['Humeroulnar joint','Radioulnar joints','Wrist joint','Elbow (hinge portion)'], correct:1 },
      { q:'Which elbow flexor works effectively regardless of forearm position (pronated or supinated)?', options:['Biceps brachii','Brachioradialis','Brachialis','Supinator'], correct:2 },
      { q:'Which muscle is the primary supinator of the forearm, along with the biceps brachii?', options:['Pronator teres','Supinator','Brachioradialis','Anconeus'], correct:1 },
      { q:'The long head of the biceps brachii originates from which structure?', options:['Coracoid process','Supraglenoid tubercle','Infraglenoid tubercle','Acromion'], correct:1 },
      { q:'Which muscle\'s long head also assists shoulder extension in addition to extending the elbow?', options:['Biceps brachii','Triceps brachii','Brachialis','Brachioradialis'], correct:1 },
      { q:'Pronator teres inserts on which bone?', options:['Ulna','Radius','Humerus','Scaphoid'], correct:1 },
      { q:'Which carpal bone is most commonly fractured after a fall on an outstretched hand, with a notoriously poor healing blood supply?', options:['Lunate','Triquetrum','Scaphoid','Hamate'], correct:2 },
      { q:'How many carpal bones are there in total, in one wrist?', options:['6','7','8','9'], correct:2 },
      { q:'Which of these is in the PROXIMAL row of carpal bones?', options:['Trapezium','Capitate','Lunate','Hamate'], correct:2 },
      { q:'Flexor carpi ulnaris and extensor carpi ulnaris both insert near which bone?', options:['2nd metacarpal','5th metacarpal','Scaphoid','1st metacarpal'], correct:1 },
      { q:'Which muscle flexes the PIP joints of fingers 2–5?', options:['Flexor digitorum superficialis','Extensor digitorum','Lumbricals','Interossei'], correct:0 },
      { q:'The "pen-holding" position — MCP flexion with IP extension — is produced mainly by which muscles?', options:['Interossei','Lumbricals','Thenar group','Extensor digitorum'], correct:1 },
      { q:'Using the "PAD/DAB" rule, which group ADducts the fingers toward the middle finger?', options:['Dorsal interossei','Palmar interossei','Lumbricals','Hypothenar group'], correct:1 },
      { q:'Using the "PAD/DAB" rule, which group ABducts the fingers away from the middle finger?', options:['Palmar interossei','Dorsal interossei','Thenar group','Lumbricals'], correct:1 },
      { q:'The thenar muscle group acts on which digit?', options:['Index finger','Little finger','Thumb','Middle finger'], correct:2 },
      { q:'How many phalanges does the thumb have, compared to a finger?', options:['2 vs 3','3 vs 2','2 vs 2','3 vs 3'], correct:0 },
      { q:'Which forearm bone stays relatively fixed while the other rotates around it during pronation/supination?', options:['Radius','Ulna','Both move equally','Neither moves'], correct:1 },
      { q:'Which is the most mobile joint in the entire body — and, precisely because of that, also the least stable?', options:['Elbow joint','Wrist joint','Glenohumeral joint','Acromioclavicular joint'], correct:2 },
      { q:'Trapezius originates from which region of the spine (in addition to the occiput)?', options:['C1–C7 only','C7–T12','T1–L5','Sacrum'], correct:1 },
    ]
  }
};
