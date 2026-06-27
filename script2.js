/* ====================================================================
   WomenAtlas — standalone site behaviour (vanilla JS, no dependencies)
   ==================================================================== */
(function () {
  'use strict';

  /* ---------- data ---------- */
  var ECOSYSTEM = [
    ['users', 'Summits &amp; Forums', 'Premium gatherings that convene women leaders for dialogue, development, and connection.'],
    ['coins', 'Funding Initiatives', 'Access to capital and growth opportunities for women founders and entrepreneurs.'],
    ['book', 'Media &amp; Publications', 'Amplifying women\u2019s voices and stories across credible editorial platforms.'],
    ['award', 'Awards &amp; Recognition', 'Celebrating outstanding women leaders across law, business, and governance.'],
    ['store', 'Marketplace Opportunities', 'Connecting women-led businesses with visibility, partnerships, and reach.'],
    ['spark', 'Impact-Driven Programmes', 'Mentorship, leadership development, and community-building at scale.']
  ];

  var ICONS = {
    users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    coins: '<circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/><path d="M7 6h1v4"/><path d="m16.71 13.88.7.71-2.82 2.82"/>',
    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
    award: '<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>',
    store: '<path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M2 7h20"/>',
    spark: '<path d="M12 3v18"/><path d="M5.6 5.6l12.8 12.8"/><path d="M3 12h18"/><path d="M5.6 18.4 18.4 5.6"/>'
  };

  var DAYS = {
    '1': {
      label: 'Day 1 · June 4', title: 'She Leads — Accountability &amp; Exposure',
      items: [
        ['Strategic decision-making under complexity', 'Leadership framework deep-dive'],
        ['Navigating power, influence &amp; organisational realities', 'Panel: C-suite perspectives'],
        ['Responsibility &amp; accountability as a senior leader', 'Workshop: accountability structures'],
        ['Long-term leadership health &amp; legacy building', 'Signature mindset session'],
        ['The human side of leadership: resilience &amp; clarity', 'Closing keynote']
      ]
    },
    '2': {
      label: 'Day 2 · June 5', title: 'She Brands — Visibility &amp; Influence',
      items: [
        ['Building a recognised professional brand', 'Positioning masterclass'],
        ['Storytelling for influence &amp; media presence', 'Workshop: narrative &amp; voice'],
        ['Digital authority &amp; thought leadership', 'Panel: founders &amp; creators'],
        ['Strategic visibility without self-promotion fatigue', 'Signature session'],
        ['Turning influence into opportunity', 'Closing keynote']
      ]
    }
  };

  var SPEAKERS = [
    ['Nur Farisya', 'Co-founder of Alpha Ace Solutions', 'assets/speaker-1.webp'],
    ['Dr. Lee Yong Yong', 'English Language Lecturer, ICF Certified Coach', null],
    ['Nora Afzam', 'Manager &amp; Coach at Schneider Electric', null],
    ['Mimi Natasha', 'Founder &amp; CEO of Trainito Academy', null]
  ];

  var LINKEDIN = '<svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-1 1.83-2.05 3.76-2.05C20.6 8.65 22 10.6 22 14v7h-4v-6.2c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.6-2.38 3.27V21H9V9Z"/></svg>';

  /* ---------- render ---------- */
  function renderEcosystem() {
    var el = document.getElementById('ecoGrid');
    if (!el) return;
    el.innerHTML = ECOSYSTEM.map(function (it) {
      return '<div class="eco-card">' +
        '<span class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' + ICONS[it[0]] + '</svg></span>' +
        '<h3>' + it[1] + '</h3><p>' + it[2] + '</p></div>';
    }).join('');
  }

  function renderSpeakers() {
    var el = document.getElementById('spGrid');
    if (!el) return;
    el.innerHTML = SPEAKERS.map(function (s) {
      var hasPhoto = !!s[2];
      var style = hasPhoto ? ' style="background-image:url(\'' + s[2] + '\')"' : '';
      return '<div class="speaker' + (hasPhoto ? '' : ' tbc') + '">' +
        '<div class="photo"' + style + '></div>' +
        '<div class="uline"></div>' +
        '<div class="nm">' + s[0] + '</div>' +
        '<div class="rl">' + s[1] + '</div>' +
        '<a class="li" href="#" aria-label="LinkedIn">' + LINKEDIN + '</a>' +
        '</div>';
    }).join('');
  }

  function renderDay(n) {
    var d = DAYS[n];
    if (!d) return;
    document.getElementById('dayLabel').innerHTML = d.label;
    document.getElementById('dayTitle').innerHTML = d.title;
    document.getElementById('dayList').innerHTML = d.items.map(function (it) {
      return '<div class="sess"><div><div class="st">' + it[0] + '</div><div class="ss">' + it[1] + '</div></div></div>';
    }).join('');
    // toggle tag styles
    document.getElementById('dt1').className = 'tag ' + (n === '1' ? 'solid' : 'outline');
    document.getElementById('dt2').className = 'tag ' + (n === '2' ? 'solid' : 'outline');
  }

  /* ---------- navigation ---------- */
  function show(screen) {
    document.getElementById('home').classList.toggle('hidden', screen !== 'home');
    document.getElementById('summit').classList.toggle('hidden', screen !== 'summit');
    document.querySelectorAll('.nav nav a').forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('data-go') === screen && a.textContent.trim() === 'Programmes');
    });
    window.scrollTo(0, 0);
    if (history.replaceState) history.replaceState(null, '', '#' + screen);
  }

  /* ---------- wire up ---------- */
  function init() {
    renderEcosystem();
    renderSpeakers();
    renderDay('1');

    document.addEventListener('click', function (e) {
      var nav = e.target.closest('[data-go]');
      if (nav) { e.preventDefault(); show(nav.getAttribute('data-go')); return; }
      var day = e.target.closest('[data-day]');
      if (day) { renderDay(day.getAttribute('data-day')); }
    });

    // honour deep link (#summit)
    var hash = (location.hash || '').replace('#', '');
    show(hash === 'summit' ? 'summit' : 'home');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
