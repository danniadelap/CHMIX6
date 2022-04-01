function iniciarSesion() {
    
    var form = document.form;
    var usuario = form.correoUsuario.value;
    var contrasena = form.contrasenaUsuario.value;

    if (usuario == "tutu@gmail.com" && contrasena == "asdfghjkl" ) {
        // alert("Bienvenido a Tutu Wix")
        Swal.fire({
            title: 'Bienvenido a Tutu Wix',
            text:'You clicked the button!',
            icno:'success',
            timer: 5000
        })
        
    }else{
        // alert("Favor de revisar que sus datos sean correctos")
        Swal.fire({
            icno: 'error',
            title: 'Oops...',
            text: 'La contraseña y el usuario no son correctos',
            footer: '<a href="">Why do I have this issue?</a>',
            timer: 5000
          })
    }
}