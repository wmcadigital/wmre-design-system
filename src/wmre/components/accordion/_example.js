const accordionsJS = () => {
  const accordions = document.querySelectorAll('.wmre-accordion');

  accordions.forEach(accordion => {
    const accordionBtn = accordion.querySelector('.wmre-accordion__summary-wrapper');

    const toggleAccordion = () => {
      if (accordion.classList.contains('wmre-is--open')) {
        accordion.classList.remove('wmre-is--open');
        accordionBtn.setAttribute('aria-expanded', false);
      } else {
        accordion.classList.add('wmre-is--open');
        accordionBtn.setAttribute('aria-expanded', true);
      }
    };

    accordionBtn.addEventListener('click', toggleAccordion);
  });
};

export default accordionsJS;
