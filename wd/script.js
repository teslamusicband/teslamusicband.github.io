// открывает и закрывает мобильное меню
function toggleMenu() {
  var menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
  // блокируем скролл пока меню открыто
  document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
}

// закрываем меню если пользователь растянул окно до десктопа
window.addEventListener('resize', function() {
  if (window.innerWidth > 900) {
    var menu = document.getElementById('mobileMenu');
    menu.classList.remove('open');
    document.body.style.overflow = '';
  }
});

// плавный скролл по якорным ссылкам
document.querySelectorAll('a[href^="#"]').forEach(function(link) {
  link.addEventListener('click', function(e) {
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
