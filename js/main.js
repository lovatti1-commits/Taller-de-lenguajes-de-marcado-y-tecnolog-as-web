const form = document.getElementById('formularioContacto');
const mensaje = document.getElementById('mensaje');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensajeTexto = document.getElementById("mensajeTexto").value.trim();

    if (!nombre || !email || !mensajeTexto) {
        mensaje.textContent = "Por favor, completá todos los campos";
        mensaje.className = "error";
        return;
    } else {
        mensaje.textContent = "Gracias por tu mensaje, en breve estaremos en contacto";
        mensaje.className = "exito";
        form.reset();
    }
});

