// Seleccionar elementos
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const filterSemester = document.querySelector('.filters select:nth-child(1)');
const filterLevel = document.querySelector('.filters select:nth-child(2)');
const courseCards = document.querySelectorAll('.course-card');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDetails = document.getElementById('modal-details');
const closeModal = document.getElementById('close-modal');

// Funcionalidad de búsqueda
searchButton.addEventListener('click', () => {
  const query = searchInput.value.toLowerCase();

  courseCards.forEach(card => {
    const courseName = card.querySelector('h3').textContent.toLowerCase();
    const professor = card.querySelector('p:nth-child(3)').textContent.toLowerCase();

    if (courseName.includes(query) || professor.includes(query)) {
      card.style.display = 'block'; // Mostrar coincidencia
    } else {
      card.style.display = 'none'; // Ocultar no coincidencia
    }
  });
});

// Funcionalidad de filtros
[filterSemester, filterLevel].forEach(filter => {
  filter.addEventListener('change', () => {
    const selectedSemester = filterSemester.value;
    const selectedLevel = filterLevel.value;

    courseCards.forEach(card => {
      const courseSemester = card.dataset.semester; // Supongamos que cada tarjeta tiene un dataset para semestre
      const courseLevel = card.dataset.level;       // Y otro dataset para nivel

      const matchesSemester = selectedSemester === 'todos' || selectedSemester === courseSemester;
      const matchesLevel = selectedLevel === 'todos' || selectedLevel === courseLevel;

      if (matchesSemester && matchesLevel) {
        card.style.display = 'block'; // Mostrar si coincide con filtros
      } else {
        card.style.display = 'none'; // Ocultar si no coincide
      }
    });
  });
});

// Funcionalidad de "Ver detalles"
courseCards.forEach(card => {
  const detailsButton = card.querySelector('button');
  detailsButton.addEventListener('click', () => {
    const courseName = card.querySelector('h3').textContent;
    const courseCode = card.querySelector('p:nth-child(2)').textContent;
    const professor = card.querySelector('p:nth-child(3)').textContent;

    modalTitle.textContent = courseName;
    modalDetails.innerHTML = `
      <p><strong>Código:</strong> ${courseCode}</p>
      <p><strong>Profesor:</strong> ${professor}</p>
    `;
    modal.classList.remove('hidden');
  });
});

// Cerrar modal
closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
});

