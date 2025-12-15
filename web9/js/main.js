/**
 * ОБЩИЙ JAVASCRIPT ДЛЯ САЙТА "ТРАНСФОРМАТОРЫ И ЛАМПЫ"
 * Содержит функционал для всех страниц
 */

// ===================================
// ГЛОБАЛЬНЫЙ ОБЪЕКТ
// ===================================

window.TransLamps = window.TransLamps || {};
window.TransLamps.utils = window.TransLamps.utils || {};
window.TransLamps.projects = window.TransLamps.projects || {};

// ===================================
// ДАННЫЕ ПРОЕКТОВ
// ===================================

window.TransLamps.projects = {
  'omega': {
    title: 'Студия «Omega» — интеграция лампового оборудования',
    content: `
      <img src="images/_proj1.jpg" alt="Студия Omega" class="img-fluid rounded mb-3" style="height: 300px; width: 100%; object-fit: cover;">
      <div style="font-size: 20px; line-height: 34px;">
        <p><strong>Задача:</strong> Оснащение новой студии звукозаписи профессиональным ламповым оборудованием для работы с вокалом и акустическими инструментами.</p>
        <p><strong>Решение:</strong> Установлен комплект из 4 ламповых микрофонов LM-1, 2 компрессоров VM-Classic и параметрического эквалайзера PEQ-2.</p>
        <p><strong>Результат:</strong> Студия получила уникальный тёплый звук, что позволило привлечь артистов, работающих в жанрах джаз, блюз и акустическая музыка.</p>
        <div class="mt-4 p-3 rounded" style="background: rgba(255, 215, 0, 0.1);">
          <strong>Использованное оборудование:</strong>
          <ul class="mt-2 mb-0">
            <li>Ламповые микрофоны LM-1 × 4</li>
            <li>Vari-Mu компрессоры VM-Classic × 2</li>
            <li>Параметрические эквалайзеры PEQ-2 × 1</li>
          </ul>
        </div>
      </div>
    `
  },
  'guitar-rig': {
    title: 'Гитарный риг для международного тура',
    content: `
      <img src="images/_proj2.jpg" alt="Гитарный риг" class="img-fluid rounded mb-3" style="height: 300px; width: 100%; object-fit: cover;">
      <div style="font-size: 20px; line-height: 34px;">
        <p><strong>Задача:</strong> Создание мобильного и надежного гитарного оборудования для гастрольного тура с сохранением качества студийного звука.</p>
        <p><strong>Решение:</strong> Разработка кастомной гитарной головы с ламповым каскадом и интеграция с эмуляторами кабинета CabSim Pro для прямого подключения к PA-системе.</p>
        <p><strong>Результат:</strong> Музыканты получили стабильное и качественное звучание на всех концертных площадках без потери характерного лампового тона.</p>
      </div>
    `
  },
  'tesla-show': {
    title: 'Tesla Art Шоу с MIDI-управлением',
    content: `
      <img src="images/_proj3.jpg" alt="Tesla шоу" class="img-fluid rounded mb-3" style="height: 300px; width: 100%; object-fit: cover;">
      <div style="font-size: 20px; line-height: 34px;">
        <p><strong>Задача:</strong> Организация зрелищного музыкального шоу с визуальными эффектами от трансформаторов Тесла.</p>
        <p><strong>Решение:</strong> Использование DRSSTC катушек DMC-1 с MIDI-интерфейсом для синхронизации электрических разрядов с музыкой.</p>
        <p><strong>Результат:</strong> Уникальное аудио-визуальное шоу, где каждая нота сопровождается соответствующим электрическим разрядом.</p>
      </div>
    `
  },
  'radio': {
    title: 'Радиостанция «Волна» — модернизация оборудования',
    content: `
      <img src="images/_proj4.jpg" alt="Радиостанция" class="img-fluid rounded mb-3" style="height: 300px; width: 100%; object-fit: cover;">
      <div style="font-size: 20px; line-height: 34px;">
        <p><strong>Задача:</strong> Модернизация эфирного комплекса радиостанции для повышения качества вещания.</p>
        <p><strong>Решение:</strong> Установка ламповых процессоров и мониторов SM-5 для контроля качества звука.</p>
        <p><strong>Результат:</strong> Значительное улучшение качества звучания эфира и повышение удобства работы звукорежиссеров.</p>
      </div>
    `
  },
  'philharmonic': {
    title: 'Концертный зал «Филармония»',
    content: `
      <img src="images/_proj5.jpg" alt="Концертный зал" class="img-fluid rounded mb-3" style="height: 300px; width: 100%; object-fit: cover;">
      <div style="font-size: 20px; line-height: 34px;">
        <p><strong>Задача:</strong> Создание системы мониторинга и обработки для контроля звука в репетиционных залах и студиях.</p>
        <p><strong>Решение:</strong> Установка системы студийных мониторов и ламповых процессоров.</p>
        <p><strong>Результат:</strong> Повышение точности звуковоспроизведения и удобства работы музыкантов и звукорежиссеров.</p>
      </div>
    `
  },
  'cinema': {
    title: 'Киностудия «Космос»',
    content: `
      <img src="images/_proj6.jpg" alt="Киностудия" class="img-fluid rounded mb-3" style="height: 300px; width: 100%; object-fit: cover;">
      <div style="font-size: 20px; line-height: 34px;">
        <p><strong>Задача:</strong> Оснащение студии звукового пост-продакшена для создания саундтреков и звуковых эффектов.</p>
        <p><strong>Решение:</strong> Установка профессионального лампового и цифрового оборудования для пост-продакшена.</p>
        <p><strong>Результат:</strong> Возможность создания качественных саундтреков и звуковых эффектов для фильмов.</p>
      </div>
    `
  }
};

