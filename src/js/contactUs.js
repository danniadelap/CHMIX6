function validacionForm(evento){
  evento.preventDefault();
  let nombre = document.getElementById("name").value;
  if(nombre === ""){
      alert("Favor de intoducir nombre");    
  }
  let email = document.getElementById("email").value;
  //let tokenAlpha = 'abcdefghijklmnopqrstuvwxyz';
  //let tokenAlpha = String.fromCharCode(...Array(123).keys()).slice(97);
  /*let tokenText;
  let tokenArova = '@';
  let tokenPoint = '.';
  
  let correctEmail = tokenText+tokenArova+tokenText+tokenPoint+tokenText;
  //(tokenAlpha+tokenArova+tokenAlpha+tokenPoint+".com")
  if(email != ""){
      //definir condiciones de email        
      if(email != correctEmail){
          console.log(correctEmail);
          console.log(email);
          alert("El correo debe ser usuario@organizacion.tipo. Ej. abc@domiio.com");
      }
  }else{
      alert("Falta ingresar email");
  }*/
  if(email === ""){
      alert("No ha ingresado ningún email o el email no es válido");
  }
  let telefono = document.getElementById("number").value;
  if(telefono != ""){
      if(telefono.lenght < 11){
          alert("El número de telefono debe ser de al menos 10 digitos");
      }
  }else{
      alert("Falta ingresar telefono");
  }
  let mensaje = document.getElementById("message").value;
  if(mensaje === ""){
      alert("No ha ingresado ningún Mensaje aún");
  }

  return true;
}

function envioCorreo(){
  const $form = document.querySelector('#form')
  const $buttonMailto = document.querySelector('#sendEmail')

  $form.addEventListener('submit', handleSubmit)

  function handleSubmit(event) {
      event.preventDefault()//evita que la pagina se recargue
      const form = new FormData(this)
  
      $buttonMailto.setAttribute('href', `mailto:resendiz.soto.omar@gmail.com velazquez.gustavo.mtz@gmail.com?subject=Nombre: ${form.get("name")}  Correo: ${form.get("email") } Numero: ${form.get("number")} &body=${form.get("message")}`)//llama del html los datos del form
      $buttonMailto.click()//al clickear abre la bandeja de correo
  } //Formulario de envio de correo
}

/*function verificaCorreo(validacionForm(evento)){
  if(validacionForm(evento) == true){
      envioCorreo();
  }
}*/

const formAddProduct = document.getElementById("form");

form.addEventListener("submit",(evento)=>{
  validacionForm(evento);
  envioCorreo();
  //verificaCorreo();
  /*if(validacionForm(evento) == true){

  }*/
  //ancla.innerHTML = nuevaTarjeta;
});





