// Vercel cron endpoint — runs once a day at SELF_DESTRUCT_AT UTC time
// (configured in vercel.json). If past the deadline, removes the production
// alias via Vercel REST API. No-ops if VERCEL_TOKEN is unset (demo mode).
//
// Vercel guards this with the CRON_SECRET header automatically on cron
// invocations. We also allow manual invocations carrying ?secret=<env>
// for backstop coverage if the daily slot is missed.

const DEFAULT_ALIAS = 'coral-devrel.vercel.app';

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  const cronSecret = process.env.CRON_SECRET;
  const authHeader = req.headers['authorization'] || '';
  const querySecret = (req.query && req.query.secret) || '';
  const isVercelCron = cronSecret && authHeader === `Bearer ${cronSecret}`;
  const isManualSecret = cronSecret && querySecret === cronSecret;
  if (cronSecret && !isVercelCron && !isManualSecret) {
    res.status(401).json({ ok: false, error: 'Unauthorized' });
    return;
  }

  const raw = process.env.SELF_DESTRUCT_AT;
  if (!raw) {
    res.status(200).json({ ok: true, armed: false, message: 'SELF_DESTRUCT_AT unset; nothing to do.' });
    return;
  }

  const target = Date.parse(raw);
  if (Number.isNaN(target)) {
    res.status(500).json({ ok: false, error: 'SELF_DESTRUCT_AT unparseable' });
    return;
  }

  const now = Date.now();
  if (now < target) {
    res.status(200).json({
      ok: true,
      armed: true,
      expired: false,
      remainingMs: target - now,
      message: 'Not yet — deadline in the future.'
    });
    return;
  }

  const token = process.env.VERCEL_TOKEN;
  const alias = process.env.ALIAS || DEFAULT_ALIAS;

  if (!token) {
    res.status(200).json({
      ok: true,
      mode: 'demo',
      message: 'Deadline passed but VERCEL_TOKEN unset. Frontend redirect to tombstone will still fire for users.'
    });
    return;
  }

  try {
    const apiRes = await fetch(`https://api.vercel.com/v2/aliases/${encodeURIComponent(alias)}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` }
    });
    const body = await apiRes.text();
    res.status(apiRes.ok ? 200 : apiRes.status).json({
      ok: apiRes.ok,
      mode: 'live',
      alias,
      vercelStatus: apiRes.status,
      detail: body.slice(0, 500)
    });
  } catch (err) {
    res.status(500).json({ ok: false, error: 'Network error', detail: String(err && err.message || err) });
  }
}

export const config = { runtime: 'nodejs' };
