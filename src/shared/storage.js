const TOTAL_KEY = "webtime:total";
const SESSION_KEY = "webtime:session";

export async function getTotals() {
  return (await chrome.storage.local.get(TOTALS_KEY))[TOTALS_KEY] ?? {};
}

export async function saveTotals(totals) {
  await chrome.storage.local.set({ [TOTALS_KEY]: totals });
}

export async function getSession() {
  return (await chrome.storage.local.get(SESSION_KEY))[SESSION_KEY] ?? null;
}

export async function saveSession(session) {
  await chrome.storage.local.set({ [SESSION_KEY]: session });
}