// Рандомизация звёзд и рейтинга при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
  var ratings = document.querySelectorAll('.rating');
  ratings.forEach(function(ratingEl) {
    // Случайное количество звёзд от 3 до 5
    var randomStars = Math.floor(Math.random() * 3) + 3; // 3, 4 или 5
    // Случайное число рейтинга от 75 до 98
    var randomCount = Math.floor(Math.random() * 24) + 75; // 75-98
    
    // Находим radio-кнопки внутри этой карточки
    var radios = ratingEl.querySelectorAll('input[type="radio"]');
    // Устанавливаем выбранную звёзду
    radios.forEach(function(radio) {
      if (parseInt(radio.value) === randomStars) {
        radio.checked = true;
      }
    });
    
    // Обновляем число рейтинга
    var countEl = ratingEl.querySelector('.rate-count');
    if (countEl) {
      countEl.textContent = '(' + randomCount + ')';
    }
  });

  // Инициализация анимаций при скролле
  initScrollAnimations();
  // Параллакс для hero
  initParallax();
});

// Анимации при скролле
function initScrollAnimations() {
  var elements = document.querySelectorAll('.card, .section-h2, .cat-block, .excl, .order, .discount, .step, .cat');
  
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  
  elements.forEach(function(el) {
    el.classList.add('animate-on-scroll');
    observer.observe(el);
  });
}

// Параллакс эффект для hero секции
function initParallax() {
  var hero = document.querySelector('.hero');
  if (!hero) return;
  
  var heroBefore = hero.querySelector('::before');
  if (!heroBefore) return;
  
  window.addEventListener('scroll', function() {
    var scrolled = window.pageYOffset;
    if (scrolled < 600) {
      hero.style.transform = 'translateY(' + (scrolled * 0.3) + 'px)';
    }
  });
}

// Открытие и закрытие мобильного меню
function toggleMenu() {
  var menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
  // Блокируем скролл пока меню открыто
  document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
}

// Закрываем меню при изменении размера окна до десктопа
window.addEventListener('resize', function() {
  if (window.innerWidth > 900) {
    var menu = document.getElementById('mobileMenu');
    menu.classList.remove('open');
    document.body.style.overflow = '';
  }
});

// Плавный скролл по якорным ссылкам
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