/**
 * db.js — PhysioWork Firestore Database Layer
 *
 * Replaces all localStorage usage for cross-device persistence.
 * All data is stored in Firestore under the physiowork-8976f project.
 *
 * Collections:
 *   bookings/{id}                        — appointment bookings
 *   appt_requests/{id}                   — appointment requests from patients
 *   schedule_settings/{doctorEmail}      — doctor schedule settings
 *   open_slots/{doctorEmail}             — doctor open slot array
 *   chat_messages/{chatId}/msgs/{msgId}  — chat messages per conversation
 *   chat_convs/{email}/list/{chatId}     — conversation list per user
 *   chat_muted/{email}                   — muted conversation ids per user
 *   notifications/{email}/items/{id}     — notification items per user
 *   pain_requests/{id}                   — Pain Helper reports (patient → doctor)
 *   patient_files/{id}                   — Doctor's organized patient records
 */

'use strict';

// ─── Firestore reference ──────────────────────────────────────────────────────
function _db() {
  if (!window._fbDb) throw new Error('Firestore not initialised');
  return window._fbDb;
}

// ─── BOOKINGS ─────────────────────────────────────────────────────────────────

/** Save a single booking (create or overwrite by id). */
async function dbSaveBooking(booking) {
  await _db().collection('bookings').doc(booking.id).set(booking);
}

/** Update fields on an existing booking. */
async function dbUpdateBooking(id, fields) {
  await _db().collection('bookings').doc(id).update(fields);
}

/** Return ALL bookings (used by doctor-schedule). */
async function dbGetAllBookings() {
  const snap = await _db().collection('bookings').get();
  return snap.docs.map(d => d.data());
}

/** Return bookings for a specific patient email. */
async function dbGetPatientBookings(patientEmail) {
  try {
    const snap = await _db().collection('bookings')
      .where('patientEmail', '==', patientEmail).get();
    return snap.docs.map(d => d.data());
  } catch(e) {
    const snap = await _db().collection('bookings').get();
    return snap.docs.map(d => d.data()).filter(b => b.patientEmail === patientEmail);
  }
}

/** Return bookings for a specific doctor email. */
async function dbGetDoctorBookings(doctorEmail) {
  try {
    const snap = await _db().collection('bookings')
      .where('doctorEmail', '==', doctorEmail).get();
    return snap.docs.map(d => d.data());
  } catch(e) {
    // Fallback: fetch all and filter client-side (handles missing index)
    const snap = await _db().collection('bookings').get();
    return snap.docs.map(d => d.data()).filter(b => b.doctorEmail === doctorEmail);
  }
}

// ─── APPOINTMENT REQUESTS ────────────────────────────────────────────────────

/** Save a new appointment request. */
async function dbSaveRequest(req) {
  await _db().collection('appt_requests').doc(req.id).set(req);
}

/** Update fields on an existing request. */
async function dbUpdateRequest(id, fields) {
  await _db().collection('appt_requests').doc(id).update(fields);
}

/** Return all requests targeting a specific doctor. */
async function dbGetDoctorRequests(doctorEmail) {
  try {
    const snap = await _db().collection('appt_requests')
      .where('doctorEmail', '==', doctorEmail).get();
    return snap.docs.map(d => d.data());
  } catch(e) {
    const snap = await _db().collection('appt_requests').get();
    return snap.docs.map(d => d.data()).filter(r => r.doctorEmail === doctorEmail);
  }
}

// ─── PAIN HELPER REQUESTS ─────────────────────────────────────────────────────

/** Save a new pain report / update an existing one (create or overwrite by id). */
async function dbSavePainRequest(req) {
  await _db().collection('pain_requests').doc(req.id).set(req, { merge: true });
}

/** Update fields on an existing pain report (e.g. doctor's reply). */
async function dbUpdatePainRequest(id, fields) {
  await _db().collection('pain_requests').doc(id).update(fields);
}

/** Return all pain reports sent by a specific patient, newest first. */
async function dbGetPatientPainRequests(patientEmail) {
  try {
    const snap = await _db().collection('pain_requests')
      .where('patientEmail', '==', patientEmail).get();
    return snap.docs.map(d => d.data()).sort((a,b) => (b.createdAt||0) > (a.createdAt||0) ? 1 : -1);
  } catch(e) {
    const snap = await _db().collection('pain_requests').get();
    return snap.docs.map(d => d.data()).filter(r => r.patientEmail === patientEmail)
      .sort((a,b) => (b.createdAt||'') > (a.createdAt||'') ? 1 : -1);
  }
}

