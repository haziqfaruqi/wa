/* home.html mobile nav toggle */
(function () {
  var btn = document.querySelector('.menu-btn');
  if (!btn) return;
  btn.addEventListener('click', function () {
    var header = document.querySelector('header');
    if (header) header.classList.toggle('nav-open');
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('header')) {
      var header = document.querySelector('header');
      if (header) header.classList.remove('nav-open');
    }
  });
})();

/* footer-main.html loader */
(function () {
  function loadFooterMain() {
    var els = document.querySelectorAll('#footer-main-wrap');
    if (!els.length) return;
    var onHome = window.location.pathname.indexOf('home.html') !== -1 || window.location.pathname === '/' || window.location.pathname.endsWith('/');
    fetch('footer-main.html')
      .then(function (r) { return r.text(); })
      .then(function (html) {
        els.forEach(function (el) {
          el.innerHTML = html;
          if (onHome) {
            el.querySelectorAll('a[href^="home.html#"]').forEach(function (a) {
              a.href = a.href.replace('home.html#', '#');
            });
          }
        });
      });
  }
  loadFooterMain();
})();

/* Shared footer loader */
(function () {
  var el = document.getElementById('shared-footer');
  if (!el) return;
  fetch('footer.html')
    .then(function (r) { return r.text(); })
    .then(function (html) {
      el.outerHTML = html;
      // re-wire buy buttons and newsletter that landed inside the footer
      var toastEl = document.getElementById('toast');
      function showToast(msg) {
        if (toastEl) { toastEl.textContent = '✓ ' + msg; toastEl.classList.add('show'); setTimeout(function () { toastEl.classList.remove('show'); }, 2600); }
      }
      document.querySelectorAll('[data-buy]').forEach(function (b) {
        b.addEventListener('click', function () { showToast('Ticket reserved — check your inbox'); });
      });
      var news = document.querySelector('[data-news]');
      if (news) news.addEventListener('submit', function (e) {
        e.preventDefault();
        showToast("You're on the list");
        news.reset();
      });
    });
})();

/* WomenAtlas — Law & Leadership Forum 2026 — vanilla JS
   Builds the speaker grid + programme carousel, wires accordions,
   buy-ticket toast, and the newsletter form. No dependencies. */
