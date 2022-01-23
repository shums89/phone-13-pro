const accordeon = () => {
  const cnItems = document.querySelectorAll('.characteristics__item');

  cnItems.forEach(item => {
    const chButton = item.querySelector('.characteristics__title');
    const chContent = item.querySelector('.characteristics__description');

    chButton.addEventListener('click', () => {
      chContent.style.height = chContent.classList.contains('open') ? '' : chContent.scrollHeight + 'px';

      chButton.classList.toggle('active');
      chContent.classList.toggle('open');
    });
  });
};

accordeon();