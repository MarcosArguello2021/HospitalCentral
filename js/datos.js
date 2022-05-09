let doctores = [];
const cartContainer = document.querySelector("#main-doctores-card"); //Contenedor doctores

//Llamamos al archivo JSON local
fetch("http://localhost:5500/js/doctores.json")
 .then((res) => res.json())
 .then((data) => {
  doctores = data;
  localStorage.setItem("Doctores", JSON.stringify(doctores));
});

//Creamos un array de doctores y le asignamos el JSON del localStorage
var arrayDoctores = JSON.parse(localStorage.getItem("Doctores"));

//Ejecutamos el metodo para crear los card de doctores
crearCards(arrayDoctores);

//Creamos las cards de los doctores.
// Recorremos el array doctores y se crea una card de cada objeto.
function crearCards(arrayDoctores) {
  cartContainer.innerHTML = ""; //Limpio el contenedor, para no dublicar cards.
  for (const items of arrayDoctores) {
    cartContainer.innerHTML += `<div class="main-doctores-card" id="main-doctores-card">
                <img src=${items.img} alt="John" style="width:100%">
                <h4 class="main-doctores-card-title">${items.nombre}</h4>
                <p class="main-doctores-card-p">${items.profesion}</p>
                <p><button class="main-doctores-card-button">Contacto</button></p>
            </div>`;
  }
  };
