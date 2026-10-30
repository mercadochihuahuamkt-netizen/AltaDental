// Scripts clásicos (sin import/export) para que el sitio funcione también abriendo index.html
// directamente desde el disco. Los módulos se cargan antes con `defer` desde index.html.
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initScrollAnimations();
  initAccordion();
  initGallery();
  initAppointmentForm();
  initBackToTop();

  document.body.classList.add('is-ready');
});
