// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
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
})();



//VALIDACION DE MODIFICAR PRODUCTO //
const formulario = document.getElementById('Modificarformulario');
const inputs = document.querySelectorAll('#Modificarformulario input');

const expresiones = {
  //Modificarnombre: /^[a-zA-ZÁ-ÿ\s\-9\_\-]{3,25}$/, // Letras, numeros, guion y guion_bajo
	ModificarNombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.//
  ModificarDescripcion: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.//
	ModificarPrecio: /^.{1,100}$/, // 0 a 100 digitos.
	//correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	//telefono: /^\d{7,14}$/ // 7 a 14 numeros.
  //ModificarDescripcion: /^[a-zA-Z0-9\_\-]{3,50}$/, // Letras, numeros, guion y guion_bajo
}

//
const campos = {
	ModificarNombre: false,
	ModificarDescripcion: false,
	ModificarPrecio: false
}



// Mostrar y quitar mensaje de que no deben poner caracteres
const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
    document.querySelector(`#grupo__${campo} .ModificarNombre__input-error`);
	} else {
    document.querySelector(`#grupo__${campo} .ModificarNombre__input-error`);
}
}






//VALIDACIONES POR NAME
const validarFormulario = (e) => {
	switch (e.target.name) {
		case "ModificarNombre":
			validarCampo(expresiones.ModificarNombre, e.target, 'ModificarNombre');
      break;

    case "ModificarPrecio":
      validarCampo(expresiones.ModificarPrecio, e.target, 'ModificarPrecio');
      break;

    case "ModificarDescripcion":
      validarCampo(expresiones.ModificarDescripcion, e.target, 'ModificarDescripcion');
      break;
    }
  }

  


// EVENTO AL LEVANTAR EL DEDO DE LA TECLA VALIDA EL FORMULARIO
inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});
//PREVENT DEFAULT DE BUTTON
formulario.addEventListener('submit', (e) => {
	e.preventDefault();
});
