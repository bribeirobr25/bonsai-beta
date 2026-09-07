/** `?src=` tags (QR cards, links). Lower-case slug, max 64 chars, or null. */
export function sanitizeSource(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const v = value.trim().toLowerCase();
  return /^[a-z0-9][a-z0-9_-]{0,63}$/.test(v) ? v : null;
}
