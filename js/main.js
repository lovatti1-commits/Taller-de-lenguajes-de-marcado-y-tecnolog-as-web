const form = document.getElementById('formularioContacto');
const mensaje = document.getElementById('mensaje');

if (form) { // solo corre si existe el formulario
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
}

// --- Filtro de programas ---
// Seleccionamos el input de búsqueda por su id
const buscador = document.getElementById("buscador");
// Seleccionamos todas las tarjetas de programas
const programas = document.querySelectorAll(".programa");

// Guardamos el valor original de display de cada tarjeta
programas.forEach(programa => {
  programa.dataset.displayOriginal = getComputedStyle(programa).display;
});

if (buscador) {
  // Escuchamos el evento de escritura en el buscador
  buscador.addEventListener("keyup", function() {
    // Convertimos lo escrito a minúsculas para comparar sin importar mayúsculas
    const filtro = buscador.value.toLowerCase();
    // Contador de coincidencias encontradas
    let coincidencias = 0;

    // Recorremos todas las tarjetas de programas
    programas.forEach(programa => {
      // Obtenemos el texto completo de la tarjeta en minúsculas
      const texto = programa.textContent.toLowerCase();
      // Si el texto incluye lo buscado...
      if (texto.includes(filtro)) {
        // Restauramos el display original (para que se vea como estaba)
        programa.style.display = programa.dataset.displayOriginal;
        coincidencias++;
      } else {
        // Si no coincide, ocultamos la tarjeta
        programa.style.display = "none";
      }
    });

    // Buscamos si ya existe el mensaje de "no resultados"
    let mensajeNoEncontrado = document.getElementById("no-resultados");
    if (!mensajeNoEncontrado) {
      // Si no existe, lo creamos y lo agregamos al main
      mensajeNoEncontrado = document.createElement("p");
      mensajeNoEncontrado.id = "no-resultados";
      mensajeNoEncontrado.textContent = "No se encontraron programas";
      mensajeNoEncontrado.style.textAlign = "center";
      mensajeNoEncontrado.style.fontWeight = "bold";
      mensajeNoEncontrado.style.color = "var(--rojo-accion)";
      document.querySelector("main").appendChild(mensajeNoEncontrado);
    }
    // Mostramos u ocultamos el mensaje según si hubo coincidencias
    mensajeNoEncontrado.style.display = coincidencias === 0 ? "block" : "none";
  });
}
