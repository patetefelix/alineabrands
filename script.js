/* ============================================================
   ALINEA BRANDS — v4
   Project content lives in data.js. This file renders it and
   runs the interaction layer.
   ============================================================ */
'use strict';
const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];
const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
const clamp = (v, lo, hi) => Math.min(Math.max(v, lo), hi);
const projectURL = p => `project.html?p=${encodeURIComponent(p.slug)}`;
const imageURL = (path, base = '') => base + path.split('/').map(encodeURIComponent).join('/');
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
const root = document.documentElement;
let motionOff = root.dataset.motion === 'off';

const ARROW = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false"><path d="M3 12H20M13 5L20 12L13 19" stroke="currentColor" stroke-width="2"/></svg>';
const PLUS = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false"><path d="M12 4v16M4 12h16" stroke="currentColor" stroke-width="1.5"/></svg>';

/* Cards and rows use a light cover (images/covers/<slug>.webp) and fall
   back to the project's original hero image if that file is missing. */
const coverSrc = p => `images/covers/${encodeURIComponent(p.slug)}.webp`;
const heroSrc = p => imageURL(p.hero, p.imageBase);
const coverImg = (p, cls = '') => `<img ${cls ? `class="${cls}" ` : ''}src="${coverSrc(p)}" data-fallback="${heroSrc(p)}" alt="${escapeHTML(p.name)}" loading="lazy" decoding="async">`;
const kindLine = p => [p.sector, p.year].filter(Boolean).join(', ');

function projectCard(p, i = 0) {
  return `<a class="card" href="${projectURL(p)}" style="--tint:${p.color};--i:${i}">
    <span class="card-media">${coverImg(p)}<span class="card-go" aria-hidden="true">${ARROW}</span></span>
    <span class="card-info"><b>${escapeHTML(p.name)}</b><small>${escapeHTML(p.status)}</small><p>${escapeHTML(p.summary)}</p></span>
  </a>`;
}

/* ─── HOME: the collection as an index, with a preview that follows the pointer ─── */
const homeIndex = $('#homeIndex');
if (homeIndex) {
  homeIndex.innerHTML = PROJECTS.map((p, i) => `<a class="row" href="${projectURL(p)}" data-peek="${i}">
    <span class="row-kind">${escapeHTML(p.status)}</span>${coverImg(p, 'row-thumb')}
    <span class="row-name">${escapeHTML(p.name)}</span>
    <span class="row-sector">${escapeHTML(kindLine(p))}</span>
    <span class="row-go" aria-hidden="true">${ARROW}</span>
  </a>`).join('');

  const peek = document.createElement('div');
  peek.className = 'peek';
  peek.setAttribute('aria-hidden', 'true');
  peek.innerHTML = PROJECTS.map(p => `<img src="${coverSrc(p)}" data-fallback="${heroSrc(p)}" alt="" loading="lazy">`).join('');
  document.body.appendChild(peek);
  const shots = $$('img', peek);
  let tx = 0, ty = 0, x = 0, y = 0, lastX = 0, running = false;
  const follow = () => {
    x += (tx - x) * .14; y += (ty - y) * .14;
    const tilt = clamp((tx - lastX) * .5, -8, 8); lastX += (tx - lastX) * .2;
    peek.style.setProperty('--px', `${x}px`); peek.style.setProperty('--py', `${y}px`); peek.style.setProperty('--pr', `${tilt.toFixed(2)}deg`);
    if (running) requestAnimationFrame(follow);
  };
  homeIndex.addEventListener('pointermove', event => {
    if (!finePointer.matches || motionOff) return;
    const w = peek.offsetWidth, h = peek.offsetHeight;
    tx = clamp(event.clientX + 28, 12, innerWidth - w - 12);
    ty = clamp(event.clientY - h / 2, 12, innerHeight - h - 12);
    const row = event.target.closest('.row');
    if (!row) return;
    shots.forEach((img, i) => img.classList.toggle('is-on', i === Number(row.dataset.peek)));
    if (!running) { running = true; x = tx; y = ty; lastX = tx; peek.classList.add('is-on'); requestAnimationFrame(follow); }
  });
  const hide = () => { running = false; peek.classList.remove('is-on'); };
  homeIndex.addEventListener('pointerleave', hide);
  addEventListener('scroll', hide, { passive: true });
}

