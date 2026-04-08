# RM Mandados - Sitio Web Oficial

Sitio web profesional de **RM Mandados**, empresa de cadeteria, pagos de servicios, compras y delivery en Posadas, Misiones, Argentina.

---

## Vista General

Single Page Application (SPA) moderna, rapida y optimizada para mobile-first. Diseñada para convertir visitantes en clientes a traves de llamados a la accion directos a WhatsApp.

### Secciones del Sitio

| Seccion | Descripcion |
|---------|-------------|
| **Hero** | Pantalla completa con logo, slogan y CTA principal a WhatsApp |
| **Servicios** | Grid de 4 servicios con iconos animados |
| **Nosotros** | Mision, vision e historia de la empresa |
| **Valores** | 5 valores corporativos con diseño premium |
| **Empleo** | Seccion de reclutamiento de cadetes con CTA directo |
| **Contacto** | Telefono, ubicacion, horario y mapa embebido |
| **Footer** | Info de contacto, servicios, redes sociales |

---

## Stack Tecnologico

| Tecnologia | Version | Proposito |
|-----------|---------|-----------|
| React | 19 | Framework UI |
| Vite | 5 | Bundler y dev server |
| Tailwind CSS | 4 | Sistema de estilos utility-first |
| Framer Motion | 12 | Animaciones y transiciones |
| React Helmet Async | 3 | SEO y meta tags dinamicos |

---

## Funcionalidades

- **WhatsApp Directo**: Boton flotante y multiples CTAs con mensaje predefinido
- **Animaciones Scroll Reveal**: Cada seccion se anima al entrar en viewport
- **SEO Optimizado**: Meta tags, Open Graph (previews en WhatsApp/redes), canonical URL
- **Mobile-First**: Diseño responsive, navbar hamburguesa, optimizado para 4G
- **LLM Friendly**: Archivo `llms.txt` para que asistentes de IA lean el sitio
- **Netlify Ready**: Configuracion de deploy, headers de seguridad, cache y SPA redirects

---

## Inicio Rapido

### Requisitos

- Node.js 18+ (recomendado 20+)
- npm

### Instalacion

```bash
git clone https://github.com/eduardocarlostoledo/rmmandados.git
cd rmmandados
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre `http://localhost:5173` en el navegador.

### Build de Produccion

```bash
npm run build
```

Los archivos optimizados se generan en la carpeta `dist/`.

### Preview del Build

```bash
npm run preview
```

---

## Deploy en Netlify

El proyecto esta preconfigurado para deploy automatico en Netlify:

1. Conectar el repositorio en [app.netlify.com](https://app.netlify.com)
2. El archivo `netlify.toml` ya tiene la configuracion:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Headers de seguridad**: X-Frame-Options, X-Content-Type-Options, XSS Protection
   - **Cache**: assets inmutables (1 año), imagenes (1 dia)
   - **SPA Redirect**: todas las rutas redirigen a `index.html`

---

## Estructura del Proyecto

```
rm-mandados/
├── public/
│   ├── img/                  # Imagenes del sitio
│   ├── _redirects            # Redirect SPA para Netlify
│   ├── robots.txt            # Configuracion para crawlers
│   └── llms.txt              # Descripcion para asistentes IA
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Barra de navegacion sticky
│   │   ├── Hero.jsx          # Seccion principal con CTAs
│   │   ├── Services.jsx      # Grid de servicios
│   │   ├── About.jsx         # Quienes somos + mision/vision
│   │   ├── Values.jsx        # Valores corporativos
│   │   ├── WorkWithUs.jsx    # Reclutamiento de cadetes
│   │   ├── Contact.jsx       # Contacto + mapa
│   │   ├── Footer.jsx        # Pie de pagina
│   │   ├── WhatsAppButton.jsx # Boton flotante WhatsApp
│   │   └── FramerWrapper.jsx # Componente de animaciones
│   ├── App.jsx               # Componente raiz + SEO
│   ├── main.jsx              # Entry point
│   └── index.css             # Tailwind + theme config
├── netlify.toml              # Config de deploy Netlify
├── vite.config.js            # Config de Vite
└── package.json
```

---

## Personalizacion

### Cambiar datos de contacto

Todos los datos de contacto (telefono, WhatsApp, Instagram) estan directamente en los componentes:

- **WhatsApp**: Buscar `wa.me/` en los archivos `.jsx`
- **Telefono**: Buscar `tel:+` en los archivos `.jsx`
- **Instagram**: En `Footer.jsx`
- **Horario/Ubicacion**: En `Contact.jsx`, `Footer.jsx` y `Hero.jsx`

### Cambiar colores

Los colores del tema estan definidos en `src/index.css`:

```css
@theme {
  --color-primary: #1a1a2e;    /* Azul oscuro principal */
  --color-secondary: #e94560;  /* Rojo/rosa para CTAs */
  --color-accent: #0f3460;     /* Azul acento */
  --color-whatsapp: #25d366;   /* Verde WhatsApp */
}
```

### Cambiar imagenes

Reemplazar los archivos en `public/img/`. Las imagenes referenciadas son:

| Archivo | Uso |
|---------|-----|
| `logo_no_bg-removebg-preview.png` | Logo en navbar, hero y footer |
| `comida-cadete-pedidos-rm.png` | Fondo del hero |
| `movil-moto-rapido-paquete.png` | Seccion Nosotros |
| `cadete-donas.png` | Seccion Empleo |
| `og-image.jpg` | Preview al compartir en redes sociales |

---

## Scripts Disponibles

| Comando | Descripcion |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo con hot reload |
| `npm run build` | Build optimizado para produccion |
| `npm run preview` | Preview local del build de produccion |
| `npm run lint` | Linter con ESLint |

---

## Seguridad

El sitio implementa headers de seguridad via `netlify.toml`:

- `X-Frame-Options: DENY` - Previene clickjacking
- `X-Content-Type-Options: nosniff` - Previene MIME sniffing
- `X-XSS-Protection: 1; mode=block` - Proteccion XSS
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` - Restringe acceso a camara, microfono, geolocalizacion

---

## Desarrollado por

**Toledo Consultora IT** - [www.toledoconsultora.com](https://www.toledoconsultora.com)
