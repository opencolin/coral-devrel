// Self-destruct endpoint — POST with {pin} to remove the production alias.
// Requires env vars:
//   SELF_DESTRUCT_PIN — the secret to validate against
//   VERCEL_TOKEN      — a Vercel API token with deployments:write scope
//   ALIAS             — (optional) override alias to remove. Defaults to coral-devrel.vercel.app
//
// On success the alias is removed and the site stops resolving within ~30s.
// To restore: `vercel deploy --prod` from local (auto-reassigns the alias).

const DEFAULT_ALIAS = 'coral-devrel.vercel.app';

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'POST only' });
    return;
  }

  const { pin } = req.body || {};
  const expected = process.env.SELF_DESTRUCT_PIN;

  if (!expected) {
    res.status(503).json({ ok: false, error: 'Self-destruct not armed: SELF_DESTRUCT_PIN unset' });
    return;
  }

  if (typeof pin !== 'string' || pin.length === 0) {
    res.status(400).json({ ok: false, error: 'PIN required' });
    return;
  }

  // Constant-time-ish comparison
  if (pin.length !== expected.length) {
    res.status(403).json({ ok: false, error: 'PIN mismatch' });
    return;
  }
  let diff = 0;
  for (let i = 0; i < pin.length; i++) diff |= pin.charCodeAt(i) ^ expected.charCodeAt(i);
  if (diff !== 0) {
    res.status(403).json({ ok: false, error: 'PIN mismatch' });
    return;
  }

  const token = process.env.VERCEL_TOKEN;
  const alias = process.env.ALIAS || DEFAULT_ALIAS;

  if (!token) {
    res.status(200).json({
      ok: true,
      mode: 'demo',
      message: 'PIN accepted, but VERCEL_TOKEN is not configured. No alias removed. To arm for real: set VERCEL_TOKEN in Vercel project env.',
      alias
    });
    return;
  }

  try {
    const apiRes = await fetch(`https://api.vercel.com/v2/aliases/${encodeURIComponent(alias)}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` }
    });

    const body = await apiRes.text();

    if (!apiRes.ok) {
      res.status(apiRes.status).json({
        ok: false,
        mode: 'live',
        error: `Vercel API ${apiRes.status}`,
        detail: body.slice(0, 500)
      });
      return;
    }

    res.status(200).json({
      ok: true,
      mode: 'live',
      message: `Alias ${alias} removed. Site will stop resolving within ~30s. Run "vercel deploy --prod" from local to restore.`,
      alias
    });
  } catch (err) {
    res.status(500).json({ ok: false, error: 'Network error', detail: String(err && err.message || err) });
  }
}

export const config = { runtime: 'nodejs' };