(function () {
  "use strict";

  /* ---------- Toast ---------- */
  var toastEl = document.getElementById("toast");
  var toastTimer;
  function toast(msg) {
    toastEl.textContent = "✓ " + msg;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove("show"); }, 2600);
  }

  /* ---------- Buy buttons ---------- */
  document.querySelectorAll("[data-buy]").forEach(function (b) {
    b.addEventListener("click", function () { toast("Ticket reserved — check your inbox"); });
  });

  /* ---------- Newsletter ---------- */
  var news = document.querySelector("[data-news]");
  if (news) news.addEventListener("submit", function (e) {
    e.preventDefault();
    toast("You're on the list");
    news.reset();
  });

  /* ---------- Speakers ---------- */
  var speakerTracks = [
    "Law & Justice", "Policy & Governance", "Business & Leadership", "AI & Digital Trust",
    "The Judiciary", "Corporate Counsel", "Governance", "Legal Innovation",
    "Law & Justice", "Law & Justice", "Law & Justice", "Law & Justice"
  ];
  var personGlyph =
    '<svg width="44" height="44" viewBox="0 0 24 24" fill="currentColor">' +
    '<circle cx="12" cy="8" r="4"/><path d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8"/></svg>';
  var sg = document.getElementById("speakers-grid");
  if (sg) {
    sg.innerHTML = speakerTracks.map(function (t) {
      return '<div class="speaker">' +
        '<div class="av">' + personGlyph + "</div>" +
        '<div class="track">Announcing soon</div>' +
        '<div class="nm">—</div>' +
        "</div>";
    }).join("");
  }

  /* ---------- Programme data ---------- */
  var morning = [
    { t1: "08:00", t2: "09:00", ap: "AM", title: "Registration & Networking Breakfast", detail: "Check in, collect badges, and connect over breakfast." },
    { t1: "09:00", t2: "09:15", ap: "AM", title: "Opening Ceremony & Welcome", detail: "Official welcome by officiating partners & women in law" },
    { t1: "09:15", t2: "09:50", ap: "AM", title: "Keynote: Women Beyond The Courtroom", detail: "Closing the Authority Gap in law, business & society." },
    { t1: "09:50", t2: "10:20", ap: "AM", title: "Speaker Speech", detail: "Two sponsors presentations (15 mins each)." },
    { t1: "10:20", t2: "10:55", ap: "AM", title: "Fireside Chat: In Her Own Words", detail: "Winning the board seat, the GC role & beyond." },
    { t1: "10:55", t2: "11:15", ap: "AM", title: "Tea & Networking Break" },
    { t1: "11:15", t2: "11:55", ap: "AM", title: "Fireside Chat: In Her Own Words", detail: "Career pivots, second acts, and leading with resilience." },
    { t1: "11:55", t2: "12:30", ap: "PM", title: "Future Of Law: AI, PDPA & Digital Trust", detail: "Navigating AI, the amended PDPA, and digital trust." },
    { t1: "12:30", t2: "01:00", ap: "PM", title: "LinkedIn Branding Class", detail: "Making your expertise impossible to ignore." },
    { t1: "01:00", t2: "02:00", ap: "PM", title: "Networking Lunch" }
  ];
  var afternoon = [
    { t1: "02:00", t2: "02:40", ap: "PM", title: "Masterclass: Build the Book", detail: "Rainmaking & career capital for women in law." },
    { t1: "02:40", t2: "03:20", ap: "PM", title: "Panel: From Profession To Public Influence", detail: "How women shape policy & boards." },
    { t1: "03:20", t2: "03:55", ap: "PM", title: "Keynote: Creating Multipliers, Not Successors", detail: "Creating Multipliers, Not Successors." },
    { t1: "03:55", t2: "04:30", ap: "PM", title: "Keynote: The Power Seat", detail: "Influence, negotiations & decisions-making at the top." },
    { t1: "04:30", t2: "04:50", ap: "PM", title: "Tea Break" },
    { t1: "04:50", t2: "05:20", ap: "PM", title: "Sponsor Speech", detail: "MATRADE & UNITAR." },
    { t1: "05:20", t2: "05:35", ap: "PM", title: "Talk To The Crowd", detail: "Interviews, Q&As, experience & honest takes." },
    { t1: "05:35", t2: "05:50", ap: "PM", title: "Certificate Distribution", detail: "Interviews, Q&As, experience & honest takes." },
    { t1: "05:50", t2: "06:00", ap: "PM", title: "Closing" },
    { t1: "06:00", t2: "08:00", ap: "PM", title: "Networking Dinner & Media", detail: "Networking dinner, media interviews & PR." }
  ];

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function rowHtml(r) {
    var hasDetail = !!r.detail;
    var timeHtml = '<span class="time"><span class="t1">' + esc(r.t1) + ' &ndash;</span><span class="t2">' + esc(r.t2) + '</span><span class="ap">' + esc(r.ap) + '</span></span>';
    return '<div class="prow' + (hasDetail ? "" : " no-detail") + '">' +
      '<button type="button"' + (hasDetail ? "" : " disabled") + '>' +
      timeHtml +
      '<span class="title-wrap">' +
        '<span class="title">' + esc(r.title) + "</span>" +
        (hasDetail ? '<span class="detail">' + esc(r.detail) + "</span>" : "") +
      "</span>" +
      (hasDetail ? '<span class="toggle">+</span>' : "") +
      "</button>" +
      "</div>";
  }
  function fillPage(idx, rows) {
    var p = document.querySelector('.page[data-page="' + idx + '"]');
    if (p) p.innerHTML = rows.map(rowHtml).join("");
  }
  fillPage(0, morning);
  fillPage(1, afternoon);

  /* ---------- Accordion (event delegation) ---------- */
  var carousel = document.getElementById("programme-carousel");
  if (carousel) {
    carousel.addEventListener("click", function (e) {
      var btn = e.target.closest(".prow button");
      if (!btn || btn.disabled) return;
      btn.parentElement.classList.toggle("open");
    });

    /* ---------- Carousel paging ---------- */
    var pages = carousel.querySelectorAll(".page");
    var dots = carousel.querySelectorAll(".dots button");
    var prev = carousel.querySelector("[data-prev]");
    var next = carousel.querySelector("[data-next]");
    var current = 0;

    function render() {
      pages.forEach(function (p, i) { p.hidden = i !== current; });
      dots.forEach(function (d, i) { d.classList.toggle("on", i === current); });
      prev.disabled = current === 0;
      next.disabled = current === pages.length - 1;
    }
    prev.addEventListener("click", function () { if (current > 0) { current--; render(); } });
    next.addEventListener("click", function () { if (current < pages.length - 1) { current++; render(); } });
    dots.forEach(function (d, i) { d.addEventListener("click", function () { current = i; render(); }); });
    render();
  }

  /* ---------- Who Should Attend tabs ---------- */
  var wsaTabs   = document.querySelectorAll(".wsa-tab");
  var wsaPanels = document.querySelectorAll(".wsa-panel");
  wsaTabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var target = tab.getAttribute("data-tab");
      wsaTabs.forEach(function (t) {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      wsaPanels.forEach(function (p) { p.classList.remove("active"); });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      var panel = document.querySelector(".wsa-panel[data-panel='" + target + "']");
      if (panel) panel.classList.add("active");
    });
  });

  /* ---------- Mobile nav toggle ---------- */
  var navToggle = document.getElementById("nav-toggle");
  var mainNav   = document.getElementById("main-nav");
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      var open = mainNav.classList.toggle("open");
      navToggle.classList.toggle("open", open);
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    mainNav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        mainNav.classList.remove("open");
        navToggle.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open menu");
      });
    });
  }

})();

