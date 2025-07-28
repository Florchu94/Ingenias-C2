//*** RENDER ***/

function renderPeliculas(peliculas) {
  const contenedor = document.querySelector('.Container-Cards');
  contenedor.innerHTML = ''; // Limpiar resultados anteriores

  if (peliculas.length === 0) {
    contenedor.innerHTML = '<p>No se encontraron películas.</p>';
    return;
  }

  peliculas.forEach(pelicula => {
    const card = document.createElement('div');
    card.classList.add('card');

    const titulo = pelicula.title || 'Sin título';
    const imagen = pelicula.poster_path ? `https://image.tmdb.org/t/p/w500${pelicula.poster_path}` : 'ruta/a/imagen-default.jpg';
    const resumen = pelicula.overview || 'Sin descripción.';

    card.innerHTML = `
      <img src="${imagen}" alt="${titulo}" class="pelicula-imagen">
      <div class="pelicula-info">
        <h3>${titulo}</h3>
        <p class="sinopsis">${resumen}</p>
      </div>
    `;

    contenedor.appendChild(card);
  });
}
