let array_user = [];

let add_usuario = document.getElementById("agregar_usuario");
//en esta variable se guardara lo que se escriba en el html

add_usuario.addEventListener("submit", (e)=>{
    e.preventDefault();

    let correo = document.getElementById("correo");
    let nombre = document.getElementById("nombre");
    let telefono = document.getElementById("telefono");
    let password = document.getElementById("password");
    let validacion = document.getElementById("validacion");

    const existe = array_user.findIndex(elemento => {
        return elemento.correo == correo.value
    });
    console.log(existe)
    
    if(existe == "-1"){
        
        
        if((password.value == validacion.value) && (password.value.length > 6)){

            let nuevo_usuario = {
                "id_user" : array_user.length + 1,
                "correo" : correo.value,
                "nombre" : nombre.value,
                "telefono" : telefono.value,
                "password" : password.value
        
            }
            array_user.push(nuevo_usuario);
            let json_user = JSON.stringify(array_user);
            alert("Se creo con exito");
            console.log(array_user);
            console.log(json_user);         
        }else if((password.value == validacion.value)){
            alert("tu contraseña es muy corta")
        }else{
            alert("tu contraseña es incorrecta")
        }

    }else{
        alert("este correo ya existe");
    }

    console.log(password.value.length);
});