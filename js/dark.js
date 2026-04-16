let btnDark = document.getElementById("btn-dark");
/* elemento que se va a modificar, en este caso el botón que activa el modo oscuro
*/

btnDark.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    /* al hacer click en el botón, se activa o desactiva la clase "dark-mode" en el elemento body, lo que permite cambiar el estilo de la página entre modo oscuro y modo claro */
})