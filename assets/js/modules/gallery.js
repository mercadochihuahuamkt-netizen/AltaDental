function initGallery() {
  const items = document.querySelectorAll('.gallery-item');
  const lightbox = document.querySelector('.lightbox');
  if (!items.length || !lightbox) return;

  const img = lightbox.querySelector('img');
  const closeBtn = lightbox.querySelector('.lightbox-close');

  const open = (src, alt) => {
    img.src = src;
    img.alt = alt;
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  items.forEach((item) => {
    item.addEventListener('click', () => {
      const src = item.dataset.full || item.querySelector('img').src;
      const alt = item.querySelector('img').alt;
      open(src, alt);
    });
  });

  closeBtn?.addEventListener('click', close);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) close();
  });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
}
