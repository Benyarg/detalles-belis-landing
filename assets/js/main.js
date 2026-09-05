// ============================================
// MAIN JAVASCRIPT
// ============================================

document.addEventListener('DOMContentLoaded', function () {

  // ============================================
  // TEMA
  // ============================================

  function toggleTheme() {
    const html = document.documentElement;

    html.classList.toggle('dark');

    const isDark = html.classList.contains('dark');

    localStorage.setItem(
      'theme',
      isDark ? 'dark' : 'light'
    );

    updateThemeIcons();
  }

  function updateThemeIcons() {
    const isDark =
      document.documentElement.classList.contains('dark');

    const icons = document.querySelectorAll(
      '.theme-icon, #theme-icon, #theme-icon-mobile, #theme-toggle-footer .material-symbols-outlined'
    );

    icons.forEach(icon => {
      icon.textContent =
        isDark ? 'light_mode' : 'dark_mode';
    });
  }

  function loadTheme() {
    const saved =
      localStorage.getItem('theme');

    const prefersDark =
      window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;

    const shouldBeDark =
      saved === 'dark' ||
      (!saved && prefersDark);

    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    updateThemeIcons();
  }

  document
    .getElementById('theme-toggle')
    ?.addEventListener('click', toggleTheme);

  document
    .getElementById('theme-toggle-mobile')
    ?.addEventListener('click', toggleTheme);

  document
    .getElementById('theme-toggle-footer')
    ?.addEventListener('click', toggleTheme);

  loadTheme();

  // ============================================
  // MENÚ MÓVIL
  // ============================================

  const mobileMenuButton =
    document.getElementById('mobile-menu-button');

  const mobileMenu =
    document.getElementById('mobile-menu');

  function closeMobileMenu() {
    if (!mobileMenu || !mobileMenuButton) return;

    mobileMenu.classList.add('hidden');

    mobileMenuButton.setAttribute(
      'aria-expanded',
      'false'
    );

    const icon =
      mobileMenuButton.querySelector(
        '.material-symbols-outlined'
      );

    if (icon) {
      icon.textContent = 'menu';
    }
  }

  function openMobileMenu() {
    if (!mobileMenu || !mobileMenuButton) return;

    mobileMenu.classList.remove('hidden');

    mobileMenuButton.setAttribute(
      'aria-expanded',
      'true'
    );

    const icon =
      mobileMenuButton.querySelector(
        '.material-symbols-outlined'
      );

    if (icon) {
      icon.textContent = 'close';
    }
  }

  mobileMenuButton?.addEventListener(
    'click',
    () => {

      const isOpen =
        mobileMenuButton.getAttribute(
          'aria-expanded'
        ) === 'true';

      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    }
  );

  // Cerrar menú al seleccionar una sección
  document
    .querySelectorAll('.mobile-nav-link')
    .forEach(link => {

      link.addEventListener(
        'click',
        closeMobileMenu
      );
    });

  // Cerrar menú al pasar a desktop
  window.addEventListener(
    'resize',
    () => {

      if (window.innerWidth >= 768) {
        closeMobileMenu();
      }
    }
  );

  // ============================================
  // BACK TO TOP
  // ============================================

  const backToTop =
    document.getElementById('back-to-top');

  window.addEventListener(
    'scroll',
    function () {

      if (backToTop) {
        if (window.scrollY > 300) {
          backToTop.classList.add('visible');
        } else {
          backToTop.classList.remove('visible');
        }
      }

      const header =
        document.querySelector('header');

      if (header) {
        if (window.scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    }
  );

  backToTop?.addEventListener(
    'click',
    () => {

      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  );

  // ============================================
  // SMOOTH SCROLL
  // ============================================

  document
    .querySelectorAll('.scroll-btn')
    .forEach(btn => {

      btn.addEventListener(
        'click',
        function (e) {

          const href =
            this.getAttribute('href');

          if (
            !href ||
            !href.startsWith('#')
          ) {
            return;
          }

          const target =
            document.querySelector(href);

          if (!target) return;

          e.preventDefault();

          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      );
    });

  // ============================================
  // MODAL DE IMÁGENES
  // ============================================

  window.openModal =
    function (element) {

      const modal =
        document.getElementById(
          'imageModal'
        );

      const modalImg =
        document.getElementById(
          'modalImage'
        );

      const img =
        element.querySelector('img');

      if (
        modal &&
        modalImg &&
        img
      ) {

        modalImg.src =
          img.src;

        modalImg.alt =
          img.alt || 'Imagen ampliada';

        modal.classList.add(
          'active'
        );

        document.body.style.overflow =
          'hidden';
      }
    };

  const closeModal =
    document.getElementById(
      'closeModal'
    );

  const modalOverlay =
    document.getElementById(
      'imageModal'
    );

  closeModal?.addEventListener(
    'click',
    function () {

      modalOverlay?.classList.remove(
        'active'
      );

      document.body.style.overflow =
        '';
    }
  );

  modalOverlay?.addEventListener(
    'click',
    function (e) {

      if (e.target === this) {

        this.classList.remove(
          'active'
        );

        document.body.style.overflow =
          '';
      }
    }
  );

  document.addEventListener(
    'keydown',
    function (e) {

      if (
        e.key === 'Escape' &&
        modalOverlay?.classList.contains(
          'active'
        )
      ) {

        modalOverlay.classList.remove(
          'active'
        );

        document.body.style.overflow =
          '';
      }
    }
  );

  // ============================================
  // FORMULARIO WHATSAPP
  // ============================================

  window.enviarWhatsApp =
    function (event) {

      event?.preventDefault();

      const nombre =
        document
          .getElementById('nombre')
          ?.value.trim();

      const email =
        document
          .getElementById('email')
          ?.value.trim();

      const telefono =
        document
          .getElementById('telefono')
          ?.value.trim();

      const tipoRegalo =
        document
          .getElementById(
            'tipo_regalo'
          )
          ?.value;

      const mensaje =
        document
          .getElementById('mensaje')
          ?.value.trim();

      if (
        !nombre ||
        !email ||
        !telefono ||
        !tipoRegalo
      ) {

        alert(
          'Por favor, completa todos los campos requeridos (*)'
        );

        return;
      }

      const numero =
        '51998282536';

      let texto =
        `*📋 NUEVA CONSULTA - DETALLES BELIS* 📋\n\n`;

      texto +=
        `👤 Nombre: ${nombre}\n`;

      texto +=
        `📧 Correo: ${email}\n`;

      texto +=
        `📱 Teléfono: ${telefono}\n`;

      texto +=
        `🎁 Interés: ${tipoRegalo}\n`;

      if (mensaje) {
        texto +=
          `💬 Mensaje: ${mensaje}\n`;
      }

      texto +=
        `\n_Fecha: ${new Date().toLocaleDateString(
          'es-PE'
        )}_`;

      const url =
        `https://wa.me/${numero}?text=${encodeURIComponent(
          texto
        )}`;

      window.open(
        url,
        '_blank',
        'noopener,noreferrer'
      );
    };

  // ============================================
  // CAMPOS DEL FORMULARIO
  // ============================================

  document
    .querySelectorAll(
      '#nombre, #email, #telefono, #tipo_regalo'
    )
    .forEach(input => {

      input?.addEventListener(
        'input',
        function () {
          this.style.borderColor =
            '';
        }
      );
    });

  // ============================================
  // ANIMACIÓN DE TARJETAS
  // ============================================

  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(
          entry => {

            if (
              entry.isIntersecting
            ) {

              entry.target.classList.add(
                'animate-fade-in'
              );

              observer.unobserve(
                entry.target
              );
            }
          }
        );
      },
      {
        threshold: 0.1,
        rootMargin:
          '0px 0px -50px 0px'
      }
    );

  document
    .querySelectorAll(
      '.card, .occasion-card, .testimonial-card'
    )
    .forEach(el => {
      observer.observe(el);
    });
});

// ============================================
// CONTADOR ANIMADO
// ============================================

const statElements =
  document.querySelectorAll(
    '[id^="stat-"]'
  );

function animateCounter(element) {

  const target =
    parseInt(
      element.getAttribute(
        'data-target'
      ),
      10
    );

  if (isNaN(target)) return;

  let current = 0;

  const duration = 1800;
  const stepTime = 16;

  const steps =
    duration / stepTime;

  const increment =
    target / steps;

  const timer =
    setInterval(
      function () {

        current += increment;

        if (current >= target) {

          current = target;

          clearInterval(
            timer
          );
        }

        element.textContent =
          Math.floor(current);

      },
      stepTime
    );
}

const statsSection =
  document.getElementById(
    'stats'
  );

if (statsSection) {

  const statsObserver =
    new IntersectionObserver(
      function (entries) {

        entries.forEach(
          entry => {

            if (
              entry.isIntersecting
            ) {

              statElements.forEach(
                el =>
                  animateCounter(
                    el
                  )
              );

              statsObserver.unobserve(
                entry.target
              );
            }
          }
        );
      },
      {
        threshold: 0.3
      }
    );

  statsObserver.observe(
    statsSection
  );
}

// ============================================
// CARRUSEL DE TESTIMONIOS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('testimonialTrack');
  const dotsContainer = document.getElementById('sliderDots');
  const prevButton = document.getElementById('testimonialPrev');
  const nextButton = document.getElementById('testimonialNext');

  if (!track) return;

  const slides = Array.from(
    track.querySelectorAll('.testimonial-slide')
  );

  if (!slides.length) return;

  let currentIndex = 0;
  let autoPlay = null;
  let resizeTimer = null;

  function slidesPerView() {
    return window.innerWidth >= 768 ? 3 : 1;
  }

  function maxIndex() {
    return Math.max(
      0,
      slides.length - slidesPerView()
    );
  }

  function updateSlider() {
    const perView = slidesPerView();
    const max = maxIndex();

    if (currentIndex > max) {
      currentIndex = max;
    }

    if (currentIndex < 0) {
      currentIndex = 0;
    }

    const movement =
      currentIndex * (100 / perView);

    track.style.transition =
      'transform 0.45s ease';

    track.style.transform =
      `translateX(-${movement}%)`;

    if (dotsContainer) {
      const dots =
        dotsContainer.querySelectorAll('.slider-dot');

      dots.forEach((dot, index) => {
        dot.classList.toggle(
          'active',
          index === currentIndex
        );

        dot.setAttribute(
          'aria-current',
          index === currentIndex
            ? 'true'
            : 'false'
        );
      });
    }
  }

  function createDots() {
    if (!dotsContainer) return;

    dotsContainer.innerHTML = '';

    for (let i = 0; i <= maxIndex(); i++) {
      const dot =
        document.createElement('button');

      dot.type = 'button';
      dot.className = 'slider-dot';

      dot.setAttribute(
        'aria-label',
        `Ver testimonio ${i + 1}`
      );

      dot.addEventListener('click', () => {
        currentIndex = i;
        updateSlider();
        restartAutoPlay();
      });

      dotsContainer.appendChild(dot);
    }

    updateSlider();
  }

  function previousSlide() {
    const max = maxIndex();

    currentIndex =
      currentIndex <= 0
        ? max
        : currentIndex - 1;

    updateSlider();
    restartAutoPlay();
  }

  function nextSlide() {
    const max = maxIndex();

    currentIndex =
      currentIndex >= max
        ? 0
        : currentIndex + 1;

    updateSlider();
    restartAutoPlay();
  }

  function startAutoPlay() {
    stopAutoPlay();

    autoPlay = setInterval(() => {
      nextSlide();
    }, 5000);
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

  prevButton?.addEventListener(
    'click',
    previousSlide
  );

  nextButton?.addEventListener(
    'click',
    nextSlide
  );

  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(() => {
      currentIndex = 0;
      createDots();
    }, 200);
  });

  const slider =
    document.querySelector('.testimonial-slider');

  slider?.addEventListener(
    'mouseenter',
    stopAutoPlay
  );

  slider?.addEventListener(
    'mouseleave',
    startAutoPlay
  );

  createDots();
  startAutoPlay();
});

