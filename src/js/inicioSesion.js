let array_inicioSesion = []; //Se crea arreglo para guardar los datos

/*function iniciarSesion() {
    
    var form = document.form;
    var usuario = form.correoUsuario.value;
    var contrasena = form.contrasenaUsuario.value; */
    
function validarCorreo(correo) {
    let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let esValido = expReg.test(correo);
    return esValido;
}//funcion para la validacion de correo electronico

let login_usuario = document.getElementById("login_usuario");
//en esta variable se guardara lo que se escriba en el html

//con esta parte cuando el usuario precione el boton traera todos los elementos de formulario a la variable add_user
login_usuario.addEventListener("submit", (e) => {
    e.preventDefault();

    let correoL = document.getElementById("correoLogin");
    let correoAlert = document.getElementById("correoAlert");
    let contrasenaL = document.getElementById("contrasenaLogin");
    let contrasenaAlert = document.getElementById("contrasenaAlert");
    //mandar a traer el texto que el susuario introduce en el formulario y guardarlos en variables

    let valiCorreoL = validarCorreo(correoL.value);
    //mandamos a llamar la funcion de correo para validarlo y que nos de un resusltado y lo guardamos en valiCorreo

    let usuariosTutuStorage = localStorage.getItem("usuariosStorage");
    let arrayUsuarios = JSON.parse(usuariosTutuStorage);
    const existe = arrayUsuarios.findIndex(elemento => {
        return elemento.correo == correoL.value
    });
    const contrasCorrecta = arrayUsuarios.findIndex(elemento => {
        if (elemento.correo == correoL.value){
            return elemento.contrasena == contrasenaL.value
        }
    });

    if (correoL.value === "") {
        correoAlert.innerHTML = `Favor de ingresar correo.`;
        correoAlert.style.display = "block";
        correoL.classList.remove("is-valid");
        correoL.classList.add("is-invalid");
    } else if (valiCorreoL == true) {
        console.log("el correo es correcto");
        correoAlert.style.display = "none";
        correoL.classList.remove("is-invalid");
        correoL.classList.add("is-valid");
    } else {
        console.log("el correo no es correcto favor de validarlo");
        //document.getElementById("correoAlert").style.display = "block";
        correoAlert.innerText = "El correo no es válido favor de verificarlo.";
        correoAlert.style.display = "block";
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
        contrasenaAlert.innerHTML = "Favor de introducir contraseña.";
        contrasenaAlert.style.display = "block";
        contrasenaL.classList.remove("is-valid");
        contrasenaL.classList.add("is-invalid");
    } else if (contrasCorrecta == true) {
        console.log("tu contraseñas tiene la longitud correcta");
        contrasena_alert.style.display = "none";
        contrasena.classList.remove("is-invalid");
        contrasena.classList.add("is-valid");
    } else {
        contrasenaAlert.innerHTML = "Contraseña incorrecta.";
        contrasenaAlert.style.display = "block";
        contrasenaL.classList.remove("is-valid");
        contrasenaL.classList.add("is-invalid");
    }//validacion para que la contraseña contenga mas de 6 caracteres

    //if ((valiCorreoL == true) && (existe == "-1") && (contrasena.value == validacion.value) && (contrasena.value.length > 6)) {
    if (existe == "-1" && contrasCorrecta == true && valiCorreoL == true) {
        //si esta condicion se cumple entrara en el if y creara el Json 

        let usuario_logeado = {
            "id_user": array_user.length + 1,
            "correo": correoL.value,
            "contrasena": contrasenaL.value
        }//se crea un arreglo con los datos del nuevo usuario
        let arrayUsuario = JSON.stringify(array_usuario);
        localStorage.setItem("usuariosStorage", arrayUsuario);

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