/* ─── WORK: filterable grid ─── */
const grid = $('#projectGrid');
function renderCollection(kind = 'all', animate = true) {
  const list = kind === 'all' ? PROJECTS : PROJECTS.filter(p => p.kind === kind);
  grid.classList.toggle('is-swapping', animate);
  grid.innerHTML = list.map(projectCard).join('');
  $('#collectionCount').textContent = `${list.length} ${list.length === 1 ? 'project' : 'projects'}`;
}
if (grid) {
  $$('[data-filter]').forEach(btn => {
    const kind = btn.dataset.filter;
    $('sup', btn).textContent = kind === 'all' ? PROJECTS.length : PROJECTS.filter(p => p.kind === kind).length;
    btn.addEventListener('click', () => {
      $$('[data-filter]').forEach(el => el.setAttribute('aria-pressed', String(el === btn)));
      renderCollection(kind);
    });
  });
  renderCollection('all', false);
}

/* ─── CASE STUDY ─── */
let activeGallery = [];
let activeProject = null;
const shot = (p, i, alt) => `<button type="button" class="shot" data-gallery-index="${i + 1}" aria-label="Enlarge: ${escapeHTML(alt)}"><img src="${imageURL(p.gallery[i], p.imageBase)}" alt="${escapeHTML(alt)}" loading="lazy" decoding="async"><span aria-hidden="true">${PLUS}</span></button>`;

function showcaseHTML(p) {
  return p.showcase.map((chapter, n) => `<section class="chapter"><div class="wrap">
    <header><span class="note">Part ${n + 1} of ${p.showcase.length}</span><h2 class="h-lg">${escapeHTML(chapter.title)}</h2><p>${escapeHTML(chapter.body)}</p></header>
    <div class="plates">${chapter.groups.map(g => { const group = p.galleryGroups[g]; return `<div class="plate" style="--cols:${group.columns}">${group.indices.map(i => `<figure>${shot(p, i, p.galleryAlts[i])}<figcaption>${escapeHTML(p.galleryAlts[i])}</figcaption></figure>`).join('')}</div>`; }).join('')}</div>
  </div></section>`).join('') + `<section class="band"><div class="wrap case-end">
    <h2 class="h-xl">Step into the brand.</h2>
    <div><a class="pill" href="${p.liveUrl}" target="_blank" rel="noopener"><span>Explore the concept website</span>${ARROW}</a><a class="pill is-line" href="${p.behanceUrl}" target="_blank" rel="noopener"><span>View on Behance</span></a></div>
    <p class="note">A fictional brand experience, presented as a self-initiated design study.</p>
  </div></section>`;
}


/* ─── PROJECT-SPECIFIC SHOWCASES ───
   A project with "layout": "<name>" in data.js gets its own showcase here
   and its own colours in styles.css ([data-layout="<name>"]). */
