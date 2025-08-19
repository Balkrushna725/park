(function () {
  // Mobile menu toggle
  const menuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });
  }

  // Year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // AOS init
  if (window.AOS) {
    AOS.init({
      once: true,
      duration: 700,
      easing: 'ease-out-cubic'
    });
  }

  // Swiper init (Reviews)
  if (window.Swiper) {
    new Swiper('.review-swiper', {
      slidesPerView: 1,
      spaceBetween: 16,
      loop: true,
      autoplay: { delay: 3500 },
      pagination: { el: '.swiper-pagination', clickable: true },
      breakpoints: {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }
    });
  }

  // Booking form handling (basic demo)
  const bookingForm = document.getElementById('bookingForm');
  const whatsappBtn = document.getElementById('whatsappBtn');
  if (bookingForm && whatsappBtn) {
    bookingForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const car = document.getElementById('car').value.trim();
      const time = document.getElementById('time').value;
      const service = document.getElementById('service').value;
      if (!name || !phone || !car || !time || !service) return;
      const msg = `Hi PrimeWash Team, I want to book a car wash.%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0ACar: ${encodeURIComponent(car)}%0ATime: ${encodeURIComponent(time)}%0AService: ${encodeURIComponent(service)}`;
      const phoneNumber = '919999999999';
      const url = `https://wa.me/${phoneNumber}?text=${msg}`;
      window.open(url, '_blank', 'noopener');
    });
  }
})();

