function toggleMenu() {
    const menu = document.getElementById('navbar-default');
    menu.classList.toggle('hidden');

    // Actualiza el atributo aria-expanded
    const button = document.getElementById('menu-button');
    const isOpen = menu.classList.contains('hidden');
    button.setAttribute('aria-expanded', !isOpen);
}