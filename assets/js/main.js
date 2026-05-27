// Coral DevRel Strategy site — shared JS
// Active nav highlight + simple presentation deck navigation

(function () {
  // Mark active nav link based on URL path
  const links = document.querySelectorAll('.nav-links a');
  const path = location.pathname.split('/').pop() || 'index.html';
  links.forEach(a => {
    const href = a.getAttribute('href');
    if (href === path) a.classList.add('active');
  });

  // Presentation deck
  const slides = document.querySelectorAll('.slide');
  if (slides.length === 0) return;

  let idx = 0;
  const total = slides.length;
  const progress = document.querySelector('.deck-progress');
  const counter = document.querySelector('.deck-counter');

  function render() {
    slides.forEach((s, i) => s.classList.toggle('active', i === idx));
    if (progress) progress.style.width = `${((idx + 1) / total) * 100}%`;
    if (counter) counter.textContent = `${idx + 1} / ${total}`;
    location.hash = `slide-${idx + 1}`;
  }

  function next() { idx = (idx + 1) % total; render(); }
  function prev() { idx = (idx - 1 + total) % total; render(); }
  function jump(n) { idx = Math.max(0, Math.min(total - 1, n)); render(); }

  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') { e.preventDefault(); next(); }
    else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); prev(); }
    else if (e.key === 'Home') { e.preventDefault(); jump(0); }
    else if (e.key === 'End') { e.preventDefault(); jump(total - 1); }
    else if (/^[0-9]$/.test(e.key)) { e.preventDefault(); jump(parseInt(e.key, 10) - 1); }
  });

  const btnNext = document.querySelector('.deck-next');
  const btnPrev = document.querySelector('.deck-prev');
  if (btnNext) btnNext.addEventListener('click', next);
  if (btnPrev) btnPrev.addEventListener('click', prev);

  // Honor hash on load
  const hashMatch = location.hash.match(/^#slide-(\d+)$/);
  if (hashMatch) idx = Math.max(0, Math.min(total - 1, parseInt(hashMatch[1], 10) - 1));
  render();
})();

// Self-destruct modal
(function () {
  const open = document.getElementById('self-destruct-open');
  const modal = document.getElementById('destruct-modal');
  if (!open || !modal) return;

  const pinInput = document.getElementById('destruct-pin');
  const arm = document.getElementById('destruct-arm');
  const errEl = document.getElementById('destruct-error');
  const countEl = document.getElementById('destruct-count');
  const doneDetail = document.getElementById('destruct-done-detail');
  const steps = modal.querySelectorAll('.destruct-step');
  let countdownTimer = null;

  function showStep(name) {
    steps.forEach(s => { s.hidden = s.dataset.step !== name; });
  }

  function openModal() {
    modal.hidden = false;
    showStep('confirm');
    errEl.hidden = true;
    pinInput.value = '';
    setTimeout(() => pinInput.focus(), 50);
  }

  function closeModal() {
    if (countdownTimer) { clearInterval(countdownTimer); countdownTimer = null; }
    modal.hidden = true;
  }

  function showError(msg) {
    errEl.textContent = msg;
    errEl.hidden = false;
  }

  async function fire(pin) {
    showStep('firing');
    try {
      const res = await fetch('/api/self-destruct', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pin })
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        showStep('confirm');
        showError(data.error ? `${data.error}${data.detail ? ' — ' + data.detail : ''}` : `Request failed (${res.status})`);
        return;
      }
      showStep('done');
      doneDetail.textContent = data.mode === 'live'
        ? (data.message || 'Alias removed.')
        : (data.message || 'PIN accepted (demo mode — VERCEL_TOKEN not set).');
      // Visible kill: redirect to tombstone after a beat
      setTimeout(() => { window.location.href = 'destroyed.html'; }, 1600);
    } catch (err) {
      showStep('confirm');
      showError('Network error: ' + (err && err.message ? err.message : err));
    }
  }

  function startCountdown(pin) {
    showStep('countdown');
    let n = 5;
    countEl.textContent = n;
    countdownTimer = setInterval(() => {
      n -= 1;
      if (n <= 0) {
        clearInterval(countdownTimer);
        countdownTimer = null;
        document.body.classList.add('destruct-flash');
        setTimeout(() => document.body.classList.remove('destruct-flash'), 600);
        fire(pin);
      } else {
        countEl.textContent = n;
      }
    }, 1000);
  }

  open.addEventListener('click', openModal);
  modal.addEventListener('click', e => {
    if (e.target.matches('[data-destruct-close]')) closeModal();
    if (e.target.closest('.destruct-step-countdown')) {
      if (countdownTimer) { clearInterval(countdownTimer); countdownTimer = null; }
      showStep('confirm');
    }
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !modal.hidden) closeModal();
  });
  pinInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') { e.preventDefault(); arm.click(); }
  });
  arm.addEventListener('click', () => {
    const pin = pinInput.value.trim();
    if (!pin) { showError('Enter the PIN.'); return; }
    errEl.hidden = true;
    startCountdown(pin);
  });
})();

// Metrics dashboard — load JSON if present and render via safe DOM construction
(async function () {
  const grid = document.getElementById('metrics-grid');
  if (!grid) return;
  try {
    const res = await fetch('data/metrics.json');
    const data = await res.json();
    while (grid.firstChild) grid.removeChild(grid.firstChild);
    data.kpis.forEach(k => {
      const stat = document.createElement('div');
      stat.className = 'stat';
      const v = document.createElement('div');
      v.className = 'stat-value' + (k.highlight ? ' coral' : '');
      v.textContent = k.value;
      const l = document.createElement('div');
      l.className = 'stat-label';
      l.textContent = k.label;
      stat.appendChild(v);
      stat.appendChild(l);
      if (k.note) {
        const n = document.createElement('small');
        n.textContent = k.note;
        stat.appendChild(n);
      }
      grid.appendChild(stat);
    });
  } catch (e) {
    const p = document.createElement('p');
    p.textContent = 'Metrics data unavailable.';
    grid.appendChild(p);
  }
})();
