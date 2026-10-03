'use strict';
const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];
const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const projectURL = p => `project.html?p=${encodeURIComponent(p.slug)}`;
const imageURL = (path, base = '') => base + path.split('/').map(encodeURIComponent).join('/');
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
let motionOff = reduced.matches;
try { motionOff ||= localStorage.getItem('alinea-motion') === 'off'; } catch {}
const cover = p => {
  if (!p.galleryReady && !p.hero) return `<div class="project-title-art"><span class="eyebrow">${escapeHTML(p.sector)} / Brand project</span><strong>${escapeHTML(p.name)}</strong><span>${p.tags.map(escapeHTML).join(' · ')}</span></div>`;
  const ready = p.galleryReady || p.coverReady;
  if (ready) return `<img src="${imageURL(p.hero,p.imageBase)}" alt="${escapeHTML(p.name)} — brand identity and packaging" loading="lazy">`;
  return `<div class="concept-cover ${p.slug === 'costella' ? 'costella' : 'solferino'}"><span class="eyebrow">${escapeHTML(p.status)}</span><strong>${escapeHTML(p.name)}</strong><span>${p.slug === 'costella' ? 'Italian aperitivo, zero proof.' : 'One house. Many expressions.'}</span><span class="concept-foot">${p.kind === 'upcoming' ? 'A brand world in the making' : 'A self-initiated brand world'} </span><img class="pending-art" src="${imageURL(p.hero,p.imageBase)}" alt="${escapeHTML(p.name)} brand artwork" loading="lazy"></div>`;
};
function projectCard(p){
 return `<a class="project-card reveal" href="${projectURL(p)}" style="--card-color:${p.color}"><div class="project-media">${cover(p)}<span class="project-open" aria-hidden="true"><svg class="arrow-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="alinea-arrow.svg#arrow"></use></svg></span></div><div class="project-info"><div><h3>${escapeHTML(p.name)}</h3><small>${escapeHTML(p.status)}</small></div><p>${escapeHTML(p.summary)}</p><div class="project-tags">${p.tags.map(escapeHTML).join(' / ')}</div></div></a>`;
}
let revealObserver;
function observeReveals(){
 if (motionOff) return;
 if (!revealObserver) revealObserver = new IntersectionObserver(entries => entries.forEach(entry=>{
  if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target);}
 }), {threshold:.06});
 $$('.reveal:not(.visible)').forEach(el=>revealObserver.observe(el));
}
const homeSelection=['costella','el-paraiso-heladeria','massalino-bakery','casa-de-encantos'];
if($('#homeProjects')) $('#homeProjects').innerHTML=homeSelection.map(slug=>PROJECTS.find(p=>p.slug===slug)).filter(Boolean).map(projectCard).join('');
function renderCollection(kind='all'){
 const list=kind==='all'?PROJECTS:PROJECTS.filter(p=>p.kind===kind);
 $('#projectGrid').innerHTML=list.map(projectCard).join('');
 $('#collectionCount').textContent=`${String(list.length).padStart(2,'0')} ${list.length===1?'project':'projects'}`;
 observeReveals();
}
if($('#projectGrid')){
 renderCollection();
 $$('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{
  $$('[data-filter]').forEach(el=>el.setAttribute('aria-pressed',String(el===btn)));
  renderCollection(btn.dataset.filter);
 }));
}

