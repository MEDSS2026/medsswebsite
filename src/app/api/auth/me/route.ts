import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { SESSION_COOKIE, verifySessionToken } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function GET() {
  const store = await cookies();
  const token = store.get(SESSION_COOKIE)?.value;
  const session = token ? verifySessionToken(token) : null;
  return NextResponse.json({
    authenticated: !!session,
    email: session?.email ?? null,
  });
}
