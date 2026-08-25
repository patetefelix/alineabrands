/* ============================================================
   ALINEA — shared behavior
   Every page loads this file plus data.js. Functions check for
   the elements they need, so one file safely serves all pages.
   ============================================================ */

/* ---------- Footer year ---------- */
document.querySelectorAll(".js-year").forEach(el => {
  el.textContent = new Date().getFullYear();
});

/* ---------- Nav active state ---------- */
(function highlightNav(){
  const page = document.body.dataset.page;
  document.querySelectorAll(".nav-links a").forEach(a => {
    if (a.dataset.page === page) a.classList.add("active");
  });
})();

/* ---------- Numbered interactive service list (home page) ---------- */
(function serviceList(){
  const navEl = document.getElementById("serviceListNav");
  const detailEl = document.getElementById("serviceDetail");
  if (!navEl || !detailEl || typeof SERVICES === "undefined") return;

  navEl.innerHTML = SERVICES.map((s,i) => `
    <div class="service-row${i===0 ? " active" : ""}" data-i="${i}">
      <span class="num">${String(i+1).padStart(2,"0")}</span>
      <h3>${s.title}</h3>
    </div>
  `).join("");

  function renderDetail(i){
    const s = SERVICES[i];
    detailEl.innerHTML = `
      <div class="service-detail-media"><img src="${s.img}" alt="${s.title}" loading="lazy"></div>
      <p>${s.desc}</p>
      <a href="work.html" class="btn btn-primary">${s.cta} →</a>
    `;
  }
  renderDetail(0);

  navEl.querySelectorAll(".service-row").forEach(row => {
    row.addEventListener("mouseenter", () => {
      navEl.querySelectorAll(".service-row").forEach(r => r.classList.remove("active"));
      row.classList.add("active");
      renderDetail(Number(row.dataset.i));
    });
    row.addEventListener("click", () => {
      navEl.querySelectorAll(".service-row").forEach(r => r.classList.remove("active"));
      row.classList.add("active");
      renderDetail(Number(row.dataset.i));
    });
  });
})();

/* ---------- Feature grid (home page) ---------- */
(function featureGrid(){
  const gridEl = document.getElementById("featureGrid");
  if (!gridEl || typeof FEATURES === "undefined") return;
  gridEl.innerHTML = FEATURES.map((f,i) => `
    <div class="feature-card v-${f.variant} reveal" style="--i:${i}">
      ${f.icon}
      <div><h4>${f.title}</h4><p>${f.desc}</p></div>
    </div>
  `).join("");
})();

/* ---------- Pricing grid (home page) ---------- */
(function pricingGrid(){
  const el = document.getElementById("pricingGrid");
  if (!el || typeof PRICING === "undefined") return;
  el.innerHTML = PRICING.map((p,i) => `
    <div class="pricing-card${p.featured ? " is-featured" : ""} reveal" style="--i:${i}">
      ${p.featured ? '<span class="pricing-badge">Most requested</span>' : ""}
      <h3>${p.name}</h3>
      <p class="pricing-price">${p.price}</p>
      <ul>${p.items.map(i => `<li>${i}</li>`).join("")}</ul>
      <a href="contact.html" class="btn ${p.featured ? "btn-primary" : "btn-ghost"}" style="width:100%; justify-content:center; margin-top:24px;">Start a project →</a>
    </div>
  `).join("");
})();

/* ---------- Comparison table (home page) ---------- */
(function comparisonTable(){
  const el = document.getElementById("comparisonTable");
  if (!el || typeof COMPARISON === "undefined") return;
  const header = `
    <div class="comparison-row comparison-head">
      <div></div>
      ${COMPARISON.columns.map(c => `<div class="comparison-col-label${c.label === "Alinea" ? " is-alinea" : ""}">${c.label}</div>`).join("")}
    </div>`;
  const rows = COMPARISON.rows.map((rowLabel, i) => `
    <div class="comparison-row">
      <div class="comparison-row-label">${rowLabel}</div>
      ${COMPARISON.columns.map(c => `<div class="comparison-cell${c.label === "Alinea" ? " is-alinea" : ""}">${c.values[i]}</div>`).join("")}
    </div>
  `).join("");
  el.innerHTML = header + rows;
})();

/* ---------- Timeline (Gantt-style, studio page) ---------- */
(function timelineChart(){
  const el = document.getElementById("timelineChart");
  if (!el || typeof TIMELINE === "undefined" || typeof TIMELINE_COLUMNS === "undefined") return;

  const cols = TIMELINE_COLUMNS.length;
  el.style.setProperty("--tl-cols", cols);

  const head = `<div class="tl-head" style="text-align:left;">Phase</div>` +
    TIMELINE_COLUMNS.map(c => `<div class="tl-head">${c}</div>`).join("");

  const rows = TIMELINE.map(row => {
    let cells = "";
    for (let i = 1; i <= cols; i++){
      const inSpan = i >= row.start && i < row.start + row.span;
      cells += `<div class="tl-cell">${inSpan ? `<div class="tl-bar${row.optional ? " tl-optional" : ""}"></div>` : ""}</div>`;
    }
    return `<div class="tl-row-label">${row.label}</div>${cells}`;
  }).join("");

  el.innerHTML = head + rows;
})();