/* Case studies remain data-driven as the collection grows. */
let activeGallery=[];
let activeProject=null;
function showcaseHTML(p){
 return `<div class="costella-showcase">${p.showcase.map((chapter,n)=>`<section class="showcase-chapter section"><header><p class="eyebrow">${String(n+1).padStart(2,'0')} / Costella</p><h2>${escapeHTML(chapter.title)}</h2><p>${escapeHTML(chapter.body)}</p></header><div class="showcase-plates">${chapter.groups.map(groupIndex=>{const group=p.galleryGroups[groupIndex];return `<div class="showcase-grid showcase-grid--${group.columns}">${group.indices.map(i=>`<figure><button class="gallery-image" data-gallery-index="${i+1}" aria-label="Enlarge: ${escapeHTML(p.galleryAlts[i])}"><img src="${imageURL(p.gallery[i],p.imageBase)}" alt="${escapeHTML(p.galleryAlts[i])}" loading="lazy" decoding="async"><span aria-hidden="true"><svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="alinea-ui.svg#plus"></use></svg></span></button><figcaption>${String(i+1).padStart(2,'0')} / ${escapeHTML(p.galleryAlts[i])}</figcaption></figure>`).join('')}</div>`;}).join('')}</div></section>`).join('')}<section class="showcase-end section"><p class="eyebrow">Explore Costella</p><h2>Step into the brand.</h2><div><a class="pill" href="${p.liveUrl}" target="_blank" rel="noopener">Explore the concept website</a><a class="pill" href="${p.behanceUrl}" target="_blank" rel="noopener">View on Behance</a></div><p>A fictional brand experience, presented as a self-initiated design study.</p></section></div>`;
}
const root=$('#projectRoot');
if(root){
 const slug=new URLSearchParams(location.search).get('p');
 const p=PROJECTS.find(item=>item.slug===slug);
 if(!p){
  document.title='Project not found — Alinea Brands';
  root.innerHTML='<section class="error-page section"><p class="eyebrow">Project not found</p><h1>Off the shelf.<br><em>Back to the work?</em></h1><a class="pill" href="work.html">Explore the collection </a></section>';
 }else{
  activeProject=p;
  document.title=`${p.name} — Alinea Brands`;
  $('meta[name="description"]').content=p.summary;
  $('link[rel="canonical"]').href=`https://alineabrands.net/${projectURL(p)}`;
  const next=PROJECTS[(PROJECTS.indexOf(p)+1)%PROJECTS.length];
  const sections=p.sections||[];
  activeGallery=p.galleryReady?[p.hero,...p.gallery]:[];
  root.innerHTML=`<section class="case-heading section"><a class="text-link" href="work.html"> All work</a><div class="case-title"><div><p class="eyebrow">${escapeHTML(p.sector)} / ${escapeHTML(p.status)}</p><h1>${escapeHTML(p.name)}</h1></div><p>${escapeHTML(p.summary)}</p></div>${p.liveUrl||p.websiteUrl?`<div class="case-actions"><a class="pill" href="${escapeHTML(p.liveUrl||p.websiteUrl)}" target="_blank" rel="noopener">${p.liveUrl?'View live demo':'Visit brand website'}</a>${p.slug==='lies-for-sale'?'<p>The brand website currently links to its password page.</p>':''}</div>`:''}<div class="case-cover" style="--card-color:${p.color}">${cover(p)}</div></section><section class="case-story section" ${p.slug==='prisma'?'hidden':''}><aside><p class="eyebrow">${p.kind==='upcoming'?'Project preview':'Inside the brand'}</p><dl><dt>Discipline</dt><dd>${p.tags.map(escapeHTML).join('<br>')}</dd><dt>Project</dt><dd>${escapeHTML(p.status)}</dd>${p.credit?`<dt>Credit &amp; scope</dt><dd>${escapeHTML(p.credit)}</dd>`:''}</dl>${p.behanceUrl?`<a class="text-link" href="${p.behanceUrl}" target="_blank" rel="noopener">On Behance</a>`:p.kind==='portfolio'?'<a class="text-link" href="https://www.behance.net/alineabrands" target="_blank" rel="noopener">On Behance </a>':''}</aside><div class="story-copy"><p class="case-lead">${escapeHTML(p.intro)}</p>${sections.map((section,i)=>`<section class="story-section"><span class="eyebrow">${String(i+1).padStart(2,'0')}</span><div><h2>${escapeHTML(section.title)}</h2>${section.body?`<p>${escapeHTML(section.body)}</p>`:''}${section.items?`<ul>${section.items.map(item=>`<li>${escapeHTML(item)}</li>`).join('')}</ul>`:''}</div></section>`).join('')}</div></section>${p.showcase?showcaseHTML(p):p.galleryReady?`<section class="case-gallery section" aria-label="${escapeHTML(p.name)} project gallery">${p.gallery.map((src,i)=>`<button class="gallery-image" data-gallery-index="${i+1}" aria-label="Enlarge ${escapeHTML(p.name)} image ${i+1}"><img src="${imageURL(src,p.imageBase)}" alt="${escapeHTML(p.name)} — project detail ${i+1}" loading="lazy"><span aria-hidden="true"><svg class="arrow-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="alinea-arrow.svg#arrow"></use></svg></span></button>`).join('')}</section>`:`<section class="imagery-note section"><p class="eyebrow">Coming soon</p><h2>${escapeHTML(p.name)}.<br>More to discover.</h2><p>The full branding showcase and additional images will be added soon. ${p.liveUrl?'Explore the live demo above for a closer look at the brand.':'The complete visual showcase will follow.'}</p></section>`}<section class="next-study section"><p class="eyebrow">Next in the collection</p><a href="${projectURL(next)}">${escapeHTML(next.name)} <svg class="arrow-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="alinea-arrow.svg#arrow"></use></svg></a></section>`;
  $$('[data-gallery-index]').forEach(button=>button.addEventListener('click',()=>openGallery(Number(button.dataset.galleryIndex))));
 }
}

