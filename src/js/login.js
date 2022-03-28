let array_user = [];
//se crea arreglo para guardar los datos del usuario al crear un nuevo usuario

let celular = document.getElementById("telefono");
celular.addEventListener("keypress", (event) => {
    event.preventDefault();

    let codigoKey = event.keyCode;
    let valorKey = String.fromCharCode(codigoKey);
    console.log(valorKey);

    let valor = parseInt(valorKey);
    console.log(valor);

    if (valor < 10) {
        if (celular.value.length < 11) {
            celular.value += valor;
            console.log(celular.value.length);
        }
    }
});//validacion de campo de numero de telefono para solo introducir numeros ademas de solo permitir 10 digitos

function validarCorreo(correo) {
    var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var esValido = expReg.test(correo);
    return esValido;
}//funcion para la validacion de correo electronico

let add_usuario = document.getElementById("agregar_usuario");
//let login = document.getElementById("login");
//en esta variable se guardara lo que se escriba en el html

//con esta parte cuando el usuario precione el boton traera todos los elementos de formulario a la variable add_user
add_usuario.addEventListener("submit", (e) => {
    e.preventDefault();

    let correo = document.getElementById("correo");
    let correo_alert = document.getElementById("correo_alert");
    let nombre = document.getElementById("nombre");
    let nombre_alert = document.getElementById("nombre_alert");
    let telefono = document.getElementById("telefono");
    let telefono_alert = document.getElementById("telefono_alert");
    let contrasena = document.getElementById("contrasena");
    let contrasena_alert = document.getElementById("contrasena_alert");
    let validacion = document.getElementById("validacion");
    let validacion_alert = document.getElementById("validacion_alert");
    //mandar a traer el texto que el susuario introduce en el formulario y guardarlos en variables

    let valiCorreo = validarCorreo(correo.value);
    //mandamos a llamar la funcion de correo para validarlo y que nos de un resusltado y lo guardamos en valiCorreo

    const existe = array_user.findIndex(elemento => {
        return elemento.correo == correo.value
    });
    //console.log(existe)
    //aqui es donde validamos en el arreglo si el correo registrado ya existe a lo cual guardamos el valor en existe y despues la comparamos
    if (correo.value === "") {
        correo_alert.innerHTML = `Favor de ingresar correo.`;
        correo_alert.style.display = "block";
        correo.classList.remove("is-valid");
        correo.classList.add("is-invalid");
    } else if (valiCorreo == true) {
        console.log("el correo es correcto");
        correo_alert.style.display = "none";
        correo.classList.remove("is-invalid");
        correo.classList.add("is-valid");
    } else {
        console.log("el correo no es correcto favor de validarlo");
        //document.getElementById("correo_alert").style.display = "block";
        correo_alert.innerText = "El correo no es válido favor de verificarlo.";
        correo_alert.style.display = "block";
        correo.classList.remove("is-valid");
        correo.classList.add("is-invalid");
    }//validacion de correo

    if (nombre.value === "") {
        nombre_alert.innerHTML = "Favor de ingresar nombre.";
        nombre_alert.style.display = "block";
        nombre.classList.remove("is-valid");
        nombre.classList.add("is-invalid");
    } else if (nombre.value.length > 2) {
        console.log("el nombre esta bien");
        nombre_alert.style.display = "none";
        nombre.classList.remove("is-invalid");
        nombre.classList.add("is-valid");
    } else {
        console.log("el nombre es muy corto");
        //document.getElementById("nombre_alert").style.display = "block";
        nombre_alert.innerHTML = "EL nombre es muy corto.";
        nombre_alert.style.display = "block";
        nombre.classList.remove("is-valid");
        nombre.classList.add("is-invalid");
    }//validacion de longitud de nombre

    if (existe == "-1") {
        console.log("correo no existente puede continuar");
        document.getElementById("existe_alert").style.display = "none";
    } else {
        console.log("correo ya existente favor de usar otro correo");
        document.getElementById("existe_alert").style.display = "block";
    }//validacion de existencia del correo

    if (telefono.value === "") {
        telefono_alert.innerHTML = "Favor de introducir número de teléfono.";
        telefono_alert.style.display = "block";
        telefono.classList.remove("is-valid");
        telefono.classList.add("is-invalid");
    } else if (telefono.value.length > 9) {
        console.log("el telefono es correcto");
        //document.getElementById("telefono_alert").style.display = "none";
        telefono_alert.style.display = "none";
        telefono.classList.remove("is-invalid");
        telefono.classList.add("is-valid");
    } else {
        console.log("telefono incorrecto");
        //document.getElementById("telefono_alert").style.display = "block";
        telefono_alert.innerHTML = "Número de teléfono no valido, favor de introducir un número valido.";
        telefono_alert.style.display = "block";
        telefono.classList.remove("is-valid");
        telefono.classList.add("is-invalid");
    }//validacion de longitud de telefono


    if (validacion.value === "") {
        validacion_alert.innerHTML = "Favor de introducir contraseña.";
        validacion_alert.style.display = "block";
        validacion.classList.remove("is-valid");
        validacion.classList.add("is-invalid");
    } else if (contrasena.value == validacion.value) {
        console.log("tu contraseña coinside");
        validacion_alert.style.display = "none";
        validacion.classList.remove("is-invalid");
        validacion.classList.add("is-valid");
    } else {
        contrasena_alert.innerHTML = "Las contraseñas no coinciden favor de validarlo.";
        validacion_alert.style.display = "block";
        validacion.classList.remove("is-valid");
        validacion.classList.add("is-invalid");
    }//validacion de contraseña y validacion sean identicas

    if (contrasena.value === "") {
        contrasena_alert.innerHTML = "Favor de introducir contraseña.";
        contrasena_alert.style.display = "block";
        contrasena.classList.remove("is-valid");
        contrasena.classList.add("is-invalid");
    } else if (contrasena.value.length > 6) {
        console.log("tu contraseñas tiene la longitud correcta");
        contrasena_alert.style.display = "none";
        contrasena.classList.remove("is-invalid");
        contrasena.classList.add("is-valid");
    } else {
        contrasena_alert.innerHTML = "Contraseña muy corta introduce mínimo 6 caracteres.";
        contrasena_alert.style.display = "block";
        contrasena.classList.remove("is-valid");
        contrasena.classList.add("is-invalid");
    }//validacion para que la contraseña contenga mas de 6 caracteres

    if ((valiCorreo == true) && (nombre.value.length > 2) && (existe == "-1") && (telefono.value.length > 9) && (contrasena.value == validacion.value) && (contrasena.value.length > 6)) {
        //si esta condicion se cumple entrara en el if y creara el Json 

        let nuevo_usuario = {
            "id_user": array_user.length + 1,
            "correo": correo.value,
            "nombre": nombre.value,
            "telefono": telefono.value,
            "contrasena": contrasena.value
        }//se crea un arreglo con los datos del nuevo usuario

        array_user.push(nuevo_usuario);//se grega el nuevo usuario en el arreglo principal 
        let json_user = JSON.stringify(array_user);//el arreglo principal se convierte a JSON
        console.log(array_user);
        console.log(json_user);
        Swal.fire({
            icon: 'success',
            text: `${nuevo_usuario.nombre}, bienvenido a Tutu!`,
            title: 'Cuenta creada',
            showConfirmButton: true,
            confirmButtonText: 'Volver',
            confirmButtonColor: '#595959',
            timer: 1800
        })
    }
});

function cambiar() {
    document.getElementById("registro_pre").style.display = "block";
    document.getElementById("inicio_pre").style.display = "none";
}

function cambiar1() {
    document.getElementById("registro_pre").style.display = "none";
    document.getElementById("inicio_pre").style.display = "block";
}


const sinEspacios=document.querySelectorAll(".sinEspacios");
sinEspacios.forEach((el)=>el.addEventListener("keypress", impedirEspacios));
 
function impedirEspacios(e) {
    if (e.key==" ") {
        // Si se pulsa el espacio eliminamos la pulsación
        e.preventDefault();
    }
}