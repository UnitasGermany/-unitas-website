
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if(toggle && nav){
  toggle.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded',String(open));
  });
  nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded','false');
  }));
}
document.querySelectorAll('[data-demo-submit]').forEach(btn=>{
  btn.addEventListener('click',(e)=>{
    e.preventDefault();
    alert('Demo: Das Formular ist noch nicht technisch angeschlossen.');
  });
});
