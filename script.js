document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Producto añadido al carrito');
        });
    });

    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Formulario enviado');
    });
});