const heatDots = n => `<span class="pk-dots" role="img" aria-label="Heat ${n} of 5">${[1, 2, 3, 4, 5].map(i => `<i${i <= n ? ' class="on"' : ''}></i>`).join('')}</span>`;
const LAYOUTS = {
  peckish(p) {
    const A = p.galleryAlts;
    const fig = (i, cls = '') => `<figure class="${cls}">${shot(p, i, A[i])}</figure>`;
    const head = (title, body) => `<header class="pk-head"><h2 class="h-xl">${title}</h2><p>${body}</p></header>`;
    return `
    <div class="ticker pk-ticker" aria-hidden="true"><div class="ticker-track"><div class="ticker-group">${p.phrases.map(t => `<span>${escapeHTML(t)}</span>`).join('')}</div></div></div>

    <section class="band" data-reveal><div class="wrap">
      ${head('A rooster<br><em>and a signature.</em>', 'An illustrated rooster and a script wordmark, in one red on cream. The pair holds on a hanging sign, a staff tee and a lightbox at night.')}
      <div class="pk-mark">${fig(0, 'is-tall')}${fig(1)}${fig(2)}</div>
    </div></section>

    <section class="band pk-order" id="peckingOrder" style="--heat:${p.heat[0].color};--heat-ink:${p.heat[0].ink}" data-reveal><div class="wrap">
      <header class="pk-head"><h2 class="h-xl">The Pecking Order.</h2><p>Five sauces, five heat levels. Pick a level to meet the sauce.</p></header>
      <div class="pk-ladder">
        <div class="pk-levels" role="group" aria-label="Choose a heat level">
          ${p.heat.map((h, i) => `<button type="button" data-heat="${i}" aria-pressed="${i === 0}"><span>${h.no}</span><b>${escapeHTML(h.name)}</b><small>${escapeHTML(h.level)}</small>${heatDots(i + 1)}</button>`).join('')}
        </div>
        <div class="pk-stage">
          <div class="pk-stage-media">${p.heat.map((h, i) => `<img${i === 0 ? ' class="is-on"' : ''} src="${imageURL(p.gallery[h.shot])}" alt="${escapeHTML(A[h.shot])}" loading="lazy" decoding="async">`).join('')}</div>
          <p class="pk-stage-cap" aria-live="polite"><b id="heatName">Heat No. ${p.heat[0].no} ${escapeHTML(p.heat[0].name)}</b><span id="heatMade">${escapeHTML(p.heat[0].made)}</span></p>
        </div>
      </div>
    </div></section>

    <section class="band" data-reveal><div class="wrap">
      <div class="pk-pair">${fig(3)}${fig(9)}</div>
      <p class="note pk-note">Shown in two formats, a squeeze bottle and a glass bottle. The five-sauce gift box includes a waiver for Last Will.</p>
    </div></section>

    <section class="band pk-red" data-reveal><div class="wrap">
      ${head('Seven burgers.<br><em>Each with a heat number.</em>', 'The menu borrows the ladder from the sauces, so every burger tells you where it sits before you order.')}
      <div class="pk-menu-grid">
        <div class="pk-menu">
          <h3>Burgers</h3>
          <ul>${p.menu.burgers.map(b => `<li><div><b>${escapeHTML(b[0])}</b><span>${escapeHTML(b[1])}</span></div>${heatDots(b[2])}</li>`).join('')}</ul>
          <div class="pk-menu-foot"><p><b>Sides</b>${p.menu.sides.map(escapeHTML).join(', ')}</p><p><b>Drinks</b>${p.menu.drinks.map(escapeHTML).join(', ')}</p></div>
        </div>
        <div class="pk-menu-shots">${fig(10)}${fig(11)}</div>
      </div>
    </div></section>

    <section class="band" data-reveal><div class="wrap">
      ${head('Red tile, reeded glass,<br><em>terrazzo.</em>', 'The room keeps to the same red and cream. Two walls do brand work of their own: the Heat Wall holds the range, and The Last Will Club keeps a photo of everyone who finished the hottest sauce.')}
      <div class="pk-room">${fig(13, 'is-wide')}${fig(14)}${fig(15, 'is-tall')}${fig(16, 'is-tall')}${fig(17, 'is-tall')}${fig(29, 'is-tall')}</div>
    </div></section>

    <section class="band is-flush-top" data-reveal><div class="wrap">
      ${head('Take the heat<br><em>home.</em>', 'Bag, box, wrap, cup and sauce sachets share the mark and a handful of short lines. The takeout window and the sidewalk sign bring the same voice to the street.')}
      <div class="pk-room">${fig(18, 'is-wide')}${fig(19, 'is-tall')}${fig(20, 'is-tall')}</div>
    </div></section>

    <section class="band pk-red" data-reveal><div class="wrap">
      ${head('Good food<br><em>people.</em>', 'Uniforms and merchandise for the crew and the regulars: tees, a cap, a hoodie, a tote, enamel pins and stickers.')}
      <div class="pk-merch">${fig(12, 'is-wide')}${fig(21, 'is-tall')}${fig(22)}${fig(25, 'is-tall')}${fig(23)}${fig(24)}</div>
    </div></section>

    <section class="band" data-reveal><div class="wrap">
      <div class="pk-food">${fig(26)}${fig(27)}${fig(28)}</div>
    </div></section>`;
  }
};
function initLayout(p) {
  const order = $('#peckingOrder');
  if (!order) return;
  const buttons = $$('[data-heat]', order), shots = $$('.pk-stage-media img', order);
  buttons.forEach(btn => btn.addEventListener('click', () => {
    const i = Number(btn.dataset.heat), h = p.heat[i];
    buttons.forEach(b => b.setAttribute('aria-pressed', String(b === btn)));
    shots.forEach((img, n) => img.classList.toggle('is-on', n === i));
    order.style.setProperty('--heat', h.color); order.style.setProperty('--heat-ink', h.ink);
    $('#heatName').textContent = `Heat No. ${h.no} ${h.name}`; $('#heatMade').textContent = h.made;
  }));
}

