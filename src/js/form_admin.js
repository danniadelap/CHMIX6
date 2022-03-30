const form =document.getElementById('form');
const inputs = document.querySelectorAll('#form input')

const expresiones = {
  name: /^\S[a-zA-Z0-9a-zA-Z0-9\s?]{4,30}$/,
  price: /^[0-9\.?0-9]{2,6}$/,
  description:/^\S[a-zA-Z0-9\s?]{5,30}$/
}

const productCorrect =`
<div class="alert alert-success" role="alert">
  COOOORRRECTOOO!!
</div>
`;
const productInorrect =`
<div class="alert alert-danger" role="alert">
El nombre debe tener entre 4 y 30 caracteres de la A-Z 
sin simbolos ni solo espacios en blanco.
</div>
`;
const priceCorrect =`
<div class="alert alert-success" role="alert">
  Coooooorectooooo!
</div>
`;
const priceInorrect =`
<div class="alert alert-danger" role="alert">
  El precio debe ser no mayor a 6 digitos.
</div>
`;
const descriptionCorrect =`
<div class="alert alert-success" role="alert">
  Coooooorectooooo!
</div>
`;
const descriptionIncorrect =`
<div class="alert alert-danger" role="alert">
  La descripcion debe tener como minimo 5 caracteres y maximo 30.
</div>
`;


const validForm = (e) =>{
 switch(e.target.name){
   case "product":
     if(expresiones.name.test(e.target.value)){
      document.getElementById('divProduct').classList.remove('incorrect');
      document.getElementById('product').classList.remove('is-invalid');
      document.getElementById('divProduct').classList.add('correct');
      document.getElementById('product').classList.add('is-valid');
      document.getElementById('products').innerHTML= productCorrect;
            
     }else {
       document.getElementById('divProduct').classList.add('incorrect');
       document.getElementById('product').classList.add('is-invalid');
       document.getElementById('divProduct').classList.remove('correct');
       document.getElementById('product').classList.remove('is-valid');
       document.getElementById('products').innerHTML= productInorrect;
       
     }
   break;
   case "price":
    if(expresiones.price.test(e.target.value)){
      document.getElementById('divPrice').classList.remove('incorrect');
      document.getElementById('price').classList.remove('is-invalid');
      document.getElementById('divPrice').classList.add('correct');
      document.getElementById('price').classList.add('is-valid');
      document.getElementById('prices').innerHTML= priceCorrect;
      
     }else {
      document.getElementById('divPrice').classList.add('incorrect');
       document.getElementById('price').classList.add('is-invalid');
       document.getElementById('divPrice').classList.remove('correct');
       document.getElementById('price').classList.remove('is-valid');
       document.getElementById('prices').innerHTML= priceInorrect;
      }
     
   break;
   case "description":
    if(expresiones.description.test(e.target.value)){
      document.getElementById('divDescription').classList.remove('incorrect');
      document.getElementById('description').classList.remove('is-invalid');
      document.getElementById('divDescription').classList.add('correct');
      document.getElementById('description').classList.add('is-valid');
      document.getElementById('descriptions').innerHTML= descriptionCorrect;
     }else {
      document.getElementById('divDescription').classList.add('incorrect');
       document.getElementById('description').classList.add('is-invalid');
       document.getElementById('divDescription').classList.remove('correct');
       document.getElementById('description').classList.remove('is-valid');
       document.getElementById('descriptions').innerHTML= descriptionIncorrect;
      }
   break;
 }
  

}

inputs.forEach((input) =>{
  input.addEventListener('keyup', validForm);
  input.addEventListener('blur', validForm);
 
});

form.addEventListener('submit',(e) => {
  e.preventDefault();
});

let fileImage = document.getElementById('fileImage');
	let btnFake = document.getElementById('btnFake');
	let imageFile = document.getElementById('imageFile');

	btnFake.addEventListener('click', function(){
		fileImage.click();
    });
    fileImage.addEventListener('change', function(){
        previewFile('imageFile', 'fileImage', 'inputFile' )
        //previewFile(id imagen, input type file , textArea);
    });

		//previewFile(id imagen, input type file , textArea);
		function previewFile(img, inputFile, input) {
			
			var preview = document.getElementById(img);
			var file    = document.getElementById(inputFile).files[0];
			var reader  = new FileReader();

			reader.addEventListener("load", function () {
				document.getElementById(input).value = reader.result;
		  		preview.src = reader.result;
		  	}, false);
			
		  	if (file) {
		    	reader.readAsDataURL(file);
		  	}// file
		}// previewFile 






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


