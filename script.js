const menu=document.querySelector('.menu');const nav=document.querySelector('#nav');
if(menu&&nav){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}));}
const io=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');io.unobserve(entry.target);}})},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
document.getElementById('year').textContent=new Date().getFullYear();

const cfg=window.NOBLEVEYRA||{};
document.querySelectorAll('[data-link]').forEach(el=>{
  const key=el.getAttribute('data-link');
  const value=cfg[key];
  if(value){el.href=value;}
  else{el.addEventListener('click',e=>{e.preventDefault();document.querySelector('#contact')?.scrollIntoView({behavior:'smooth'});});}
});
document.querySelectorAll('[data-email]').forEach(el=>{if(cfg.email){el.href='mailto:'+cfg.email;}else{el.href='#contact';}});
