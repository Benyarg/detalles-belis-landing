# 🎁 Detalles Belis — Landing Page

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Responsive_Design-22C55E?style=for-the-badge" alt="Responsive Design" />
  <img src="https://img.shields.io/badge/SEO-Optimized-4285F4?style=for-the-badge&logo=google&logoColor=white" alt="SEO" />
</p>

> Sitio web orientado a la presentación de productos y generación de pedidos para **Detalles Belis**, un emprendimiento familiar especializado en regalos personalizados.

<p align="center">
  <a href="https://detallesbelis.com"><strong>🌐 Ver sitio en producción</strong></a>
  ·
  <a href="https://github.com/Benyarg/detalles-belis-landing"><strong>💻 Ver repositorio</strong></a>
</p>

---

## 📌 Sobre el proyecto

**Detalles Belis** es una landing page desarrollada para fortalecer la presencia digital de un negocio de regalos personalizados. La experiencia se centra en presentar el catálogo de forma visual, comunicar la propuesta de valor de la marca y facilitar el contacto con clientes potenciales.

El proyecto combina **diseño responsive, interactividad con JavaScript, optimización SEO y accesibilidad web** en una solución ligera, sin dependencias de instalación para su ejecución local. La interfaz contempla distintos tamaños de pantalla, desde smartphones compactos hasta monitores de escritorio.

## ✨ Funcionalidades destacadas

- **Diseño responsive:** composición adaptable para smartphones, tablets, laptops y pantallas de hasta 1440 px.
- **Tema claro y oscuro:** selector de apariencia con persistencia mediante `localStorage` y ajustes de contraste por sección.
- **Catálogo visual:** tarjetas de productos con imágenes verticales y modal interactivo para ampliar su visualización.
- **Contacto mediante WhatsApp:** formulario que construye un mensaje con los datos ingresados para agilizar las solicitudes personalizadas.
- **Carrusel de testimonios:** presentación dinámica con controles y comportamiento adaptable.
- **Microinteracciones:** contadores animados, efectos *Scroll Reveal* y navegación que identifica la sección activa.
- **Preloader personalizado:** pantalla de carga alineada con la identidad visual del negocio.
- **Accesibilidad:** estructura HTML semántica, atributos `aria`, textos alternativos y navegación organizada.
- **SEO técnico:** metadatos, URL canónica, Open Graph, Twitter Cards, datos estructurados JSON-LD, `robots.txt` y `sitemap.xml`.
- **Experiencia visual consistente:** sistema de espaciado y alineación compartido entre encabezado, contenido y pie de página.

## 🧰 Stack tecnológico

| Tecnología | Aplicación |
| --- | --- |
| **HTML5** | Estructura semántica y organización del contenido. |
| **CSS3** | Estilos personalizados, animaciones y ajustes responsive. |
| **JavaScript** | Interactividad, formularios, modal, carrusel, cambio de tema y observación del viewport. |
| **Tailwind CSS** | Utilidades de diseño, distribución y adaptación por breakpoints. |
| **Material Symbols** | Iconografía de la interfaz. |
| **Google Fonts** | Tipografías: Playfair Display, Poppins y Dancing Script. |
| **Schema.org / JSON-LD** | Marcado de datos estructurados para buscadores. |
| **Git & GitHub** | Control de versiones y gestión del código fuente. |
| **Netlify** | Plataforma de despliegue. |

## 🎁 Catálogo de productos

La página organiza la oferta comercial en categorías para facilitar el descubrimiento de productos:

- 🌹 Flores eternas.
- 🎁 Boxes personalizados.
- 🧸 Peluches premium.
- 💌 Cartas personalizadas.
- 🍫 Chocolates.
- 📦 Cajas personalizadas.

## 📱 Diseño adaptable

La interfaz utiliza un enfoque *mobile-first* y ajustes específicos según el espacio disponible.

| Dispositivo | Ancho de referencia | Adaptaciones |
| --- | --- | --- |
| Smartphones | 320–480 px | Menú compacto, contenido en una columna y tipografía ajustada. |
| Tablets | 481–1024 px | Navegación adaptable y grillas de dos columnas. |
| Laptops y desktop | 1025–1199 px | Navegación de escritorio y grillas de varias columnas. |
| Pantallas grandes | 1200 px o más | Ancho de contenido controlado y márgenes amplios, hasta 1440 px. |

## 🌗 Gestión de temas

