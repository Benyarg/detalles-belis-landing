// ============================================
// MAIN JAVASCRIPT - DETALLES BELIS
// ============================================

document.addEventListener('DOMContentLoaded', function () {

  // --------------------------------------------
  // 1. TEMA CLARO / OSCURO
  // --------------------------------------------
  function toggleTheme() {
    const html = document.documentElement;
    html.classList.toggle('dark');
    const isDark = html.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcons();
    updateBrowserThemeColor();
  }

  function updateThemeIcons() {
    const isDark = document.documentElement.classList.contains('dark');
    const icons = document.querySelectorAll('#theme-icon, #theme-icon-mobile');
    icons.forEach(icon => {
      icon.textContent = isDark ? 'light_mode' : 'dark_mode';
    });
  }

  function loadTheme() {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (saved === 'dark' || (!saved && prefersDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    updateThemeIcons();
    updateBrowserThemeColor();
  }

  document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);
  document.getElementById('theme-toggle-mobile')?.addEventListener('click', toggleTheme);
  loadTheme();

  // --------------------------------------------
  // 2. MENÚ MÓVIL
  // --------------------------------------------
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  function closeMobileMenu() {
    if (!mobileMenu || !mobileMenuButton) return;
    mobileMenu.classList.add('hidden');
    mobileMenuButton.setAttribute('aria-expanded', 'false');
    const icon = mobileMenuButton.querySelector('.material-symbols-outlined');
    if (icon) icon.textContent = 'menu';
  }

  mobileMenuButton?.addEventListener('click', function() {
    const isOpen = mobileMenuButton.getAttribute('aria-expanded') === 'true';
    if (isOpen) {
      closeMobileMenu();
    } else {
      mobileMenu.classList.remove('hidden');
      mobileMenuButton.setAttribute('aria-expanded', 'true');
      this.querySelector('.material-symbols-outlined').textContent = 'close';
    }
  });

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) closeMobileMenu();
  });

  // --------------------------------------------
  // 3. HEADER SCROLL Y BACK TO TOP
  // --------------------------------------------
  const backToTop = document.getElementById('back-to-top');
  const header = document.querySelector('header');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      backToTop?.classList.add('visible');
    } else {
      backToTop?.classList.remove('visible');
    }

    if (header) {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });

  backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // --------------------------------------------
  // 4. SMOOTH SCROLL PARA BOTONES
  // --------------------------------------------
  document.querySelectorAll('.scroll-btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      const target = document.querySelector(href);
      if (!target) return;
      
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // --------------------------------------------
  // 5. MODAL DE IMÁGENES
  // --------------------------------------------
  window.openModal = function (element) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const img = element.querySelector('img');
    if (modal && modalImg && img) {
      modalImg.src = img.src;
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModalBtn = document.getElementById('closeModal');
  const modalOverlay = document.getElementById('imageModal');

  function closeModal() {
    modalOverlay?.classList.remove('active');
    document.body.style.overflow = '';
  }

  closeModalBtn?.addEventListener('click', closeModal);
  modalOverlay?.addEventListener('click', function (e) {
    if (e.target === this) closeModal();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modalOverlay?.classList.contains('active')) closeModal();
  });

  // --------------------------------------------
  // 6. FORMULARIO WHATSAPP
  // --------------------------------------------
  window.enviarWhatsApp = function (event) {
    event?.preventDefault();
    const nombre = document.getElementById('nombre')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const telefono = document.getElementById('telefono')?.value.trim();
    const tipoRegalo = document.getElementById('tipo_regalo')?.value;
    const mensaje = document.getElementById('mensaje')?.value.trim();

    if (!nombre || !email || !telefono || !tipoRegalo) {
      alert('Por favor, completa todos los campos requeridos (*)');
      return;
    }

    const numero = '51998282536';
    let texto = `*📋 NUEVA CONSULTA - DETALLES BELIS* 📋\n\n`;
    texto += `👤 Nombre: ${nombre}\n`;
    texto += `📧 Correo: ${email}\n`;
    texto += `📱 Teléfono: ${telefono}\n`;
    texto += `🎁 Interés: ${tipoRegalo}\n`;
    if (mensaje) texto += `💬 Mensaje: ${mensaje}\n`;
    texto += `\n_Fecha: ${new Date().toLocaleDateString('es-PE')}_`;

    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(texto)}`, '_blank');
  };
  
    // --------------------------------------------
  // 7. ANIMACIONES SCROLL REVEAL (SOLO UNA VEZ)
  // --------------------------------------------
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Añade la clase para que aparezca suavemente
          entry.target.classList.add('active');
          
          // Deja de observar el elemento para que la animación solo ocurra una vez
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px" 
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  // --------------------------------------------
  // 8. CONTADOR ANIMADO (STATS)
  // --------------------------------------------
  const statElements = document.querySelectorAll('[id^="stat-"]');
  
  function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'), 10);
    if (isNaN(target)) return;
    
    let current = 0;
    const duration = 1800;
    const stepTime = 16;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = Math.floor(current);
    }, stepTime);
  }

  const statsSection = document.getElementById('stats');
  if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          statElements.forEach(el => animateCounter(el));
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    statsObserver.observe(statsSection);
  }

  // --------------------------------------------
  // 9. CARRUSEL DE TESTIMONIOS
  // --------------------------------------------
  const track = document.getElementById('testimonialTrack');
  const dotsContainer = document.getElementById('sliderDots');
  const prevButton = document.getElementById('testimonialPrev');
  const nextButton = document.getElementById('testimonialNext');

  if (track && dotsContainer) {
    const slides = Array.from(track.querySelectorAll('.testimonial-slide'));
    let currentIndex = 0;
    let autoPlay = null;
    let resizeTimer = null;

    function slidesPerView() {
      return window.innerWidth >= 768 ? 3 : 1;
    }

    function maxIndex() {
      return Math.max(0, slides.length - slidesPerView());
    }

    function updateSlider() {
      const perView = slidesPerView();
      const max = maxIndex();
      if (currentIndex > max) currentIndex = max;
      if (currentIndex < 0) currentIndex = 0;

      const movement = currentIndex * (100 / perView);
      track.style.transition = 'transform 0.45s ease';
      track.style.transform = `translateX(-${movement}%)`;

      const dots = dotsContainer.querySelectorAll('.slider-dot');
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
        dot.setAttribute('aria-current', index === currentIndex ? 'true' : 'false');
      });
    }

    function createDots() {
      dotsContainer.innerHTML = '';
      for (let i = 0; i <= maxIndex(); i++) {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'slider-dot';
        dot.setAttribute('aria-label', `Ver testimonio ${i + 1}`);
        dot.addEventListener('click', () => {
          currentIndex = i;
          updateSlider();
          restartAutoPlay();
        });
        dotsContainer.appendChild(dot);
      }
      updateSlider();
    }

    function nextSlide() {
      const max = maxIndex();
      currentIndex = currentIndex >= max ? 0 : currentIndex + 1;
      updateSlider();
      restartAutoPlay();
    }

    function prevSlide() {
      const max = maxIndex();
      currentIndex = currentIndex <= 0 ? max : currentIndex - 1;
      updateSlider();
      restartAutoPlay();
    }

    function startAutoPlay() {
      stopAutoPlay();
      autoPlay = setInterval(nextSlide, 5000);
    }

    function stopAutoPlay() {
      if (autoPlay) {
        clearInterval(autoPlay);
        autoPlay = null;
      }
    }

    function restartAutoPlay() {
      stopAutoPlay();
      startAutoPlay();
    }

    prevButton?.addEventListener('click', prevSlide);
    nextButton?.addEventListener('click', nextSlide);

    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        currentIndex = 0;
        createDots();
      }, 200);
    });

    const slider = document.querySelector('.testimonial-slider');
    slider?.addEventListener('mouseenter', stopAutoPlay);
    slider?.addEventListener('mouseleave', startAutoPlay);

    createDots();
    startAutoPlay();
  }

  // --------------------------------------------
  // 10. ACTUALIZAR THEME COLOR DEL NAVEGADOR
  // --------------------------------------------
  function updateBrowserThemeColor() {
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (themeColorMeta) {
      const isDarkMode = document.documentElement.classList.contains('dark');
      themeColorMeta.setAttribute('content', isDarkMode ? '#171416' : '#FFF9FA');
    }
  }

});