/* ---------- Positioning statement (home page) ---------- */
(function positioningStatement(){
  const el = document.getElementById("positioningStatement");
  if (!el || typeof POSITIONING === "undefined") return;
  const p = POSITIONING;
  el.innerHTML = `
    <blockquote>To <em>${p.audience}</em>, Alinea is the <em>${p.category}</em> that provides <em>${p.offer}</em> — because <span class="fill">${p.belief}</span></blockquote>
  `;
})();

/* ---------- Onboarding steps (contact page) ---------- */
(function onboardingSteps(){
  const el = document.getElementById("onboardingTrack");
  if (!el || typeof ONBOARDING === "undefined") return;
  el.innerHTML = ONBOARDING.map((s,i) => `
    <div class="onboarding-step reveal" style="--i:${i}"><h4>${s.title}</h4><p>${s.desc}</p></div>
  `).join("");
})();

/* ---------- Scope by stage (studio page) ---------- */
(function scopeStages(){
  const el = document.getElementById("scopeGrid");
  if (!el || typeof SCOPE_STAGES === "undefined") return;
  el.innerHTML = SCOPE_STAGES.map(s => `
    <div class="scope-item">
      <div class="scope-required">${s.required ? "Required" : "As needed"}</div>
      <h4>${s.name}</h4>
      <ul>${s.items.map(i => `<li>${i}</li>`).join("")}</ul>
    </div>
  `).join("");
})();

/* ---------- Client / partner logo marquee ---------- */
(function populateLogoMarquee(){
  const track = document.getElementById("logoMarqueeTrack");
  if (!track || typeof CLIENTS === "undefined") return;
  const doubled = [...CLIENTS, ...CLIENTS];
  track.innerHTML = doubled.map(c => `<span>${c}</span>`).join("");
})();

