
const boton = document.getElementById("toggle-pokemon");
const pokedexGrid = document.querySelector(".pokedex-grid");

boton.addEventListener("click", () => {
    if (pokedexGrid.style.display === "none") {
        pokedexGrid.style.display = "grid";
    } else {
        pokedexGrid.style.display = "none";
    }
});


/* Botón para cambiar el tema */
const botonTema = document.getElementById("cambiar-tema");

botonTema.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        botonTema.textContent = "☀️ Modo claro";
    } else {
        botonTema.textContent = "🌙 Modo oscuro";
    }

});

const botonesFavorito = document.querySelectorAll(".btn-favorito");

botonesFavorito.forEach((boton) => {

    boton.addEventListener("click", () => {

        boton.classList.toggle("favorito");

        if (boton.classList.contains("favorito")) {
            boton.textContent = "❤️ Favorito";
        } else {
            boton.textContent = "♡ Favorito";
        }

    });

});


/*Formulario de opinión */
// Elementos del formulario
const formulario = document.getElementById("formulario-opinion");
// Elementos del modal
const botonOpinion = document.getElementById("btn-opinion");
const modalOpinion = document.getElementById("modal-opinion");
const cerrarModal = document.getElementById("cerrar-modal");
// Abrir la ventana modal
botonOpinion.addEventListener("click", () => {
    modalOpinion.classList.add("mostrar");
});


// Cerrar la ventana modal
cerrarModal.addEventListener("click", () => {
    modalOpinion.classList.remove("mostrar");
});


// Validar el formulario
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const opinion = document.getElementById("opinion").value.trim();
    const mensaje = document.getElementById("mensaje-formulario");

    if (nombre === "" || opinion === "") {
        mensaje.textContent = "⚠️ Por favor, completa todos los campos.";
    } else {
        mensaje.textContent = "✅ ¡Gracias por tu opinión!";
        formulario.reset();
    }
});