// For portfolio filter buttons - example only

document.querySelectorAll('#portfolio .filters button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('#portfolio .filters button.active').classList.remove('active');
    button.classList.add('active');

    const filter = button.textContent.toLowerCase();
    const items = document.querySelectorAll('#portfolio .portfolio-grid .item');

    items.forEach(item => {
      if (filter === 'all' || item.classList.contains(filter)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
