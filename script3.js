/* She Leads. Brands. Summit 2026 — standalone site behaviour.
   Vanilla JS. Renders data-driven sections and wires interactions. */

(function () {
  "use strict";

  /* ── Data ───────────────────────────────────────────────── */
  const SECTORS = [
    { num: "01", title: "Legal Sector", summary: "The core of the room — senior voices from the bench, the bar and in-house teams.", roles: ["Lawyers", "Judges", "partners", "Arbitrators", "Legal advisors", "Senior Associates", "Corporate Secretaries"] },
    { num: "02", title: "Corporate Sector", summary: "Decision-makers who shape strategy, risk and culture from the top.", roles: ["CEOs", "founders", "HR Leaders", "Board Directors", "Compliance Leaders", "Risk Leaders"] },
    { num: "03", title: "Public Sector", summary: "The voices behind the rules — policy, regulation and public influence.", roles: ["Policymakers", "Regulators", "Government legal officers"] },
    { num: "04", title: "Future Leaders", summary: "The next generation, building the pipeline of women in leadership.", roles: ["Young Lawyers", "Law Graduates", "Selected Students"] }
  ];

  const DELIVERS = [
    { t: "Confidence", d: "Lead from conviction, not permission." },
    { t: "Clarity", d: "A sharper sense of your vision and next move." },
    { t: "Community", d: "A room of peers who hold the same standard." },
    { t: "Keynote stage", d: "Frontline insight from women who have built." },
    { t: "Workshops", d: "Practical, working sessions — not just talks." },
    { t: "Networking", d: "Deliberate introductions across sectors." }
  ];

  const DAYS = [
    { tab: "Day 1 — She Leads", day: "Day 1 · June 4", theme: "Accountability & Exposure", rows: [
      ["09:00", "Registration & welcome"], ["10:00", "Opening keynote — Leading with intention"],
      ["11:30", "Panel — Substance over celebrity"], ["14:00", "Workshop — Clarity under pressure"], ["16:00", "Long-table leadership dialogue"]
    ] },
    { tab: "Day 2 — She Brands", day: "Day 2 · June 5", theme: "Influence & Legacy", rows: [
      ["09:30", "Fireside — Building a brand that lasts"], ["11:00", "Workshop — Narrative & visibility"],
      ["14:00", "Panel — Architecting influence"], ["16:00", "Closing keynote & pledges"]
    ] }
  ];

  const SPEAKERS = [
    { name: "YAB Datuk Azlian", role: "Male Leader & Trailblazing\nAdvocate for Women", lead: true },
    { name: "Nur Farisya", role: "Co-founder of\nAlpha Ace Solutions" },
    { name: "Mimi Natasha", role: "Founder & CEO of\nTrainito Academy" },
    { name: "Jeane Law", role: "Brand & Experience\nStrategist at Kiseki Works" },
    { name: "Nora Afzam", role: "Manager & Coach at\nSchneider Electric" },
    { name: "Darshvini M", role: "Branding & Marketing\nManager at LPS" },
    { name: "Mehmil Abid", role: "Assistant Marketing\nManager at LPS" },
    { name: "Dr. Lee Yong Yong", role: "ICF Certified\nProfessional Coach" },
    { name: "TBC", role: "To be announced", tbc: true }
  ];

  const PASSES = [
    { tier: "Student/NGO Pass", price: "RM 99", features: ["Full 2-day access", "Workshop materials", "Community circle"] },
    { tier: "Delegate Pass", price: "RM 449", note: "most popular", featured: true, features: ["Everything in Student/NGO", "Reserved seating", "Networking lunch", "Digital programme deck"] },
    { tier: "VIP Pass", price: "RM 899", features: ["Front-row seating", "Speaker dinner", "VIP lounge access", "1:1 mentor match"] }
  ];

  const PARTNERS = ["assets/partner-exchange-asia.png", "assets/partner-catalist.png", "assets/partner-exchange-asia.png", "assets/partner-catalist.png"];
  const PASS_IMG = "assets/pass-card-bg.png";

  /* ── Helpers ────────────────────────────────────────────── */
  const $ = (sel) => document.querySelector(sel);
  const el = (html) => { const t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstElementChild; };
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const AVATAR_SVG = '<svg viewBox="0 0 24 24" width="90" height="100" style="margin-bottom:-2px"><circle cx="12" cy="8" r="4.2"></circle><path d="M4 22c0-4.4 3.6-7.5 8-7.5s8 3.1 8 7.5z"></path></svg>';
  const GLOBE_SVG = '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"></circle><path d="M3 12h18M12 3c2.6 2.7 2.6 15.3 0 18M12 3c-2.6 2.7-2.6 15.3 0 18"></path></svg>';

  /* ── Sectors (tabbed) ───────────────────────────────────── */
  const sectorTabs = $("#sectorTabs");
  const sectorPanel = $("#sectorPanel");
  function renderSector(i) {
    const s = SECTORS[i];
    sectorPanel.innerHTML = "";
    sectorPanel.appendChild(el(
      '<div class="sector__left">' +
        '<div class="sector__num">' + esc(s.num) + '</div>' +
        '<div class="sector__title">' + esc(s.title) + '</div>' +
        '<p class="sector__summary">' + esc(s.summary) + '</p>' +
      '</div>'
    ));
    const roles = el('<div class="sector__roles"></div>');
    s.roles.forEach((r) => roles.appendChild(el('<span class="chip">' + esc(r) + '</span>')));
    sectorPanel.appendChild(roles);
    [...sectorTabs.children].forEach((b, bi) => b.setAttribute("aria-selected", String(bi === i)));
  }
  SECTORS.forEach((s, i) => {
    const b = el('<button class="tab" role="tab">' + esc(s.title) + '</button>');
    b.addEventListener("click", () => renderSector(i));
    sectorTabs.appendChild(b);
  });
  renderSector(0);

  /* ── Delivers ───────────────────────────────────────────── */
  const grid = $("#deliversGrid");
  DELIVERS.forEach((x) => grid.appendChild(el(
    '<div class="card card--hover"><h3 class="card__title">' + esc(x.t) + '</h3><p class="card__body">' + esc(x.d) + '</p></div>'
  )));

  /* ── Programme (tabbed) ─────────────────────────────────── */
  const dayTabs = $("#dayTabs");
  const agendaCard = $("#agendaCard");
  function renderDay(i) {
    const d = DAYS[i];
    agendaCard.innerHTML = "";
    agendaCard.appendChild(el(
      '<div class="agenda__head"><div class="agenda__day">' + esc(d.day) + '</div><div class="agenda__theme">' + esc(d.theme) + '</div></div>'
    ));
    d.rows.forEach((r) => agendaCard.appendChild(el(
      '<div class="agenda__row"><span class="agenda__time">' + esc(r[0]) + '</span><span class="agenda__title">' + esc(r[1]) + '</span></div>'
    )));
    [...dayTabs.children].forEach((b, bi) => b.setAttribute("aria-selected", String(bi === i)));
  }
  DAYS.forEach((d, i) => {
    const b = el('<button class="tab" role="tab">' + esc(d.tab) + '</button>');
    b.addEventListener("click", () => renderDay(i));
    dayTabs.appendChild(b);
  });
  renderDay(0);

  /* ── Speakers ───────────────────────────────────────────── */
  function speakerNode(s, size) {
    const avatarStyle = "width:" + size + "px;height:" + size + "px";
    const node = el(
      '<div class="speaker">' +
        '<div class="speaker__avatar" style="' + avatarStyle + '">' + (s.tbc || !s.img ? AVATAR_SVG : "") + '</div>' +
        '<div class="speaker__name' + (s.tbc ? " speaker__name--tbc" : "") + '">' + esc(s.name) + '</div>' +
        '<div class="speaker__role">' + esc(s.role) + '</div>' +
        (s.tbc ? "" : '<a class="speaker__link" href="#" aria-label="' + esc(s.name) + ' link">' + GLOBE_SVG + '</a>') +
      '</div>'
    );
    return node;
  }
  $("#speakerLead").appendChild(speakerNode(SPEAKERS[0], 220));
  const sg = $("#speakerGrid");
  SPEAKERS.slice(1).forEach((s) => sg.appendChild(speakerNode(s, 170)));

  /* ── Passes ─────────────────────────────────────────────── */
  const passes = $("#passes");
  PASSES.forEach((p) => {
    const features = p.features.map((f) => "<li>" + esc(f) + "</li>").join("");
    passes.appendChild(el(
      '<div class="pass' + (p.featured ? " pass--featured" : "") + '">' +
        '<div class="pass__tier">' + esc(p.tier) + '</div>' +
        '<div class="pass__band" style="background-image:url(' + PASS_IMG + ')"></div>' +
        '<div class="pass__body">' +
          '<div class="pass__price"><b>' + esc(p.price) + '</b>' + (p.note ? '<span>' + esc(p.note) + '</span>' : "") + '</div>' +
          '<ul class="pass__features">' + features + '</ul>' +
          '<a class="pass__buy" href="#">Buy Now</a>' +
        '</div>' +
      '</div>'
    ));
  });

  /* ── Partners ───────────────────────────────────────────── */
  const ps = $("#partnerStrip");
  PARTNERS.forEach((src) => ps.appendChild(el('<img src="' + src + '" alt="Partner logo" />')));

  /* ── Newsletter ─────────────────────────────────────────── */
  const form = $("#newsletter");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.hidden = true;
    $("#thanks").hidden = false;
  });

  /* ── Mobile nav ─────────────────────────────────────────── */
  const nav = $("#nav");
  const burger = $("#burger");
  burger.addEventListener("click", () => {
    const open = nav.classList.toggle("nav--open");
    burger.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll(".nav__links a").forEach((a) =>
    a.addEventListener("click", () => { nav.classList.remove("nav--open"); burger.setAttribute("aria-expanded", "false"); })
  );
})();
