import { MongoClient, Db } from 'mongodb';

// Cache the client across hot reloads in dev and across invocations in
// serverless so we don't exhaust the connection pool. The connection itself
// is deferred until the first request — never at build time.
const globalForMongo = globalThis as unknown as {
  _mongoClientPromise?: Promise<MongoClient>;
};

function clientPromise(): Promise<MongoClient> {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('MONGODB_URI is not set');
  if (!globalForMongo._mongoClientPromise) {
    const client = new MongoClient(uri);
    globalForMongo._mongoClientPromise = client.connect();
  }
  return globalForMongo._mongoClientPromise;
}

export async function getDb(): Promise<Db> {
  const client = await clientPromise();
  return client.db(process.env.MONGODB_DB || 'medss');
}

export const REVIEWS = 'reviews';
