type Entry = {
  count: number;
  resetAt: number;
};

const store = new Map<string, Entry>();

export function checkRateLimit(
  key: string,
  limit: number,
  windowMs: number,
) {
  const now = Date.now();
  const existing = store.get(key);

  if (!existing || now > existing.resetAt) {
    const next: Entry = {
      count: 1,
      resetAt: now + windowMs,
    };
    store.set(key, next);

    return {
      allowed: true,
      remaining: limit - 1,
      resetAt: next.resetAt,
    };
  }

  if (existing.count >= limit) {
    return {
      allowed: false,
      remaining: 0,
      resetAt: existing.resetAt,
    };
  }

  existing.count += 1;
  store.set(key, existing);

  return {
    allowed: true,
    remaining: limit - existing.count,
    resetAt: existing.resetAt,
  };
}