/* Full-resolution gallery with native dialog focus containment. */
let galleryIndex=0, opener=null;
let dialog;
if(activeGallery.length){
 dialog=document.createElement('dialog');
 dialog.className='lightbox';
 dialog.setAttribute('aria-label','Project image viewer');
 dialog.innerHTML='<div class="lightbox-toolbar"><button data-prev aria-label="Previous image"><svg class="arrow-icon arrow-back" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="alinea-arrow.svg#arrow"></use></svg></button><span class="lightbox-count" aria-live="polite"></span><button data-next aria-label="Next image"><svg class="arrow-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="alinea-arrow.svg#arrow"></use></svg></button><button data-close aria-label="Close image viewer">Close <svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="alinea-ui.svg#close"></use></svg></button></div><div class="lightbox-scroll"><img alt=""></div>';
 document.body.appendChild(dialog);
 $('[data-close]',dialog).addEventListener('click',()=>dialog.close());
 $('[data-prev]',dialog).addEventListener('click',()=>showGallery(galleryIndex-1));
 $('[data-next]',dialog).addEventListener('click',()=>showGallery(galleryIndex+1));
 dialog.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){e.preventDefault();showGallery(galleryIndex-1);}if(e.key==='ArrowRight'){e.preventDefault();showGallery(galleryIndex+1);}});
 dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
 dialog.addEventListener('close',()=>{document.body.style.overflow='';opener?.focus();});
}
function showGallery(index){
 galleryIndex=(index+activeGallery.length)%activeGallery.length;
 const img=$('img',dialog);
 img.src=imageURL(activeGallery[galleryIndex],activeProject.imageBase);
 img.alt=galleryIndex>0 && activeProject.galleryAlts ? activeProject.galleryAlts[galleryIndex-1] : `${activeProject.name} — image ${galleryIndex+1} of ${activeGallery.length}`;
 $('.lightbox-count',dialog).textContent=`${galleryIndex+1} / ${activeGallery.length}`;
 $('.lightbox-scroll',dialog).scrollTop=0;
}
function openGallery(index){if(!dialog)return;opener=document.activeElement;showGallery(index);dialog.showModal();document.body.style.overflow='hidden';}

/* Progressive cover reveal; unuploaded artwork never appears as a broken image. */
function loadedImage(img){if(img.classList.contains('pending-art'))img.parentElement.classList.add('art-ready');}
function failedImage(img){
 if(img.classList.contains('pending-art')){img.remove();return;}
 if(img.closest('.lightbox'))return;
 const note=document.createElement('div');note.className='image-fallback';note.textContent=img.alt||'Project image';img.replaceWith(note);
}
document.addEventListener('load',e=>{if(e.target instanceof HTMLImageElement)loadedImage(e.target);},true);
document.addEventListener('error',e=>{if(e.target instanceof HTMLImageElement)failedImage(e.target);},true);
$$('img').forEach(img=>{if(img.complete){if(img.naturalWidth)loadedImage(img);else failedImage(img);}});

/* Mobile navigation is a disclosure, leaving normal page navigation intact. */
const menu=$('.menu-toggle'),nav=$('.nav');
function closeMenu(){nav.classList.remove('menu-open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation');}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';nav.classList.toggle('menu-open',open);menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');});
addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('menu-open')){closeMenu();menu.focus();}});
document.addEventListener('click',e=>{if(!nav.contains(e.target))closeMenu();});
matchMedia('(min-width:601px)').addEventListener('change',e=>{if(e.matches)closeMenu();});
$$('.nav nav a').forEach(a=>{if(a.dataset.page===document.body.dataset.page)a.setAttribute('aria-current','page');});
$$('.js-year').forEach(el=>el.textContent=new Date().getFullYear());

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

/* Motion follows user preferences and runs only during input. */
const motionButton=document.createElement('button');motionButton.className='motion-toggle';motionButton.type='button';$('.footer-bottom').appendChild(motionButton);
function applyMotion(){document.documentElement.classList.toggle('motion',!motionOff);document.documentElement.dataset.motion=motionOff?'off':'on';motionButton.textContent=motionOff?'Motion off':'Motion on';motionButton.setAttribute('aria-pressed',String(!motionOff));if(motionOff){document.getAnimations().forEach(a=>a.cancel());}else observeReveals();}
motionButton.addEventListener('click',()=>{motionOff=!motionOff;applyMotion();try{localStorage.setItem('alinea-motion',motionOff?'off':'on');}catch{}});
reduced.addEventListener('change',()=>{motionOff=reduced.matches;applyMotion();});
applyMotion();
let ticking=false;
function updateProgress(){const max=document.documentElement.scrollHeight-innerHeight;document.documentElement.style.setProperty('--progress',max>0?scrollY/max:0);ticking=false;}
addEventListener('scroll',()=>{if(!ticking){ticking=true;requestAnimationFrame(updateProgress);}},{passive:true});
addEventListener('resize',updateProgress);updateProgress();

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

