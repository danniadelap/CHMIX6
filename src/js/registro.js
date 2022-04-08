let array_usuarios = [
    {
        "correo": "correo@ejem.plo",
        "nombre_usu": "Correo Ejemplo",
        "apellido": "3333333333",
        "contrasenia": "C0nt@5n@"
    }
];//Arreglo guardar datos usuario

//variables  validacion  contraseña.
let inferior = false;
let superior = false;
let numeros = false;
let simbolos = false;
let minContraLargo = 8;  //equivalente en spsc.js (necesario camniar ambos)
let minCaracteLargo = 3;
let valiCorreo;

//declara URL fetch
const urlAPI = 'http://localhost:8080/api/usuarios/';

//declara elementos html
const add_usuario = document.getElementById("agregar_usuario");
const correo = document.getElementById("correo");
const correo_alert = document.getElementById("correo_alert");
const nombre = document.getElementById("nombre");
const nombre_alert = document.getElementById("nombre_alert");
const apellido = document.getElementById("apellido");
const apellido_alert = document.getElementById("apellido_alert");
const contrasena = document.getElementById("contrasena");
const contrasena_alert = document.getElementById("contrasena_alert");
const validacion = document.getElementById("validacion");
const validacion_alert = document.getElementById("validacion_alert");

function validarCorreo(correo) {
    let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let esValido = expReg.test(correo);
    return esValido;
}//funcion  validacion correo electronico

