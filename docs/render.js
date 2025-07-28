//*** RENDER ***/

function renderPeliculas(peliculas) {
  const contenedor = document.getElementById('contenedor-peliculas');
  contenedor.innerHTML = '';

  if (peliculas.length === 0) {
    contenedor.innerHTML = '<p>🙁 No se encontraron películas.</p>';
    return;
  }

  peliculas.forEach(peli => {
    const card = document.createElement('article');
    card.classList.add('animadas-card');

    // Imagen de respaldo si no hay poster
    const poster = peli.poster_path
      ? `https://image.tmdb.org/t/p/w500${peli.poster_path}`
      : 'https://via.placeholder.com/300x450?text=Sin+imagen';

    // Recortar descripción larga
    const resumen = peli.overview
      ? peli.overview.length > 180
        ? peli.overview.slice(0, 180) + '...'
        : peli.overview
      : 'Sin descripción disponible.';

    card.innerHTML = `
      <img class="pelicula-imagen" src="${poster}" alt="${peli.title}">
      <div class="pelicula-info">
        <h3>${peli.title}</h3>
        <p><strong>Idioma original:</strong> ${peli.original_language.toUpperCase()}</p>
        <p><strong>Fecha de estreno:</strong> ${peli.release_date || 'Sin información'}</p>
        <p class="sinopsis">${resumen}</p>
        <a class="ver-trailer" 
           href="https://www.youtube.com/results?search_query=${encodeURIComponent(peli.title + ' trailer')}" 
           target="_blank"
           rel="noopener noreferrer"
           aria-label="Ver tráiler de ${peli.title} en YouTube">
          Ver tráiler
        </a>
      </div>
    `;

    contenedor.appendChild(card);
  });
}
