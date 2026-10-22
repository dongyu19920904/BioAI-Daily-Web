document.addEventListener('DOMContentLoaded', () => {
  // Keep the current issue's month open, not every historical month.
  document.querySelectorAll('.bio-reader .hextra-sidebar-container li.open').forEach(item => {
    const link = item.querySelector(':scope > a');
    if (!link || !/\d{4}-\d{2}\/$/.test(new URL(link.href).pathname)) return;
    if (!item.querySelector('.hextra-sidebar-active-item')) item.classList.remove('open');
  });

  document.querySelectorAll('.bio-reader-more').forEach(menu => {
    menu.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        menu.open = false;
        menu.querySelector('summary').focus();
      }
    });
    document.addEventListener('click', event => {
      if (!menu.contains(event.target)) menu.open = false;
    });
  });
});
