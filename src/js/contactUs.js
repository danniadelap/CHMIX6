const contactanos = document.getElementById("contactanos");
const nombre = document.getElementById("nombre");
const nombreAlert = document.getElementById("nombreAlert");
const correo = document.getElementById("correo");
const correoAlert = document.getElementById("correoAlert");
const telefono = document.getElementById("telefono");
const telefonoAlert = document.getElementById("telefonoAlert");
const mensaje = document.getElementById("mensaje");
const mensajeAlert = document.getElementById("mensajeAlert");
const boton = document.getElementById("boton")

let nombreOK = false;
let correoOK = false;
let telefonoOK = false;
let mensajeOK = false;

telefono.addEventListener("keypress", (event) => {
  event.preventDefault();

  let codigoKey = event.keyCode;
  let valorKey = String.fromCharCode(codigoKey);
  console.log(valorKey);

  let valor = parseInt(valorKey);
  console.log(valor);

  if (valor < 10) {
    if (telefono.value.length < 13) {
      telefono.value += valor;
      console.log(telefono.value.length);
    }
  }
});//validacion de campo de numero de telefono para solo introducir numeros ademas de solo permitir 10 digitos

function validarCorreo(correo) {
  let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  let esValido = expReg.test(correo);
  return esValido;
}


$(document).ready(function () {
  $("#nombre").bind("keyup", alertasNombre);
  $("#correo").bind("keyup", alertasCorreo);
  $("#telefono").bind("keyup", alertasTelefono);
  $("#mensaje").bind("keyup", alertasMensaje);
});
function actualizarBoton() {
  if(nombreOK==true && correoOK==true && telefonoOK==true && mensajeOK==true) {
    document.getElementById("boton").disabled = false;
  } else {
    document.getElementById("boton").disabled = true;
  }
  
} 

function alertasNombre() {
  if (nombre.value === "" || nombre.value.slice(0, 1) === " ") {
    nombreAlert.innerHTML = "Favor de ingresar nombre.";
    nombreAlert.style.display = "block";
    nombre.classList.remove("is-valid");
    nombre.classList.add("is-invalid");
  } else if (nombre.value.length > 2) {
    nombreAlert.style.display = "none";
    nombre.classList.remove("is-invalid");
    nombre.classList.add("is-valid");
    nombreOK = true;
    actualizarBoton();
  } else {
    //document.getElementById("nombre_alert").style.display = "block";
    nombreAlert.innerHTML = "EL nombre es muy corto.";
    nombreAlert.style.display = "block";
    nombre.classList.remove("is-valid");
    nombre.classList.add("is-invalid");
  }//validacion de longitud de nombre

}
function alertasCorreo() {
  valiCorreo = validarCorreo(correo.value);
  if (correo.value === "") {
    correoAlert.innerHTML = `Favor de ingresar correo.`;
    correoAlert.style.display = "block";
    correo.classList.remove("is-valid");
    correo.classList.add("is-invalid");
  } else if (valiCorreo == true) {
    correoAlert.style.display = "none";
    correo.classList.remove("is-invalid");
    correo.classList.add("is-valid");
    correoOK =true;
    actualizarBoton();
  } else {
    correoAlert.innerText = "El correo no es válido, favor de verificarlo.";
    correoAlert.style.display = "block";
    correo.classList.remove("is-valid");
    correo.classList.add("is-invalid");
  }//validacion de correo
}//alertasCorreo
function alertasTelefono() {
  if (telefono.value === "" || telefono.value.length < 8) {
    telefonoAlert.innerHTML = `Favor de ingresar un telefono valido.`;
    telefonoAlert.style.display = "block";
    telefono.classList.remove("is-valid");
    telefono.classList.add("is-invalid");
    //alert("Por favor ingrese un telefono valido")
    formValido = false;
    actualizarBoton();
  } else if (telefono.value.length >= 10) {
    telefonoAlert.style.display = "none";
    telefono.classList.remove("is-invalid");
    telefono.classList.add("is-valid");
    telefonoOK = true;
  } else {
    telefonoAlert.innerHTML = `Favor de ingresar un telefono valido.`;
    telefonoAlert.style.display = "block";
    telefono.classList.remove("is-valid");
    telefono.classList.add("is-invalid");
  }
}
function alertasMensaje() {
  if ( mensaje.value.slice(0, 1) === " " || mensaje.value === "" ) {
    mensajeAlert.innerHTML = `Favor de ingresar un mensaje valido.`;
    mensajeAlert.style.display = "block";
    mensaje.classList.remove("is-valid");
    mensaje.classList.add("is-invalid");
  } else if (mensaje.value.length >= 15) {
    mensajeAlert.style.display = "none";
    mensaje.classList.remove("is-invalid");
    mensaje.classList.add("is-valid");
    mensajeOK = true;
    actualizarBoton();
  } else {
    mensajeAlert.innerHTML = `El mensaje es muy corto, al menos 15 caracteres.`;
    mensajeAlert.style.display = "block";
    mensaje.classList.remove("is-valid");
    mensaje.classList.add("is-invalid");
  }
}

function blurCorreo() {
  correo.value = correo.value.toLowerCase().replace(/ /g, "");
  alertasCorreo();
}//salir input correo retira espacios
function blurNombre() {
  nombre.value = capitalizar(nombre.value);
  alertasNombre();
}//salir input nombre llama capitalizar
function blurTelefono() {
  alertasTelefono();
}//salir input apellido llama capitalizar
function blurMensaje() {
  alertasMensaje();
}

function capitalizar(texto) {
  return texto = texto.toLowerCase().trim().replace(/      /g, " ").replace(/     /g, " ").replace(/    /g, " ").replace(/   /g, " ").replace(/  /g, " ").split(' ').map(v => v[0].toUpperCase() + v.substr(1)).join(' ');;
}//primera letra por palabra mayuscula + resto minusculas, retira espacios extras
