// ---- year ----
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ---- mobile nav toggle ----
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ---- scroll reveal ----
const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('in'));
}

// ---- collapsible traverse stops (older roles) ----
document.querySelectorAll('[data-toggle]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const stop = btn.closest('.stop');
    const collapsed = stop.classList.toggle('collapsed');
    btn.firstChild.textContent = collapsed ? 'See details ' : 'Hide details ';
  });
});

// ---- documentation popup ----
const IMG = 'images/';
const DOCS = {
  awards: {
    title: 'Awards & Recognition',
    items: [
      { f: 'award-best-branch-manager-2025', title: 'Best Branch Manager 2025, awarded by PT Supra Primatama Nusantara', tag: 'Award 2025' },
      { f: 'award-most-inspiring-2026', title: 'Most Inspiring People 2026, ranked first', tag: 'Award 2026' }
    ]
  },
  sales: {
    title: 'Sales & Marketing',
    items: [
      { f: 'sales-b2b-bmkg', title: 'BMKG', tag: 'B2B' },
      { f: 'sales-b2b-bukit-asam', title: 'Bukit Asam', tag: 'B2B' },
      { f: 'sales-b2b-gretting-finance', title: 'Gretting Finance Company', tag: 'B2B' },
      { f: 'sales-b2b-indomaret', title: 'Indomaret', tag: 'B2B' },
      { f: 'sales-b2b-sinar-laut', title: 'Sinar Laut', tag: 'B2B' },
      { f: 'sales-b2b-alfaria-trijaya', title: 'Sumber Alfaria Trijaya', tag: 'B2B' },
      { f: 'sales-b2g-balai-karantina', title: 'Balai Karantina Perikanan', tag: 'B2G' },
      { f: 'sales-b2g-kejaksaan-agung', title: 'Kejaksaan Agung', tag: 'B2G' },
      { f: 'sales-open-booth-mall', title: 'Open booth at the mall', tag: 'Field activation' },
      { f: 'sales-retention', title: 'Customer retention visit', tag: 'Retention' },
      { f: 'sales-mini-soccer', title: 'Mini soccer event support', tag: 'Community' }
    ]
  },
  people: {
    title: 'People Management',
    items: [
      { f: 'people-morning-briefing', title: 'Morning briefing', tag: 'Daily briefing' },
      { f: 'people-routine-briefing', title: 'Routine morning briefing', tag: 'Daily briefing' }
    ]
  },
  expansion: {
    title: 'Stakeholders & Expansion',
    items: [
      { f: 'expansion-property-acquisition', title: 'Property acquisition', tag: 'Expansion' },
      { f: 'expansion-conflict-resolution', title: 'Conflict resolution', tag: 'Stakeholders' }
    ]
  },
  'office-fleet': {
    title: 'Oct 2026: Office & Fleet',
    items: [
      { f: 'office-before', title: 'Office before renovation', tag: 'Office' },
      { f: 'office-renovation', title: 'Renovation in progress', tag: 'Office' },
      { f: 'office-after', title: 'Office after renovation', tag: 'Office' },
      { f: 'fleet-xenia', title: 'Xenia handover for the branch manager', tag: 'Fleet' },
      { f: 'fleet-motorcycle', title: 'New motorcycle for the technical team', tag: 'Fleet' }
    ]
  },
  'area-supervisor': {
    title: 'Area Supervisor, PT. Astra International',
    items: [
      { f: 'area-dealer-meeting', title: 'Dealer area meeting', tag: 'Dealer meeting' },
      { f: 'area-dealer-supervision-1', title: 'Dealer supervision', tag: 'Supervision' },
      { f: 'area-dealer-supervision-2', title: 'Dealer supervision visit', tag: 'Supervision' }
    ]
  },
  'account-head': {
    title: 'Account Head, PT. Serasi Autoraya (TRAC Astra)',
    items: [
      { f: 'ah-best-response-vendor', title: 'Best Response Vendor', tag: 'Achievement' },
      { f: 'ah-handover-pln', title: 'Handover of 36 rental vehicles to PT PLN (Persero)', tag: 'Vehicle handover' },
      { f: 'ah-handover-bawaslu', title: 'Handover of 40 rental vehicles to Bawaslu Provinsi Bengkulu', tag: 'Vehicle handover' },
      { f: 'ah-handover-pemprov', title: 'Handover of 90 rental vehicles to Pemerintah Provinsi Bengkulu', tag: 'Vehicle handover' }
    ]
  },
  geodetic: {
    title: 'Geodetic Engineer, PT. Sarana Geospasial Terpadu',
    items: [
      { f: 'geo-asset-monitoring', title: 'Asset monitoring, KKKS SKK Migas', tag: 'Field monitoring' },
      { f: 'geo-asset-monitoring-fixed-wing', title: 'Asset monitoring, fixed-wing operations', tag: 'Field monitoring' }
    ]
  },
  itera: {
    title: 'Institut Teknologi Sumatera (ITERA)',
    items: [
      { f: 'itera-sharing-kementerian', title: 'Sharing session with the Ministry of Agrarian Affairs and Spatial Planning', tag: 'Sharing session' },
      { f: 'itera-sharing-session', title: 'Sharing session', tag: 'Sharing session' },
      { f: 'itera-workshop', title: 'Village map and zone planning workshop', tag: 'Workshop' }
    ]
  }
};

