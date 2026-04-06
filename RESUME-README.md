# NightVibe Events (Fest2.fun)

## Resumen del Proyecto

**Tipo:** SPA web de presentación/comercial - Homepage para una plataforma SaaS de gestión de eventos nocturnos.

**Stack Técnico:**
- React 18.3.1 + Create React App
- Material UI 5 (dark mode por defecto)
- Framer Motion 11 (animaciones)
- React Router DOM 7 (navegación SPA)

---

## Estructura del Proyecto

```
nightvibe-events/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── logos/                  # Logos de clientes
├── src/
│   ├── components/
│   │   ├── Header.js           # Navegación fija con detección de scroll
│   │   ├── Hero.js              # Sección hero con gradiente animado
│   │   ├── Carousel.js         # Carrusel de logos de clientes
│   │   ├── Modules.js          # Grid de 5 módulos principales
│   │   ├── Sectors.js          # Sección sectores (Discotecas, Festivales, Eventos)
│   │   ├── Footer.js           # Pie de página con contacto
│   │   └── FlechasNav.js       # Navegación con flechas entre páginas de módulos
│   ├── pages/
│   │   ├── ClickaDigitalPage.js
│   │   ├── InvitacionesPage.js
│   │   ├── AccesoPage.js
│   │   ├── AnaliticasPage.js
│   │   └── AforosPage.js
│   ├── App.js                  # Router principal y configuración del tema
│   ├── index.js                # Entry point
│   └── index.css               # Estilos globales
├── package.json
└── .env
```

---

## Propósito

**Fest2.fun** es una plataforma de marketing y gestión para la industria del entretenimiento nocturno. La aplicación funciona como homepage comercial presentando 5 módulos/servicios:

1. **Clicka Digital** - Control de asistencia digital
2. **Gestión de Invitaciones** - Sistema de invitados y asistentes
3. **Control de Acceso** - Escaneo QR en puerta
4. **Analíticas de Asistentes** - Datos en tiempo real
5. **Aforos por Zonas** - Control de capacidad por zonas

**Sectores objetivo:** Discotecas, festivales, eventos privados, corporativos, culturales, convenciones y ferias.

---

## Dependencias Principales

| Dependencia | Versión | Propósito |
|-------------|---------|-----------|
| react / react-dom | 18.3.1 | Core framework |
| react-router-dom | 7.13.0 | Navegación SPA |
| @mui/material | 5.16.7 | Componentes UI (Material Design) |
| framer-motion | 11.2.9 | Animaciones |
| react-icons | 5.2.1 | Iconos adicionales |
| @emotion/react | 11.11.4 | Estilos de MUI |

---

## Arquitectura y Patrones

### Routing
```
/ (Home) → Header + Hero + Carousel + Modules + Sectors + Footer
/modulos/clicka-digital
/modulos/invitaciones
/modulos/acceso
/modulos/analiticas
/modulos/aforos
```

### Paleta de Colores
- **Primary gradient:** #8B5CF6 (violet) → #EC4899 (pink)
- **Accent:** #F59E0B (amber)
- **Background:** #000 (black)
- **Text:** #F9FAFB (off-white)

### Tipografía
- **Montserrat** (400, 600, 700, 900) via Google Fonts

---

## Scripts Disponibles

```bash
npm start      # Inicia el servidor de desarrollo
npm run build  # Genera build de producción en /build
npm test       # Ejecuta tests
```
