(function () {
  'use strict';

  const STORAGE_KEYS = { theme: 'portfolio-theme', lang: 'portfolio-lang' };
  const root = document.documentElement;

  function readStorage(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }
  function writeStorage(key, value) {
    try { localStorage.setItem(key, value); } catch (e) {}
  }

  root.dataset.theme = readStorage(STORAGE_KEYS.theme) === 'light' ? 'light' : 'dark';

  const translations = {
    pt: {
      pageTitle: 'Gianluca Antoniacci | Portfólio',
      metaDesc: 'Portfólio de Gianluca Antoniacci, estudante de Engenharia de Software.',
      bgWord: 'Portfólio',
      navLabel: 'Navegação principal',
      homeLabel: 'Ir para o início',
      menuOpen: 'Abrir menu',
      menuClose: 'Fechar menu',
      navHome: 'Início',
      navSkills: 'Habilidades',
      navProjects: 'Projetos',
      navContact: 'Contato',
      hello: 'Olá, eu sou',
      role: 'Estudante de Engenharia de Software',
      langLabel: 'Idioma',
      themeLabel: 'Tema escuro',
      monogram: 'Eng. de<br />Software',
      heroWord: 'Port<br />fólio',
      skillsTitle: 'Habilidades de Software',
      skillCpp: 'C++ para Arduino/IoT',
      sideCard: 'Linguagens e<br />frameworks',
      techTitle: 'Tecnologias que utilizo :',
      qrCaption: 'Enviar e-mail',
      qrAlt: 'QR Code para enviar e-mail',
      projectsTitle: 'Meus Projetos :',
      viewProject: 'Ver projeto',
      p1Title: 'Grão Nobre',
      p1Desc: 'Landing page de uma marca fictícia de cafés especiais, feita com Bootstrap 5: carrossel de depoimentos, FAQ em acordeão e pedido em modal.',
      p1Alt: 'Página inicial do projeto Grão Nobre',
      p1Link: 'Ver o projeto Grão Nobre (abre em nova aba)',
      p2Title: 'NovaCore',
      p2Desc: 'Site institucional de uma empresa de tecnologia, feito com Tailwind CSS: serviços, sobre nós, depoimentos e formulário de contato.',
      p2Alt: 'Página inicial do projeto NovaCore',
      p2Link: 'Ver o projeto NovaCore (abre em nova aba)',
      p3Title: 'Fio & Prensa',
      p3Desc: 'Site de um ateliê de encadernação artesanal, feito com Tailwind CSS: etapas do ofício, peças recentes e informações para visita.',
      p3Alt: 'Página inicial do projeto Fio & Prensa',
      p3Link: 'Ver o projeto Fio & Prensa (abre em nova aba)',
      contactTitle: 'Contato :',
      githubLabel: 'GitHub de Gianluca Antoniacci',
      linkedinLabel: 'LinkedIn de Gianluca Antoniacci',
      emailLabel: 'Enviar e-mail para Gianluca Antoniacci',
      email: 'E-mail'
    },

    en: {
      pageTitle: 'Gianluca Antoniacci | Portfolio',
      metaDesc: 'Portfolio of Gianluca Antoniacci, Software Engineering student.',
      bgWord: 'Portfolio',
      navLabel: 'Main navigation',
      homeLabel: 'Go to top',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
      navHome: 'Home',
      navSkills: 'Skills',
      navProjects: 'Projects',
      navContact: 'Contact',
      hello: "Hi, I'm",
      role: 'Software Engineering Student',
      langLabel: 'Language',
      themeLabel: 'Dark theme',
      monogram: 'Software<br />Eng.',
      heroWord: 'Port<br />folio',
      skillsTitle: 'Software Skills',
      skillCpp: 'C++ for Arduino/IoT',
      sideCard: 'Languages and<br />frameworks',
      techTitle: 'Technologies I use :',
      qrCaption: 'Send email',
      qrAlt: 'QR code to send an email',
      projectsTitle: 'My Projects :',
      viewProject: 'View project',
      p1Title: 'Grão Nobre',
      p1Desc: 'Landing page for a fictional specialty coffee brand, built with Bootstrap 5: testimonial carousel, accordion FAQ and an order modal.',
      p1Alt: 'Home page of the Grão Nobre project',
      p1Link: 'View the Grão Nobre project (opens in a new tab)',
      p2Title: 'NovaCore',
      p2Desc: 'Corporate website for a tech company, built with Tailwind CSS: services, about us, testimonials and a contact form.',
      p2Alt: 'Home page of the NovaCore project',
      p2Link: 'View the NovaCore project (opens in a new tab)',
      p3Title: 'Fio & Prensa',
      p3Desc: 'Website for a handmade bookbinding studio, built with Tailwind CSS: craft process, recent pieces and visit information.',
      p3Alt: 'Home page of the Fio & Prensa project',
      p3Link: 'View the Fio & Prensa project (opens in a new tab)',
      contactTitle: 'Contact :',
      githubLabel: 'Gianluca Antoniacci on GitHub',
      linkedinLabel: 'Gianluca Antoniacci on LinkedIn',
      emailLabel: 'Send an email to Gianluca Antoniacci',
      email: 'Email'
    },

    es: {
      pageTitle: 'Gianluca Antoniacci | Portafolio',
      metaDesc: 'Portafolio de Gianluca Antoniacci, estudiante de Ingeniería de Software.',
      bgWord: 'Portafolio',
      navLabel: 'Navegación principal',
      homeLabel: 'Ir al inicio',
      menuOpen: 'Abrir menú',
      menuClose: 'Cerrar menú',
      navHome: 'Inicio',
      navSkills: 'Habilidades',
      navProjects: 'Proyectos',
      navContact: 'Contacto',
      hello: 'Hola, soy',
      role: 'Estudiante de Ingeniería de Software',
      langLabel: 'Idioma',
      themeLabel: 'Tema oscuro',
      monogram: 'Ing. de<br />Software',
      heroWord: 'Porta<br />folio',
      skillsTitle: 'Habilidades de Software',
      skillCpp: 'C++ para Arduino/IoT',
      sideCard: 'Lenguajes y<br />frameworks',
      techTitle: 'Tecnologías que utilizo :',
      qrCaption: 'Enviar correo',
      qrAlt: 'Código QR para enviar un correo',
      projectsTitle: 'Mis Proyectos :',
      viewProject: 'Ver proyecto',
      p1Title: 'Grão Nobre',
      p1Desc: 'Landing page de una marca ficticia de cafés especiales, hecha con Bootstrap 5: carrusel de testimonios, FAQ en acordeón y pedido en modal.',
      p1Alt: 'Página de inicio del proyecto Grão Nobre',
      p1Link: 'Ver el proyecto Grão Nobre (se abre en una pestaña nueva)',
      p2Title: 'NovaCore',
      p2Desc: 'Sitio institucional de una empresa de tecnología, hecho con Tailwind CSS: servicios, sobre nosotros, testimonios y formulario de contacto.',
      p2Alt: 'Página de inicio del proyecto NovaCore',
      p2Link: 'Ver el proyecto NovaCore (se abre en una pestaña nueva)',
      p3Title: 'Fio & Prensa',
      p3Desc: 'Sitio de un taller de encuadernación artesanal, hecho con Tailwind CSS: etapas del oficio, piezas recientes e información de visita.',
      p3Alt: 'Página de inicio del proyecto Fio & Prensa',
      p3Link: 'Ver el proyecto Fio & Prensa (se abre en una pestaña nueva)',
      contactTitle: 'Contacto :',
      githubLabel: 'GitHub de Gianluca Antoniacci',
      linkedinLabel: 'LinkedIn de Gianluca Antoniacci',
      emailLabel: 'Enviar un correo a Gianluca Antoniacci',
      email: 'Correo'
    }
  };

  const HTML_LANG = { pt: 'pt-BR', en: 'en', es: 'es' };
  let currentLang = 'pt';

  function t(key) {
    const dict = translations[currentLang] || translations.pt;
    return key in dict ? dict[key] : translations.pt[key];
  }

  function detectLang() {
    const saved = readStorage(STORAGE_KEYS.lang);
    if (saved && translations[saved]) return saved;
    const browser = (navigator.language || 'pt').slice(0, 2).toLowerCase();
    return translations[browser] ? browser : 'pt';
  }

  document.addEventListener('DOMContentLoaded', function () {
    const menu = setupMenu();
    setupActiveNav();
    setupTheme();
    setupLanguage(menu);
  });

  function applyLanguage(lang, menu) {
    currentLang = translations[lang] ? lang : 'pt';
    root.lang = HTML_LANG[currentLang];
    document.title = t('pageTitle');

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.dataset.i18n);
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      el.innerHTML = t(el.dataset.i18nHtml);
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.dataset.i18nAttr.split(';').forEach(function (pair) {
        const parts = pair.split(':');
        if (parts.length === 2) el.setAttribute(parts[0].trim(), t(parts[1].trim()));
      });
    });

    document.querySelectorAll('[data-lang]').forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.dataset.lang === currentLang));
    });

    if (menu) menu.refreshLabel();
  }

  function setupLanguage(menu) {
    applyLanguage(detectLang(), menu);

    document.querySelectorAll('[data-lang]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLanguage(btn.dataset.lang, menu);
        writeStorage(STORAGE_KEYS.lang, currentLang);
      });
    });
  }

  function setupTheme() {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    function sync() {
      toggle.setAttribute('aria-checked', String(root.dataset.theme === 'dark'));
    }

    toggle.addEventListener('click', function () {
      root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      writeStorage(STORAGE_KEYS.theme, root.dataset.theme);
      sync();
    });

    sync();
  }

  function setupMenu() {
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu-mobile');
    const icon = document.getElementById('menu-icon');
    if (!btn || !menu || !icon) return null;

    function isOpen() { return btn.getAttribute('aria-expanded') === 'true'; }

    function refreshLabel() {
      btn.setAttribute('aria-label', isOpen() ? t('menuClose') : t('menuOpen'));
    }

    function setMenu(open) {
      menu.classList.toggle('hidden', !open);
      menu.classList.toggle('grid', open);
      btn.setAttribute('aria-expanded', String(open));
      icon.setAttribute('d', open ? 'M6 6l12 12M18 6 6 18' : 'M4 7h16M4 12h16M4 17h10');
      refreshLabel();
    }

    btn.addEventListener('click', function () { setMenu(!isOpen()); });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { setMenu(false); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isOpen()) {
        setMenu(false);
        btn.focus();
      }
    });

    return { refreshLabel: refreshLabel };
  }

  function setupActiveNav() {
    const links = document.querySelectorAll('[data-nav]');

    function setActive(id) {
      links.forEach(function (a) {
        if (a.getAttribute('href') === '#' + id) a.setAttribute('aria-current', 'true');
        else a.removeAttribute('aria-current');
      });
    }

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      }, { rootMargin: '-45% 0px -50% 0px' });

      ['inicio', 'habilidades', 'projetos', 'contato'].forEach(function (id) {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    }

    window.addEventListener('scroll', function () {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        setActive('contato');
      }
    }, { passive: true });
  }
})();
