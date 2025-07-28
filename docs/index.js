//*** BUSCADOR de películas ***/

const token =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzkyMzAyYWVhOTMxNjI4NWY1ZmM4MWQ2ZDlkOTViNSIsIm5iZiI6MTc1MzY3MDUyMy4wOTQsInN1YiI6IjY4ODZlMzdiZGZmMDA4MWRhYzcyZjIyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ka2SJ8a5Vj5hWiKb-Ra1HASibQg7lU9nApF3zhb_0NA';

// Esperar a que cargue todo el DOM
document.addEventListener('DOMContentLoaded', () => {
  const btnBuscar = document.getElementById('btnBuscar');
  const inputBusqueda = document.getElementById('busquedaInput');
  const contenedor = document.querySelector('.Container-Cards');

  async function buscarPelicula() {
    const query = inputBusqueda.value.trim();
    if (!query) return;

    contenedor.innerHTML = '<p>🔎 Buscando películas...</p>';

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&language=es-ES&page=1`,
        {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: token,
          },
        }
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

  btnBuscar.addEventListener('click', buscarPelicula);
  inputBusqueda.addEventListener('keypress', e => {
    if (e.key === 'Enter') buscarPelicula();
  });
});
