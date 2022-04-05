

const form  = document.getElementsByTagName('form');

const phoneNumber = document.getElementById('telefono');
const email = document.getElementById('correo');
const emailError = document.querySelector('#correo + co');

email.addEventListener('submit', function (event) {

//verificamos si los campos del formulario son válidos.

  if (email.validity.valid) {
    
    emailError.innerHTML = ''; // Restablece el contenido del mensaje
    emailError.className = 'error'; // Restablece el estado visual del mensaje
  } else {
    showError();
  }
});

form.addEventListener('submit', function (event) {

  if(!email.validity.valid) {
    showError();
    event.preventDefault();
  }
});

function showError() {
  if(email.validity.valueMissing) {
    
    emailError.textContent = 'Debe introducir una dirección de correo electrónico.';
  } else if(email.validity.typeMismatch) {
    emailError.textContent = 'El valor introducido debe ser una dirección de correo electrónico.';
  } else if(email.validity.tooShort) {
    emailError.textContent = 'El correo electrónico debe tener al menos ${ email.minLength } caracteres; ha introducido ${ email.value.length }.';
  }

  
  emailError.className = 'error activo';
}

// deshabilita envios de formularios si hay campos no validos

(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('form');
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
  })()
  
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
});

