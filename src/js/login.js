let array_user = [];
//se crea arreglo para guardar los datos del usuario al crear un nuevo usuario

let celular = document.getElementById("telefono");
celular.addEventListener("keypress" , (event)=>{
    event.preventDefault();
        
    let codigoKey = event.keyCode;
    let valorKey = String.fromCharCode(codigoKey);
    console.log(valorKey);

    let valor = parseInt(valorKey);
    console.log(valor);

    if(valor < 10){
        if (celular.value.length < 11 ) {
            celular.value += valor;
        console.log(celular.value.length);    
        }
    }
});//validacion de campo de numero de telefono para solo introducir numeros ademas de solo permitir 10 digitos

function validarCorreo(correo){
    var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var esValido = expReg.test(correo);
    return esValido; 
}//funcion para la validacion de correo electronico

let add_usuario = document.getElementById("agregar_usuario");
//en esta variable se guardara lo que se escriba en el html

//con esta parte cuando el usuario precione el boton traera todos los elementos de formulario a la variable add_user
add_usuario.addEventListener("submit", (e)=>{
    e.preventDefault();

    let correo = document.getElementById("correo");
    let nombre = document.getElementById("nombre");
    let telefono = document.getElementById("telefono");
    let password = document.getElementById("password");
    let validacion = document.getElementById("validacion");
    //mandar a traer el texto que el susuario introduce en el formulario y guardarlos en variables

    let valiCorreo = validarCorreo(correo.value);
    //mandamos a llamar la funcion de correo para validarlo y que nos de un resusltado y lo guardamos en valiCorreo

    const existe = array_user.findIndex(elemento => {
        return elemento.correo == correo.value
    });
    //console.log(existe)
    //aqui es donde validamos en el arreglo si el correo registrado ya existe a lo cual guardamos el valor en existe y despues la comparamos 
    
    if(valiCorreo == true) {
        console.log("el correo es correcto");
        document.getElementById("correo_alert").style.display = "none";
    }else{
        console.log("el correo no es correcto favor de validarlo");
        document.getElementById("correo_alert").style.display = "block";
    }//validacion de correo

    if(nombre.value.length > 2){
        console.log("el nombre esta bien");
        document.getElementById("nombre_alert").style.display = "none";
    }else{
        console.log("el nombre es muy corto");
        document.getElementById("nombre_alert").style.display = "block";
    }//validacion de longitud de nombre

    if(existe == "-1"){
        console.log("correo no existente puede continuar");
        document.getElementById("existe_alert").style.display = "none";
    }else{
        console.log("correo ya existente favor de usar otro correo");
        document.getElementById("existe_alert").style.display = "block";
    }//validacion de existencia del correo

    if(telefono.value.length > 9){
        console.log("el telefono es correcto");
        document.getElementById("telefono_alert").style.display = "none";
    }else{
        console.log("telefono incorrecto");
        document.getElementById("telefono_alert").style.display = "block";
    }//validacion de longitud de telefono

    if(password.value == validacion.value){
        console.log("tu contraseña coinside");
        document.getElementById("validacion_alert").style.display = "none";
    }else{
        console.log("las contraseñas no son identicas");
        document.getElementById("validacion_alert").style.display = "block";
    }//validacion de contraseña y validacion sean identicas

    if(password.value.length > 6){
        console.log("tu contraseñas tiene la longitud correcta");
        document.getElementById("contrasena_alert").style.display = "none";
    }else{
        console.log("tu contraseña es muy corta");
        document.getElementById("contrasena_alert").style.display = "block";
    }//validacion para que la contraseña contenga mas de 6 caracteres

    if((valiCorreo == true)&&(nombre.value.length > 2)&&(existe == "-1")&&(telefono.value.length > 9)&&(password.value == validacion.value)&&(password.value.length > 6)){
        //si esta condicion se cumple entrara en el if y creara el Json 

        let nuevo_usuario = {
            "id_user" : array_user.length + 1,
            "correo" : correo.value,
            "nombre" : nombre.value,
            "telefono" : telefono.value,
            "password" : password.value    
        }//se crea un arreglo con los datos del nuevo usuario

        array_user.push(nuevo_usuario);//se grega el nuevo usuario en el arreglo principal 
        let json_user = JSON.stringify(array_user);//el arreglo principal se convierte a JSON
        console.log(array_user);
        console.log(json_user);         
    }
});

function cambiar(){
    document.getElementById("registro_pre").style.display = "block";
    document.getElementById("inicio_pre").style.display = "none"; 
}

function cambiar1(){
    document.getElementById("registro_pre").style.display = "none";
    document.getElementById("inicio_pre").style.display = "block"; 
}