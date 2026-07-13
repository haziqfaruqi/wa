/* Shared footer loader — included on all pages */
(function () {
  function loadFooterMain() {
    var els = document.querySelectorAll('#footer-main-wrap');
    if (!els.length) return;
    var path = window.location.pathname;
    var onHome = path.indexOf('homepage.html') !== -1 || path === '/' || path.endsWith('/');
    var onSummit = path.indexOf('summit.html') !== -1;
    fetch('footer-main.html', { cache: 'no-store' })
      .then(function (r) { return r.text(); })
      .then(function (html) {
        els.forEach(function (el) {
          el.innerHTML = html;
          if (onHome) {
            el.querySelectorAll('a[href^="homepage.html#"]').forEach(function (a) {
              a.href = a.href.replace('homepage.html#', '#');
            });
          }
          if (onSummit) {
            var exploreCol = el.querySelector('.fmain-col');
            if (exploreCol) {
              exploreCol.innerHTML = '<div class="fmain-col-title">EXPLORE</div>' +
                '<a href="#about">About</a>' +
                '<a href="#programme">Programme</a>' +
                '<a href="#speakers">Speakers</a>' +
                '<a href="#tickets">Register</a>';
            }
          }
        });
      });
  }
  loadFooterMain();
})();
