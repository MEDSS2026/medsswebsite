'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { collection, query, orderBy, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';

interface Review {
  id: string;
  name: string;
  position: string;
  company: string;
  rating: string;
  review: string;
  approved: boolean;
  createdAt: { seconds: number } | null;
}

type EditState = Partial<Pick<Review, 'name' | 'position' | 'company' | 'rating' | 'review'>>;

export default function AdminPage() {
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [reviews, setReviews] = useState<Review[]>([]);
  const [dataLoading, setDataLoading] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editState, setEditState] = useState<EditState>({});

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setAuthLoading(false);
    });
    return unsub;
  }, []);

  useEffect(() => {
    if (user) fetchReviews();
  }, [user]);

  async function fetchReviews() {
    setDataLoading(true);
    try {
      const q = query(collection(db, 'reviews'), orderBy('createdAt', 'desc'));
      const snap = await getDocs(q);
      setReviews(snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<Review, 'id'>) })));
    } catch (err) {
      console.error('Firestore fetch error:', err);
    } finally {
      setDataLoading(false);
    }
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoginError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch {
      setLoginError('Invalid email or password.');
    }
  }

  async function approve(id: string) {
    await updateDoc(doc(db, 'reviews', id), { approved: true });
    setReviews((prev) => prev.map((r) => (r.id === id ? { ...r, approved: true } : r)));
  }

  async function reject(id: string) {
    await deleteDoc(doc(db, 'reviews', id));
    setReviews((prev) => prev.filter((r) => r.id !== id));
  }

  async function unapprove(id: string) {
    await updateDoc(doc(db, 'reviews', id), { approved: false });
    setReviews((prev) => prev.map((r) => (r.id === id ? { ...r, approved: false } : r)));
  }

  function startEdit(r: Review) {
    setEditingId(r.id);
    setEditState({ name: r.name, position: r.position || '', company: r.company || '', rating: r.rating, review: r.review });
  }

  async function saveEdit(id: string) {
    await updateDoc(doc(db, 'reviews', id), { ...editState });
    setReviews((prev) => prev.map((r) => (r.id === id ? { ...r, ...editState } : r)));
    setEditingId(null);
    setEditState({});
  }

  if (authLoading) return <div className="admin-loading">Loading...</div>;

  if (!user) {
    return (
      <div className="admin-login-wrap">
        <div className="admin-login-bg" style={{ backgroundImage: 'url(/assets/training/hero-training-room.jpg)' }} />
        <div className="admin-login-overlay" />
        <img src="/assets/logos/medss-logo-white.png" alt="MEDSS" className="admin-login-top-logo" />
        <div className="admin-login-left">
          <div />
          <div className="admin-login-left-body">
            <p className="admin-login-eyebrow">— ADMIN PORTAL</p>
            <h2>Empowering your<br /><em>team&rsquo;s voice.</em></h2>
            <p className="admin-login-desc">
              Manage client reviews and build trust with your audience.<br />
              Approve the best, publish instantly.
            </p>
          </div>
          <p className="admin-login-footer-text">MEDSS Training and Consultancy Sdn. Bhd. · 2026</p>
        </div>
        <div className="admin-login-right">
          <form className="admin-login-form" onSubmit={handleLogin}>
            <div className="admin-login-form-header">
              <span className="admin-login-form-label">SIGN IN</span>
            </div>
            <div className="admin-form-group">
              <label>Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="admin@medss.com.my" />
            </div>
            <div className="admin-form-group">
              <label>Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="••••••••" />
            </div>
            {loginError && <p className="admin-error">{loginError}</p>}
            <button type="submit" className="admin-login-btn">Enter</button>
            <p className="admin-login-access-note">Access by authorised personnel only.</p>
          </form>
        </div>
      </div>
    );
  }

  const pending = reviews.filter((r) => !r.approved);
  const approved = reviews.filter((r) => r.approved);

  return (
    <div className="admin-wrap">
      <div className="admin-header">
        <img src="/assets/logos/medss-logo-color.png" alt="MEDSS" className="admin-header-logo" />
        <div className="admin-header-actions">
          <span className="admin-header-user">{user.email}</span>
          <button className="admin-signout-btn" onClick={() => signOut(auth)}>Sign Out</button>
          <Link href="/" className="admin-home-btn">← Return to Home</Link>
        </div>
      </div>

      <div className="admin-body">
        <h1 className="admin-title">Review Management</h1>

        {dataLoading ? (
          <p className="admin-loading">Loading reviews...</p>
        ) : (
          <>
            <section className="admin-section">
              <h2 className="admin-section-title">
                Pending Reviews
                <span className="admin-badge admin-badge--pending">{pending.length}</span>
              </h2>
              {pending.length === 0 ? (
                <p className="admin-empty">No pending reviews.</p>
              ) : (
                <div className="admin-cards">
                  {pending.map((r) => (
                    <div className="admin-card admin-card--pending" key={r.id}>
                      {editingId === r.id ? (
                        <div className="admin-edit-form">
                          <div className="admin-edit-row">
                            <div className="admin-edit-group">
                              <label>Name</label>
                              <input value={editState.name || ''} onChange={(e) => setEditState(s => ({ ...s, name: e.target.value }))} />
                            </div>
                            <div className="admin-edit-group">
                              <label>Position</label>
                              <input value={editState.position || ''} onChange={(e) => setEditState(s => ({ ...s, position: e.target.value }))} placeholder="e.g. Safety Officer" />
                            </div>
                          </div>
                          <div className="admin-edit-row">
                            <div className="admin-edit-group">
                              <label>Company</label>
                              <input value={editState.company || ''} onChange={(e) => setEditState(s => ({ ...s, company: e.target.value }))} />
                            </div>
                            <div className="admin-edit-group">
                              <label>Rating</label>
                              <select value={editState.rating || ''} onChange={(e) => setEditState(s => ({ ...s, rating: e.target.value }))}>
                                <option value="★★★★★">★★★★★ Excellent</option>
                                <option value="★★★★">★★★★ Good</option>
                                <option value="★★★">★★★ Average</option>
                              </select>
                            </div>
                          </div>
                          <div className="admin-edit-group">
                            <label>Review</label>
                            <textarea value={editState.review || ''} onChange={(e) => setEditState(s => ({ ...s, review: e.target.value }))} />
                          </div>
                          <div className="admin-card-actions">
                            <button className="admin-btn admin-btn--approve" onClick={() => saveEdit(r.id)}>Save Changes</button>
                            <button className="admin-btn admin-btn--unapprove" onClick={() => setEditingId(null)}>Cancel</button>
                          </div>
                        </div>
                      ) : (
                        <>
                          <div className="admin-card-meta">
                            <strong>{r.name}</strong>
                            {r.position && <span className="admin-card-position">{r.position}</span>}
                            {r.company && <span>{r.company}</span>}
                            <span className="admin-card-rating">{r.rating}</span>
                          </div>
                          <p className="admin-card-review">&ldquo;{r.review}&rdquo;</p>
                          <div className="admin-card-actions">
                            <button className="admin-btn admin-btn--approve" onClick={() => approve(r.id)}>✓ Approve</button>
                            <button className="admin-btn admin-btn--edit" onClick={() => startEdit(r)}>✎ Edit</button>
                            <button className="admin-btn admin-btn--reject" onClick={() => reject(r.id)}>✕ Delete</button>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </section>

            <section className="admin-section">
              <h2 className="admin-section-title">
                Approved Reviews (Live on Website)
                <span className="admin-badge admin-badge--approved">{approved.length}</span>
              </h2>
              {approved.length === 0 ? (
                <p className="admin-empty">No approved reviews yet.</p>
              ) : (
                <div className="admin-cards">
                  {approved.map((r) => (
                    <div className="admin-card admin-card--approved" key={r.id}>
                      {editingId === r.id ? (
                        <div className="admin-edit-form">
                          <div className="admin-edit-row">
                            <div className="admin-edit-group">
                              <label>Name</label>
                              <input value={editState.name || ''} onChange={(e) => setEditState(s => ({ ...s, name: e.target.value }))} />
                            </div>
                            <div className="admin-edit-group">
                              <label>Position</label>
                              <input value={editState.position || ''} onChange={(e) => setEditState(s => ({ ...s, position: e.target.value }))} placeholder="e.g. Safety Officer" />
                            </div>
                          </div>
                          <div className="admin-edit-row">
                            <div className="admin-edit-group">
                              <label>Company</label>
                              <input value={editState.company || ''} onChange={(e) => setEditState(s => ({ ...s, company: e.target.value }))} />
                            </div>
                            <div className="admin-edit-group">
                              <label>Rating</label>
                              <select value={editState.rating || ''} onChange={(e) => setEditState(s => ({ ...s, rating: e.target.value }))}>
                                <option value="★★★★★">★★★★★ Excellent</option>
                                <option value="★★★★">★★★★ Good</option>
                                <option value="★★★">★★★ Average</option>
                              </select>
                            </div>
                          </div>
                          <div className="admin-edit-group">
                            <label>Review</label>
                            <textarea value={editState.review || ''} onChange={(e) => setEditState(s => ({ ...s, review: e.target.value }))} />
                          </div>
                          <div className="admin-card-actions">
                            <button className="admin-btn admin-btn--approve" onClick={() => saveEdit(r.id)}>Save Changes</button>
                            <button className="admin-btn admin-btn--unapprove" onClick={() => setEditingId(null)}>Cancel</button>
                          </div>
                        </div>
                      ) : (
                        <>
                          <div className="admin-card-meta">
                            <strong>{r.name}</strong>
                            {r.position && <span className="admin-card-position">{r.position}</span>}
                            {r.company && <span>{r.company}</span>}
                            <span className="admin-card-rating">{r.rating}</span>
                          </div>
                          <p className="admin-card-review">&ldquo;{r.review}&rdquo;</p>
                          <div className="admin-card-actions">
                            <button className="admin-btn admin-btn--edit" onClick={() => startEdit(r)}>✎ Edit</button>
                            <button className="admin-btn admin-btn--unapprove" onClick={() => unapprove(r.id)}>↩ Unpublish</button>
                            <button className="admin-btn admin-btn--reject" onClick={() => reject(r.id)}>✕ Delete</button>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </section>
          </>
        )}
      </div>
    </div>
  );
}
