function isInViewport(el, offset = 60) {
  const rect = el.getBoundingClientRect();
  const vh = window.innerHeight || document.documentElement.clientHeight;
  return rect.top < vh - offset && rect.bottom > 0;
}

function initScrollAnimations() {
  let pending = Array.from(document.querySelectorAll('.reveal'));
  if (!pending.length) return;

  pending.forEach((el, i) => el.style.setProperty('--stagger-index', i % 6));

  const reveal = (el) => el.classList.add('in-view');

  // A direct scroll/resize check (rather than relying solely on
  // IntersectionObserver) keeps this working even when the browser
  // throttles observer callbacks on an occluded/background tab.
  let ticking = false;
  const check = () => {
    ticking = false;
    pending = pending.filter((el) => {
      if (isInViewport(el)) {
        reveal(el);
        return false;
      }
      return true;
    });
    if (!pending.length) {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    }
  };
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(check);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') check();
  });

  check();
}
