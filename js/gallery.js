// Galería de proyectos: lightbox + filtros por categoría (sin dependencias)
(function () {
  // ---------- Lightbox ----------
  var lbox = document.getElementById('lbox');
  if (lbox) {
    var stage = lbox.querySelector('.lbox__stage');
    var openLbox = function (src, type) {
      stage.innerHTML = '';
      var el;
      if (type === 'video') {
        el = document.createElement('video');
        el.src = src; el.controls = true; el.autoplay = true; el.playsInline = true; el.muted = false;
      } else {
        el = document.createElement('img');
        el.src = src; el.alt = '';
      }
      stage.appendChild(el);
      lbox.classList.add('is-open');
      lbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    };
    var closeLbox = function () {
      lbox.classList.remove('is-open');
      lbox.setAttribute('aria-hidden', 'true');
      stage.innerHTML = '';
      document.body.style.overflow = '';
    };
    [].slice.call(document.querySelectorAll('.projcard')).forEach(function (c) {
      c.addEventListener('click', function () {
        var src = c.getAttribute('data-full');
        if (!src) return;
        openLbox(src, c.getAttribute('data-type') || 'img');
      });
    });
    lbox.addEventListener('click', function (e) {
      if (e.target === lbox || e.target.closest('.lbox__close')) closeLbox();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && lbox.classList.contains('is-open')) closeLbox();
    });
  }

  // ---------- Filtros ----------
  var filterBar = document.querySelector('.projfilter');
  if (filterBar) {
    var cards = [].slice.call(document.querySelectorAll('.projgrid .projcard'));
    filterBar.addEventListener('click', function (e) {
      var btn = e.target.closest('button');
      if (!btn) return;
      var f = btn.getAttribute('data-filter');
      [].slice.call(filterBar.querySelectorAll('button')).forEach(function (b) { b.classList.remove('is-active'); });
      btn.classList.add('is-active');
      cards.forEach(function (c) {
        var cats = (c.getAttribute('data-cats') || '').split(' ');
        var show = f === 'all' || cats.indexOf(f) !== -1;
        c.classList.toggle('is-hidden', !show);
      });
    });
  }
})();
