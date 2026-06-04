import { NextRequest, NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import { getDb, REVIEWS } from '@/lib/mongodb';
import { isAuthed } from '@/lib/auth';

export const dynamic = 'force-dynamic';

const EDITABLE = ['name', 'position', 'company', 'rating', 'review', 'approved'] as const;

// PATCH /api/reviews/:id -> admin: approve / unapprove / edit fields
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;
  if (!ObjectId.isValid(id)) {
    return NextResponse.json({ error: 'Invalid id.' }, { status: 400 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const update: Record<string, unknown> = {};
  for (const key of EDITABLE) {
    if (key in body) {
      update[key] = key === 'approved' ? Boolean(body[key]) : String(body[key]);
    }
  }
  if (Object.keys(update).length === 0) {
    return NextResponse.json({ error: 'No fields to update.' }, { status: 400 });
  }

  try {
    const db = await getDb();
    const result = await db
      .collection(REVIEWS)
      .updateOne({ _id: new ObjectId(id) }, { $set: update });
    if (result.matchedCount === 0) {
      return NextResponse.json({ error: 'Review not found.' }, { status: 404 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('PATCH /api/reviews error:', err);
    return NextResponse.json({ error: 'Failed to update review.' }, { status: 500 });
  }
}

// DELETE /api/reviews/:id -> admin: delete a review
export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;
  if (!ObjectId.isValid(id)) {
    return NextResponse.json({ error: 'Invalid id.' }, { status: 400 });
  }

  try {
    const db = await getDb();
    await db.collection(REVIEWS).deleteOne({ _id: new ObjectId(id) });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('DELETE /api/reviews error:', err);
    return NextResponse.json({ error: 'Failed to delete review.' }, { status: 500 });
  }
}
