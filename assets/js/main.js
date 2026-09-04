// ============================================
// MAIN JAVASCRIPT 
// ============================================

document.addEventListener('DOMContentLoaded', function () {
  // ---- Toggle tema (unificado) ----
  function toggleTheme() {
    const html = document.documentElement;
    html.classList.toggle('dark');
    const isDark = html.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcons();
  }

  function updateThemeIcons() {
    const isDark = document.documentElement.classList.contains('dark');
    const icons = document.querySelectorAll('.theme-icon, #theme-icon, #theme-icon-mobile, #theme-toggle-footer .material-symbols-outlined');
    icons.forEach(icon => {
      icon.textContent = isDark ? 'light_mode' : 'dark_mode';
    });
  }

  function loadTheme() {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = saved === 'dark' || (!saved && prefersDark);
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    updateThemeIcons();
  }

  // Listeners para los botones de tema
  document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);
  document.getElementById('theme-toggle-mobile')?.addEventListener('click', toggleTheme);
  document.getElementById('theme-toggle-footer')?.addEventListener('click', toggleTheme);

  loadTheme();

  // ---- Menú móvil ----

const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

function closeMobileMenu() {

  if (!mobileMenu || !mobileMenuButton) return;

  mobileMenu.classList.add('hidden');

  mobileMenuButton.setAttribute('aria-expanded', 'false');

  const icon = mobileMenuButton.querySelector('.material-symbols-outlined');

  if (icon) {
    icon.textContent = 'menu';
  }
}

function openMobileMenu() {

  if (!mobileMenu || !mobileMenuButton) return;

  mobileMenu.classList.remove('hidden');

  mobileMenuButton.setAttribute('aria-expanded', 'true');

  const icon = mobileMenuButton.querySelector('.material-symbols-outlined');

  if (icon) {
    icon.textContent = 'close';
  }
}

mobileMenuButton?.addEventListener('click', () => {

  const isOpen =
    mobileMenuButton.getAttribute('aria-expanded') === 'true';

  if (isOpen) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
});

// Cerrar al seleccionar una sección
document.querySelectorAll('.mobile-nav-link').forEach(link => {

  link.addEventListener('click', () => {
    closeMobileMenu();
  });
});

// Cerrar al cambiar a desktop
window.addEventListener('resize', () => {

  if (window.innerWidth >= 768) {
    closeMobileMenu();
  }
});

  // ---- Back to top ----
  const backToTop = document.getElementById('back-to-top');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
    // Header scrolled
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ---- Smooth scroll para .scroll-btn ----
  document.querySelectorAll('.scroll-btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ---- Modal de imágenes ----
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

  const closeModal = document.getElementById('closeModal');
  const modalOverlay = document.getElementById('imageModal');

  closeModal?.addEventListener('click', function () {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  });

  modalOverlay?.addEventListener('click', function (e) {
    if (e.target === this) {
      this.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modalOverlay?.classList.contains('active')) {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // ---- Envío de formulario a WhatsApp ----
  window.enviarWhatsApp = function (event) {

  event?.preventDefault();

  const nombre =
    document.getElementById('nombre')?.value.trim();

  const email =
    document.getElementById('email')?.value.trim();

  const telefono =
    document.getElementById('telefono')?.value.trim();

  const tipoRegalo =
    document.getElementById('tipo_regalo')?.value;

  const mensaje =
    document.getElementById('mensaje')?.value.trim();

  if (!nombre || !email || !telefono || !tipoRegalo) {

    alert('Por favor, completa todos los campos requeridos (*)');

    return;
  }

  const numero = '51998282536';

  let texto =
    `*📋 NUEVA SOLICITUD - DETALLES BELIS* 📋\n\n`;

  texto += `👤 Nombre: ${nombre}\n`;
  texto += `📧 Correo: ${email}\n`;
  texto += `📱 Teléfono: ${telefono}\n`;
  texto += `🎁 Interés: ${tipoRegalo}\n`;

  if (mensaje) {
    texto += `💬 Mensaje: ${mensaje}\n`;
  }

  texto +=
    `\n_Fecha: ${new Date().toLocaleDateString('es-PE')}_`;

  const url =
    `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

  window.open(url, '_blank', 'noopener,noreferrer');
};

  // ---- Quitar borde rojo al escribir ----
  document.querySelectorAll('#nombre, #email, #telefono, #tipo_regalo').forEach(input => {
    input?.addEventListener('input', function () { this.style.borderColor = ''; });
  });

  // ---- Animación de entrada (fade-in) para tarjetas ----
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
        // Opcional: dejar de observar después de animar
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.card, .occasion-card, .testimonial-card').forEach(el => {
    observer.observe(el);
  });
});

// ============================================
// CONTADOR ANIMADO (STATS)
// ============================================
const statElements = document.querySelectorAll('[id^="stat-"]');

function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-target'));
  if (isNaN(target)) return;
  let current = 0;
  const duration = 1800; // ms
  const stepTime = 16; // ~60fps
  const steps = duration / stepTime;
  const increment = target / steps;

  const timer = setInterval(function() {
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
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        statElements.forEach(el => animateCounter(el));
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  observer.observe(statsSection);
}

// ============================================
// CARRUSEL DE TESTIMONIOS
// ============================================

const track = document.getElementById('testimonialTrack');
const slides = track
  ? Array.from(track.querySelectorAll('.testimonial-slide'))
  : [];

const dotsContainer = document.getElementById('sliderDots');

if (track && slides.length > 0 && dotsContainer) {

  let currentIndex = 0;
  let autoPlayInterval = null;
  let resizeTimeout = null;

  function getSlidesPerView() {
    return window.innerWidth >= 768 ? 3 : 1;
  }

  function getMaxIndex() {
    const perView = getSlidesPerView();
    return Math.max(0, slides.length - perView);
  }

  function updateSlider() {

    const perView = getSlidesPerView();
    const maxIndex = getMaxIndex();

    if (currentIndex > maxIndex) {
      currentIndex = maxIndex;
    }

    const translate = -(currentIndex * (100 / perView));

    track.style.transform = `translateX(${translate}%)`;

    const dots = dotsContainer.querySelectorAll('.slider-dot');

    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
      dot.setAttribute(
        'aria-current',
        index === currentIndex ? 'true' : 'false'
      );
    });
  }

  function createDots() {

    const maxIndex = getMaxIndex();
    const dotCount = maxIndex + 1;

    dotsContainer.innerHTML = '';

    for (let i = 0; i < dotCount; i++) {

      const dot = document.createElement('button');

      dot.type = 'button';
      dot.className = 'slider-dot';

      dot.setAttribute('aria-label', `Mostrar grupo ${i + 1}`);
      dot.setAttribute('data-index', i);

      if (i === currentIndex) {
        dot.classList.add('active');
        dot.setAttribute('aria-current', 'true');
      }

      dot.addEventListener('click', () => {

        currentIndex = i;

        updateSlider();
        resetAutoPlay();
      });

      dotsContainer.appendChild(dot);
    }
  }

  function startAutoPlay() {

    stopAutoPlay();

    autoPlayInterval = setInterval(() => {

      const maxIndex = getMaxIndex();

      if (currentIndex >= maxIndex) {
        currentIndex = 0;
      } else {
        currentIndex++;
      }

      updateSlider();

    }, 5000);
  }

  function stopAutoPlay() {

    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
      autoPlayInterval = null;
    }
  }

  function resetAutoPlay() {
    stopAutoPlay();
    startAutoPlay();
  }

  // Inicializar
  createDots();
  updateSlider();
  startAutoPlay();

  // Resize
  window.addEventListener('resize', () => {

    clearTimeout(resizeTimeout);

    resizeTimeout = setTimeout(() => {

      const maxIndex = getMaxIndex();

      if (currentIndex > maxIndex) {
        currentIndex = maxIndex;
      }

      createDots();
      updateSlider();
      resetAutoPlay();

    }, 200);
  });

  // Pausar al pasar el mouse
  const sliderContainer =
    document.querySelector('.testimonial-slider');

  if (sliderContainer) {

    sliderContainer.addEventListener('mouseenter', stopAutoPlay);

    sliderContainer.addEventListener('mouseleave', startAutoPlay);

    sliderContainer.addEventListener('focusin', stopAutoPlay);

    sliderContainer.addEventListener('focusout', startAutoPlay);
  }
}

// ============================================
// NAV ACTIVO SEGÚN LA SECCIÓN
// ============================================

const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

function updateActiveNav() {

  const scrollPosition = window.scrollY + 160;

  let currentSection = 'hero';

  sections.forEach(section => {

    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      currentSection = section.id;
    }
  });

  navLinks.forEach(link => {

    const href = link.getAttribute('href');

    link.classList.toggle(
      'active',
      href === `#${currentSection}`
    );
  });
}

window.addEventListener('scroll', updateActiveNav);

window.addEventListener('load', updateActiveNav);

// ---- Header al hacer scroll ----

const header = document.querySelector('header');

window.addEventListener('scroll', () => {

  if (!header) return;

  if (window.scrollY > 40) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
// =====================================================
// Browser theme color
// Sincroniza la barra del navegador con el tema actual
// =====================================================

const themeColorMeta = document.querySelector('meta[name="theme-color"]');

function updateBrowserThemeColor() {
  const isDarkMode = document.documentElement.classList.contains('dark');

  if (themeColorMeta) {
    themeColorMeta.setAttribute(
      'content',
      isDarkMode ? '#171416' : '#FFF9FA'
    );
  }
}

// Aplicar el color correcto al cargar
updateBrowserThemeColor();

// Detectar cambios de tema automáticamente
const themeObserver = new MutationObserver(() => {
  updateBrowserThemeColor();
});

themeObserver.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ['class']
});