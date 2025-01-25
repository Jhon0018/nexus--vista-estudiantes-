 
 // Guardar estados en localStorage
function saveActivityStates() {
    const activities = Array.from(activityCards).map(card => ({
      title: card.querySelector('h3').textContent,
      date: card.querySelector('p:nth-of-type(1)').textContent,
      status: card.querySelector('.status').textContent,
    }));
    localStorage.setItem('activities', JSON.stringify(activities));
  }
  
  // Cargar estados desde localStorage
  function loadActivityStates() {
    const savedActivities = JSON.parse(localStorage.getItem('activities')) || [];
    if (savedActivities.length) {
      savedActivities.forEach((savedActivity, index) => {
        const card = activityCards[index];
        if (card) {
          card.querySelector('.status').textContent = savedActivity.status;
          // Ajustar clases de estado
          card.querySelector('.status').className = `status ${savedActivity.status.split(': ')[1].toLowerCase()}`;
        }
      });
    }
  }
  
  // Llamar a cargar estados al inicio
  loadActivityStates();
  
  // Guardar estados cada vez que se cambia uno
  activityCards.forEach(card => {
    card.querySelector('.button').addEventListener('click', saveActivityStates);
  });// Obtener elementos de las tarjetas de actividad
const activityCards = document.querySelectorAll('.activity-card');

// Agregar evento a cada botón "Ver Detalles" o "Continuar"
activityCards.forEach(card => {
  const button = card.querySelector('.button');

  button.addEventListener('click', (e) => {
    e.preventDefault();

    const activityTitle = card.querySelector('h3').textContent;
    const activityStatus = card.querySelector('.status').textContent;
    alert(`Detalles de la actividad:\n\n${activityTitle}\n${activityStatus}`);
    
    // Aquí puedes redirigir a otra página
    // window.location.href = 'detalles-actividad.html';
  });
});

// Funcionalidad para cambiar estados de actividades
activityCards.forEach(card => {
  const statusElement = card.querySelector('.status');

  // Cambiar estado al hacer clic en el botón
  card.querySelector('.button').addEventListener('click', () => {
    if (statusElement.classList.contains('pending')) {
      statusElement.textContent = 'Estado: En Curso';
      statusElement.classList.remove('pending');
      statusElement.classList.add('in-progress');
    } else if (statusElement.classList.contains('in-progress')) {
      statusElement.textContent = 'Estado: Completado';
      statusElement.classList.remove('in-progress');
      statusElement.classList.add('completed');
    }
  });
});

// Ordenar actividades por fecha
function sortActivitiesByDate(sectionSelector) {
  const section = document.querySelector(sectionSelector);
  const cards = Array.from(section.querySelectorAll('.activity-card'));

  cards.sort((a, b) => {
    const dateA = new Date(a.querySelector('p:nth-of-type(1)').textContent.split(': ')[1]);
    const dateB = new Date(b.querySelector('p:nth-of-type(1)').textContent.split(': ')[1]);
    return dateA - dateB;
  });

  // Reorganizar tarjetas en el DOM
  cards.forEach(card => section.appendChild(card));
}

// Llamar la función para ordenar actividades pendientes y en curso
sortActivitiesByDate('.pending-activities');
sortActivitiesByDate('.in-progress-activities');
 // Obtener elementos del modal
const modal = document.getElementById('activity-modal');
const closeModal = document.getElementById('close-modal');
const modalTitle = document.getElementById('modal-title');
const modalDate = document.getElementById('modal-date');
const modalStatus = document.getElementById('modal-status');

// Mostrar el modal con detalles de la actividad
activityCards.forEach(card => {
  const button = card.querySelector('.button');
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const title = card.querySelector('h3').textContent;
    const date = card.querySelector('p:nth-of-type(1)').textContent;
    const status = card.querySelector('.status').textContent;

    modalTitle.textContent = title;
    modalDate.textContent = date;
    modalStatus.textContent = status;

    modal.classList.remove('hidden');
  });
});

// Cerrar el modal
closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
});


const activitiesButton = document.getElementById('activities-button');
const activitiesList = document.getElementById('activities-list');

activitiesButton.addEventListener('click', () => {
  // Alternar la clase "show" para hacer visible u ocultar la lista con animación
  activitiesList.classList.toggle('show');
});
    // Obtener elementos de las tarjetas de actividad
 