function validarContrase(contrase) {
    for (i = 0; i < contrase.length; i++) {
        if (contrase[i].match(/[a-z]/g)) { inferior = true; }
        if (contrase[i].match(/[A-Z]/g)) { superior = true; }
        if (contrase[i].match(/[0-9]/g)) { numeros = true; }
        if (contrase[i].match(/(.*[!,",#,$,%,&,',(,),*,+,,,-,.,/,:,;,<,=,>,?,@,^,_`,{,|,},~])/)) { simbolos = true; }
    }
}//funcion validacion contraseña
function iniciarContrase() {
    inferior = false;
    superior = false;
    numeros = false;
    simbolos = false;
}//reinicia variables validacion contraseña

function alertasCorreo() {
    valiCorreo = validarCorreo(correo.value);
    if (correo.value === "") {
        correo_alert.innerHTML = `Favor de ingresar correo.`;
        correo_alert.style.display = "block";
        correo.classList.remove("is-valid");
        correo.classList.add("is-invalid");
    } else if (valiCorreo == true) {
        correo_alert.style.display = "none";
        correo.classList.remove("is-invalid");
        correo.classList.add("is-valid");
    } else {
        correo_alert.innerText = "El correo no es válido, favor de verificarlo.";
        correo_alert.style.display = "block";
        correo.classList.remove("is-valid");
        correo.classList.add("is-invalid");
    }//validacion de correo
}//alertasCorreo
function alertasNombre() {
    if (nombre.value === "" || nombre.value.slice(0, 1) === " ") {
        nombre_alert.innerHTML = "Favor de ingresar nombre.";
        nombre_alert.style.display = "block";
        nombre.classList.remove("is-valid");
        nombre.classList.add("is-invalid");
    } else if (nombre.value.length > 2) {
        nombre_alert.style.display = "none";
        nombre.classList.remove("is-invalid");
        nombre.classList.add("is-valid");
    } else {
        //document.getElementById("nombre_alert").style.display = "block";
        nombre_alert.innerHTML = "EL nombre es muy corto.";
        nombre_alert.style.display = "block";
        nombre.classList.remove("is-valid");
        nombre.classList.add("is-invalid");
    }//validacion de longitud de nombre
}//alertasNombre
function alertasApellido() {
    if (apellido.value === "" || apellido.value.slice(0, 1) === " ") {
        apellido_alert.innerHTML = "Favor de ingresar apellido.";
        apellido_alert.style.display = "block";
        apellido.classList.remove("is-valid");
        apellido.classList.add("is-invalid");
    } else if (apellido.value.length > 2) {
        apellido_alert.style.display = "none";
        apellido.classList.remove("is-invalid");
        apellido.classList.add("is-valid");
    } else {
        apellido_alert.innerHTML = "EL apellido es muy corto.";
        apellido_alert.style.display = "block";
        apellido.classList.remove("is-valid");
        apellido.classList.add("is-invalid");
    }//validacion de longitud de apellido
}//alertasApellido
function alertasValidacion() {
    if (validacion.value === "") {
        validacion_alert.innerHTML = "Favor de confirmar contraseña.";
        validacion_alert.style.display = "block";
        validacion.classList.remove("is-valid");
        validacion.classList.add("is-invalid");
    } else if (contrasena.value == validacion.value) {
        validacion_alert.style.display = "none";
        validacion.classList.remove("is-invalid");
        validacion.classList.add("is-valid");
    } else {
        validacion_alert.innerHTML = "Las contraseñas no coinciden, favor de validarlo.";
        validacion_alert.style.display = "block";
        validacion.classList.remove("is-valid");
        validacion.classList.add("is-invalid");
    }//validacion de contraseña y validacion sean identicas
}//alertasValidacion
function alertasContrasena() {
    if (contrasena.value === "" || ((numeros == false || superior == false || simbolos == false || contrasena.value.length) < minContraLargo && contrasena.value.length > 0)) {
        contrasena_alert.innerHTML = "Favor de introducir contraseña optima.";
        contrasena_alert.style.display = "block";
        contrasena.classList.remove("is-valid");
        contrasena.classList.add("is-invalid");
    } else {
        contrasena_alert.style.display = "none";
        contrasena.classList.remove("is-invalid");
        contrasena.classList.add("is-valid");
    }//Alerta contraseña optima
}


//evento boton formulario
add_usuario.addEventListener("submit", (e) => {
    e.preventDefault();

    valiCorreo = validarCorreo(correo.value);

    validarContrase(contrasena.value);

    const existe = array_usuarios.findIndex(elemento => {
        return elemento.correo == correo.value
    }); //validamos correo ingresa ya existe en arreglo 

    alertasCorreo();
    alertasNombre();
    alertasApellido();
    alertasContrasena();
    alertasValidacion();

    if (existe == "-1") {
        document.getElementById("existe_alert").style.display = "none";
    } else {
        document.getElementById("existe_alert").style.display = "block";
    }//validacion existencia correo

    if ((numeros == true) && (superior == true) && (simbolos == true) && (valiCorreo == true) && (nombre.value.length > 2) && (apellido.value.length > 2) && (existe == "-1") && (contrasena.value == validacion.value) && (contrasena.value.length > 7)) {
        //si esta condicion se cumple entrara en el if y creara el Json 

        let rUsuario = {
            "correo": correo.value,
            "nombre_usu": nombre.value,
            "apellido": apellido.value,
            "contrasenia": contrasena.value
        }//se crea un arreglo con los datos del nuevo usuario

        array_usuarios.push(rUsuario);//se grega el nuevo usuario en el arreglo principal 
        let json_usuario = JSON.stringify(rUsuario);//el arreglo principal se convierte a JSON
        console.log(array_usuarios);
        console.log(json_usuario);
        fetch(urlAPI, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(rUsuario),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        ///mandamos los datos de usuario al sesionStorage    
        sessionStorage.setItem("rUsuario", json_usuario);

        let url = 'http://localhost:8080/api/login/';
        let data = {
            "correo": correo.value,
            "contrasenia": contrasena.value
        };
        fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
        Swal.fire({
            icon: 'success',
            text: `${rUsuario.nombre} ${rUsuario.apellido}, bienvenido a Tutu!`,
            title: 'Cuenta creada',
            showConfirmButton: true,
            confirmButtonText: 'Volver',
            confirmButtonColor: '#595959',
            timer: 1800
        });
        //window.open('./index.html', "_self");
    }
    iniciarContrase();
});

//declara funcion inpide entrada espacios teclado
const sinEspacios = document.querySelectorAll(".sinEspacios");
sinEspacios.forEach((el) => el.addEventListener("keypress", impedirEspacios));
function impedirEspacios(e) {
    if (e.key == " ") {
        // Si se pulsa el espacio eliminamos la pulsación
        e.preventDefault();
    }
}


function blurCorreo() {
    correo.value = correo.value.toLowerCase().replace(/ /g, "");
}//salir input correo retira espacios
function blurNombre() {
    nombre.value = capitalizar(nombre.value);
}//salir input nombre llama capitalizar
function blurApellido() {
    apellido.value = capitalizar(apellido.value);
}//salir input apellido llama capitalizar

function capitalizar(texto) {
    return texto = texto.toLowerCase().trim().replace(/      /g, " ").replace(/     /g, " ").replace(/    /g, " ").replace(/   /g, " ").replace(/  /g, " ").split(' ').map(v => v[0].toUpperCase() + v.substr(1)).join(' ');;
}//primera letra por palabra mayuscula + resto minusculas, retira espacios extras


//agrega funciones cuando documento esta listo.
$(document).ready(function () {
    let fuerzaContra;
    let caracterContra;
    let complejidad = $("#complejidad");
    let puntajeBase = 0, puntaje = 0;

    let mensaje = "";

    let num = {};
    num.Exceso = 0;
    num.Superior = 0;
    num.Numeros = 0;
    num.Simbolos = 0;

    let bonus = {};
    bonus.Exceso = 3;
    bonus.Superior = 4;
    bonus.Numeros = 5;
    bonus.Simbolos = 5;
    bonus.Combo = 0;
    bonus.FlatLower = 0;
    bonus.FlatNumber = 0;

    resultadoSalida();
    $(".inputContra").bind("keyup", checkVal);
    $("#validacion").bind("keyup", alertasValidacion);
    $("#nombre").bind("keyup", alertasNombre);
    $("#apellido").bind("keyup", alertasApellido);
    $("#correo").bind("keyup", alertasCorreo);
    //$("#contrasena").bind("keyup", alertasContrasena);

    function checkVal() {
        init();

        if (caracterContra.length >= minContraLargo) {
            puntajeBase = 50;
            analizarString();
            calcComplejidad();
        }
        else {
            puntajeBase = 0;
        }
        resultadoSalida();
    }

    function init() {
        fuerzaContra = $(".inputContra").val();
        caracterContra = fuerzaContra.split("");

        num.Exceso = 0;
        num.Superior = 0;
        num.Numeros = 0;
        num.Simbolos = 0;
        bonus.Combo = 0;
        bonus.FlatLower = 0;
        bonus.FlatNumber = 0;
        puntajeBase = 0;
        puntaje = 0;
    }

    function analizarString() {
        for (i = 0; i < caracterContra.length; i++) {
            if (caracterContra[i].match(/[A-Z]/g)) { num.Superior++; }
            if (caracterContra[i].match(/[0-9]/g)) { num.Numeros++; }
            if (caracterContra[i].match(/(.*[!,@,#,$,%,^,&,*,?,_,~])/)) { num.Simbolos++; }
        }

        num.Exceso = caracterContra.length - minContraLargo;

        if (num.Superior && num.Numeros && num.Simbolos) {
            bonus.Combo = 25;
        }

        else if ((num.Superior && num.Numeros) || (num.Superior && num.Simbolos) || (num.Numeros && num.Simbolos)) {
            bonus.Combo = 15;
        }

        if (fuerzaContra.match(/^[\sa-z]+$/)) {
            bonus.FlatLower = -15;
        }

        if (fuerzaContra.match(/^[\s0-9]+$/)) {
            bonus.FlatNumber = -35;
        }
    }

    function calcComplejidad() {
        puntaje = puntajeBase + (num.Exceso * bonus.Exceso) + (num.Superior * bonus.Superior) + (num.Numeros * bonus.Numeros) + (num.Simbolos * bonus.Simbolos) + bonus.Combo + bonus.FlatLower + bonus.FlatNumber;

    }
    function resultadoSalida() {
        validarContrase(contrasena.value);
        mensaje = " Al menos "
        if (contrasena.value.length < minContraLargo) {
            mensaje += " " + minContraLargo + " caracteres.";
        }
        if (inferior == false) {
            mensaje += " una minúscula.";
        }
        if (superior == false) {
            mensaje += " una mayúscula.";
        }
        if (numeros == false) {
            mensaje += " un número.";
        }
        if (simbolos == false) {
            mensaje += " un símbolo.";
        }
        if ((numeros == false || superior == false || simbolos == false || contrasena.value.length) < minContraLargo && contrasena.value.length > 0) {
            contrasena.classList.remove("is-valid");
            contrasena.classList.add("is-invalid");
        } else if (numeros == true && superior == true && simbolos == true && contrasena.value.length >= minContraLargo) {
            mensaje = "";
            contrasena.classList.remove("is-invalid");
            contrasena.classList.add("is-valid");
        } else {
            contrasena.classList.remove("is-valid");
            contrasena.classList.remove("is-invalid");
        }

        if ($(".inputContra").val() == "") {
            complejidad.html(mensaje).removeClass("debil medio bueno exelente").addClass("default");
            contrasena_alert.style.display = "none";
        }
        else if (puntaje < 50) {
            complejidad.html("Debil!" + mensaje).removeClass("medio bueno exelente").addClass("debil");
            alertasContrasena();
        }
        else if (puntaje >= 50 && puntaje < 75) {
            complejidad.html("Promedio!" + mensaje).removeClass("bueno exelente").addClass("medio");
            alertasContrasena();
        }
        else if (puntaje >= 75 && puntaje < 100) {
            complejidad.html("Fuerte!" + mensaje).removeClass("exelente").addClass("bueno");
            alertasContrasena();
        }
        else if (puntaje >= 100) {
            complejidad.html("Segura!" + mensaje).addClass("exelente");
            alertasContrasena();
        }
        iniciarContrase();

    }
}); 