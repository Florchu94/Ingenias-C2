//*** BUSCADOR de películas ***/

const token =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzkyMzAyYWVhOTMxNjI4NWY1ZmM4MWQ2ZDlkOTViNSIsIm5iZiI6MTc1MzY3MDUyMy4wOTQsInN1YiI6IjY4ODZlMzdiZGZmMDA4MWRhYzcyZjIyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ka2SJ8a5Vj5hWiKb-Ra1HASibQg7lU9nApF3zhb_0NA';

async function buscarPelicula() {
  const query = document.getElementById('busquedaInput').value.trim();
  if (!query) return;

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

  const data = await response.json();
  renderPeliculas(data.results);
}

// Llama a la función al hacer clic
document.getElementById('btnBuscar').addEventListener('click', buscarPelicula);

// O cuando presionás Enter
document.getElementById('busquedaInput').addEventListener('keypress', e => {
  if (e.key === 'Enter') buscarPelicula();
});
