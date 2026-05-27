// Public read-only endpoint: when does the pitch expire?
// Returns the deadline as ISO string + ms remaining + expired flag.
// Frontend polls this to keep the countdown banner authoritative.

export default function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  const raw = process.env.SELF_DESTRUCT_AT;
  if (!raw) {
    res.status(200).json({ armed: false });
    return;
  }

  const target = Date.parse(raw);
  if (Number.isNaN(target)) {
    res.status(500).json({ armed: false, error: 'SELF_DESTRUCT_AT is not parseable ISO' });
    return;
  }

  const now = Date.now();
  res.status(200).json({
    armed: true,
    deadline: new Date(target).toISOString(),
    serverNow: new Date(now).toISOString(),
    remainingMs: Math.max(0, target - now),
    expired: now >= target
  });
}

export const config = { runtime: 'nodejs' };
