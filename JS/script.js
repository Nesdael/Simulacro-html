    const boton = document.getElementById('hamburguesa');
    const menu = document.getElementById('nav-menu');

    boton.addEventListener('click', () => {
        boton.classList.toggle('activo');
        menu.classList.toggle('activo');
    });

    // Cierra el menu al hacer click en un link
    document.querySelectorAll('#nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            boton.classList.remove('activo');
            menu.classList.remove('activo');
        });
    });