/* Slow, autonomous color drift. Random paths are chosen once per page load. */
$$('.ambient-wash i').forEach((layer,index)=>{
 const random=(a,b)=>a+Math.random()*(b-a);
 layer.style.setProperty('--start-x',`${random(-22,12).toFixed(1)}%`);
 layer.style.setProperty('--start-y',`${random(-20,10).toFixed(1)}%`);
 layer.style.setProperty('--end-x',`${random(12,36).toFixed(1)}%`);
 layer.style.setProperty('--end-y',`${random(15,38).toFixed(1)}%`);
 layer.style.setProperty('--drift-time',`${random(55,95).toFixed(1)}s`);
 layer.style.setProperty('--drift-delay',`${-random(0,70).toFixed(1)}s`);
});
document.addEventListener('visibilitychange',()=>document.documentElement.toggleAttribute('data-paused',document.hidden));

/* Logo motion: muted, inline, with reduced-motion and visibility support. */
const logoVideo=document.querySelector('[data-logo-video]');
const logoControl=document.querySelector('[data-logo-control]');
if(logoVideo && logoControl){
 let manuallyPaused=false;
 const syncLabel=()=>{logoControl.textContent=logoVideo.paused?'Play logo motion':'Pause logo motion';logoControl.setAttribute('aria-pressed',String(!logoVideo.paused));};
 const playLogo=()=>{if(!motionOff&&!manuallyPaused&&!document.hidden)logoVideo.play().catch(syncLabel);};
 logoControl.addEventListener('click',()=>{if(logoVideo.paused){manuallyPaused=false;logoVideo.play().catch(syncLabel);}else{manuallyPaused=true;logoVideo.pause();}});
 logoVideo.addEventListener('play',syncLabel);logoVideo.addEventListener('pause',syncLabel);
 logoVideo.addEventListener('error',()=>{logoVideo.hidden=true;document.querySelector('.logo-video-fallback').hidden=false;logoControl.hidden=true;});
 document.addEventListener('visibilitychange',()=>{if(document.hidden)logoVideo.pause();else playLogo();});
 reduced.addEventListener('change',()=>{if(reduced.matches)logoVideo.pause();else playLogo();});
 motionButton.addEventListener('click',()=>{if(motionOff)logoVideo.pause();else playLogo();});
 syncLabel();playLogo();
}

/* Native scrolling remains in control; only in-page navigation is animated. */
document.addEventListener('click',event=>{
 const link=event.target.closest('a[href^="#"]');
 if(!link||event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
 const hash=link.getAttribute('href');if(hash.length<2)return;
 const target=document.getElementById(hash.slice(1));if(!target)return;
 event.preventDefault();
 target.scrollIntoView({behavior:motionOff?'instant':'smooth',block:'start'});
 history.pushState(null,'',hash);
 const hadTabindex=target.hasAttribute('tabindex');
 if(!hadTabindex)target.setAttribute('tabindex','-1');
 target.focus({preventScroll:true});
 if(!hadTabindex)target.addEventListener('blur',()=>target.removeAttribute('tabindex'),{once:true});
});

/* Reveal headings and editorial sections once, without hiding content on failure. */
if('IntersectionObserver' in window){
 const editorialObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){entry.target.classList.add('has-entered');editorialObserver.unobserve(entry.target);}
 }),{threshold:0.08});
 document.querySelectorAll('.section-head,.intro>div,.homepage-feature-copy,.solferino-feature-copy,.story-section,.showcase-chapter header,.team-grid article,.scope-invitation').forEach(el=>{
  el.classList.add('editorial-reveal');editorialObserver.observe(el);
 });
}

/* A small, bounded shift in the featured image; no wheel or touch interception. */
const featuredArt=document.querySelector('.featured-art');
if(featuredArt){
 let frame=0;
 const paint=()=>{frame=0;const r=featuredArt.getBoundingClientRect();
  const shift=motionOff||innerWidth<700?0:Math.max(-12,Math.min(12,(innerHeight/2-r.top-r.height/2)*0.025));
  featuredArt.style.setProperty('--art-shift',`${shift.toFixed(2)}px`);
 };
 const schedule=()=>{if(!frame)frame=requestAnimationFrame(paint);};
 addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule);
 motionButton.addEventListener('click',schedule);reduced.addEventListener('change',schedule);paint();
}