const projectRoot = $('#projectRoot');
if (projectRoot) {
  const slug = new URLSearchParams(location.search).get('p');
  const p = PROJECTS.find(item => item.slug === slug);
  if (!p) {
    document.title = 'Project not found — Alinea Brands';
    projectRoot.innerHTML = `<section class="band"><div class="wrap error-page"><p class="note">Project not found</p><h1 class="h-xl">Off the shelf.<br><em>Back to the work?</em></h1><a class="pill" href="work.html"><span>Explore the collection</span>${ARROW}</a></div></section>`;
  } else {
    activeProject = p;
    if (p.layout) projectRoot.dataset.layout = p.layout;
    document.title = `${p.name} — Alinea Brands`;
    $('meta[name="description"]').content = p.summary;
    $('link[rel="canonical"]').href = `https://alineabrands.net/${projectURL(p)}`;
    const next = PROJECTS[(PROJECTS.indexOf(p) + 1) % PROJECTS.length];
    const sections = p.sections || [];
    activeGallery = p.galleryReady ? [p.hero, ...p.gallery] : [];
    const visit = p.liveUrl || p.websiteUrl;
    const media = p.heroVideo
      ? `<video data-case-video muted loop playsinline autoplay preload="metadata" poster="${coverSrc(p)}" src="${imageURL(p.heroVideo, p.imageBase)}" aria-label="${escapeHTML(p.name)} logo animation"></video>`
      : `<img src="${heroSrc(p)}" alt="${escapeHTML(p.name)}, brand identity" fetchpriority="high">`;
    const facts = [['Discipline', p.tags.map(escapeHTML).join('<br>')], ['Sector', escapeHTML(p.sector)], ['Project', escapeHTML(p.status)], p.year && ['Year', escapeHTML(p.year)], p.credit && ['Credit and scope', escapeHTML(p.credit)]].filter(Boolean);
    const behance = p.behanceUrl || (p.kind === 'portfolio' ? 'https://www.behance.net/alineabrands' : '');
    const story = sections.length || p.galleryReady;

    projectRoot.innerHTML = `
    <section class="case-head page-intro"><div class="wrap">
      <a class="link" href="work.html"><svg class="arrow-back" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 12H20M13 5L20 12L13 19" stroke="currentColor" stroke-width="2"/></svg>All work</a>
      <div class="case-title">
        <div><span class="note">${escapeHTML(p.sector)}, ${escapeHTML(p.status.toLowerCase())}</span><h1 class="${p.name.length <= 14 ? 'mega' : 'h-xl'}"><span class="ln"><span>${escapeHTML(p.name)}</span></span></h1></div>
        <p class="lede">${escapeHTML(p.summary)}</p>
      </div>
      ${visit ? `<div class="case-actions"><a class="pill" href="${escapeHTML(visit)}" target="_blank" rel="noopener"><span>${p.liveUrl ? 'View live demo' : 'Visit brand website'}</span>${ARROW}</a>${p.slug === 'lies-for-sale' ? '<p class="note">The brand website currently links to its password page.</p>' : ''}</div>` : ''}
      <div class="case-cover" style="--tint:${p.color}">${media}</div>
    </div></section>

    <section class="band" data-reveal><div class="wrap case-story">
      <aside class="case-facts"><dl>${facts.map(f => `<div><dt>${f[0]}</dt><dd>${f[1]}</dd></div>`).join('')}</dl>${behance ? `<a class="link" href="${behance}" target="_blank" rel="noopener">On Behance${ARROW}</a>` : ''}</aside>
      <div>
        <p class="case-lead">${escapeHTML(p.intro)}</p>
        ${story ? sections.map(section => `<section class="story-part"><h2 class="h-md">${escapeHTML(section.title)}</h2><div>${section.body ? `<p>${escapeHTML(section.body)}</p>` : ''}${section.items ? `<ul>${section.items.map(item => `<li>${escapeHTML(item)}</li>`).join('')}</ul>` : ''}</div></section>`).join('') : `<section class="story-part"><h2 class="h-md">More to discover</h2><div><p>The full branding showcase and additional images will be added soon.</p></div></section>`}
      </div>
    </div></section>

    ${LAYOUTS[p.layout] ? LAYOUTS[p.layout](p) : p.showcase ? showcaseHTML(p) : p.galleryReady ? `<section class="band is-flush-top" aria-label="${escapeHTML(p.name)} project gallery"><div class="wrap gallery">${p.gallery.map((src, i) => shot(p, i, (p.galleryAlts && p.galleryAlts[i]) || `${p.name}, project detail ${i + 1}`)).join('')}</div></section>` : ''}

    <section class="band on-green" data-reveal><div class="wrap">
      <i class="rule"></i>
      <a class="next" href="${projectURL(next)}"><span><span class="note">Next in the collection</span></span><span class="next-name">${escapeHTML(next.name)}</span>${ARROW}</a>
    </div></section>`;
    $$('[data-gallery-index]').forEach(button => button.addEventListener('click', () => openGallery(Number(button.dataset.galleryIndex))));
    initLayout(p);
  }
}

