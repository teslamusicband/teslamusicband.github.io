// scripts.js - простая логика модалок и отправки форм (симуляция)
document.addEventListener('DOMContentLoaded', ()=>{

  // Open buy modal from product page or card
  function showBuyModal(productName){
    const form = document.getElementById('buy-form');
    if(form) form.reset();
    const modal = document.getElementById('buy-modal');
    if(modal){
      modal.querySelector('.modal-title').textContent = 'Купить: ' + (productName||'оборудование');
      modal.style.display = 'block';
    }
  }

  // Close modal
  document.querySelectorAll('.modal .close').forEach(btn=>{
    btn.addEventListener('click', e=>{
      e.target.closest('.modal').style.display = 'none';
    });
  });

  // Attach buy buttons
  document.querySelectorAll('[data-buy]').forEach(btn=>{
    btn.addEventListener('click', e=>{
      const name = btn.dataset.buy;
      showBuyModal(name);
    });
  });

  // Handle buy form submit
  const buyForm = document.getElementById('buy-form');
  if(buyForm){
    buyForm.addEventListener('submit', e=>{
      e.preventDefault();
      // Basic validation
      const name = buyForm.querySelector('[name="name"]').value.trim();
      const phone = buyForm.querySelector('[name="phone"]').value.trim();
      const email = buyForm.querySelector('[name="email"]').value.trim();
      if(!name || !phone || !email){
        alert('Пожалуйста, заполните обязательные поля: имя, телефон, e-mail.');
        return;
      }
      // Simulate send
      document.getElementById('buy-modal').style.display = 'none';
      alert('Ваша заявка принята. Мы свяжемся с вами в ближайшее время.');
      buyForm.reset();
    });
  }

  // Contact form
  const contactForm = document.getElementById('contact-form');
  if(contactForm){
    contactForm.addEventListener('submit', e=>{
      e.preventDefault();
      const email = contactForm.querySelector('[name="email"]').value.trim();
      const name = contactForm.querySelector('[name="name"]').value.trim();
      if(!name || !email){
        alert('Заполните имя и e-mail.');
        return;
      }
      alert('Ваше сообщение отправлено. Спасибо!');
      contactForm.reset();
    });
  }

  // close modal when clicking outside content
  document.querySelectorAll('.modal').forEach(modal=>{
    modal.addEventListener('click', e=>{
      if(e.target === modal) modal.style.display = 'none';
    });
  });

});