/** Return all pain reports addressed to a specific doctor, newest first. */
async function dbGetDoctorPainRequests(doctorEmail) {
  try {
    const snap = await _db().collection('pain_requests')
      .where('doctorEmail', '==', doctorEmail).get();
    return snap.docs.map(d => d.data()).sort((a,b) => (b.createdAt||'') > (a.createdAt||'') ? 1 : -1);
  } catch(e) {
    const snap = await _db().collection('pain_requests').get();
    return snap.docs.map(d => d.data()).filter(r => r.doctorEmail === doctorEmail)
      .sort((a,b) => (b.createdAt||'') > (a.createdAt||'') ? 1 : -1);
  }
}

// ─── PATIENT FILES ────────────────────────────────────────────────────────────

/** Save a new patient file / overwrite by id (merge:true keeps untouched fields). */
async function dbSavePatientFile(file) {
  await _db().collection('patient_files').doc(file.id).set(file, { merge: true });
}

/** Update specific fields on an existing patient file. */
async function dbUpdatePatientFile(id, fields) {
  await _db().collection('patient_files').doc(id).update(fields);
}

/** Delete a patient file permanently. */
async function dbDeletePatientFile(id) {
  await _db().collection('patient_files').doc(id).delete();
}

/** Return all patient files created by a specific doctor. */
async function dbGetDoctorPatientFiles(doctorEmail) {
  try {
    const snap = await _db().collection('patient_files')
      .where('doctorEmail', '==', doctorEmail).get();
    return snap.docs.map(d => d.data());
  } catch(e) {
    const snap = await _db().collection('patient_files').get();
    return snap.docs.map(d => d.data()).filter(f => f.doctorEmail === doctorEmail);
  }
}

// ─── SCHEDULE SETTINGS ────────────────────────────────────────────────────────

/** Persist doctor schedule settings. */
async function dbSaveScheduleSettings(doctorEmail, settings) {
  await _db().collection('schedule_settings').doc(doctorEmail).set(settings);
}

/** Load doctor schedule settings. Returns {} if none. */
async function dbGetScheduleSettings(doctorEmail) {
  const doc = await _db().collection('schedule_settings').doc(doctorEmail).get();
  return doc.exists ? doc.data() : {};
}

// ─── OPEN SLOTS ────────────────────────────────────────────────────────────────

/** Persist the doctor's open-slot array (e.g. ["2025-05-01:09:00", ...]). */
async function dbSaveOpenSlots(doctorEmail, slots) {
  await _db().collection('open_slots').doc(doctorEmail).set({ slots });
}

/** Load open slots array for a doctor. Returns [] if none. */
async function dbGetOpenSlots(doctorEmail) {
  const doc = await _db().collection('open_slots').doc(doctorEmail).get();
  return doc.exists ? (doc.data().slots || []) : [];
}

// ─── CHAT MESSAGES ────────────────────────────────────────────────────────────

/** Append or overwrite a single message in a conversation. */
async function dbSaveMessage(chatId, msg) {
  await _db()
    .collection('chat_messages').doc(chatId)
    .collection('msgs').doc(msg.id).set(msg);
}

/** Load all messages in a conversation, ordered by timestamp. */
async function dbGetMessages(chatId, currentUserEmail) {
  const snap = await _db()
    .collection('chat_messages').doc(chatId)
    .collection('msgs').orderBy('ts', 'asc').get();
  const msgs = snap.docs.map(d => d.data());
  // Client-side safety: only return messages where current user is sender or recipient
  if (currentUserEmail) {
    return msgs.filter(m => m.from === currentUserEmail || m.to === currentUserEmail);
  }
  return msgs;
}