/* Full-size viewer, using the native dialog for focus containment. */
let galleryIndex = 0, opener = null, dialog;
if (activeGallery.length) {
  dialog = document.createElement('dialog');
  dialog.className = 'lightbox';
  dialog.setAttribute('aria-label', 'Project image viewer');
  dialog.innerHTML = `<div class="lightbox-bar"><span class="lightbox-count" aria-live="polite"></span><button type="button" data-prev aria-label="Previous image"><svg class="arrow-back" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 12H20M13 5L20 12L13 19" stroke="currentColor" stroke-width="2"/></svg></button><button type="button" data-next aria-label="Next image">${ARROW}</button><button type="button" data-close>Close</button></div><div class="lightbox-scroll"><img alt=""></div>`;
  document.body.appendChild(dialog);
  $('[data-close]', dialog).addEventListener('click', () => dialog.close());
  $('[data-prev]', dialog).addEventListener('click', () => showGallery(galleryIndex - 1));
  $('[data-next]', dialog).addEventListener('click', () => showGallery(galleryIndex + 1));
  dialog.addEventListener('keydown', e => { if (e.key === 'ArrowLeft') { e.preventDefault(); showGallery(galleryIndex - 1); } if (e.key === 'ArrowRight') { e.preventDefault(); showGallery(galleryIndex + 1); } });
  dialog.addEventListener('click', e => { if (e.target === dialog || e.target.classList.contains('lightbox-scroll')) dialog.close(); });
  dialog.addEventListener('close', () => { document.body.style.overflow = ''; opener?.focus(); });
}
function showGallery(index) {
  galleryIndex = (index + activeGallery.length) % activeGallery.length;
  const img = $('.lightbox-scroll img', dialog);
  img.src = imageURL(activeGallery[galleryIndex], activeProject.imageBase);
  img.alt = galleryIndex > 0 && activeProject.galleryAlts ? activeProject.galleryAlts[galleryIndex - 1] : `${activeProject.name}, image ${galleryIndex + 1} of ${activeGallery.length}`;
  $('.lightbox-count', dialog).textContent = `${galleryIndex + 1} / ${activeGallery.length}`;
}
function openGallery(index) { if (!dialog) return; opener = document.activeElement; showGallery(index); dialog.showModal(); document.body.style.overflow = 'hidden'; }

/* A missing cover falls back to the original image, then to a tinted label. */
function failedImage(img) {
  if (img.dataset.fallback && !img.dataset.fellBack) { img.dataset.fellBack = '1'; img.src = img.dataset.fallback; return; }
  if (img.closest('.lightbox, .peek') || img.classList.contains('row-thumb') || img.classList.contains('next-thumb')) { img.style.visibility = 'hidden'; return; }
  const note = document.createElement('div'); note.className = 'image-fallback'; note.textContent = img.alt || 'Project image'; img.replaceWith(note);
}
document.addEventListener('error', e => { if (e.target instanceof HTMLImageElement) failedImage(e.target); }, true);
$$('img').forEach(img => { if (img.complete && !img.naturalWidth) failedImage(img); });

