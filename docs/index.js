//*** BOTON Scroll Up ***//

const btnVolverArriba = document.getElementById('btnVolverArriba');
const sentinel = document.getElementById('scroll-sentinel');

function mostrarOcultarBoton() {
  const sentinelPosition = sentinel.getBoundingClientRect().top;

  if (sentinelPosition < -50) {
    btnVolverArriba.style.display = 'block';
  } else {
    btnVolverArriba.style.display = 'none';
  }
}

window.addEventListener('scroll', mostrarOcultarBoton);
window.addEventListener('DOMContentLoaded', mostrarOcultarBoton);

btnVolverArriba.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