// ===================================
// УТИЛИТЫ
// ===================================

window.TransLamps.utils = {
  // Скрыть экран загрузки
  hideLoading: function() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      setTimeout(() => {
        loadingScreen.classList.add('hidden');
        loadingScreen.style.display = 'none';
      }, 700);
    }
  },

  // Открыть модальное окно покупки
  openBuyModal: function(productName) {
    const modal = document.getElementById('buyModal') || document.getElementById('modal-buy');
    const productInput = document.getElementById('product');
    
    if (modal && productInput) {
      productInput.value = productName;
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }
  },

  // Закрыть модальное окно
  closeModal: function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  },

  // Обработка формы покупки
  handleBuyForm: function(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    
    if (!name || !email) {
      alert('Пожалуйста, заполните обязательные поля.');
      return;
    }
    
    alert('Спасибо за заказ! Мы свяжемся с вами в ближайшее время.');
    form.reset();
    
    // Закрыть модальное окно
    const modal = form.closest('.modal') || form.closest('[id*="modal"]');
    if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  },

  // Обработка формы контактов
  handleContactForm: function(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const message = form.querySelector('[name="message"]').value.trim();
    
    if (!name || !email || !message) {
      alert('Пожалуйста, заполните обязательные поля.');
      return;
    }
    
    alert('Ваше сообщение отправлено! Мы свяжемся с вами в течение рабочего дня.');
    form.reset();
  },

  // Показать детали проекта
  showProjectModal: function(projectId) {
    const project = window.TransLamps.projects[projectId];
    if (!project) return;

    const modalTitle = document.getElementById('project-modal-title');
    const modalContent = document.getElementById('project-modal-content');

    if (modalTitle) modalTitle.textContent = project.title;
    if (modalContent) modalContent.innerHTML = project.content;

    // Показать модальное окно (Bootstrap или обычное)
    const modal = document.getElementById('project-modal');
    if (modal) {
      if (typeof bootstrap !== 'undefined' && bootstrap.Modal) {
        const bsModal = new bootstrap.Modal(modal);
        bsModal.show();
      } else {
        modal.style.display = 'flex';
      }
    }
  },

  // Фильтрация каталога
  filterCatalog: function(filter) {
    // Обновляем активную кнопку
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.classList.remove('active');
      if (btn.getAttribute('data-filter') === filter) {
        btn.classList.add('active');
      }
    });

    // Показываем/скрываем секции
    document.querySelectorAll('[data-category-section]').forEach(section => {
      if (filter === 'all' || section.getAttribute('data-category-section') === filter) {
        section.style.display = 'block';
      } else {
        section.style.display = 'none';
      }
    });

    // Показываем/скрываем карточки в популярных товарах
    document.querySelectorAll('.product-card[data-category]').forEach(card => {
      if (filter === 'all' || card.getAttribute('data-category') === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }
};

// ===================================
// ИНИЦИАЛИЗАЦИЯ ПРИ ЗАГРУЗКЕ
// ===================================

document.addEventListener('DOMContentLoaded', function() {
  console.log('TransLamps site initialized');

  // Скрыть экран загрузки
  window.TransLamps.utils.hideLoading();

  // ===================================
  // МОДАЛЬНОЕ ОКНО ПОКУПКИ
  // ===================================

  // Обработчики для кнопок "Купить"
  document.querySelectorAll('[data-buy]').forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const productName = this.getAttribute('data-buy') || this.getAttribute('data-product');
      window.TransLamps.utils.openBuyModal(productName);
    });
  });

  // Обработчики для кнопок с data-bs-toggle="modal"
  document.querySelectorAll('[data-bs-toggle="modal"]').forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const productName = this.getAttribute('data-product');
      window.TransLamps.utils.openBuyModal(productName);
    });
  });

  // Закрытие модального окна
  document.querySelectorAll('.close, .btn-close, [data-bs-dismiss="modal"]').forEach(btn => {
    btn.addEventListener('click', function() {
      const modal = this.closest('.modal') || this.closest('[id*="modal"]');
      if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });
  });

  // Закрытие при клике вне модального окна
  document.querySelectorAll('.modal, [id*="modal"]').forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });
  });

  // ===================================
  // ФОРМЫ
  // ===================================

  // Форма покупки
  const buyForm = document.getElementById('buy-form');
  if (buyForm) {
    buyForm.addEventListener('submit', window.TransLamps.utils.handleBuyForm);
  }

  // Форма контактов
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', window.TransLamps.utils.handleContactForm);
  }

  // ===================================
  // СТРАНИЦА ПРОЕКТОВ
  // ===================================

  // Обработчики для кнопок проектов
  document.querySelectorAll('[data-view-project]').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const projectId = this.getAttribute('data-view-project');
      window.TransLamps.utils.showProjectModal(projectId);
    });
  });

  // ===================================
  // ФИЛЬТРАЦИЯ КАТАЛОГА
  // ===================================

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const filter = this.getAttribute('data-filter');
      window.TransLamps.utils.filterCatalog(filter);
    });
  });

  // ===================================
  // FAQ АККОРДЕОН
  // ===================================

  const faqHeaders = document.querySelectorAll('.faq-header');
  faqHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const icon = this.querySelector('span:last-child');
      const isExpanded = this.getAttribute('aria-expanded') === 'true';

      // Закрыть все другие FAQ
      document.querySelectorAll('.faq-header').forEach(otherHeader => {
        if (otherHeader !== this) {
          otherHeader.setAttribute('aria-expanded', 'false');
          const otherIcon = otherHeader.querySelector('span:last-child');
          if (otherIcon) otherIcon.textContent = '+';
        }
      });

      // Переключить текущий
      if (icon) {
        icon.textContent = isExpanded ? '+' : '−';
      }
    });
  });

  // ===================================
  // ГАЛЕРЕЯ ПРОДУКТОВ (смена изображений)
  // ===================================

  window.changeMainImage = function(src) {
    const mainImg = document.getElementById('prod-img');
    if (mainImg) {
      mainImg.src = src;
    }
  };

  // ===================================
  // ПЛАВНАЯ ПРОКРУТКА К ЯКОРЯМ
  // ===================================

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href && href !== '#' && href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
});

// ===================================
// ГЛОБАЛЬНЫЕ ФУНКЦИИ
// ===================================

// Функция для закрытия модального окна (для использования в HTML)
window.closeModal = function(modalId) {
  window.TransLamps.utils.closeModal(modalId || 'buyModal');
};

// Функция для открытия модального окна покупки (для использования в HTML)
window.openBuyModal = function(productName) {
  window.TransLamps.utils.openBuyModal(productName);
};

// Функция для смены изображения продукта (для использования в HTML)
window.changeMainImage = function(src) {
  const mainImg = document.getElementById('prod-img');
  if (mainImg) {
    mainImg.src = src;
  }
};