/* ─── NAVIGATION ─── */
const menu = $('.menu-toggle'), nav = $('.nav');
function closeMenu() { nav.classList.remove('menu-open'); menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'Open navigation'); }
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; nav.classList.toggle('menu-open', open); menu.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation'); });
addEventListener('keydown', e => { if (e.key === 'Escape' && nav.classList.contains('menu-open')) { closeMenu(); menu.focus(); } });
document.addEventListener('click', e => { if (!nav.contains(e.target)) closeMenu(); });
matchMedia('(min-width:761px)').addEventListener('change', e => { if (e.matches) closeMenu(); });
$$('.nav nav a').forEach(a => { if (a.dataset.page === document.body.dataset.page) a.setAttribute('aria-current', 'page'); });
$$('.js-year').forEach(el => { el.textContent = new Date().getFullYear(); });

// The studio works from two places; show the time in both.
const clock = $('#clock');
function tick() {
  try {
    const at = zone => new Intl.DateTimeFormat('en-US', { timeZone: zone, hour: 'numeric', minute: '2-digit' }).format(new Date());
    clock.innerHTML = `<b>Medellín</b> ${at('America/Bogota')}<span> &nbsp;/&nbsp; <b>Florida</b> ${at('America/New_York')}</span>`;
  } catch { clock.hidden = true; }
}
if (clock) { tick(); setInterval(tick, 30000); }

/* A completed brief opens locally; nothing is submitted in the background. */
const form=$('#contactForm');
function brief(){
 const data=new FormData(form);
 const guide=SCOPE_GUIDES.find(item=>item.id===data.get('scope'));
 return `Starting scope: ${guide?guide.name:'Let’s figure it out together'}\nName: ${data.get('name')}\nEmail: ${data.get('email')}\nBrand: ${data.get('company')||'Not specified'}\nServices: ${data.getAll('services').join(', ')||'Let’s discuss'}\nTiming: ${data.get('timeline')||'Flexible'}\n\n${data.get('message')}`;
}
if(form){
 form.addEventListener('submit',e=>{
  e.preventDefault();if(!form.reportValidity())return;
  const data=new FormData(form);
  location.href=`mailto:${STUDIO.email}?subject=${encodeURIComponent('Brand project inquiry — '+data.get('name'))}&body=${encodeURIComponent(brief())}`;
  $('#formStatus').textContent='Your email draft is ready to open. If no email app opens, copy the brief and email it to '+STUDIO.email+'.';
 });
 $('#copyBrief').addEventListener('click',async()=>{
  if(!form.reportValidity())return;
  try{await navigator.clipboard.writeText(brief());$('#formStatus').textContent='Brief copied. Paste it into an email to '+STUDIO.email+'.';}
  catch{const fallback=$('#briefFallback');fallback.hidden=false;fallback.value=brief();fallback.focus();fallback.select();$('#formStatus').textContent='Select and copy the brief below, then paste it into your email.';}
 });
}

