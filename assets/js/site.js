
(function(){
  const toggle = document.querySelector('[data-nav-toggle]');
  const mobileNav = document.getElementById('mobileNav');
  if(toggle && mobileNav){
    toggle.addEventListener('click', function(){
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      mobileNav.classList.toggle('open');
    });
  }
})();
