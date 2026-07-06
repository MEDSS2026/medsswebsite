// Shared between the public review form and the /api/reviews endpoint.
// A 280-char review wraps to 8 lines in the 340px testimonial card
// (11 lines at 280px on phones); the marquee clamps sit above that,
// so a max-length review always displays in full.
export const REVIEW_MAX_LENGTH = 280;
