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
