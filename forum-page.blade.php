{{-- WomenAtlas — Law & Leadership Forum 2026 — main page view --}}
@extends('layouts.app')

@section('content')

  <!-- NAV -->
  <header class="nav">
    <div class="brand">
      <img src="storage/media/womenatlas-logo-icon.svg" alt="{{ $siteSettings?->site_title ?? 'WomenAtlas' }}">
    </div>
    <nav id="main-nav">
      <a href="#about">About</a>
      <a href="#programme">Programme</a>
      <a href="#speakers">Speakers</a>
      <a href="#partners">Partners</a>
      <a class="btn btn-maroon sm" href="#pricing">Buy Tickets</a>
    </nav>
    <button class="nav-toggle" id="nav-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="main-nav">
      <span></span><span></span><span></span>
    </button>
  </header>

  <!-- HERO -->
  <section class="hero">
    <div class="hero-backdrop"></div>
    <div class="scrim"></div>
    <div class="inner">
      <div class="copy">
        <h1>She Leads.<br><span class="it">She Defends.</span></h1>
        <div class="forum">Law &amp; Leadership Forum 2026</div>
        <p class="lede">A premier forum for the women shaping law, policy, business, society and future influence.</p>
        <div class="pills">
          <span class="pill"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2">
              <rect x="3" y="4.5" width="18" height="17" rx="2" />
              <path d="M3 9h18M8 2.5v4M16 2.5v4" />
            </svg>25 July 2026</span>
          <span class="pill"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2">
              <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>Kuala Lumpur</span>
          <span class="pill"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 11v5M12 7.5h.01" />
            </svg>One-Day Forum + Masterclass</span>
        </div>
        <div class="cta">
          <a class="btn btn-primary lg" href="#pricing">Buy Tickets <span>→</span></a>
          <a class="btn btn-ghost lg" href="#partners">Become a Partner</a>
        </div>
        <p class="credit">Organised by <b>WomenAtlas</b><span class="credit-sep">&nbsp; ·&nbsp; </span><span class="credit-break">Powered by <b>Laurea People's Signature</b></span></p>
      </div>
    </div>
  </section>

  <!-- INTRO -->
  <section class="intro" id="about">
    <div class="intro__inner">
      <div class="intro__img">
        <img src="storage/media/hero-2.webp" alt="Women in law and leadership" />
      </div>
      <div class="intro__content">
        <h2 class="intro__h2-line1">A legal qualification was never just a path to practice.</h2>
        <h2 class="intro__h2-line2">It is a foundation for <span class="it">leadership.</span></h2>
        <div class="intro__body">
          <p>Across business, policy, governance, and society. <b>She Leads. She Defends.</b> brings together the women who
            lead in and around the law. Lawyers, general counsels, judges, policymakers, board directors, and the next
            generation of legal talent — to <b>learn, connect</b>, and step into <b>influence</b> beyond the courtroom.</p>
          <p>One day of <b>keynotes, expert panels and honest conversation</b>, followed by a hands-on <b>Leadership Masterclass.</b></p>
        </div>
      </div>
    </div>
  </section>

  <!-- STATS -->
  <section class="stats">
    <div class="stat">
      <div class="num" style="color:#C2185B">1</div>
      <div class="lbl">Day Forum</div>
    </div>
    <div class="stat">
      <div class="num">150+</div>
      <div class="lbl">Senior Delegates</div>
    </div>
    <div class="stat">
      <div class="num">12</div>
      <div class="lbl">Senior Speakers</div>
    </div>
    <div class="stat">
      <div class="num">4</div>
      <div class="lbl">Core Themes</div>
    </div>
    <div class="stat">
      <div class="num" style="color:#C2185B">1</div>
      <div class="lbl">Masterclass</div>
    </div>
  </section>

  <!-- THEMES -->
  <section class="themes-section">
    <div class="section-head" style="margin-bottom:40px;">
      <h2>Every session ties to <span class="accent">one pillar.</span></h2>
    </div>
    <div class="themes-grid">
      <div class="theme">
        <span class="n">1</span>
        <h3>Law &amp; Justice</h3>
        <p>The future of legal practice, leadership, ethics and reform.</p>
      </div>
      <div class="theme">
        <span class="n">2</span>
        <h3>Policy &amp; Governance</h3>
        <p>Public policy, regulation, governance and board leadership.</p>
      </div>
      <div class="theme">
        <span class="n">3</span>
        <h3>Business &amp; Leadership</h3>
        <p>Executive leadership, entrepreneurship and board appointments.</p>
      </div>
      <div class="theme">
        <span class="n">4</span>
        <h3>AI, Cyber &amp; Digital Trust</h3>
        <p>AI governance, digital transformation, data privacy and new regulation.</p>
      </div>
    </div>
  </section>

  <!-- WHO SHOULD ATTEND -->
  <section class="wsa-section">
    <div class="wsa-wrap">
      <div class="section-head">
        <h2>Who Should <span class="accent">Attend</span></h2>
      </div>
      <div class="wsa-tabs" role="tablist">
        <button class="wsa-tab active" role="tab" aria-selected="true"  data-tab="legal">Legal Sector</button>
        <button class="wsa-tab"        role="tab" aria-selected="false" data-tab="corporate">Corporate Sector</button>
        <button class="wsa-tab"        role="tab" aria-selected="false" data-tab="public">Public Sector</button>
        <button class="wsa-tab"        role="tab" aria-selected="false" data-tab="future">Future Leaders</button>
      </div>
      <div class="wsa-panels">

        <div class="wsa-panel active" data-panel="legal">
          <div class="wsa-left">
            <span class="wsa-num">01</span>
            <h3>Legal Sector</h3>
            <p>The forum is built first for the women who practise and lead across the legal profession. It brings together voices from the bench, private practice and in-house teams in one room. This is a space to connect with peers of equal standing.</p>
          </div>
          <div class="wsa-chips">
            <span class="wsa-chip">Judges</span>
            <span class="wsa-chip">Arbitrators</span>
            <span class="wsa-chip">General Counsels</span>
            <span class="wsa-chip">Partners</span>
            <span class="wsa-chip">Partners</span>
            <span class="wsa-chip">Senior Associates</span>
            <span class="wsa-chip">Corporate Secretaries</span>
            <span class="wsa-chip">Lawyers</span>

            <span class="wsa-chip">Legal Advisors</span>
          </div>
        </div>

        <div class="wsa-panel" data-panel="corporate">
          <div class="wsa-left">
            <span class="wsa-num">02</span>
            <h3>Corporate Sector</h3>
            <p>These are the decision-makers whose work sits closely alongside the law. They lead on compliance and the strategy that shapes organisations. The forum connects them with the women driving law and policy across the profession.</p>
          </div>
          <div class="wsa-chips">
            <span class="wsa-chip">Board Directors</span>
            <span class="wsa-chip">Bankers</span>
            <span class="wsa-chip">CEOs</span>
            <span class="wsa-chip">Founders</span>
            <span class="wsa-chip">Compliance Leaders</span>
            <span class="wsa-chip">Risk Leaders</span>
            <span class="wsa-chip">HR Leaders</span>
          </div>
        </div>

        <div class="wsa-panel" data-panel="public">
          <div class="wsa-left">
            <span class="wsa-num">03</span>
            <h3>Public Sector</h3>
            <p>This is where law meets public influence and national leadership. It is the arena in which many of the profession's most consequential decisions are made. Their presence connects practice, governance and the public interest.</p>
          </div>
          <div class="wsa-chips">
            <span class="wsa-chip">Regulators</span>
            <span class="wsa-chip">Policymakers</span>
            <span class="wsa-chip">Government Legal Officers</span>
          </div>
        </div>

        <div class="wsa-panel" data-panel="future">
          <div class="wsa-left">
            <span class="wsa-num">04</span>
            <h3>Future Leaders</h3>
            <p>The forum is also built for the next generation of women in law. It opens the room to those beginning their journey in the profession. Here they can learn directly from leaders who have walked the path before them. </p>
          </div>
          <div class="wsa-chips">
            <span class="wsa-chip">Young Lawyers</span>
            <span class="wsa-chip">Law Graduates</span>
            <span class="wsa-chip">Selected Students</span>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- PROGRAMME -->
  <div class="programme-heading" id="programme">
    <h2 class="programme-title">Your Day at <span class="programme-title__accent">She Leads. She Defends.</span></h2>
  </div>
  <section class="programme">
    <div class="in">
      <div id="programme-list"></div>
    </div>
  </section>

  <!-- SPEAKERS -->
  <section class="speakers-announce" id="speakers">
    <div class="speakers-announce__inner">
      <div class="eyebrow center" style="margin-bottom:16px;">The Women Shaping Law, Policy and Leadership</div>
      <div class="section-head">
        <h2>Speakers <span class="accent">Faculty</span></h2>
        <p>The strength of this forum is its people — senior voices across the<br><strong>Bench, The Boardroom, Regulation</strong> and <strong>Legal Innovation.</strong></p>
      </div>
      <div class="speakers-announce__soon">SPEAKERS ANNOUNCING SOON</div>
      <div class="center" style="margin-top:40px;"><button class="btn btn-primary">Be the first to know <span>→</span></button></div>
    </div>
  </section>

    <!-- Advisory Council -->
    <div class="advisory-wrap">
    <div class="advisory">
      <div class="body">
        <h3>A curated circle of <span class="it">distinguished women.</span></h3>
        <p class="advisory-lede">Drawn from the <b>judiciary</b>, <b>senior practice</b>, <b>corporate counsel</b>, <b>governance</b>, <b>academia</b> and <b>regulation</b>, lending their experience and credibility to the forum.</p>
        <div class="pillars">
          <div><span class="dot"></span>Legal Tech & AI</div>
          <div><span class="dot"></span>Regulation</div>
          <div><span class="dot"></span>The Judiciary</div>
          <div><span class="dot"></span>Academia</div>
          <div><span class="dot"></span>Corporate Counsel</div>
          <div><span class="dot"></span>Governance</div>
          <div><span class="dot"></span>Senior Practice</div>
          <div><span class="dot"></span>Cyber Security</div>
        </div>
      </div>
      <div class="img">
        <img src="storage/media/curated-circle.webp" alt="Distinguished women in law">
      </div>
    </div>
    </div>

  <!-- MASTERCLASS -->
  <section class="masterclass">
    <div class="in">
      <div class="img"><img src="storage/media/attendees.webp" alt="Masterclass"></div>
      <div class="body">
        <h2>The Lawyer's AI Playbook</h2>
        <p class="lede">From <b>Stuck to Started</b> — a hands-on <b>AI Masterclass</b> for women in law.</p>
        <p class="lede" style="margin-top:24px;">Map where <b>AI</b> fits your practice, work through a real task, and leave with a <b>90-day adoption plan</b>, a <b>vetted toolkit</b>, and the <b>guardrails</b> that matter: confidentiality, privilege, verification and the amended <b>PDPA.</b></p>
        <div class="feats">
          <span><span class="ic">★</span> Limited Seats</span>
          <span><span class="ic">🎓</span> Certificate of Completion</span>
        </div>
        <div style="margin-top:36px;"><button class="btn btn-light lg">Reserve Your Seat <span>→</span></button></div>
      </div>
    </div>
  </section>

  <!-- WHY ATTEND -->
  <section class="section-why">
    <div class="section-head">
      <h2 style="white-space:nowrap;">Why Attend This <span class="accent">Forum</span> ?</h2>
    </div>
    <div class="why-grid">
      <div class="why-card">
        <div class="why-card__img"><img src="storage/media/sp-1.webp" alt="The Room"></div>
        <h3>The Room</h3>
        <p>A full day among the women who lead across <b>Law, Governance</b> and <b>Business.</b></p>
      </div>
      <div class="why-card">
        <div class="why-card__img"><img src="storage/media/sp-2.webp" alt="The Substance"></div>
        <h3>The Substance</h3>
        <p>Working sessions on <b>Governance, Judgment, Regulation</b> and <b>Reform.</b></p>
      </div>
      <div class="why-card">
        <div class="why-card__img"><img src="storage/media/sp-3.webp" alt="The Reach"></div>
        <h3>The Reach</h3>
        <p>The <b>Boardroom, In-House Leadership, Policy</b> and the <b>Bench.</b></p>
      </div>
      <div class="why-card">
        <div class="why-card__img"><img src="storage/media/sp-4.webp" alt="The Network"></div>
        <h3>The Network</h3>
        <p>The <b>WomenAtlas Legal Leadership Network</b>, continuing beyond the forum.</p>
      </div>
    </div>
  </section>

  <!-- PRICING -->

  <section class="pricing" id="pricing">
    <div class="in">
      <div class="section-head">
        <div class="eyebrow">Secure Your Place</div>
        <h2>A premier, senior-level <span class="accent">forum.</span></h2>
        <p>Places are limited and curated. Early-bird closes <b>5 July 2026.</b></p>
      </div>
      <div class="grid-2">
        <div class="tier">
          <div class="tier-label">Forum</div>
          <h3>The Forum</h3>
          <div class="desc">For the individual delegate.</div>
          <div class="price"><b>RM </b><span class="price-dashes">{{ $forumTicket ? number_format((float) $forumTicket->price, 2) : 'Unavailable' }}</span></div>
          <hr class="tier-divider">
          <ul>
            <li><span class="ck">●</span>Full-day access to all keynotes, panels &amp; the fireside</li>
            <li><span class="ck">●</span>Networking breakfast, lunch &amp; refreshments</li>
            <li><span class="ck">●</span>Evening networking dinner</li>
            <li><span class="ck">●</span>Delegate pack + certificate of attendance</li>
          </ul>
          <a class="btn btn-secondary" href="{{ $forumTicket ? route('tickets.show', $forumTicket) : '#pricing' }}">Register <span>→</span></a>
        </div>
        <div class="tier featured">
          <span class="badge">★ &nbsp;Recommended</span>
          <div class="tier-label">Forum + Masterclass</div>
          <h3>The Complete Experience</h3>
          <div class="desc">The full day, plus the masterclass</div>
          <div class="price"><b>RM </b><span class="price-dashes">{{ $completeTicket ? number_format((float) $completeTicket->price, 2) : 'Unavailable' }}</span></div>
          <hr class="tier-divider">
          <ul>
            <li><span class="ck">●</span>Everything in the Forum pass</li>
            <li><span class="ck">●</span>The premium afternoon Leadership Masterclass</li>
            <li><span class="ck">●</span>Certificate of completion</li>
            <li><span class="ck">●</span>Priority seating</li>
          </ul>
          <a class="btn btn-primary" href="{{ $completeTicket ? route('tickets.show', $completeTicket) : '#pricing' }}">Register <span>→</span></a>
        </div>
      </div>
    </div>
  </section>

  <!-- NEWSLETTER -->
  <section class="newsletter-band">
    <div class="newsletter-band__inner">
      <h2>Be part of the conversation shaping the future of women in law.</h2>
      <p>Not ready yet? Join the list and be first to hear speaker<br>reveals and early-bird access.</p>
      <form class="newsletter-band__form" data-news>
        <input type="email" placeholder="your email..." required>
        <button type="submit" class="btn btn-light">Notify Me</button>
      </form>
    </div>
  </section>

  <!-- PARTNERS -->
  <section class="partners" id="partners">
    <img class="partners__tugu" src="storage/media/tugu-bg.webp" alt="">
    <div class="in">
      <h2>Built with a <span class="it" style="color:var(--wa-magenta)">small circle</span> of<br>aligned partners.</h2>
    </div>
    <div class="partners__body">
      <div class="cards">
        <div class="pcard">
          <h3>Partners &amp; Endorsers</h3>
          <ul>
            <li>Professional Bodies</li>
            <li>Women-In-Law Networks</li>
            <li>Academic Institutions</li>
            <li>Media Partners</li>
          </ul>
          <a class="link-arrow" href="#">Explore Partnership <span>→</span></a>
        </div>
        <div class="scard">
          <h3>Sponsorship Circles</h3>
          <ul>
            <li>Founders' Circle</li>
            <li>Leadership Circle</li>
            <li>Champions' Circle</li>
            <li>Supporters' Circle</li>
          </ul>
          <a class="link-arrow" href="#">Request The Prospectus <span>→</span></a>
        </div>
      </div>
    </div>
  </section>

  @include('site-fragments.footer-forum')

  <div id="toast"></div>

@endsection

@push('styles')
  <link rel="stylesheet" href="{{ asset('site/css/styles-lawforum-cms.css') }}">
@endpush

@push('scripts')
  <script src="{{ asset('site/js/script-lawforum.js') }}"></script>
@endpush
