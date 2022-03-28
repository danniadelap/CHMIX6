const form =document.getElementById('form');
const inputs = document.querySelectorAll('#form input')

const expresiones = {
  name: /^\S[a-zA-Z0-9a-zA-Z0-9\s?]{4,30}$/,
  price: /^[0-9\.?0-9]{3,5}$/,
  description:/^[a-zA-Z0-9]{5,30}$/
}

const validForm = (e) =>{
 switch(e.target.name){
   case "product":
     if(expresiones.name.test(e.target.value)){
      document.getElementById('product').classList.remove('incorrect');
      document.getElementById('product').classList.add('correct');
      document.getElementById('product').classList.add('was-validated');
     
      
     }else {
       document.getElementById('product').classList.add('incorrect');
       document.getElementById('product').classList.remove('was-validated');
     }
   break;
   case "price":
    if(expresiones.price.test(e.target.value)){
      document.getElementById('price').classList.remove('incorrect');
      document.getElementById('price').classList.add('correct');
      document.getElementById('price').classList.add('was-validated');
     }else {
       document.getElementById('price').classList.add('incorrect');
       document.getElementById('price').classList.remove('was-validated');
      }
     
   break;
   case "description":
    if(expresiones.description.test(e.target.value)){
      document.getElementById('description').classList.remove('incorrect');
      document.getElementById('description').classList.add('correct');
      document.getElementById('description').classList.add('was-validated');
     }else {
       document.getElementById('description ').classList.add('incorrect');
       document.getElementById('description').classList.add('is-invalid');
      }
   break;
 }
  

}

inputs.forEach((input) =>{
  input.addEventListener('keyup', validForm);
  input.addEventListener('blur', validForm);
  console.log("sirve")
});

form.addEventListener('submit',(e) => {
  e.preventDefault();
});








// Example starter JavaScript for disabling form submissions if there are invalid fields
/* (function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})(); */

/* function validarNombre(producto){
  var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  var esValido = expReg.test(producto);
  return esValido; 
}

let valiCorreo = validarCorreo(producto.value);

if(valiCorreo == true) {
  console.log("el nombre es correctono");
  document.getElementById("correo_alert").style.display = "none";
}else{
  console.log("el correo no es correcto favor de validarlo");
  document.getElementById("correo_alert").style.display = "block";
}//validacion de correo */