/* ---------- Reveal on scroll ---------- */
(function reveal(){
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting){ e.target.classList.add("is-visible"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
})();

/* ---------- FAQ accordion (studio page) ---------- */
(function faq(){
  const list = document.getElementById("faqList");
  if (!list || typeof FAQ === "undefined") return;
  list.innerHTML = FAQ.map((item, i) => `
    <div class="faq-item" data-i="${i}">
      <button class="faq-q" type="button">
        <span>${item.q}</span><span class="plus">+</span>
      </button>
      <div class="faq-a"><p>${item.a}</p></div>
    </div>
  `).join("");
  list.querySelectorAll(".faq-item").forEach(item => {
    item.querySelector(".faq-q").addEventListener("click", () => {
      const wasOpen = item.classList.contains("open");
      list.querySelectorAll(".faq-item").forEach(i => i.classList.remove("open"));
      if (!wasOpen) item.classList.add("open");
    });
  });
})();

/* ---------- Project card template (shared by work grid + home preview) ---------- */
function projectCardHTML(p){
  return `
    <a class="project-card" href="project.html?p=${p.slug}">
      <div class="project-card-media"><img src="${p.hero}" alt="${p.name}" loading="lazy"></div>
      <div class="project-card-body">
        <div class="project-card-tags">${p.tags.slice(0,2).map(t => `<span class="project-tag">${t}</span>`).join("")}</div>
        <h3>${p.name}</h3>
        <p>${p.summary}</p>
      </div>
    </a>
  `;
}

/* ---------- Home: featured project + preview grid ---------- */
(function homePreview(){
  const featuredEl = document.getElementById("featuredProject");
  const previewEl = document.getElementById("workPreviewGrid");
  if ((!featuredEl && !previewEl) || typeof PROJECTS === "undefined") return;

  const featured = PROJECTS.find(p => p.slug === "biona-coffee") || PROJECTS[0];
  if (featuredEl){
    featuredEl.innerHTML = `
      <a class="featured-card" href="project.html?p=${featured.slug}">
        <img src="${featured.hero}" alt="${featured.name}">
        <div class="featured-label"><b>${featured.name}</b>${featured.summary}</div>
      </a>
    `;
  }
  if (previewEl){
    const preview = PROJECTS.filter(p => p.slug !== featured.slug).slice(0, 6);
    previewEl.innerHTML = preview.map(projectCardHTML).join("");
  }
})();

/* ---------- Work page: filterable grid ---------- */
(function workGrid(){
  const gridEl = document.getElementById("projectGrid");
  const filtersEl = document.getElementById("filters");
  if (!gridEl || typeof PROJECTS === "undefined") return;

  function render(sector){
    const items = sector === "All" ? PROJECTS : PROJECTS.filter(p => p.sector === sector);
    gridEl.innerHTML = items.map(projectCardHTML).join("");
  }

  if (filtersEl && typeof SECTORS !== "undefined"){
    filtersEl.innerHTML = SECTORS.map((s,i) =>
      `<button class="filter-chip${i===0 ? " active" : ""}" data-sector="${s}" type="button">${s}</button>`
    ).join("");
    filtersEl.querySelectorAll(".filter-chip").forEach(chip => {
      chip.addEventListener("click", () => {
        filtersEl.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        render(chip.dataset.sector);
      });
    });
  }

  render("All");
})();

/* ---------- Project detail page ---------- */
(function projectDetail(){
  const root = document.getElementById("projectRoot");
  if (!root || typeof PROJECTS === "undefined") return;

  const slug = new URLSearchParams(window.location.search).get("p");
  const p = PROJECTS.find(x => x.slug === slug);

  if (!p){
    root.innerHTML = `
      <div class="wrap" style="padding:120px 0; text-align:center;">
        <p class="badge-eyebrow">.not found</p>
        <h1 style="font-size:32px;">We couldn't find that project.</h1>
        <p style="margin-top:16px;"><a class="btn btn-ghost" href="work.html">← Back to all work</a></p>
      </div>
    `;
    document.title = "Project not found — Alinea";
    return;
  }

  document.title = `${p.name} — Alinea`;

  const idx = PROJECTS.indexOf(p);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  root.innerHTML = `
    <section class="project-hero">
      <div class="wrap">
        <a class="project-back" href="work.html">← Back to all work</a>
        <div class="project-title">
          <p class="badge-eyebrow">${p.sector}</p>
          <h1>${p.name}</h1>
        </div>
        <div class="project-hero-media"><img src="${p.hero}" alt="${p.name}"></div>
        ${p.gallery && p.gallery.length ? `
        <div class="project-gallery">
          ${p.gallery.map(src => `<img src="${src}" alt="${p.name} — detail" loading="lazy">`).join("")}
        </div>` : ""}

        <div class="project-meta-row">
          <div><span>Sector</span><b>${p.sector}</b></div>
          <div><span>Year</span><b>${p.year}</b></div>
          <div><span>Services</span><b>${p.tags.join(", ")}</b></div>
          <div><span>Studio</span><b>Alinea</b></div>
        </div>
      </div>
    </section>

    <section class="wrap">
      <div class="project-body">
        <div class="project-side">Case study</div>
        <div>
          <div class="project-section">
            <h2>The brief</h2>
            <p>${p.intro}</p>
          </div>
          <div class="project-section">
            <h2>Approach</h2>
            <ul>${p.approach.map(a => `<li>${a}</li>`).join("")}</ul>
          </div>
          <div class="project-section">
            <h2>What we delivered</h2>
            <ul>${p.deliverables.map(d => `<li>${d}</li>`).join("")}</ul>
          </div>
          ${p.metrics ? `
          <div class="project-section">
            <h2>At a glance</h2>
            <div style="display:flex; gap:36px; flex-wrap:wrap;">
              ${p.metrics.map(m => `
                <div><span style="display:block; font-family:var(--font-display); font-size:28px;">${m.v}</span>
                <span style="font-family:var(--font-mono); font-size:11.5px; color:var(--ink-dim);">${m.l}</span></div>
              `).join("")}
            </div>
          </div>` : ""}
          <div class="project-section">
            <h2>Outcome</h2>
            <p>${p.outcome}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="wrap">
      <div class="next-project">
        <span class="badge-eyebrow" style="margin:0;">Next project</span>
        <a href="project.html?p=${next.slug}">${next.name} →</a>
      </div>
    </section>
  `;
})();

/* ---------- Contact form (contact.html) ----------
   No backend on a static site, so "submitting" opens the visitor's
   email client with the form fields pre-filled — genuinely
   functional without needing a server. Native HTML5 validation
   (required / type=email) runs first via the browser. */
(function contactForm(){
  const form = document.getElementById("contactForm");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.checkValidity()){ form.reportValidity(); return; }

    const data = new FormData(form);
    const first = data.get("firstName") || "";
    const last = data.get("lastName") || "";
    const email = data.get("email") || "";
    const phone = data.get("phone") || "";
    const company = data.get("company") || "";
    const companyUrl = data.get("companyUrl") || "";
    const budget = data.get("budget") || "Not specified";
    const preferredContact = data.get("preferredContact") || "Email";
    const services = data.getAll("services").join(", ") || "Not specified";
    const message = data.get("message") || "";

    const subject = encodeURIComponent(`New project inquiry — ${first} ${last}`.trim());
    const body = encodeURIComponent(
      `Name: ${first} ${last}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n` +
      `Company: ${company}\n` +
      `Link: ${companyUrl}\n` +
      `Budget: ${budget}\n` +
      `Requested services: ${services}\n` +
      `Preferred contact: ${preferredContact}\n\n` +
      `About the brand:\n${message}`
    );
    window.location.href = `mailto:hello@alineabrands.com?subject=${subject}&body=${body}`;
  });
})();
