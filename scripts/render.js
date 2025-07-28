//*** RENDER ***/

function renderPeliculas(peliculas) {
  const contenedor = document.getElementById('contenedor-peliculas');
  contenedor.innerHTML = '';

  if (peliculas.length === 0) {
    contenedor.innerHTML = '<p>No se encontraron resultados.</p>';
    return;
  }

  peliculas.forEach(peli => {
    const card = document.createElement('div');
    card.classList.add('animadas-card');

    card.innerHTML = `
      <img class="pelicula-imagen" src="https://image.tmdb.org/t/p/w500${peli.poster_path}" alt="${peli.title}">
      <div class="pelicula-info">
        <h3>${peli.title}</h3>
        <p class="sinopsis">${peli.overview}</p>
        <a class="ver-trailer" href="https://www.youtube.com/results?search_query=${encodeURIComponent(
          peli.title + ' trailer'
        )}" target="_blank">Ver tráiler</a>
      </div>
    `;
    contenedor.appendChild(card);
  });
}