/** Mark all incoming messages as read for a given user in a conversation. */
async function dbMarkMessagesRead(chatId, myEmail) {
  try {
    const snap = await _db()
      .collection('chat_messages').doc(chatId)
      .collection('msgs')
      .where('from', '!=', myEmail)
      .where('read', '==', false).get();
    const batch = _db().batch();
    snap.docs.forEach(d => batch.update(d.ref, { read: true }));
    await batch.commit();
  } catch(e) {
    // Fallback: fetch all messages and filter client-side
    const snap = await _db()
      .collection('chat_messages').doc(chatId)
      .collection('msgs').get().catch(() => null);
    if (!snap) return;
    const batch = _db().batch();
    snap.docs.filter(d => {
      const m = d.data();
      return m.from !== myEmail && m.read === false;
    }).forEach(d => batch.update(d.ref, { read: true }));
    await batch.commit();
  }
}

/** Soft-delete a message (sets deleted=true, clears content). */
async function dbDeleteMessage(chatId, msgId) {
  await _db()
    .collection('chat_messages').doc(chatId)
    .collection('msgs').doc(msgId)
    .update({ deleted: true, text: '', data: '' });
}

// ─── CONVERSATION LIST ────────────────────────────────────────────────────────

/** Save or update a single conversation entry in a user's list. */
async function dbSaveConv(userEmail, conv) {
  await _db()
    .collection('chat_convs').doc(userEmail)
    .collection('list').doc(conv.id).set(conv, { merge: true });
}

/** Delete a conversation entry from a user's list (only removes from their view). */
async function dbDeleteConv(userEmail, convId) {
  await _db()
    .collection('chat_convs').doc(userEmail)
    .collection('list').doc(convId).delete();
}

/** Load all conversations for a user. */
async function dbGetConvs(userEmail) {
  const snap = await _db()
    .collection('chat_convs').doc(userEmail)
    .collection('list').get();
  return snap.docs.map(d => d.data());
}

// ─── MUTED CONVERSATIONS ─────────────────────────────────────────────────────

/** Save the full muted-list for a user. */
async function dbSaveMuted(userEmail, mutedIds) {
  await _db().collection('chat_muted').doc(userEmail).set({ ids: mutedIds });
}

/** Load muted conversation ids for a user. Returns []. */
async function dbGetMuted(userEmail) {
  const doc = await _db().collection('chat_muted').doc(userEmail).get();
  return doc.exists ? (doc.data().ids || []) : [];
}

// ─── NOTIFICATIONS ────────────────────────────────────────────────────────────

/** Prepend a notification item for a user. */
async function dbPushNotif(toEmail, notif) {
  await _db()
    .collection('notifications').doc(toEmail)
    .collection('items').doc(notif.id).set(notif);
}

/** Load all notifications for a user, newest first. */
async function dbGetNotifs(toEmail) {
  try {
    const snap = await _db()
      .collection('notifications').doc(toEmail)
      .collection('items').orderBy('ts', 'desc').limit(60).get();
    return snap.docs.map(d => d.data());
  } catch(e) {
    // Fallback: no ordering (avoids missing index error)
    const snap = await _db()
      .collection('notifications').doc(toEmail)
      .collection('items').limit(60).get();
    const items = snap.docs.map(d => d.data());
    return items.sort((a,b) => (b.ts||0) - (a.ts||0));
  }
}

/** Mark all notifications as read for a user. */
async function dbMarkNotifsRead(toEmail) {
  try {
    const snap = await _db()
      .collection('notifications').doc(toEmail)
      .collection('items').where('read', '==', false).get();
    const batch = _db().batch();
    snap.docs.forEach(d => batch.update(d.ref, { read: true }));
    await batch.commit();
  } catch(e) {
    // Fallback: get all and filter
    const snap = await _db()
      .collection('notifications').doc(toEmail)
      .collection('items').get().catch(() => null);
    if (!snap) return;
    const batch = _db().batch();
    snap.docs.filter(d => d.data().read === false)
      .forEach(d => batch.update(d.ref, { read: true }));
    await batch.commit();
  }
}

/** Permanently delete a single notification item for a user. */
async function dbDeleteNotif(toEmail, notifId) {
  await _db()
    .collection('notifications').doc(toEmail)
    .collection('items').doc(notifId).delete();
}

/** Delete ALL notifications for a user. */
async function dbClearAllNotifs(toEmail) {
  const snap = await _db()
    .collection('notifications').doc(toEmail)
    .collection('items').get();
  const batch = _db().batch();
  snap.docs.forEach(d => batch.delete(d.ref));
  await batch.commit();
}

