/**
 * Stub auth using localStorage. Phase 1 — UI flow only.
 * Replace with NextAuth/Clerk/Supabase when real auth is needed.
 */

const KEY = "ec-auth-user";

export type AuthUser = {
  email: string;
  signedInAt: string;
};

export function signIn(email: string): AuthUser {
  if (typeof window === "undefined") {
    throw new Error("signIn must run in the browser");
  }
  const user: AuthUser = { email, signedInAt: new Date().toISOString() };
  window.localStorage.setItem(KEY, JSON.stringify(user));
  return user;
}

export function signOut(): void {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(KEY);
}

export function getCurrentUser(): AuthUser | null {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as AuthUser;
  } catch {
    return null;
  }
}
