import {
  getTotals,
  saveTotals,
  getSession,
  saveSession,
} from "./storage.js";

export function getDomain(url) {
  try {
    const parsed = new URL(url);

    if (!["http:", "https:"].includes(parsed.protocol)) {
      return null;
    }

    return parsed.hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
}

function getLocalDateKey(timestamp) {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function getNextLocalMidnight(timestamp) {
  const date = new Date(timestamp);
  date.setHours(24, 0, 0, 0);
  return date.getTime();
}

export async function recordSessionUntil(endTime = Date.now()) {
  const session = await getSession();

  if (!session || endTime <= session.startedAt) {
    return;
  }

  const totals = await getTotals();
  let cursor = session.startedAt;

  // Split the session at local midnight so daily totals stay accurate.
  while (cursor < endTime) {
    const midnight = getNextLocalMidnight(cursor);
    const segmentEnd = Math.min(endTime, midnight);
    const dateKey = getLocalDateKey(cursor);

    totals[dateKey] ??= {};
    totals[dateKey][session.domain] ??= 0;

    totals[dateKey][session.domain] += segmentEnd - cursor;
    cursor = segmentEnd;
  }

  await saveTotals(totals);

  // Keep the session alive across service worker suspension.
  await saveSession({
    ...session,
    startedAt: endTime,
  });
}