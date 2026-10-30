function initNav() {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  const scrim = document.querySelector('.nav-scrim');
  const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');

  const closeMenu = () => {
    toggle?.classList.remove('is-active');
    nav?.classList.remove('is-open');
    scrim?.classList.remove('is-visible');
    document.body.style.overflow = '';
  };

  const openMenu = () => {
    toggle?.classList.add('is-active');
    nav?.classList.add('is-open');
    scrim?.classList.add('is-visible');
    document.body.style.overflow = 'hidden';
  };

  toggle?.addEventListener('click', () => {
    const isOpen = nav?.classList.contains('is-open');
    isOpen ? closeMenu() : openMenu();
  });

  scrim?.addEventListener('click', closeMenu);
  navLinks.forEach((link) => link.addEventListener('click', closeMenu));

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  const onScroll = () => {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 12);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const sections = Array.from(document.querySelectorAll('main section[id]'));
  if (sections.length && navLinks.length) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
          });
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((section) => spy.observe(section));
  }
}
