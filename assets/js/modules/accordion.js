function initAccordion() {
  const items = document.querySelectorAll('.accordion-item');
  if (!items.length) return;

  items.forEach((item) => {
    const header = item.querySelector('.accordion-header');
    const panel = item.querySelector('.accordion-panel');
    const inner = item.querySelector('.accordion-panel-inner');

    header.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      items.forEach((other) => {
        other.classList.remove('is-open');
        other.querySelector('.accordion-panel').style.maxHeight = null;
        other.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('is-open');
        panel.style.maxHeight = `${inner.scrollHeight + 24}px`;
        header.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Open the first FAQ item by default
  const first = items[0];
  if (first) {
    first.classList.add('is-open');
    const panel = first.querySelector('.accordion-panel');
    const inner = first.querySelector('.accordion-panel-inner');
    panel.style.maxHeight = `${inner.scrollHeight + 24}px`;
  }
}
