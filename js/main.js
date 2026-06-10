/* ── Hero video ─────────────────────────────────────────────────────── */
(function () {
  const video = document.querySelector('.am-hero-video');
  if (!video) return;

  const hero = video.closest('.am-hero');

  function activate() { hero.classList.add('has-video'); }

  video.addEventListener('canplay',    activate, { once: true });
  video.addEventListener('loadeddata', activate, { once: true });
  video.addEventListener('error',      function () { hero.classList.remove('has-video'); }, { once: true });

  if (video.readyState >= 2) activate();
})();

/* ── Nav shadow on scroll ───────────────────────────────────────────── */
(function () {
  const nav = document.getElementById('nav');
  if (!nav) return;

  window.addEventListener('scroll', function () {
    nav.classList.toggle('am-nav--scrolled', window.scrollY > 20);
  }, { passive: true });
})();

/* ── Smooth scroll for anchor links ────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener('click', function (e) {
    const id = link.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

/* ── Fade-in on scroll (IntersectionObserver) ───────────────────────── */
(function () {
  const elements = document.querySelectorAll('.fade-in');
  if (!elements.length) return;

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.08 });

  elements.forEach(function (el) { observer.observe(el); });
})();

/* ── Contact form → mailto ──────────────────────────────────────────── */
(function () {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name    = document.getElementById('formName').value.trim();
    const email   = document.getElementById('formEmail').value.trim();
    const message = document.getElementById('formMessage').value.trim();

    if (!name || !email || !message) return;

    const subject = encodeURIComponent('Consulta – Watsu amb Maria');
    const body    = encodeURIComponent(
      'Hola Maria,\n\n' +
      'Em dic ' + name + ' (' + email + ').\n\n' +
      message + '\n\nGràcies!'
    );

    window.location.href = 'mailto:masnoudecoracio@gmail.com?subject=' + subject + '&body=' + body;
  });
})();
