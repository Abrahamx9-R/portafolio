export type Lang = 'es' | 'en';

export const translations: Record<Lang, Record<string, string>> = {
  es: {
    // SEO
    'seo.title': 'Abraham Galindo Ruiz | Portafolio',
    'seo.description': 'Project Manager y Desarrollador Full Stack',

    // Header nav
    'nav.home': 'Inicio',
    'nav.projects': 'Proyectos',
    'nav.about': 'Sobre Mí',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',

    // Hero
    'hero.subtitle': 'Project Manager | Full Stack Developer | Data Analyst | Físico',
    'hero.cta.projects': 'Ver Proyectos',
    'hero.cta.contact': 'Contacto',
    'hero.status': 'DISPONIBLE',

    // About
    'about.title': 'SOBRE MÍ',
    'about.bio': 'Project Manager y Desarrollador Full Stack con enfoque en la optimización de procesos mediante tecnología. Experiencia integral gestionando departamentos de TI: desde infraestructura y DevOps, hasta liderazgo de equipos de desarrollo y estrategias digitales. Combino habilidades técnicas avanzadas (DevOps, Análisis de Datos, Machine Learning) con herramientas de gestión ágil (Jira, ClickUp) para entregar soluciones escalables.',
    'about.skills.title': 'Nivel de Habilidad',
    'about.badge': 'FÍSICO · UNAM',

    // Projects
    'projects.title.1': 'PROYECTOS',
    'projects.title.2': 'DESPLEGADOS',
    'projects.empty': 'NO HAY PROYECTOS INICIALIZADOS.',
    'projects.section': 'SEC.01',

    // Blog
    'blog.title': 'PUBLICACIONES',
    'blog.viewAll': 'Ver Todas →',
    'blog.filter.status': 'Filtrando:',
    'blog.filter.all': 'Todos',
    'blog.filter.clear': 'Limpiar Filtros',
    'blog.search.placeholder': 'Buscar palabras clave...',
    'blog.search.title': 'BUSCAR REGISTROS',
    'blog.sidebar.type': 'TIPO DE TRANSMISIÓN',
    'blog.sidebar.latest': 'ÚLTIMOS_REGISTROS',
    'blog.noResults': 'NO HAY TRANSMISIONES QUE COINCIDAN.',
    'blog.logEntry': 'ENTRADA_LOG',
    'blog.auth': 'AUTOR: ABRAHAM',


    // Contact
    'contact.title.1': 'INICIAR',
    'contact.title.2': 'COMUNICACIÓN',
    'contact.description': '¿Listo para iniciar un nuevo proyecto? Envíame un mensaje y te responderé lo antes posible.',
    'contact.input.name': 'NOMBRE',
    'contact.input.email': 'CORREO ELECTRÓNICO',
    'contact.input.message': 'MENSAJE',
    'contact.submit': 'Enviar Mensaje',

    // Footer
    'footer.copyright': 'ABRAHAM GALINDO RUIZ // © 2026',
  },
  en: {
    // SEO
    'seo.title': 'Abraham Galindo Ruiz | Portfolio',
    'seo.description': 'Project Manager & Full Stack Developer',

    // Header nav
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',

    // Hero
    'hero.subtitle': 'Project Manager | Full Stack Developer | Data Analyst | Physicist',
    'hero.cta.projects': 'View Projects',
    'hero.cta.contact': 'Contact Me',
    'hero.status': 'AVAILABLE',

    // About
    'about.title': 'ABOUT ME',
    'about.bio': 'Project Manager and Full Stack Developer focused on process optimization through technology. Comprehensive experience managing IT departments: from infrastructure and DevOps to development team leadership and digital strategies. I combine advanced technical skills (DevOps, Data Analysis, Machine Learning) with agile management tools (Jira, ClickUp) to deliver scalable solutions.',
    'about.skills.title': 'Skill Proficiency',
    'about.badge': 'PHYSICIST · UNAM',

    // Projects
    'projects.title.1': 'DEPLOYED',
    'projects.title.2': 'PROJECTS',
    'projects.empty': 'NO PROJECTS INITIALIZED.',
    'projects.section': 'SEC.01',

    // Blog
    'blog.title': 'TRANSMISSIONS',
    'blog.viewAll': 'View All Logs →',
    'blog.filter.status': 'Filtering:',
    'blog.filter.all': 'All Types',
    'blog.filter.clear': 'Clear Filters',
    'blog.search.placeholder': 'Search keywords...',
    'blog.search.title': 'SEARCH LOGS',
    'blog.sidebar.type': 'TRANSMISSION TYPE',
    'blog.sidebar.latest': 'LATEST_LOGS',
    'blog.noResults': 'NO TRANSMISSIONS MATCHING QUERY.',
    'blog.logEntry': 'LOG_ENTRY',
    'blog.auth': 'AUTH: ABRAHAM',


    // Contact
    'contact.title.1': 'INITIATE',
    'contact.title.2': 'COMMUNICATION',
    'contact.description': 'Ready to start a new project? Send me a message and I\'ll get back to you as soon as possible.',
    'contact.input.name': 'NAME',
    'contact.input.email': 'EMAIL',
    'contact.input.message': 'MESSAGE',
    'contact.submit': 'Send Message',

    // Footer
    'footer.copyright': 'ABRAHAM GALINDO RUIZ // © 2026',
  },
};

export function t(lang: Lang, key: string): string {
  return translations[lang]?.[key] ?? translations['es']?.[key] ?? key;
}