/* ============================================================
   home.html behaviour (script2.js merged)
   ============================================================ */
(function () {
  'use strict';

  var ECOSYSTEM = [
    ['users', 'Summits &amp; Forums', 'Premium gatherings that convene women leaders for dialogue, development, and connection.'],
    ['coins', 'Funding Initiatives', 'Access to capital and growth opportunities for women founders and entrepreneurs.'],
    ['book', 'Media &amp; Publications', 'Amplifying women’s voices and stories across credible editorial platforms.'],
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
    document.getElementById('dt1').className = 'tag ' + (n === '1' ? 'solid' : 'outline');
    document.getElementById('dt2').className = 'tag ' + (n === '2' ? 'solid' : 'outline');
  }

  function show(screen) {
    document.getElementById('home').classList.toggle('hidden', screen !== 'home');
    document.getElementById('summit').classList.toggle('hidden', screen !== 'summit');
    document.querySelectorAll('.nav nav a').forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('data-go') === screen && a.textContent.trim() === 'Programmes');
    });
    window.scrollTo(0, 0);
    if (history.replaceState) history.replaceState(null, '', '#' + screen);
  }

  function init() {
    if (!document.getElementById('ecoGrid') && !document.getElementById('spGrid')) return;
    renderEcosystem();
    renderSpeakers();
    renderDay('1');

    document.addEventListener('click', function (e) {
      var nav = e.target.closest('[data-go]');
      if (nav) { e.preventDefault(); show(nav.getAttribute('data-go')); return; }
      var day = e.target.closest('[data-day]');
      if (day) { renderDay(day.getAttribute('data-day')); }
    });

    var hash = (location.hash || '').replace('#', '');
    show(hash === 'summit' ? 'summit' : 'home');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