// ─── PHYSIO CASES — SCORES / LEADERBOARD ──────────────────────────────────────
// Collection: case_scores/{email} → {
//   email, name, university, yearStudy, avatar,
//   totalScore, casesCompleted,
//   cases: { [caseId]: { title, category, score, total, percent, pointsEarned, attempts, updatedAt } },
//   updatedAt
// }

/** Save/merge the result of one finished case attempt. Only keeps the BEST score per case.
 *  Returns the updated aggregate doc. */
async function dbSaveCaseResult(email, meta, result) {
  const db = _db();
  const ref = db.collection('case_scores').doc(email);
  const snap = await ref.get();
  const data = snap.exists ? snap.data() : { email, cases: {}, totalScore: 0, casesCompleted: 0 };
  data.email      = email;
  data.name       = meta.name || data.name || '';
  data.university = meta.university || data.university || '';
  data.yearStudy  = meta.yearStudy || data.yearStudy || '';
  data.avatar     = meta.avatar || data.avatar || '🎓';
  data.cases = data.cases || {};

  const prev = data.cases[result.caseId];
  const attempts = (prev ? (prev.attempts || 1) : 0) + 1;
  const isBest = !prev || result.pointsEarned > prev.pointsEarned;
  if (isBest) {
    data.cases[result.caseId] = {
      title: result.caseTitle, category: result.category,
      score: result.score, total: result.total, percent: result.percent,
      pointsEarned: result.pointsEarned, attempts, updatedAt: Date.now()
    };
  } else {
    data.cases[result.caseId].attempts = attempts;
  }

  data.totalScore     = Object.values(data.cases).reduce((s, c) => s + (c.pointsEarned || 0), 0);
  data.casesCompleted = Object.keys(data.cases).length;
  data.updatedAt      = Date.now();

  await ref.set(data);
  return data;
}

/** Save/merge the result of one finished Anatomy quiz attempt. Keeps the BEST score per region. */
async function dbSaveAnatomyQuizResult(email, meta, result) {
  const db = _db();
  const ref = db.collection('anatomy_scores').doc(email);
  const snap = await ref.get();
  const data = snap.exists ? snap.data() : { email, regions: {}, totalScore: 0 };
  data.email = email;
  data.name  = meta.name || data.name || '';
  data.regions = data.regions || {};

  const prev = data.regions[result.regionId];
  const attempts = (prev ? (prev.attempts || 1) : 0) + 1;
  const isBest = !prev || result.score > prev.score;
  if (isBest) {
    data.regions[result.regionId] = {
      title: result.regionTitle, score: result.score, total: result.total,
      percent: result.percent, attempts, updatedAt: Date.now()
    };
  } else {
    data.regions[result.regionId].attempts = attempts;
  }
  data.totalScore = Object.values(data.regions).reduce((s, r) => s + (r.score || 0), 0);
  data.updatedAt = Date.now();
  await ref.set(data);
  return data;
}

/** Load a single user's case-score aggregate doc (or null). */
async function dbGetCaseScores(email) {
  const db = _db();
  const doc = await db.collection('case_scores').doc(email).get();
  return doc.exists ? doc.data() : null;
}

/** Load the leaderboard, sorted by totalScore descending. */
async function dbGetCaseLeaderboard(limitN) {
  const db = _db();
  limitN = limitN || 200;
  try {
    const snap = await db.collection('case_scores').orderBy('totalScore', 'desc').limit(limitN).get();
    return snap.docs.map(d => d.data());
  } catch (e) {
    // Fallback (e.g. missing index / offline): fetch all and sort client-side
    const snap = await db.collection('case_scores').get();
    return snap.docs.map(d => d.data())
      .sort((a, b) => (b.totalScore || 0) - (a.totalScore || 0))
      .slice(0, limitN);
  }
}

// ─── BLOCKED USERS (Student Chat) ─────────────────────────────────────────────
// Collection: chat_blocked/{email} → { ids: [otherEmail, ...] }
// Kept separate from chat_muted (mute = silence notifications, block = freeze chat).

/** Save the full blocked-list for a user. */
async function dbSaveBlocked(userEmail, blockedIds) {
  await _db().collection('chat_blocked').doc(userEmail).set({ ids: blockedIds });
}

/** Load blocked emails for a user. Returns []. */
async function dbGetBlocked(userEmail) {
  const doc = await _db().collection('chat_blocked').doc(userEmail).get();
  return doc.exists ? (doc.data().ids || []) : [];
}

