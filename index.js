// BOTON Up //

const btnVolverArriba = document.getElementById("btnVolverArriba");

window.addEventListener("scroll", () => {
if (window.scrollY > 300) {
    btnVolverArriba.style.display = "block";
  } else {
    btnVolverArriba.style.display = "none";
  }
});

btnVolverArriba.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
