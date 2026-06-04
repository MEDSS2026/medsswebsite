import { cookies } from 'next/headers';
import { createHmac, scryptSync, timingSafeEqual } from 'crypto';

// Built-in single-admin auth. No third-party service: the admin email lives in
// ADMIN_EMAIL, the password is stored as a scrypt hash in ADMIN_PASSWORD_HASH
// ("salt:hash" hex), and the session is a stateless HMAC-signed token kept in
// an httpOnly cookie signed with AUTH_SECRET.

export const SESSION_COOKIE = 'medss_admin_session';
const SESSION_DURATION_MS = 1000 * 60 * 60 * 24 * 7; // 7 days
export const SESSION_MAX_AGE = SESSION_DURATION_MS / 1000;

function secret(): string {
  const s = process.env.AUTH_SECRET;
  if (!s) throw new Error('AUTH_SECRET is not set');
  return s;
}

/** Verify a plaintext password against a stored "salt:hash" scrypt value. */
export function verifyPassword(password: string, stored: string): boolean {
  const [salt, hash] = stored.split(':');
  if (!salt || !hash) return false;
  const hashBuf = Buffer.from(hash, 'hex');
  let derived: Buffer;
  try {
    derived = scryptSync(password, salt, hashBuf.length);
  } catch {
    return false;
  }
  return hashBuf.length === derived.length && timingSafeEqual(hashBuf, derived);
}

function sign(body: string): string {
  return createHmac('sha256', secret()).update(body).digest('base64url');
}

export function createSessionToken(email: string): string {
  const payload = { email, exp: Date.now() + SESSION_DURATION_MS };
  const body = Buffer.from(JSON.stringify(payload)).toString('base64url');
  return `${body}.${sign(body)}`;
}

export function verifySessionToken(token: string): { email: string } | null {
  const parts = token.split('.');
  if (parts.length !== 2) return null;
  const [body, sig] = parts;
  const sigBuf = Buffer.from(sig);
  const expBuf = Buffer.from(sign(body));
  if (sigBuf.length !== expBuf.length || !timingSafeEqual(sigBuf, expBuf)) return null;
  try {
    const payload = JSON.parse(Buffer.from(body, 'base64url').toString());
    if (typeof payload.exp !== 'number' || Date.now() > payload.exp) return null;
    return { email: payload.email };
  } catch {
    return null;
  }
}

/** Returns true if the incoming request carries a valid admin session cookie. */
export async function isAuthed(): Promise<boolean> {
  const store = await cookies();
  const token = store.get(SESSION_COOKIE)?.value;
  if (!token) return false;
  return verifySessionToken(token) !== null;
}
