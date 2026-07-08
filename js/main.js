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

/* ── Gallery auto-slider ────────────────────────────────────────────── */
(function () {
  const track = document.getElementById('galleryTrack');
  const dotsContainer = document.getElementById('galleryDots');
  if (!track || !dotsContainer) return;

  const slides = track.querySelectorAll('.am-gallery-slide');
  const total = slides.length;
  let current = 0;
  let timer;

  slides.forEach(function (_, i) {
    const dot = document.createElement('button');
    dot.className = 'am-gallery-dot' + (i === 0 ? ' is-active' : '');
    dot.setAttribute('aria-label', 'Slide ' + (i + 1));
    dot.addEventListener('click', function () { goTo(i); restart(); });
    dotsContainer.appendChild(dot);
  });

  function goTo(index) {
    current = (index + total) % total;
    track.style.transform = 'translateX(-' + (current * 100) + '%)';
    dotsContainer.querySelectorAll('.am-gallery-dot').forEach(function (d, i) {
      d.classList.toggle('is-active', i === current);
    });
  }

  function next() { goTo(current + 1); }

  function start() { timer = setInterval(next, 4000); }
  function restart() { clearInterval(timer); start(); }

  track.closest('.am-gallery').addEventListener('mouseenter', function () { clearInterval(timer); });
  track.closest('.am-gallery').addEventListener('mouseleave', start);

  start();
})();

/* ── Contact form → Formspree ───────────────────────────────────────── */
(function () {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const submitBtn = form.querySelector('.am-form-submit');
  const submitText = submitBtn.querySelector('span:last-child');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name    = document.getElementById('formName').value.trim();
    const email   = document.getElementById('formEmail').value.trim();
    const message = document.getElementById('formMessage').value.trim();

    if (!name || !email || !message) return;

    submitBtn.disabled = true;
    submitText.textContent = 'Enviant...';

    fetch('https://formspree.io/f/xjgdalak', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name, email: email, message: message })
    })
    .then(function (res) {
      if (res.ok) {
        submitText.textContent = 'Missatge enviat!';
        form.reset();
      } else {
        submitText.textContent = 'Error, torna-ho a provar';
        submitBtn.disabled = false;
      }
    })
    .catch(function () {
      submitText.textContent = 'Error, torna-ho a provar';
      submitBtn.disabled = false;
    });
  });
})();
