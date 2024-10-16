// Seleccionar el botón
var boton = document.getElementById("botonCambiar");

// Agregar un event listener al botón
boton.addEventListener("click", function() {
    // Seleccionar el título y cambiar su texto
    var titulo = document.getElementById("titulo");
    titulo.textContent = "Hello World!";

    // Seleccionar el párrafo y cambiar su estilo
    var parrafo = document.querySelector(".parrafo");
    parrafo.textContent = "WELCOME";
    parrafo.style.color = "Yellow";
});