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

/* ---------- Nav scroll state + mobile menu toggle ---------- */
(function navBehavior(){
  const nav = document.querySelector(".nav");
  if (!nav) return;

  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive:true });

  const toggle = nav.querySelector(".nav-toggle");
  if (toggle){
    toggle.addEventListener("click", () => nav.classList.toggle("menu-open"));
    nav.querySelectorAll(".nav-links a, .nav-cta").forEach(link => {
      link.addEventListener("click", () => nav.classList.remove("menu-open"));
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 760) nav.classList.remove("menu-open");
    });
  }
})();

/* ---------- Cursor accent — desktop, motion-safe only ---------- */
(function cursorDot(){
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = window.matchMedia("(pointer: fine)").matches;
  if (reduceMotion || !fine) return;

  const dot = document.createElement("div");
  dot.id = "cursor-dot";
  document.body.appendChild(dot);

  let shown = false;
  window.addEventListener("mousemove", (e) => {
    dot.style.setProperty("--x", e.clientX + "px");
    dot.style.setProperty("--y", e.clientY + "px");
    if (!shown){ dot.classList.add("active"); shown = true; }
  });
  document.addEventListener("mouseleave", () => dot.classList.remove("active"));

  document.querySelectorAll("a, button, .services-index-row").forEach(el => {
    el.addEventListener("mouseenter", () => dot.style.setProperty("--s", "1.8"));
    el.addEventListener("mouseleave", () => dot.style.setProperty("--s", "1"));
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

/* ---------- Services index (home page) ----------
   The homepage's signature interactive block: a real index of
   the studio's four disciplines. Hovering, focusing, or tapping
   a row brings its number, copy, and preview image forward. */
(function servicesIndex(){
  const list = document.getElementById("servicesIndexList");
  const img = document.getElementById("servicesIndexImg");
  if (!list || !img || typeof SERVICES === "undefined") return;

  list.innerHTML = SERVICES.map((s, i) => `
    <button class="services-index-row${i === 0 ? " active" : ""}" type="button" data-i="${i}">
      <span class="services-index-num">${String(i + 1).padStart(2, "0")}</span>
      <span>
        <span class="services-index-title-row">
          <span class="services-index-title">${s.title}</span>
          <span class="services-index-arrow">→</span>
        </span>
        <span class="services-index-desc">${s.desc}</span>
      </span>
    </button>
  `).join("");

  const rows = [...list.querySelectorAll(".services-index-row")];

  function activate(i){
    rows.forEach(r => r.classList.remove("active"));
    rows[i].classList.add("active");
    img.style.opacity = 0;
    window.setTimeout(() => {
      img.src = SERVICES[i].img;
      img.alt = SERVICES[i].title;
      img.style.opacity = 1;
    }, 160);
  }

  img.src = SERVICES[0].img;
  img.alt = SERVICES[0].title;

  rows.forEach((r, i) => {
    r.addEventListener("mouseenter", () => activate(i));
    r.addEventListener("focus", () => activate(i));
    r.addEventListener("click", () => activate(i));
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
        <p class="eyebrow center">.not found</p>
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