El usuario puede alternar entre dos esquemas visuales:

| Tema | Color base |
| --- | --- |
| Claro | `#FFF9FA` |
| Oscuro | `#171416` |

La preferencia se conserva con `localStorage`. También se ajustan los colores de tarjetas, formularios, enlaces, estadísticas y elementos secundarios para mantener una jerarquía visual y un contraste legible.

## 💬 Flujo de contacto

El formulario prepara una solicitud y la deriva a WhatsApp mediante un enlace con el mensaje generado dinámicamente. Los datos contemplados son:

- Nombre y correo electrónico.
- Teléfono.
- Tipo de regalo.
- Mensaje adicional.
- Fecha de solicitud.

> El flujo facilita el contacto directo con el negocio; la coordinación y confirmación del pedido se realizan mediante WhatsApp.

## 🔎 SEO y presencia digital

La implementación contempla elementos técnicos para mejorar la interpretación y presentación del sitio en buscadores y plataformas sociales:

- Metadatos descriptivos y `canonical URL`.
- Open Graph y Twitter Cards para vistas previas al compartir enlaces.
- Datos estructurados mediante Schema.org y JSON-LD.
- Directivas de rastreo mediante `robots.txt`.
- Mapa del sitio mediante `sitemap.xml`.
- Favicons e iconos para distintos dispositivos.

## 🗂️ Estructura del proyecto

```text
detalles-belis-landing/
├── assets/
│   ├── css/
│   │   ├── preloader.css
│   │   └── style.css
│   ├── img/
│   │   ├── android-chrome-192x192.png
│   │   ├── android-chrome-512x512.png
│   │   ├── apple-touch-icon.png
│   │   ├── boxes_personalizados.png
│   │   ├── cajas_personalizadas.png
│   │   ├── cartas_personalizadas.png
│   │   ├── chocolates.png
│   │   ├── favicon-32x32.png
│   │   ├── favicon.ico
│   │   ├── flores_eternas.png
│   │   ├── idea-regalo-personalizado.png
│   │   ├── logo_detallesbelis.png
│   │   ├── og-detalles-belis.jpg
│   │   └── peluches_premium.png
│   └── js/
│       ├── main.js
│       └── preloader.js
├── .gitignore
├── index.html
├── README.md
├── robots.txt
├── sitemap.xml
└── site.webmanifest
```

## 🚀 Ejecución local

El proyecto es un sitio web estático y no requiere instalar dependencias para ejecutarse.

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/Benyarg/detalles-belis-landing.git
   ```

2. **Ingresar al directorio:**

   ```bash
   cd detalles-belis-landing
   ```

3. **Iniciar un servidor local** (opcional, recomendado):

   ```bash
   npx serve .
   ```

   Como alternativa, puedes utilizar Python:

   ```bash
   python -m http.server 8000
   ```

   Después, abre en el navegador la dirección local indicada por el servidor. También puedes abrir `index.html` directamente.

## 🎯 Objetivos y alcance

- Presentar el catálogo de productos de manera clara y atractiva.
- Facilitar las consultas y solicitudes de regalos personalizados.
- Reforzar la identidad digital y la confianza en el negocio.
- Mantener una experiencia consistente en distintos dispositivos.
- Aplicar buenas prácticas de frontend, accesibilidad y SEO técnico.

## 🔄 Control de versiones

El proyecto utiliza Git para el seguimiento de cambios y GitHub como repositorio remoto. Se mantiene una convención de commits basada en prefijos descriptivos:

| Prefijo | Uso |
| --- | --- |
| `feat:` | Nueva funcionalidad. |
| `fix:` | Corrección de errores. |
| `refactor:` | Mejora interna del código sin alterar su comportamiento esperado. |
| `style:` | Cambios de formato o presentación. |
| `docs:` | Actualización de documentación. |
| `chore:` | Tareas de mantenimiento. |

Ejemplo de flujo:

```bash
git add .
git commit -m "docs: improve project README"
git push origin main
```

## 👨‍💻 Autor

**Benjamin Rumay** · Software Developer

[![GitHub](https://img.shields.io/badge/GitHub-Benyarg-181717?style=for-the-badge&logo=github)](https://github.com/Benyarg)

---

<p align="center">
  Desarrollado con enfoque en <strong>experiencia de usuario, diseño adaptable y soluciones web orientadas a negocio.</strong>
</p>
