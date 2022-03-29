function validarCorreo(correo) {
    var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var esValido = expReg.test(correo);
    return esValido;
}//funcion para la validacion de correo electronico

//let login_usuario = document.getElementById("agregar_usuario");
let login = document.getElementById("login_usser");
//en esta variable se guardara lo que se escriba en el html

//con esta parte cuando el usuario precione el boton traera todos los elementos de formulario a la variable add_user
login_usser.addEventListener("submit", (e) => {
    e.preventDefault();

    let correoL = document.getElementById("correoLogin");
    let correo_alert = document.getElementById("correo_alert");
    let contrasenaL = document.getElementById("contrasenaLogin");
    let contrasena_alert = document.getElementById("contrasena_alert");
    //mandar a traer el texto que el susuario introduce en el formulario y guardarlos en variables

    let valiCorreoL = validarCorreo(correo.value);
    //mandamos a llamar la funcion de correo para validarlo y que nos de un resusltado y lo guardamos en valiCorreo

    const existe = array_user.findIndex(elemento => {
        return elemento.correoL == correoL.value
    });
    //console.log(existe)
    //aqui es donde validamos en el arreglo si el correo registrado ya existe a lo cual guardamos el valor en existe y despues la comparamos
    if (correoL.value === "") {
        correo_alert.innerHTML = `Favor de ingresar correo.`;
        correo_alert.style.display = "block";
        correoL.classList.remove("is-valid");
        correoL.classList.add("is-invalid");
    } else if (valiCorreoL == true) {
        console.log("el correo es correcto");
        correo_alert.style.display = "none";
        correoL.classList.remove("is-invalid");
        correoL.classList.add("is-valid");
    } else {
        console.log("el correo no es correcto favor de validarlo");
        //document.getElementById("correo_alert").style.display = "block";
        correo_alert.innerText = "El correo no es válido favor de verificarlo.";
        correo_alert.style.display = "block";
        correoL.classList.remove("is-valid");
        correoL.classList.add("is-invalid");
    }//validacion de correo

    if (existe == "-1") {
        console.log("correo no existente, vuelva a ingresar su correo");
        document.getElementById("existe_alert").style.display = "none";
    } else {
        console.log("Bienvenido!!");
        document.getElementById("existe_alert").style.display = "block";
    }//validacion de existencia del correo


    if (contrasenaL.value === "") {
        contrasena_alert.innerHTML = "Favor de introducir contraseña.";
        contrasena_alert.style.display = "block";
        contrasenaL.classList.remove("is-valid");
        contrasenaL.classList.add("is-invalid");
    } else if (contrasenaL.value.length > 6) {
        console.log("tu contraseñas tiene la longitud correcta");
        contrasena_alert.style.display = "none";
        contrasenaL.classList.remove("is-invalid");
        contrasenaL.classList.add("is-valid");
    } else {
        contrasena_alert.innerHTML = "Contraseña muy corta introduce mínimo 6 caracteres.";
        contrasena_alert.style.display = "block";
        contrasenaL.classList.remove("is-valid");
        contrasenaLclassList.add("is-invalid");
    }//validacion para que la contraseña contenga mas de 6 caracteres

    //if ((valiCorreoL == true) && (existe == "-1") && (contrasena.value == validacion.value) && (contrasena.value.length > 6)) {
    if((correoL == "emmanuel@gmail.com") && (contrasenaL="123456789")){
        //si esta condicion se cumple entrara en el if y creara el Json 

        let usuario_logeado = {
            "id_user": array_user.length + 1,
            "correo": correoL.value,
            "contrasena": contrasenaL.value
        }//se crea un arreglo con los datos del nuevo usuario

        array_user.push(usuario_logeado);//se grega el nuevo usuario en el arreglo principal 
        let json_user = JSON.stringify(array_user);//el arreglo principal se convierte a JSON
        console.log(array_user);
        console.log(json_user);
        Swal.fire({
            icon: 'success',
            text: `${usuario_logeado.correoL}, bienvenido a Tutu!`,
            title: 'Bienvenido a Tutú',
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