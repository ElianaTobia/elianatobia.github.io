/** Comportamiento de la sección de habilidades para mostrar y ocultar la lista de habilidades al pulsar el botón*/
let BotonesMostrarOcultar = document.querySelectorAll('.botonMostrarOcultar');

BotonesMostrarOcultar.forEach(function(button) {
  button.addEventListener('click', function() {
    let tipo_habilidad = this.parentElement;
    let tipoHabilidad = document.querySelectorAll('.tipo_habilidad');
        
    tipo_habilidad.classList.toggle('active');
  });
});