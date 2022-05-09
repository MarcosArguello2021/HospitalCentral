
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

//Se crea la acción para el botón de toggle (muestra el menu hamburguesa)
navToggle.addEventListener("click", ()=>{
  navMenu.classList.toggle("nav-menu_visible");

//Se pone estas líneas para accesibilidad discapacitados
  if(navMenu.classList.contains("nav-menu-visible")){
    navToggle.setAttribute("aria-label", "Cerrar Menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir Menú");
  }
} )


//Se oculta el navbar cunado usamos el scroll. Cuando hacemos para arriba, se munestra el navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navBarId").style.top = "0";
    document.getElementById("navBarId").style.backgroundColor = "#17A899";
  } else {
    document.getElementById("navBarId").style.top = "-100px";
    document.getElementById("navBarId").style.transition = "0.3s";
    document.getElementById("navBarId").style.backgroundColor = "transparent";
  }
  prevScrollpos = currentScrollPos;
} 

