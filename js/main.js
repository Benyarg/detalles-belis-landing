// Main JavaScript for Detalles Beli's

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mainNav = document.getElementById('main-nav');
    
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            const icon = this.querySelector('.material-symbols-outlined');
            if (mobileMenu.classList.contains('hidden')) {
                icon.textContent = 'menu';
            } else {
                icon.textContent = 'close';
            }
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                mobileMenuButton.querySelector('.material-symbols-outlined').textContent = 'menu';
            }
        });
    });
    
    // Theme Toggle Function (unificada)
    function toggleTheme() {
        const html = document.documentElement;
        html.classList.toggle('dark');
        
        // Save preference to localStorage
        if (html.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
        
        // Update ALL theme icons
        updateAllThemeIcons();
    }

    // Function to update all theme icons
    function updateAllThemeIcons() {
        const isDark = document.documentElement.classList.contains('dark');
        const allIcons = document.querySelectorAll('.theme-icon, #theme-toggle .material-symbols-outlined, #theme-toggle-mobile .material-symbols-outlined');
        
        allIcons.forEach(icon => {
            if (isDark) {
                icon.textContent = 'light_mode';
                icon.classList.remove('text-gray-700');
                icon.classList.add('text-yellow-500');
            } else {
                icon.textContent = 'dark_mode';
                icon.classList.remove('text-yellow-500');
                icon.classList.add('text-gray-700');
            }
        });
    }

    // Load saved theme on page load
    function loadSavedTheme() {
        const savedTheme = localStorage.getItem('theme');
        const html = document.documentElement;
        
        if (savedTheme === 'dark') {
            html.classList.add('dark');
        } else if (savedTheme === 'light') {
            html.classList.remove('dark');
        } else {
            // Optional: Detect system preference
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                html.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            }
        }
        
        // Update icons after loading theme
        updateAllThemeIcons();
    }

    // Desktop Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Mobile Theme Toggle
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');
    if (themeToggleMobile) {
        themeToggleMobile.addEventListener('click', toggleTheme);
    }

    // Load theme when page loads
    loadSavedTheme();
    
    // Back to Top Button
    const backToTopButton = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
        // Show/hide back to top button
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
            backToTopButton.classList.remove('opacity-0', 'scale-0');
        } else {
            backToTopButton.classList.remove('visible');
            backToTopButton.classList.add('opacity-0', 'scale-0');
        }
        
        // Add scrolled class to header
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Update active nav link
        updateActiveNavLink();
    });
    
    if (backToTopButton) {
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Smooth scrolling for anchor links
    const scrollButtons = document.querySelectorAll('.scroll-btn');
    scrollButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Update active navigation link based on scroll position
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('text-primary', 'font-bold');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('text-primary', 'font-bold');
                    }
                });
            }
        });
    }
    
    // WhatsApp buttons functionality (botones generales)
    const whatsappButtons = document.querySelectorAll('.whatsapp-btn');
    const phoneNumber = '51998282536'; // Número actualizado
    const defaultMessage = 'Hola, estoy interesado/a en los detalles personalizados de Detalles Beli\'s. ¿Me podrían ayudar?';
    
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Only prevent default if it's a button, not an anchor
            if (this.tagName === 'BUTTON') {
                e.preventDefault();
                const encodedMessage = encodeURIComponent(defaultMessage);
                window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
            }
        });
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.catalog-card, .testimonial-card, .stats-card');
    animateElements.forEach(element => {
        observer.observe(element);
    });
    
    // Product card hover effects
    const productCards = document.querySelectorAll('.catalog-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Initialize
    updateActiveNavLink();
    
    // Log initialization
    console.log('Detalles Beli\'s website initialized successfully!');
});

// ============================================
// FUNCIÓN PARA ENVÍO DE FORMULARIO A WHATSAPP
// ============================================

function enviarWhatsApp() {
    // Obtener valores del formulario
    const nombre = document.getElementById('nombre')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const telefono = document.getElementById('telefono')?.value.trim();
    const tipoRegalo = document.getElementById('tipo_regalo')?.value;
    const mensaje = document.getElementById('mensaje')?.value.trim();
    
    // Verificar que los elementos existan
    if (!nombre || !email || !telefono || !tipoRegalo) {
        alert('Por favor, completa todos los campos requeridos (*)');
        
        // Resaltar campos vacíos
        if (document.getElementById('nombre') && !nombre) {
            document.getElementById('nombre').style.borderColor = '#ef4444';
        }
        if (document.getElementById('email') && !email) {
            document.getElementById('email').style.borderColor = '#ef4444';
        }
        if (document.getElementById('telefono') && !telefono) {
            document.getElementById('telefono').style.borderColor = '#ef4444';
        }
        if (document.getElementById('tipo_regalo') && !tipoRegalo) {
            document.getElementById('tipo_regalo').style.borderColor = '#ef4444';
        }
        
        return;
    }
    
    // Restaurar colores de borde
    document.querySelectorAll('#nombre, #email, #telefono, #tipo_regalo').forEach(el => {
        if (el) el.style.borderColor = '';
    });
    
    // Número de WhatsApp
    const numeroWhatsApp = '51998282536';
    
    // Construir mensaje profesional
    let mensajeWhatsApp = `*📋 NUEVA SOLICITUD DE COTIZACIÓN - DETALLES BELI'S* 📋\n\n`;
    mensajeWhatsApp += `━━━━━━━━━━━━━━━━━━━━━\n\n`;
    mensajeWhatsApp += `👤 *Nombre:* ${nombre}\n`;
    mensajeWhatsApp += `📧 *Correo:* ${email}\n`;
    mensajeWhatsApp += `📱 *Teléfono:* ${telefono}\n`;
    mensajeWhatsApp += `🎁 *Interés:* ${tipoRegalo}\n`;
    
    if (mensaje) {
        mensajeWhatsApp += `💬 *Mensaje:* ${mensaje}\n`;
    }
    
    mensajeWhatsApp += `\n━━━━━━━━━━━━━━━━━━━━━\n`;
    mensajeWhatsApp += `⏰ *Fecha:* ${new Date().toLocaleDateString('es-PE')}\n`;
    mensajeWhatsApp += `🕐 *Hora:* ${new Date().toLocaleTimeString('es-PE')}\n\n`;
    mensajeWhatsApp += `_Por favor contactar al cliente para cotización._`;
    
    // Codificar y abrir WhatsApp
    const mensajeCodificado = encodeURIComponent(mensajeWhatsApp);
    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`, '_blank');
    
    // Opcional: Mostrar mensaje de éxito
    setTimeout(() => {
        alert('✅ ¡Gracias! Serás redirigido a WhatsApp con todos tus datos.');
    }, 100);
}

// Quitar borde rojo cuando el usuario empieza a escribir
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('#nombre, #email, #telefono, #tipo_regalo');
    inputs.forEach(input => {
        if (input) {
            input.addEventListener('input', function() {
                this.style.borderColor = '';
            });
            
            input.addEventListener('focus', function() {
                this.style.borderColor = '';
            });
        }
    });
});

// Función para abrir el modal
function openModal(element) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const img = element.querySelector('img');
    
    modalImg.src = img.src;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Evita el scroll del fondo
}

// Cerrar modal
document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('imageModal').classList.remove('active');
    document.body.style.overflow = ''; // Restaura el scroll
});

// Cerrar modal al hacer clic fuera de la imagen
document.getElementById('imageModal').addEventListener('click', function(e) {
    if (e.target === this) {
        this.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Cerrar modal con tecla ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const modal = document.getElementById('imageModal');
        if (modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
});