const boton = document.getElementById("botonSeleccionar");
console.log( "obtuvo el boton", boton);

boton.addEventListener("click", function(){
  boton.style.backgroundColor = "green";
});