/* Scope guide: illustrative ranges and examples, carried into the contact brief. */
const scopeRoot=$('#scopeDetails');
function renderScope(id, announce=true){
 const guide=SCOPE_GUIDES.find(item=>item.id===id)||SCOPE_GUIDES[1];
 $$('[data-scope]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.scope===guide.id)));
 if(announce)$('#scopeAnnouncement').textContent=`${guide.name}. Indicative planning range: ${guide.range}.`;
 const proof=PROJECTS.find(p=>p.slug===guide.proof);
 scopeRoot.innerHTML=`<div class="scope-overview"><div><p class="eyebrow">Your starting point</p><h3>${escapeHTML(guide.name)}</h3><p>${escapeHTML(guide.fit)}</p><p class="scope-result">${escapeHTML(guide.result)}</p></div><div class="scope-range"><span>Indicative duration</span><strong>${escapeHTML(guide.range)}</strong><p>Planning guidance, not a fixed deadline. We confirm your scope and schedule after the brief.</p></div></div><div class="scope-inclusions"><div><h4>What we would scope</h4><ul>${guide.includes.map(item=>`<li>${escapeHTML(item)}</li>`).join('')}</ul></div><div><h4>What you bring</h4><p>${escapeHTML(guide.input)}</p><h4>Define separately</h4><p>${escapeHTML(guide.boundary)}</p></div></div><div class="timeline-head"><h4>A possible rhythm</h4><p>A ${guide.sampleWeeks}-week example within the range above. Each stage builds on the previous approval.</p></div><div class="timeline-scroll" tabindex="0" role="region" aria-label="Example project timeline, scroll horizontally on smaller screens"><table class="scope-timeline"><caption class="sr-only">${escapeHTML(guide.name)}: illustrative ${guide.sampleWeeks}-week schedule</caption><thead><tr><th scope="col">Stage</th>${Array.from({length:guide.sampleWeeks},(_,i)=>`<th scope="col">W${i+1}</th>`).join('')}</tr></thead><tbody>${guide.stages.map(stage=>{const before=stage.start-1,after=guide.sampleWeeks-before-stage.span;return `<tr><th scope="row">${escapeHTML(stage.name)}</th>${before?`<td colspan="${before}"></td>`:''}<td colspan="${stage.span}"><span class="timeline-bar ${stage.buffer?'is-buffer':''}"><span class="sr-only">Weeks ${stage.start} to ${stage.start+stage.span-1}</span></span></td>${after?`<td colspan="${after}"></td>`:''}</tr>`;}).join('')}</tbody></table></div><p class="timeline-key"><span></span>Creative work <span class="buffer-key"></span>Review allowance</p><div class="stage-details">${guide.stages.map((stage,i)=>`<details ${i===0?'open':''}><summary><span>${String(i+1).padStart(2,'0')}</span><strong>${escapeHTML(stage.name)}</strong><small>${escapeHTML(stage.duration)}</small><b><svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="alinea-ui.svg#plus"></use></svg></b></summary><div><p><span>You receive</span>${escapeHTML(stage.output)}</p><p><span>The decision together</span>${escapeHTML(stage.decision)}</p></div></details>`).join('')}</div><div class="scope-proof"><div><p class="eyebrow">See the thinking in practice</p><a class="text-link" href="${projectURL(proof)}">${escapeHTML(guide.proofLabel)}</a>${guide.proof==='costella'?'<p>Costella is a three-day solo concept sprint. It illustrates the breadth of a brand system, not a promised client turnaround.</p>':''}</div><a class="pill" href="contact.html?scope=${guide.id}">Discuss this scope</a></div>`;
}
if(scopeRoot){
 const chosen=new URLSearchParams(location.search).get('scope');
 renderScope(chosen,false);
 $$('[data-scope]').forEach(button=>button.addEventListener('click',()=>renderScope(button.dataset.scope)));
}
if(form){
 const scopeSelect=$('select[name="scope"]',form);
 const requested=new URLSearchParams(location.search).get('scope');
 if(SCOPE_GUIDES.some(item=>item.id===requested))scopeSelect.value=requested;
 const showChoice=()=>{
  const guide=SCOPE_GUIDES.find(item=>item.id===scopeSelect.value);
  const info=$('#selectedScope');info.hidden=!guide;
  if(guide)info.innerHTML=`<p class="eyebrow">A starting point, not a commitment</p><h3>${escapeHTML(guide.name)}</h3><p>${escapeHTML(guide.range)} as a planning guide. We’ll shape the scope and quote around your actual needs.</p><a href="studio.html?scope=${guide.id}#scope">Review the scope guide</a>`;
 };
 scopeSelect.addEventListener('change',showChoice);showChoice();
}


/* ─── MOTION ─── */
// One switch in the footer turns every ambient animation off.
const motionButton = document.createElement('button');
motionButton.className = 'motion-toggle'; motionButton.type = 'button';
$('.footer-bottom').appendChild(motionButton);
function applyMotion() {
  root.classList.toggle('motion', !motionOff);
  root.dataset.motion = motionOff ? 'off' : 'on';
  motionButton.textContent = motionOff ? 'Motion off' : 'Motion on';
  motionButton.setAttribute('aria-pressed', String(!motionOff));
  onScroll();
}
motionButton.addEventListener('click', () => { motionOff = !motionOff; applyMotion(); try { localStorage.setItem('alinea-motion', motionOff ? 'off' : 'on'); } catch {} });
reduced.addEventListener('change', () => { motionOff = reduced.matches; applyMotion(); });

// Scroll: progress line, nav, and the "hello to kickoff" path.
const path = $('#path');
let lastY = scrollY, frame = 0;
function onScroll() {
  frame = 0;
  const y = scrollY, max = root.scrollHeight - innerHeight;
  root.style.setProperty('--progress', max > 0 ? (y / max).toFixed(4) : 0);
  if (!nav.classList.contains('menu-open')) {
    if (y > 500 && y > lastY + 4 && !nav.contains(document.activeElement)) nav.classList.add('is-away');
    if (y < lastY - 4 || y < 200) nav.classList.remove('is-away');
  }
  lastY = y;
  if (path) {
    const r = path.getBoundingClientRect();
    const p = motionOff ? 1 : clamp((innerHeight * .85 - r.top) / (innerHeight * .5), 0, 1);
    path.style.setProperty('--p', p.toFixed(3));
    const steps = $$('li', path);
    steps.forEach((li, i) => li.classList.toggle('is-on', p >= (i + .02) / steps.length));
  }
}
addEventListener('scroll', () => { if (!frame) frame = requestAnimationFrame(onScroll); }, { passive: true });
addEventListener('resize', onScroll);
applyMotion();

// Sections draw their rule once, on arrival.
if ('IntersectionObserver' in window) {
  const arrive = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('in'); arrive.unobserve(entry.target); }
  }), { rootMargin: '0px 0px -12% 0px' });
  $$('[data-reveal]').forEach(el => arrive.observe(el));
} else $$('[data-reveal]').forEach(el => el.classList.add('in'));

