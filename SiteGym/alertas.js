document.addEventListener('DOMContentLoaded', function () {
    // Ejemplo de SweetAlert2: Mostrar un mensaje al hacer clic en un botón
    const button = document.querySelector('.btn');
    button.addEventListener('click', function () {
        Swal.fire({
            title: '¡Hola!',
            text: '¡Recuerda que esta página esta en fase de prueba aún!',
            icon: 'success',
            confirmButtonText: '¡Entendido!'
        });
    });
});