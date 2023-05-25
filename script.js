let menuIcone = document.querySelector('#menu-icone');
let nav = document.querySelector('.nav');


menuIcone.onclick = () => {
  menuIcone.classList.toggle('bx-x');
  nav.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
      });
    };
  });
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);
};

ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.conteudo-inicio', .cabeçalho' { origin: 'top' });