// The page's single load sequence.
requestAnimationFrame(() => requestAnimationFrame(() => document.body.classList.add('is-loaded')));

// Each wash drifts on its own path, chosen once per page load.
$$('.wash i').forEach(layer => {
  const rand = (a, b) => (a + Math.random() * (b - a)).toFixed(1);
  layer.style.setProperty('--x1', rand(-22, 8) + '%'); layer.style.setProperty('--y1', rand(-20, 8) + '%');
  layer.style.setProperty('--x2', rand(12, 34) + '%'); layer.style.setProperty('--y2', rand(14, 36) + '%');
  layer.style.setProperty('--t', rand(55, 95) + 's'); layer.style.setProperty('--d', '-' + rand(0, 70) + 's');
});
document.addEventListener('visibilitychange', () => root.toggleAttribute('data-paused', document.hidden));

// Ticker: duplicate the group so the loop is seamless.
$$('.ticker-track').forEach(track => {
  const group = track.firstElementChild;
  const copies = Math.max(1, Math.ceil(innerWidth / Math.max(1, group.offsetWidth)));
  const total = (copies + 1) % 2 ? copies + 2 : copies + 1;
  for (let i = 1; i < total; i++) track.appendChild(group.cloneNode(true));
});

// Home shelf: the project you point at, or tab to, takes the room.
const shelf = $('#shelf');
if (shelf) {
  const items = $$('.shelf-item', shelf);
  const activate = item => { if (finePointer.matches || innerWidth > 760) items.forEach(el => el.classList.toggle('is-active', el === item)); };
  items.forEach(item => {
    item.addEventListener('pointerenter', () => activate(item));
    item.addEventListener('focusin', () => activate(item));
  });
}

// Logo films: muted and inline, paused with motion off or the tab hidden.
const logoVideo = $('[data-logo-video]'), logoControl = $('[data-logo-control]');
if (logoVideo && logoControl) {
  let manuallyPaused = false;
  const syncLabel = () => { logoControl.textContent = logoVideo.paused ? 'Play logo motion' : 'Pause logo motion'; logoControl.setAttribute('aria-pressed', String(!logoVideo.paused)); };
  const playLogo = () => { if (!motionOff && !manuallyPaused && !document.hidden) logoVideo.play().catch(syncLabel); };
  logoControl.addEventListener('click', () => { if (logoVideo.paused) { manuallyPaused = false; logoVideo.play().catch(syncLabel); } else { manuallyPaused = true; logoVideo.pause(); } });
  logoVideo.addEventListener('play', syncLabel); logoVideo.addEventListener('pause', syncLabel);
  logoVideo.addEventListener('error', () => { logoControl.hidden = true; });
  document.addEventListener('visibilitychange', () => { if (document.hidden) logoVideo.pause(); else playLogo(); });
  motionButton.addEventListener('click', () => { if (motionOff) logoVideo.pause(); else playLogo(); });
  syncLabel(); playLogo();
}
const caseVideo = $('[data-case-video]');
if (caseVideo) {
  if (motionOff) caseVideo.pause();
  motionButton.addEventListener('click', () => { if (motionOff) caseVideo.pause(); else caseVideo.play().catch(() => {}); });
}
