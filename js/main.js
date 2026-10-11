/* ═══════════════════════════════════════════════════════════
   Chain the Sun — main.js
   ═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ─── PARTICLE ANIMATION ──────────────────────────────────── */
  function initParticles() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas || !canvas.getContext) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animId = null;
    let running = true;

    function resize() {
      const hero = document.getElementById('hero');
      if (!hero) return;
      canvas.width  = hero.offsetWidth;
      canvas.height = hero.offsetHeight;
    }

    function mkParticle() {
      return {
        x:       Math.random() * canvas.width,
        y:       Math.random() * canvas.height,
        r:       Math.random() * 1.8 + 0.4,
        opacity: Math.random() * 0.35 + 0.05,
        vy:      Math.random() * 0.45 + 0.15,
        vx:      (Math.random() - 0.5) * 0.25
      };
    }

    function init() {
      resize();
      particles = Array.from({ length: 90 }, mkParticle);
    }

    function loop() {
      if (!running) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        p.y -= p.vy;
        p.x += p.vx;

        if (p.y < -4) {
          p.y = canvas.height + 4;
          p.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(220,210,195,' + p.opacity + ')';
        ctx.fill();
      }

      animId = requestAnimationFrame(loop);
    }

    try {
      init();
      loop();

      window.addEventListener('resize', function () {
        resize();
      });

      document.addEventListener('visibilitychange', function () {
        running = !document.hidden;
        if (running) loop();
      });
    } catch (e) {
      /* Graceful degradation — hero content unaffected */
    }
  }

  /* ─── HAMBURGER NAV ───────────────────────────────────────── */
  function initNav() {
    var toggle   = document.getElementById('navToggle');
    var navLinks = document.getElementById('navLinks');
    if (!toggle || !navLinks) return;

    toggle.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        navLinks.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ─── SCROLL SPY ──────────────────────────────────────────── */
  function initScrollSpy() {
    var sections = document.querySelectorAll('section[id]');
    var navAs    = document.querySelectorAll('.nav__links a');
    if (!sections.length || !navAs.length) return;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          navAs.forEach(function (a) {
            a.classList.toggle(
              'active',
              a.getAttribute('href') === '#' + e.target.id
            );
          });
        }
      });
    }, { threshold: 0.4 });

    sections.forEach(function (s) { io.observe(s); });
  }

  /* ─── SMOOTH SCROLL FALLBACK (older browsers) ─────────────── */
  function initSmoothScroll() {
    if (CSS && CSS.supports && CSS.supports('scroll-behavior', 'smooth')) return;

    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var target = document.querySelector(a.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  /* ─── INIT ────────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    initParticles();
    initNav();
    initScrollSpy();
    initSmoothScroll();
  });

}());
