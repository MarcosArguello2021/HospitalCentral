const cartContainer = document.querySelector("#main-doctores-card"); //Contenedor doctores
const espeContainer = document.querySelector("#main-especialidades-card"); //Contenedor doctores

//Se crea un array para los datos del hospital
let doctores = [];

//Llamamos al archivo JSON que cargué previamente a https://jsonbin.io/ para poder consumirlo
fetch("https://api.jsonbin.io/b/627ea82125069545a3351ab9")
 .then((res) => res.json())
 .then((data) => {
  doctores = data;
  localStorage.setItem("Doctores", JSON.stringify(doctores));
});

//Creamos un array de doctores y le asignamos el JSON del localStorage
let arrayDoctores = JSON.parse(localStorage.getItem("Doctores"));

//Ejecutamos el metodo para crear los card de doctores
//Analizamos la URL para crear una vista de los doctores o especialidades segun corresponda
let pagina = window.location.href;
if (pagina.match("especialidades")){
  espeCards(arrayDoctores);
}else if(pagina.match("profesion=")){
  let indice = pagina.indexOf("profesion=");
  let busqueda = pagina.substring(indice+10, );
  let arrayFiltrado = buscarEspecialidad(busqueda);
  console.log(arrayFiltrado);
  crearCards(arrayFiltrado);
} else if (pagina.match("doctores")){
  crearCards(arrayDoctores);
}


//Segun el filtro de especialidad, filtro el array de doctores
function buscarEspecialidad(busqueda) {
  let arrayDoctores = JSON.parse(localStorage.getItem("Doctores"));
  let arrayFiltrado = arrayDoctores.filter(arrayDoctores => arrayDoctores.categoria.includes(busqueda));
  return arrayFiltrado;
}

//Creamos las cards de los doctores.
// Recorremos el array doctores y se crea una card de cada objeto.
function crearCards(arrayDoctores) {
cartContainer.innerHTML = ""; //Limpio el contenedor, para no dublicar cards.
  for (const items of arrayDoctores) {
   cartContainer.innerHTML += `<div class="main-doctores-card" id="main-doctores-card">
               <img src=${items.img} id="main-doctores-card-img" alt="John" style="width:100%">
                <h4 class="main-doctores-card-title">${items.nombre}</h4>
               <p class="main-doctores-card-p">${items.profesion}</p>
                <p><button class="main-doctores-card-button">Contacto</button></p>
            </div>`;
  }
};

//Creamos las botones de las especialidades medicas.
// Recorremos el array doctores y se crea una botón de cada objeto.
function espeCards(arrayDoctores) {
  espeContainer.innerHTML = ""; //Limpio el contenedor, para no dublicar cards.
  for (const items of arrayDoctores) {
    espeContainer.innerHTML += `<div class="main-especialidades-card" id="main-especialidades-card">
        <div class="container mt-3">
        <form action="/doctores.html" method="GET" > 
        <button class="noselect"  type="submit" name="profesion"
        value="${items.categoria}">${items.profesion}</button>  
        </form>    
        </div>
      </div>`;
  }
};

//Validación de información ingresada formulario de contacto
function valida_envia() {
if (document.formulario.nombre.value.length == 0) {
  swal({
    title: "No olvides escribir tu nombre",
    text: "",
    icon: "warning",
    button: "OK",
  })
  document.formulario.nombre.focus()
  return 0;
} else if (document.formulario.apellido.value.length == 0){
  swal({
    title: "No olvides escribir tu apellido",
    text: "",
    icon: "warning",
    button: "OK",
  })
  document.formulario.apellido.focus()
  return 0;
}else if(document.formulario.email.value.length == 0){
  swal({
    title: "No olvides escribir tu dirección de mail",
    text: "",
    icon: "warning",
    button: "OK",
  })
  document.formulario.email.focus()
  return 0;
}else {
  swal({
    title: "OK",
    text: "Muchas gracias por enviar el formulario",
    icon: "success",
    button: "OK",
  })
  document.formulario.submit()
  return 0;
}
}




