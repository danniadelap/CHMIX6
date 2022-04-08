
let contactanos = document.getElementById("contactanos")

contactanos.addEventListener("submit", (e) => {
  e.preventDefault();
})
function validacion (){
  
  var formValido = true;

  var nombre = document.getElementById("nombre").value;

  /*
  if (nombre ==null || nombre.length <3){
    nombreAlert.innerHTML = `Favor de ingresar su nombre.`;
    nombreAlert.style.display = "block";
    //alert("Por favor ingrese un telefono valido")
    formValido =false;
  } else  {
    nombreAlert.style.display = "none";
    nombre.classList.remove("is-invalid");
    nombre.classList.add("is-valid");
    
  }
*/
  
  

  var numero = document.getElementById("telefono").value;
  if (numero == null || numero.length < 8)  {
    telefonoAlert.innerHTML = `Favor de ingresar un telefono valido.`;
    telefonoAlert.style.display = "block";
    telefono.classList.remove("is-valid");
    telefono.classList.add("is-invalid");
    //alert("Por favor ingrese un telefono valido")
    formValido =false;
  } else  if (numero.length>10){
    telefonoAlert.innerHTML = `Favor de ingresar un telefono valido.`;
    telefonoAlert.style.display = "block";
    formValido =false;
    telefono.classList.remove("is-valid");
    telefono.classList.add("is-invalid");
  }else {
    telefonoAlert.style.display = "none";
    telefono.classList.remove("is-invalid");
    telefono.classList.add("is-valid");
  }
  
  
  var mensaje = document.getElementById("mensaje").value;
  if (mensaje == null || mensaje.length == 0){
    mensajeAlert.innerHTML = `Favor de ingresar un telefono valido.`;
    mensajeAlert.style.display = "block";
    mensaje.classList.remove("is-valid");
    mensaje.classList.add("is-invalid");
   
    formValido =false;
  }else {
    mensajeAlert.style.display = "none";
    mensaje.classList.remove("is-invalid");
    mensaje.classList.add("is-valid");
  }
  
  return formValido
}


/*var correo = document.getElementById("correo").value
  if (correo == null || correo.length<4){
  alert ("por favor ingrese un correo electronico valido");
  formValido = false;  
  }*/

function validarCorreo(correo) {
    let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let esValido = expReg.test(correo);
    return esValido;
}

let correo = document.getElementById("correo");
let correoAlert = document.getElementById("correoAlert");

let nombreAlert = document.getElementById("nombreAlert");
let mensajeAlert=document.getElementById("mensajeAlert");
let telefonoAlert = document.getElementById("telefonoAlert");

/*
validarDatos.addEventListener("submit", (e) => {
  e.preventDefault();

  let valiCorreoL = validarCorreo(correoL.value);
  //mandamos a llamar la funcion de correo para validarlo

  if (correo.value === "") {
      correoAlert.innerHTML = `Favor de ingresar correo.`;
      correoAlert.style.display = "block";
      correo.classList.remove("is-valid");
      correo.classList.add("is-invalid");
  } else if (valiCorreoL == true) {
      correoAlert.style.display = "none";
      correo.classList.remove("is-invalid");
      correo.classList.add("is-valid");
  } else {
      correoAlert.innerText = "El correo no es válido, favor de verificarlo.";
      correoAlert.style.display = "block";
      correo.classList.remove("is-valid");
      correo.classList.add("is-invalid");
  }//validacion de correo
});

*/

function blurCorreoL() {
  correo.value = correo.value.toLowerCase().replace(/ /g, "");
}