let array_usuario = [
    {
        "id_usuario": "1",
        "correo": "correo@ejem.plo",
        "nombre": "Correo Ejemplo",
        "apellido": "3333333333",
        "contrasena": "C0nt@5n@"
    }
];
function validarCorreo(correo) {
    let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let esValido = expReg.test(correo);
    return esValido;
}//funcion para la validacion de correo electronico

let login_usuario = document.getElementById("login_usuario");
let correoL = document.getElementById("correoLogin");
let correoAlert = document.getElementById("correoAlert");
let contrasenaL = document.getElementById("contrasenaLogin");
let contrasenaAlert = document.getElementById("contrasenaAlert");
let ingresoAlert = document.getElementById("ingresoAlert");
//en esta variable se guardara lo que se escriba en el html

//con esta parte cuando el usuario precione el boton traera todos los elementos de formulario a la variable add_user
login_usuario.addEventListener("submit", (e) => {
    e.preventDefault();

    //mandar a traer el texto que el susuario introduce en el formulario y guardarlos en variables

    let valiCorreoL = validarCorreo(correoL.value);
    //mandamos a llamar la funcion de correo para validarlo y que nos de un resusltado y lo guardamos en valiCorreo

    array_usuario.push(localStorage.getItem('rUsuario'))
    const contrasCorrecta = array_usuarios.findIndex(elemento => {
        if (elemento.correo == correoL.value){
            return elemento.contrasena == contrasenaL.value;
        }
    });

    if (correoL.value === "") {
        correoAlert.innerHTML = `Favor de ingresar correo.`;
        correoAlert.style.display = "block";
        correoL.classList.remove("is-valid");
        correoL.classList.add("is-invalid");
    } else if (valiCorreoL == true) {
        correoAlert.style.display = "none";
        correoL.classList.remove("is-invalid");
        correoL.classList.add("is-valid");
    } else {
        correoAlert.innerText = "El correo no es válido, favor de verificarlo.";
        correoAlert.style.display = "block";
        correoL.classList.remove("is-valid");
        correoL.classList.add("is-invalid");
    }//validacion de correo

    if (contrasenaL.value === "") {
        contrasenaAlert.innerHTML = "Favor de introducir contraseña.";
        contrasenaAlert.style.display = "block";
        contrasenaL.classList.remove("is-valid");
        contrasenaL.classList.add("is-invalid");
    } else {
        contrasenaAlert.style.display = "none";
        contrasenaL.classList.remove("is-invalid");
        contrasenaL.classList.add("is-valid");
    }

    if ((contrasCorrecta != "-1") && (valiCorreoL == "1") || (contrasenaL.value === "" || correoL.value === "") || valiCorreoL != true) {        
        ingresoAlert.style.display = "none";
    } else {        
        ingresoAlert.innerHTML = "Datos de ingreso incorrectos, valide su usuario y contraseña.";
        ingresoAlert.style.display = "block";
    }

    console.log(valiCorreoL);
    console.log(contrasCorrecta);
    //if (existe != "-1" && contrasCorrecta == "1" && valiCorreoL == "1") {
    if (contrasCorrecta != "-1" && valiCorreoL == "1") {
            //si esta condicion se cumple entrara en el if y creara el Json 
        console.log("A");
        let usuario_logeado = {
            "correo": correoL.value,
            "contrasena": contrasenaL.value
        }//se crea un arreglo con los datos del nuevo usuario
        array_usuario.push(usuario_logeado);
        let usuarioLogeado = JSON.stringify(usuario_logeado);
        localStorage.setItem("lUsuario", usuarioLogeado);

        let json_user = JSON.stringify(usuario_logeado);//el arreglo principal se convierte a JSON
        console.log(json_user);
        Swal.fire({
            icon: 'success',
            text: `${usuario_logeado.correo}, bienvenido a Tutu!`,
            title: 'Bienvenido a Tutú',
            showConfirmButton: true,
            confirmButtonText: 'Volver',
            confirmButtonColor: '#595959',
            timer: 1800
        })
        window.open('./index.html', "_self");
    }
});
function blurCorreoL() {
    correoL.value = correoL.value.toLowerCase().replace(/ /g, "");
}