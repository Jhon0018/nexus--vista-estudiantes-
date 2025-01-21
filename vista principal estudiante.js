

const activitiesButton = document.getElementById('activities-button');
const activitiesList = document.getElementById('activities-list');

activitiesButton.addEventListener('click', () => {
  // Alternar la clase "show" para hacer visible u ocultar la lista con animación
  activitiesList.classList.toggle('show');
});
    // Obtener elementos de las tarjetas de actividad
 