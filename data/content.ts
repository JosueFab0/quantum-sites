// ── Single source of truth for all site content ──────────────────────────────
// Edit here to update text, prices, or items without touching components.

export const BENEFITS = [
  {
    number: "01",
    title: "Diseño moderno",
    text: "Sitios limpios, elegantes y alineados con la identidad de cada negocio.",
  },
  {
    number: "02",
    title: "Optimizado para celular",
    text: "La mayoría de clientes visita desde el teléfono. Diseñamos pensando en eso primero.",
  },
  {
    number: "03",
    title: "Contacto directo",
    text: "Integramos WhatsApp, correo e Instagram para que tus clientes puedan escribirte fácil.",
  },
  {
    number: "04",
    title: "Carga rápida",
    text: "Una web lenta pierde clientes. Construimos páginas ligeras y eficientes.",
  },
];

export const PROCESS_STEPS = [
  { number: "01", title: "Conversamos", text: "Entendemos tu negocio, objetivos y estilo visual." },
  { number: "02", title: "Diseñamos", text: "Creamos una propuesta clara, moderna y profesional." },
  { number: "03", title: "Desarrollamos", text: "Construimos una web rápida y adaptable a celular." },
  { number: "04", title: "Publicamos", text: "Dejamos tu sitio listo para compartir con clientes." },
];

export const SERVICES = [
  {
    number: "01",
    title: "Landing pages",
    text: "Páginas enfocadas en presentar tu negocio y llevar clientes directamente a WhatsApp. Diseño limpio, mensaje claro, conversión alta.",
    tags: ["1 página", "Contacto integrado", "Mobile-first"],
  },
  {
    number: "02",
    title: "Sitios corporativos",
    text: "Estructuras completas para empresas que necesitan verse serias. Múltiples secciones, identidad visual coherente y fácil de navegar.",
    tags: ["Multi-sección", "Identidad de marca", "SEO básico"],
  },
  {
    number: "03",
    title: "Rediseño visual",
    text: "Convertimos una web vieja en una experiencia moderna y confiable. Mismo contenido, nueva vida — sin perder lo que ya funciona.",
    tags: ["Análisis previo", "Transición limpia", "Resultado inmediato"],
  },
];

export const PRICING_PLANS = [
  {
    title: "Landing Page Simple",
    price: "$150 – $300",
    description: "Una página, un objetivo. Ideal para negocios que empiezan.",
    highlights: ["1 sección de inicio", "Formulario o botón de contacto", "Entrega en ~1 semana"],
    featured: false,
  },
  {
    title: "Negocio Pequeño",
    price: "$300 – $600",
    description: "Para negocios locales que necesitan mostrarse bien en Google.",
    highlights: ["Inicio, servicios, contacto y mapa", "Responsive y rápido", "Dominio y hosting orientado"],
    featured: false,
  },
  {
    title: "Web Corporativa",
    price: "$600 – $1,500",
    description: "Diseño personalizado para empresas que quieren verse serias.",
    highlights: ["5 a 10 páginas", "Identidad visual coherente", "SEO básico incluido"],
    featured: true,
  },
  {
    title: "Tienda Online Básica",
    price: "$800 – $2,500",
    description: "Productos, carrito y pagos integrados con diseño limpio.",
    highlights: ["Catálogo de productos", "Carrito y pagos", "Panel de administración"],
    featured: false,
  },
  {
    title: "Sistema Web Personalizado",
    price: "$2,500+",
    description: "Soluciones a medida: login, bases de datos y paneles.",
    highlights: ["Autenticación de usuarios", "Base de datos personalizada", "Soporte continuo"],
    featured: false,
  },
];

export const FAQ_ITEMS = [
  {
    q: "¿Cuánto tarda una página?",
    a: "Depende del alcance, pero una landing page puede estar lista en 1 a 2 semanas. Un sitio corporativo puede tomar entre 3 y 5 semanas. Te damos tiempos claros desde el primer contacto.",
  },
  {
    q: "¿Incluye dominio y hosting?",
    a: "Podemos ayudarte a configurarlo, pero se cotiza aparte según el caso. Te recomendamos opciones confiables y te explicamos exactamente qué necesitas.",
  },
  {
    q: "¿Puedo pedir cambios?",
    a: "Sí. Definimos rondas de revisión desde el inicio para evitar confusión y garantizar que el resultado te satisfaga. Nada se entrega sin tu aprobación.",
  },
  {
    q: "¿Necesito saber programación para mantener el sitio?",
    a: "Para la mayoría de nuestros proyectos, no. Si quieres un sistema con panel de administración para editar tu contenido fácilmente, lo incluimos en la cotización.",
  },
  {
    q: "¿Trabajan con negocios fuera de Costa Rica?",
    a: "Sí. Trabajamos de forma remota con clientes en toda América Latina. El proceso es completamente digital.",
  },
];

export const PORTFOLIO_PROJECTS = [
  {
    title: "Restaurante Premium",
    category: "Landing Page",
    description: "Diseño cálido y sofisticado que invita a reservar mesa.",
    image: "/Portfolio/restaurant.svg",
    color: "bg-amber-900",
  },
  {
    title: "Clínica Dental",
    category: "Sitio Corporativo",
    description: "Confianza y limpieza visual para un sector donde importa la credibilidad.",
    image: "/Portfolio/dental.svg",
    color: "bg-sky-900",
  },
  {
    title: "Despacho Legal",
    category: "Sitio Corporativo",
    description: "Sobriedad y autoridad. Un sitio que comunica experiencia y solidez.",
    image: "/Portfolio/lawfirm.svg",
    color: "bg-slate-800",
  },
];
