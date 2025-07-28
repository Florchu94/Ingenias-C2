//*** BUSCADOR de películas ***/

const API_KEY = '2c92302aea9316285f5fc81d6d9d95b5';

async function buscarPelicula() {
  const query = document.getElementById('busquedaInput').value.trim();
  const contenedor = document.querySelector('.Container-Cards');

  if (!query) return;

  contenedor.innerHTML = '<p>🔎 Buscando películas...</p>';

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&language=es-ES&page=1&api_key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    if (data.results.length === 0) {
      contenedor.innerHTML = `<p>🙁 No se encontraron resultados para "${query}".</p>`;
      return;
    }

    renderPeliculas(data.results);
  } catch (error) {
    console.error('Error al buscar películas:', error);
    contenedor.innerHTML = '<p>⚠️ Ocurrió un error al buscar películas. Intentalo nuevamente.</p>';
  }
}

// Eventos de búsqueda
document.getElementById('btnBuscar').addEventListener('click', buscarPelicula);
document.getElementById('busquedaInput').addEventListener('keypress', e => {
  if (e.key === 'Enter') buscarPelicula();
});