// every Biznet photo in one set, for the experience card
DOCS.biznet = {
  title: 'Branch Manager, Biznet Lampung',
  items: [].concat(DOCS.awards.items, DOCS.sales.items, DOCS.people.items, DOCS.expansion.items, DOCS['office-fleet'].items)
};

(function () {
  const modal = document.getElementById('docModal');
  if (!modal) return;
  const $ = (id) => document.getElementById(id);
  const el = {
    title: $('docTitle'), img: $('docImg'), stage: $('docStage'),
    prev: $('docPrev'), next: $('docNext'), close: $('docClose'),
    tag: $('docTag'), caption: $('docCaption'), pos: $('docPos'), thumbs: $('docThumbs')
  };
  let group = null, index = 0, lastFocus = null;

  // show photo counts on the buttons, hide any button without data
  document.querySelectorAll('[data-doc]').forEach((btn) => {
    const g = DOCS[btn.dataset.doc];
    if (!g) { btn.hidden = true; return; }
    const count = btn.querySelector('[data-doc-count]');
    if (count) {
      count.textContent = g.items.length;
      btn.setAttribute('aria-label', 'View documentation: ' + g.title + ' (' + g.items.length + ' photos)');
    }
    btn.addEventListener('click', () => open(btn.dataset.doc, btn, parseInt(btn.dataset.start || '0', 10)));
  });

  function show(i) {
    const n = group.items.length;
    index = (i + n) % n;
    const it = group.items[index];
    el.img.src = IMG + it.f + '.jpg';
    el.img.alt = it.title + ' (' + it.tag + ')';
    el.tag.textContent = it.tag;
    el.caption.textContent = it.title;
    el.pos.textContent = (index + 1) + ' / ' + n;
    el.thumbs.querySelectorAll('.doc-thumb').forEach((t, k) => {
      if (k === index) {
        t.setAttribute('aria-current', 'true');
        const c = el.thumbs;
        c.scrollLeft = t.offsetLeft - (c.clientWidth - t.offsetWidth) / 2;
      } else t.removeAttribute('aria-current');
    });
    // warm the cache for neighbours
    [index + 1, index - 1].forEach((k) => { new Image().src = IMG + group.items[(k + n) % n].f + '.jpg'; });
  }

  function open(key, trigger, start) {
    group = DOCS[key];
    if (!group) return;
    lastFocus = trigger || document.activeElement;
    el.title.textContent = group.title;
    const multi = group.items.length > 1;
    el.prev.hidden = el.next.hidden = !multi;
    el.thumbs.innerHTML = '';
    if (multi) {
      group.items.forEach((it, k) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'doc-thumb';
        b.setAttribute('aria-label', 'Photo ' + (k + 1) + ': ' + it.title);
        const im = document.createElement('img');
        im.src = IMG + 'thumbs/' + it.f + '.jpg';
        im.alt = '';
        im.loading = 'lazy';
        b.appendChild(im);
        b.addEventListener('click', () => show(k));
        el.thumbs.appendChild(b);
      });
    }
    modal.hidden = false;
    document.body.classList.add('modal-open');
    show(start || 0);
    el.close.focus();
  }

  function close() {
    modal.hidden = true;
    document.body.classList.remove('modal-open');
    el.img.removeAttribute('src');
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  el.prev.addEventListener('click', () => show(index - 1));
  el.next.addEventListener('click', () => show(index + 1));
  el.close.addEventListener('click', close);
  modal.querySelector('[data-doc-close]').addEventListener('click', close);

  document.addEventListener('keydown', (e) => {
    if (modal.hidden) return;
    if (e.key === 'Escape') { e.preventDefault(); close(); }
    else if (e.key === 'ArrowLeft' && group.items.length > 1) show(index - 1);
    else if (e.key === 'ArrowRight' && group.items.length > 1) show(index + 1);
    else if (e.key === 'Tab') {
      // keep focus inside the dialog
      const f = [...modal.querySelectorAll('button')].filter((b) => !b.hidden && b.offsetParent !== null);
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  // swipe on touch screens
  let x0 = null;
  el.stage.addEventListener('touchstart', (e) => { x0 = e.touches[0].clientX; }, { passive: true });
  el.stage.addEventListener('touchend', (e) => {
    if (x0 === null || group.items.length < 2) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 50) show(index + (dx < 0 ? 1 : -1));
    x0 = null;
  });
})();
