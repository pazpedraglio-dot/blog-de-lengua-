function mostrarSeccion(id) {
    const secciones = document.querySelectorAll('.card');

    secciones.forEach(sec => {
        sec.style.display = "none";
    });

    const activa = document.getElementById(id);
    activa.style.display = "block";

    activa.style.opacity = 0;
    setTimeout(() => {
        activa.style.opacity = 1;
    }, 100);
}