// ============================================
// NAV ACTIVO SEGÚN LA SECCIÓN
// ============================================

const navLinks =
  document.querySelectorAll(
    '.nav-link'
  );

const sections =
  document.querySelectorAll(
    'section[id]'
  );

function updateActiveNav() {

  const scrollPosition =
    window.scrollY + 160;

  let currentSection =
    'hero';

  sections.forEach(
    section => {

      const sectionTop =
        section.offsetTop;

      const sectionHeight =
        section.offsetHeight;

      if (
        scrollPosition >=
          sectionTop &&
        scrollPosition <
          sectionTop +
            sectionHeight
      ) {

        currentSection =
          section.id;
      }
    }
  );

  navLinks.forEach(
    link => {

      const href =
        link.getAttribute(
          'href'
        );

      link.classList.toggle(
        'active',
        href ===
          `#${currentSection}`
      );
    }
  );
}

window.addEventListener(
  'scroll',
  updateActiveNav
);

window.addEventListener(
  'load',
  updateActiveNav
);

// ============================================
// HEADER AL HACER SCROLL
// ============================================

const header =
  document.querySelector(
    'header'
  );

window.addEventListener(
  'scroll',
  () => {

    if (!header) return;

    if (
      window.scrollY > 40
    ) {

      header.classList.add(
        'scrolled'
      );

    } else {

      header.classList.remove(
        'scrolled'
      );
    }
  }
);

// ============================================
// BROWSER THEME COLOR
// ============================================

const themeColorMeta =
  document.querySelector(
    'meta[name="theme-color"]'
  );

function updateBrowserThemeColor() {

  const isDarkMode =
    document.documentElement
      .classList.contains(
        'dark'
      );

  if (themeColorMeta) {

    themeColorMeta.setAttribute(
      'content',
      isDarkMode
        ? '#171416'
        : '#FFF9FA'
    );
  }
}

// Aplicar color correcto al cargar
updateBrowserThemeColor();

// Detectar cambios de tema
const themeObserver =
  new MutationObserver(
    () => {

      updateBrowserThemeColor();
    }
  );

themeObserver.observe(
  document.documentElement,
  {
    attributes: true,
    attributeFilter: [
      'class'
    ]
  }
);