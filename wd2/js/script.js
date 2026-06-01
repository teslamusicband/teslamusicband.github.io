// Звёзды работают через радио-инпуты и CSS (:checked ~ label), JS тут не нужен.
// Плавный скролл по якорным ссылкам в шапке и подвале
document.querySelectorAll('a[href^="#"]').forEach(function(link) {
  link.addEventListener('click', function(e) {
    var href = this.getAttribute('href');
    if (href === '#') return;
    var target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});