import { NextRequest, NextResponse } from 'next/server';
import { WithId, Document } from 'mongodb';
import { getDb, REVIEWS } from '@/lib/mongodb';
import { isAuthed } from '@/lib/auth';

export const dynamic = 'force-dynamic';

function serialize(doc: WithId<Document>) {
  const createdAt: unknown = doc.createdAt;
  return {
    id: doc._id.toString(),
    name: doc.name ?? '',
    position: doc.position ?? '',
    company: doc.company ?? '',
    rating: doc.rating ?? '',
    review: doc.review ?? '',
    approved: Boolean(doc.approved),
    createdAt: createdAt instanceof Date ? createdAt.toISOString() : null,
  };
}

// GET /api/reviews            -> admin: all reviews (requires auth)
// GET /api/reviews?approved=1 -> public: up to 6 approved reviews
export async function GET(request: NextRequest) {
  const approvedOnly = ['1', 'true'].includes(
    request.nextUrl.searchParams.get('approved') ?? '',
  );

  try {
    const db = await getDb();
    const coll = db.collection(REVIEWS);

    if (approvedOnly) {
      const docs = await coll
        .find({ approved: true })
        .sort({ createdAt: -1 })
        .limit(6)
        .toArray();
      return NextResponse.json(docs.map(serialize));
    }

    if (!(await isAuthed())) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const docs = await coll.find({}).sort({ createdAt: -1 }).toArray();
    return NextResponse.json(docs.map(serialize));
  } catch (err) {
    console.error('GET /api/reviews error:', err);
    return NextResponse.json({ error: 'Failed to load reviews.' }, { status: 500 });
  }
}

// POST /api/reviews -> public: submit a new (unapproved) review
export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const str = (v: unknown) => (v == null ? '' : String(v)).trim();
  const name = str(body.name).slice(0, 120);
  const rating = str(body.rating).slice(0, 12);
  const review = str(body.review).slice(0, 2000);

  if (!name || !rating || !review) {
    return NextResponse.json(
      { error: 'Name, rating and review are required.' },
      { status: 400 },
    );
  }

  try {
    const db = await getDb();
    const result = await db.collection(REVIEWS).insertOne({
      name,
      position: str(body.position).slice(0, 120),
      company: str(body.company).slice(0, 120),
      rating,
      review,
      approved: false,
      createdAt: new Date(),
    });
    return NextResponse.json({ id: result.insertedId.toString() }, { status: 201 });
  } catch (err) {
    console.error('POST /api/reviews error:', err);
    return NextResponse.json({ error: 'Failed to submit review.' }, { status: 500 });
  }
}
