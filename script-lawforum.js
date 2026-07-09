/* WomenAtlas — Law & Leadership Forum 2026 — vanilla JS */
(function () {
  "use strict";

  /* ---------- Toast ---------- */
  var toastEl = document.getElementById("toast");
  var toastTimer;
  function toast(msg) {
    if (!toastEl) return;
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
    { t1: "08:00", t2: "09:00", ap: "AM", title: "Registration & Networking Breakfast", detail: "A relaxed start. Delegates check in, collect their badges, and connect over breakfast." },
    { t1: "09:00", t2: "09:15", ap: "AM", title: "Opening Ceremony & Welcome", detail: "Official welcome by officiating partners & women in law" },
    { t1: "09:15", t2: "09:50", ap: "AM", title: "First Keynote", quote: "Women Beyond the Courtroom: Closing the Authority Gap in Law, Business & Society.", detail: "The day's intellectual spine. It names a truth every woman in law recognises — being seen is not the same as being trusted. Women are too often assumed less competent and made to prove it: interrupted on the bench, overlooked for partnership, second-guessed in the boardroom. The keynote sets up the question the whole forum answers, how women in law move from visibility to real authority." },
    { t1: "09:50", t2: "10:20", ap: "AM", title: "Sponsor Speech", detail: "Two different sponsors will be invited on the stage & each sponsor will be given 15 mins to speak." },
    { t1: "10:20", t2: "10:55", ap: "AM", title: "Second Keynote", quote: "From Lawyer to the Board: Winning the Board Seat, the GC Role & Beyond", detail: "The forum's signature, differentiating session — built around women who have actually done it (ideally a General Counsel, a partner-turned-founder, and a board director), each sharing the concrete steps, not just the inspiration. Topics: how women get appointed to boards the path to General Counsel building a business and legal entrepreneurship expanding or leaving practice on your own terms building the executive presence that gets you taken seriously." },
    { t1: "10:55", t2: "11:15", ap: "AM", title: "Tea & Networking Break" },
    { t1: "11:15", t2: "11:55", ap: "AM", title: "Fireside Chat", quote: "In Her Own Words: Leadership, Setbacks & Reinvention in Law", detail: "An honest, personal conversation with a woman leader on setbacks, reinvention, and finding her voice, the day's most human and memorable moment.\nTopics: navigating setbacks career pivots and second acts resilience under pressure leading authentically." },
    { t1: "11:55", t2: "12:30", ap: "PM", title: "Future Of Law Forum", quote: "AI Governance, the Amended PDPA & Digital Trust: What Every Counsel Must Know.", detail: "Our most credible and business-relevant block — anchored firmly in current Malaysian regulation, with practical takeaways delegates can use on Monday morning. Topics: the amended Personal Data Protection Act (PDPA), what changed and what counsel must do now AI governance frameworks and emerging rules cybersecurity and data-breach obligations cross-border data transfers the regulatory horizon every legal leader should be watching" },
    { t1: "12:30", t2: "01:00", ap: "PM", title: "The Visibility Advantage: Making Your Expertise Impossible to Ignore", quote: "Topics:", detail: "Personal branding · executive presence · thought leadership · strategic visibility · professional influence · leveraging LinkedIn for career and leadership opportunities " },
    { t1: "01:00", t2: "02:00", ap: "PM", title: "Networking Lunch" }
  ];
  var afternoon = [
    { t1: "02:00", t2: "02:40", ap: "PM", title: "Masterclass", quote: "The Lawyer's AI Playbook\nFrom stuck to started — a hands-on AI Masterclass for Women in Law.", detail: "A hands-on AI masterclass for women in law. Map where AI fits your practice, work through a real task, and leave with a 90-day adoption plan, a vetted toolkit, and the guardrails that matter: confidentiality, privilege, verification and the amended PDPA." },
    { t1: "02:40", t2: "03:20", ap: "PM", title: "Panel", quote: "From the Profession to Public Influence: How Women Shape Policy & Boards.", detail: "Topics: influencing public policy and law reform · governance excellence and the Malaysian Code on Corporate Governance · ESG and board duties · stepping into regulatory and national leadership roles." },
    { t1: "03:20", t2: "03:55", ap: "PM", title: "Keynote Session", quote: "Creating Multipliers, Not Successors.", detail: "Topics: mentorship & sponsorship · succession & leadership development · empowering the next generation of women leaders · building sustainable impact and influence · creating a legacy beyond personal achievement" },
    { t1: "03:55", t2: "04:30", ap: "PM", title: "Keynote Session", quote: "The Power Seat: Influence, Negotiation & Decision-Making at the Top", detail: "Topics: Executive influence . Negotiation at senior levels . Managing stakeholders . Power dynamics . Leading through complexity" },
    { t1: "04:30", t2: "04:50", ap: "PM", title: "Tea Break" },
    { t1: "04:50", t2: "05:20", ap: "PM", title: "Sponsor Speech", detail: "2 Different Sponsors will be invited on the stage & each sponsor will be given 15 mins to speak." },
    { t1: "05:20", t2: "05:35", ap: "PM", title: "Talk To The Crowd", detail: "Interviews, Q&As, Experience & Honest takes." },
    { t1: "05:35", t2: "05:50", ap: "PM", title: "Certificate Distribution" },
    { t1: "05:50", t2: "06:00", ap: "PM", title: "Closing" },
    { t1: "06:00", t2: "08:00", ap: "PM", title: "Networking Dinner & Media Interviews & PR" }
  ];

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  var breakTitles = ["Tea & Networking Break", "Networking Lunch", "Tea Break"];
  function rowHtml(r) {
    var hasDetail = !!(r.detail || r.quote);
    var isBreak = breakTitles.indexOf(r.title) !== -1;
    var timeHtml = '<span class="time"><span class="t1">' + esc(r.t1) + ' &ndash;</span><span class="t2">' + esc(r.t2) + '</span><span class="ap">' + esc(r.ap) + '</span></span>';
    var detailHtml = '';
    if (hasDetail) {
      if (r.quote) detailHtml += '<p class=”detail-quote” style=”font-style:italic;font-weight:700;color:#fff;font-size:16px;line-height:1.5;margin:0 0 16px 0;”>&ldquo;' + esc(r.quote) + '&rdquo;</p>';
      if (r.detail) detailHtml += '<p class=”detail-body” style=”font-style:normal;font-weight:400;color:rgba(255,255,255,0.8);font-size:15px;line-height:1.7;margin:0;”>' + esc(r.detail).replace(/\n/g, '<br>') + '</p>';
    }
    return '<div class="prow' + (hasDetail ? "" : " no-detail") + (isBreak ? " prow--break" : "") + '">' +
      '<button type="button"' + (hasDetail ? "" : " disabled") + '>' +
      timeHtml +
      '<span class="title-wrap">' +
        '<span class="title">' + esc(r.title) + "</span>" +
      "</span>" +
      (hasDetail ? '<span class="toggle">+</span>' : "") +
      "</button>" +
      (hasDetail ? '<div class="prow-detail">' + detailHtml + '</div>' : "") +
      "</div>";
  }
  var list = document.getElementById("programme-list");
  if (list) {
    list.innerHTML = morning.concat(afternoon).map(rowHtml).join("");
    list.addEventListener("click", function (e) {
      var btn = e.target.closest(".prow button");
      if (!btn || btn.disabled) return;
      btn.parentElement.classList.toggle("open");
    });
  }

  /* ---------- Who Should Attend tabs ---------- */
  var wsaTabs   = document.querySelectorAll(".wsa-tab");
  var wsaPanels = document.querySelectorAll(".wsa-panel");
  wsaTabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var target = tab.getAttribute("data-tab");
      wsaTabs.forEach(function (t) { t.classList.remove("active"); t.setAttribute("aria-selected", "false"); });
      wsaPanels.forEach(function (p) { p.classList.remove("active"); });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      var panel = document.querySelector(".wsa-panel[data-panel='" + target + "']");
      if (panel) panel.classList.add("active");
    });
  });

  /* ---------- Stat counters ---------- */
  var counters = document.querySelectorAll("[data-counter]");
  if (counters.length && "IntersectionObserver" in window) {
    var animateCounter = function (el) {
      var target = parseFloat(el.getAttribute("data-target")) || 0;
      var suffix = el.getAttribute("data-suffix") || "";
      var duration = 1200;
      var start = null;

      function step(timestamp) {
        if (start === null) start = timestamp;
        var progress = Math.min((timestamp - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        var value = Math.floor(eased * target);
        el.textContent = value.toLocaleString() + suffix;
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = target.toLocaleString() + suffix;
        }
      }
      requestAnimationFrame(step);
    };

    var counterObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    counters.forEach(function (el) { counterObserver.observe(el); });
  }

  /* ---------- Mobile nav toggle ---------- */
  var navToggle = document.getElementById("nav-toggle");
  var mainNav   = document.getElementById("main-nav");
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      var open = mainNav.classList.toggle("open");
      navToggle.classList.toggle("open", open);
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    mainNav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        mainNav.classList.remove("open");
        navToggle.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

})();
