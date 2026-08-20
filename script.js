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

/* ---------- Ticker (services, home page) ---------- */
(function populateTicker(){
  const track = document.getElementById("tickerTrack");
  if (!track || typeof SERVICES === "undefined") return;
  const words = SERVICES.map(s => s.title);
  const doubled = [...words, ...words, ...words];
  track.innerHTML = doubled.map(w => `<span>${w}</span>`).join("");
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
        <p class="eyebrow">.not found</p>
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
          <p class="eyebrow">${p.sector}</p>
          <h1>${p.name}</h1>
        </div>
        <div class="project-hero-media"><img src="${p.hero}" alt="${p.name}"></div>

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
        <span class="eyebrow" style="margin:0;">Next project</span>
        <a href="project.html?p=${next.slug}">${next.name} →</a>
      </div>
    </section>
  `;
})();
