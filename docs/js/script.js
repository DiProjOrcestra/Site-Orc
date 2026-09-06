
(function () {
  "use strict";

  /* ---------- THEME ---------- */
  var root = document.documentElement;
  var themeBtn = document.getElementById('themeToggle');
  var THEME_KEY = 'docs-theme'; // salvo no navegador, vale para todas as páginas do site

  function setTheme(mode, persist) {
    root.setAttribute('data-theme', mode);
    if (persist) {
      try { localStorage.setItem(THEME_KEY, mode); } catch (e) { /* localStorage indisponível */ }
    }
  }

  // Estado inicial: 1) tema salvo pelo usuário  2) preferência do sistema
  var saved = null;
  try { saved = localStorage.getItem(THEME_KEY); } catch (e) { /* localStorage indisponível */ }
  if (saved === 'dark' || saved === 'light') {
    setTheme(saved, false);
  } else {
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light', false);
  }

  themeBtn.addEventListener('click', function () {
    var current = root.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark', true);
  });

  /* ---------- SIDEBAR (mobile toggle, busca, paleta, link ativo) ----------
     A sidebar é injetada de forma assíncrona (fetch + innerHTML) por um
     script inline no <head> de cada página. Este arquivo é carregado no fim
     do <body> e roda de forma síncrona, ou seja, ele terminava de executar
     ANTES da Promise do fetch resolver — nesse momento #sidebar ainda não
     existia no DOM, então document.getElementById('sidebar') retornava null
     e o clique no hambúrguer quebrava silenciosamente.
     Por isso toda a inicialização que depende da sidebar fica dentro de
     initSidebar(), chamada assim que o conteúdo aparecer dentro de
     #sidebar-container (ou de imediato, se por algum motivo já estiver lá). */
  var pages = [];

  function initSidebar() {
    var sidebar = document.getElementById('sidebar');
    var navToggle = document.getElementById('navToggle');
    if (!sidebar || !navToggle) return;

    navToggle.addEventListener('click', function () {
      var isOpen = sidebar.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    document.addEventListener('click', function (e) {
      if (sidebar.classList.contains('open') &&
        !sidebar.contains(e.target) && !navToggle.contains(e.target)) {
        sidebar.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });

    /* ---------- SIDEBAR SEARCH (filtro simples) ---------- */
    var searchInput = document.getElementById('searchInput');
    var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-link'));

    function filterNav(term) {
      var t = term.trim().toLowerCase();
      navLinks.forEach(function (link) {
        var match = link.textContent.toLowerCase().indexOf(t) !== -1;
        link.hidden = t.length > 0 && !match;
      });
      document.querySelectorAll('.nav-group').forEach(function (group) {
        var visible = group.querySelectorAll('.nav-link:not([hidden])').length;
        group.style.display = visible === 0 ? 'none' : '';
      });
    }
    if (searchInput) {
      searchInput.addEventListener('input', function () { filterNav(this.value); });
    }

    /* pages usada pela COMMAND PALETTE, declarada no escopo externo */
    pages = navLinks.map(function (l) {
      return { label: l.textContent.trim(), href: l.getAttribute('href') };
    });

    /* ---------- SIDEBAR: marca a página atual (não muda com o scroll) ---------- */
    var currentPage = document.body.getAttribute('data-page');
    navLinks.forEach(function (l) {
      l.classList.toggle('active', l.getAttribute('data-page') === currentPage);
    });
  }

  var sidebarContainer = document.getElementById('sidebar-container');
  if (document.getElementById('sidebar')) {
    // já estava no DOM (ex: sidebar embutida direto na página, sem fetch)
    initSidebar();
  } else if (sidebarContainer && 'MutationObserver' in window) {
    var sidebarObserver = new MutationObserver(function () {
      if (document.getElementById('sidebar')) {
        sidebarObserver.disconnect();
        initSidebar();
      }
    });
    sidebarObserver.observe(sidebarContainer, { childList: true });
  }

  /* ---------- COMMAND PALETTE (Ctrl/Cmd + K) ---------- */
  var overlay = document.getElementById('paletteOverlay');
  var paletteInput = document.getElementById('paletteInput');
  var paletteResults = document.getElementById('paletteResults');

  function renderPalette(term) {
    var t = term.trim().toLowerCase();
    var filtered = t ? pages.filter(function (p) { return p.label.toLowerCase().indexOf(t) !== -1; }) : pages;
    paletteResults.innerHTML = '';
    if (filtered.length === 0) {
      paletteResults.innerHTML = '<div class="palette-empty">Nenhuma página encontrada.</div>';
      return;
    }
    filtered.forEach(function (p, i) {
      var a = document.createElement('a');
      a.href = p.href;
      a.className = 'palette-item' + (i === 0 ? ' sel' : '');
      a.textContent = p.label;
      a.addEventListener('click', closePalette);
      paletteResults.appendChild(a);
    });
  }
  function openPalette() {
    overlay.classList.add('open');
    paletteInput.value = '';
    renderPalette('');
    setTimeout(function () { paletteInput.focus(); }, 10);
  }
  function closePalette() {
    overlay.classList.remove('open');
  }
  paletteInput.addEventListener('input', function () { renderPalette(this.value); });
  overlay.addEventListener('click', function (e) { if (e.target === overlay) closePalette(); });

  document.addEventListener('keydown', function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      overlay.classList.contains('open') ? closePalette() : openPalette();
    }
    if (e.key === 'Escape') closePalette();
  });

  /* ---------- COPY BUTTONS ---------- */
  var toast = document.getElementById('toast');
  var toastMsg = document.getElementById('toastMsg');
  var toastTimer;
  function showToast(msg) {
    toastMsg.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove('show'); }, 1800);
  }
  document.querySelectorAll('.copy-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var text = btn.getAttribute('data-copy') || '';
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () {
          showToast('Copiado para a área de transferência!');
        }).catch(function () { showToast('Não foi possível copiar.'); });
      } else {
        showToast('Cópia não suportada neste navegador.');
      }
    });
  });

  /* ---------- TOC AUTOMÁTICO (tópicos da PÁGINA ATUAL, à direita) ---------- */
  var prose = document.querySelector('.prose');
  var tocList = document.getElementById('tocList');
  var tocBox = document.querySelector('.toc');
  var headings = prose ? Array.prototype.slice.call(prose.querySelectorAll('h2, h3')) : [];
  var tocLinks = [];

  if (headings.length === 0 && tocBox) {
    tocBox.style.display = 'none';
  }

  headings.forEach(function (h) {
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.href = '#' + h.id;
    a.textContent = h.textContent.replace('#', '').trim();
    a.className = h.tagName.toLowerCase();
    li.appendChild(a);
    tocList.appendChild(li);
    tocLinks.push({ id: h.id, el: a });
  });

  /* destaque do item ativo no sumário (TOC), conforme o scroll dentro da página */
  if ('IntersectionObserver' in window && headings.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.id;
          tocLinks.forEach(function (t) { t.el.classList.toggle('active', t.id === id); });
        }
      });
    }, { rootMargin: '-20% 0px -70% 0px', threshold: 0 });
    headings.forEach(function (h) { observer.observe(h); });
  }

})();
