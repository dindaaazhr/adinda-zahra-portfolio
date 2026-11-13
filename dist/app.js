(() => {
'use strict';
const data=window.PORTFOLIO;
const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const safeUrl=u=>{if(!u)return null;try{const x=new URL(u,location.href);return ['https:','http:'].includes(x.protocol)?x.href:null}catch{return null}};
const external=(url,label,cls='')=>`<a class="${cls}" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${label}</a>`;
document.querySelectorAll('[data-name]').forEach(el=>el.textContent=data.name);
document.title=`${data.fullName} - Data Analyst Portfolio`;
$('.role').innerHTML='<span></span>'+esc(data.fullName.toUpperCase());
$('#intro').textContent=data.intro;
$('#about-copy').textContent=data.about;
$('#about-note').textContent=data.aboutNote||'';
$('#year').textContent=new Date().getFullYear();
if(data.photo&&safeUrl(data.photo)){const img=new Image();img.src=data.photo;img.alt=`Foto profil ${data.fullName}`;img.className='profile-photo';img.onload=()=>$('#profile-frame').replaceChildren(img);}
$('#skills-grid').innerHTML=data.skills.map(s=>`<article class="skill-card reveal"><span class="skill-icon" aria-hidden="true">${esc(s.icon)}</span><span class="skill-group">${esc(s.group)}</span><h3>${esc(s.name)}</h3><p>${esc(s.text)}</p></article>`).join('');
function timeline(items) {
  return items.map(s => {
    const publicationUrl = safeUrl(s.publicationUrl);

    const publication = s.publication
      ? `<p style="margin-top: 10px;">
          ${
            publicationUrl
              ? external(
                  publicationUrl,
                  `${esc(s.publication)} ↗`,
                  'text-link'
                )
              : esc(s.publication)
          }
        </p>`
      : '';

    return `
      <article class="timeline-item">
        <time>${esc(s.date)}</time>
        <h4>${esc(s.title)}</h4>
        <p class="org">${esc(s.org)}</p>
        <p>${esc(s.text).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')}</p>
        ${publication}
      </article>
    `;
  }).join('');
}
$('#education-list').innerHTML=timeline(data.education);$('#experience-list').innerHTML=timeline(data.experience);
const dialog=$('#detail-dialog');let lastFocus;
function openDialog(html){if(!dialog.open)lastFocus=document.activeElement;$('#dialog-content').innerHTML=html;if(!dialog.open)dialog.showModal();document.body.style.overflow='hidden'}
dialog.addEventListener('close',()=>{document.body.style.overflow='';lastFocus?.focus()});
$('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
function unavailable(label){openDialog(`<span class="eyebrow">STILL GROWING</span><h2>${esc(label)}<br><em>Coming into bloom.</em></h2><p>Bagian ini belum memiliki tautan personal. Nantikan pembaruan portfolio berikutnya.</p>`)}
function linkControl(url,label,kind){const u=safeUrl(url);return u?external(u,`${label} ↗`):`<button class="unavailable" data-unavailable="${esc(kind)}" aria-label="${esc(kind)} belum tersedia">${label} <span aria-hidden="true">↗</span></button>`}
$('#project-grid').innerHTML=data.projects.map(p=>`<article class="project-card reveal" data-tool="${esc(p.tool)}"><button class="project-visual ${esc(p.color)}" data-project="${p.id}" aria-label="Lihat detail ${esc(p.title)}"><img src="${esc(safeUrl(p.image)?p.image:`assets/project-${p.id}.svg`)}" alt="${esc(p.image?`Visual proyek ${p.title}`:`Ilustrasi contoh dashboard ${p.title}; bukan hasil analisis aktual`)}" loading="lazy">${!p.image?'<span class="visual-tag">ILLUSTRATIVE PREVIEW</span>':''}</button><div class="project-body"><div class="project-meta"><span>${esc(p.category)}</span><span>/${p.id}</span></div><h3>${esc(p.title)}</h3><p>${esc(p.summary)}</p><div class="tags">${p.tags.map(t=>`<span>${esc(t)}</span>`).join('')}</div><div class="project-links">${linkControl(p.slides,'Presentation','Slide Presentation')}${linkControl(p.tableau,'Tableau','Tableau')}<button class="detail-link" data-project="${p.id}" aria-label="Detail ${esc(p.title)}">↗</button></div></div></article>`).join('');
$('#research-grid').innerHTML=data.research.map(r=>`<article class="research-card reveal"><div class="research-art">${r.image&&safeUrl(r.image)?`<img src="${esc(r.image)}" alt="Visual ${esc(r.title)}" loading="lazy">`:esc(r.id)}</div><div><span class="eyebrow" style="font-size:8px">${esc(r.area)}</span><h3>${esc(r.title)}</h3><p>${esc(r.summary)}</p>${linkControl(r.link,'Research details','Research details')}</div></article>`).join('');
const contacts=[['WhatsApp',data.contact.whatsapp],['Email',data.contact.email],['LinkedIn',data.contact.linkedin]];
$('#contact-links').innerHTML=contacts.map(([label,value])=>{let url=null;if(label==='Email'&&value&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))url=`mailto:${value}`;else if(label==='WhatsApp'&&value&&/^\+?[\d\s-]{8,20}$/.test(value))url=`https://wa.me/${value.replace(/\D/g,'')}`;else url=safeUrl(value);return url?(label==='Email'?`<a href="${esc(url)}">${label} <span>↗</span></a>`:external(url,`${label} <span>↗</span>`)):`<button data-unavailable="${label}" aria-label="${label} belum tersedia">${label} <span>↗</span></button>`}).join('');
if(contacts.every(([,v])=>v))$('.contact-section>.small').hidden=true;
document.addEventListener('click',e=>{const missing=e.target.closest('[data-unavailable]');if(missing)unavailable(missing.dataset.unavailable);const btn=e.target.closest('[data-project]');if(btn){const p=data.projects.find(p=>p.id===btn.dataset.project);openDialog(`<span class="eyebrow">PROJECT ${esc(p.id)} / ${esc(p.category)}</span><h2>${esc(p.title)}</h2><div class="tags">${p.tags.map(t=>`<span>${esc(t)}</span>`).join('')}</div><p>${esc(p.summary)}</p><h3>Pertanyaan bisnis</h3><p>${esc(p.question)}</p><h3>Pendekatan analisis</h3><p>${esc(p.approach)}</p><h3>Output yang dituju</h3><p>${esc(p.output)}</p><p class="dialog-note">Contoh kerangka studi kasus. Deskripsi dan visual ini bukan klaim proyek yang telah dikerjakan atau hasil analisis aktual.</p><div class="project-links">${linkControl(p.slides,'Slide Presentation','Slide Presentation')}${linkControl(p.tableau,'Tableau','Tableau')}</div>`)}});
$('#project-filters').addEventListener('click',e=>{const b=e.target.closest('[data-filter]');if(!b)return;document.querySelectorAll('[data-filter]').forEach(x=>{const on=x===b;x.classList.toggle('selected',on);x.setAttribute('aria-pressed',on)});let count=0;document.querySelectorAll('.project-card').forEach(c=>{c.hidden=b.dataset.filter!=='All'&&c.dataset.tool!==b.dataset.filter;if(!c.hidden){count++;c.classList.add('visible')}});$('#filter-status').textContent=`${count} proyek ditampilkan untuk ${b.dataset.filter}`});
function updateThemeButton(){const dark=document.documentElement.dataset.theme==='dark';$('#theme-toggle').textContent=dark?'☀':'☾';$('#theme-toggle').setAttribute('aria-label',dark?'Aktifkan mode terang':'Aktifkan mode gelap');$('#theme-toggle').setAttribute('aria-pressed',String(dark));$('meta[name="theme-color"]').content=dark?'#20271f':'#f5f5dc'}
updateThemeButton();$('#theme-toggle').addEventListener('click',()=>{const next=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=next;try{localStorage.setItem('bloom-theme',next)}catch{}updateThemeButton()});
const menu=$('#menu-toggle'),nav=$('#navigation');function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Buka navigasi');menu.textContent='☰'}
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Tutup navigasi':'Buka navigasi');menu.textContent=open?'×':'☰'});
nav.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});document.addEventListener('click',e=>{if(!e.target.closest('.site-header'))closeMenu()});matchMedia('(min-width:801px)').addEventListener('change',e=>{if(e.matches)closeMenu()});
if('IntersectionObserver'in window){if(!matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('js-motion');const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(e=>observer.observe(e))}const active=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)document.querySelectorAll('nav a').forEach(a=>{const on=a.hash===`#${e.target.id}`;a.classList.toggle('active',on);if(on)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')})}),{rootMargin:'-15% 0px -55% 0px'});document.querySelectorAll('main section[id]').forEach(s=>active.observe(s))}
})();
