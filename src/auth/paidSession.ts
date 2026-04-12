export const PAID_ADMIN_EMAIL = "admin@taxi.com";
export const PAID_ADMIN_PASSWORD = "taxi123";

const STORAGE_KEY = "taxi-license-paid-session";

export function validatePaidAdminCredentials(email: string, password: string): boolean {
  const normalized = email.trim().toLowerCase();
  return normalized === PAID_ADMIN_EMAIL.toLowerCase() && password === PAID_ADMIN_PASSWORD;
}

export function readPaidSessionActive(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

export function persistPaidSessionActive(active: boolean): void {
  try {
    if (active) localStorage.setItem(STORAGE_KEY, "1");
    else localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* ignore quota / private mode */
  }
}
