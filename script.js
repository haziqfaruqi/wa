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
