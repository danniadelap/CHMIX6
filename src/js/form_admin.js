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


/*let valiCorreo = validarCorreo(producto.value);*/



//VALIDACION DE MODIFICAR PRODUCTO //
const formulario2 = document.getElementById('Modificarformulario');
const inputs2 = document.querySelectorAll('#Modificarformulario input');

const expresiones2 = {
  //Modificarnombre: /^[a-zA-ZÁ-ÿ\s\-9\_\-]{3,25}$/, // Letras, numeros, guion y guion_bajo
	ModificarNombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.//
  ModificarDescripcion: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.//
	ModificarPrecio: /^.{1,100}$/, // 0 a 100 digitos.
	//correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	//telefono: /^\d{7,14}$/ // 7 a 14 numeros.
  //ModificarDescripcion: /^[a-zA-Z0-9\_\-]{3,50}$/, // Letras, numeros, guion y guion_bajo
}

//
const campos2 = {
	ModificarNombre: false,
	ModificarDescripcion: false,
	ModificarPrecio: false
}



// Mostrar y quitar mensaje de que no deben poner caracteres
const validarCampo2 = (expresion2, input, campo) => {
	if(expresion2.test(input.value)){
    /*document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');*/
    document.querySelector(`#grupo__${campo} .ModificarNombre__input-error`).classList.remove('formulario__input-error-activo');campos2[campo] = true;
	} else {
    document.querySelector(`#grupo__${campo} .ModificarNombre__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
}
}






//VALIDACIONES POR NAME
const validarFormulario2 = (m) => {
	switch (m.target.name) {
		case "ModificarNombre":
			validarCampo2(expresiones2.ModificarNombre, m.target, 'ModificarNombre');
      break;

    case "ModificarPrecio":
      validarCampo2(expresiones2.ModificarPrecio, m.target, 'ModificarPrecio');
      break;

    case "ModificarDescripcion":
      validarCampo2(expresiones2.ModificarDescripcion, m.target, 'ModificarDescripcion');
      break;
    }
  }

  


// EVENTO AL LEVANTAR EL DEDO DE LA TECLA VALIDA EL FORMULARIO  
inputs2.forEach((input) => {
	input.addEventListener('keyup',validarFormulario2);
	input.addEventListener('blur',validarFormulario2);
});
//PREVENT DEFAULT DE BUTTON
formulario2.addEventListener('submit', (m) => {
	m.preventDefault();
});
=======


