import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import {
  verifyPassword,
  createSessionToken,
  SESSION_COOKIE,
  SESSION_MAX_AGE,
} from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  let body: { email?: string; password?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const email = (body.email || '').toString().trim().toLowerCase();
  const password = (body.password || '').toString();

  const adminEmail = (process.env.ADMIN_EMAIL || '').trim().toLowerCase();
  const adminHash = process.env.ADMIN_PASSWORD_HASH || '';

  if (!adminEmail || !adminHash || !process.env.AUTH_SECRET) {
    return NextResponse.json(
      { error: 'Login is temporarily unavailable (server configuration error).' },
      { status: 500 },
    );
  }

  // Always run the password check to keep timing roughly constant.
  const passOk = verifyPassword(password, adminHash);
  if (email !== adminEmail || !passOk) {
    return NextResponse.json({ error: 'Invalid email or password.' }, { status: 401 });
  }

  const store = await cookies();
  store.set(SESSION_COOKIE, createSessionToken(adminEmail), {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: SESSION_MAX_AGE,
  });

  return NextResponse.json({ ok: true });
}
