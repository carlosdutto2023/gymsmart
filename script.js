document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menuIcon');
    const sidebar = document.getElementById('sidebar');

    menuIcon.addEventListener('mouseenter', function() {
        sidebar.style.width = '250px'; // Ancho del menú al pasar el ratón
    });

    // Opcional: Para cerrar el menú cuando el ratón sale del sidebar y del icono
    document.addEventListener('mouseleave', function(event) {
        if (!event.relatedTarget || (!sidebar.contains(event.relatedTarget) && !menuIcon.contains(event.relatedTarget))) {
            sidebar.style.width = '0';
        }
    });

    // Mejorado: Cierra el sidebar solo si el ratón sale del menu-container completo
    const menuContainer = document.querySelector('.menu-container');
    menuContainer.addEventListener('mouseleave', function() {
        sidebar.style.width = '0';
    });
});