const $form = document.querySelector('#form')
  const $buttonMailto = document.querySelector('#sendEmail')

  $form.addEventListener('submit', handleSubmit)

  function handleSubmit(event) {
    event.preventDefault()//evita que la pagina se recargue
    const form = new FormData(this)
    
    $buttonMailto.setAttribute('href', `mailto:resendiz.soto.omar@gmail.com velazquez.gustavo.mtz@gmail.com?subject=Nombre: ${form.get("name")}  Correo: ${form.get("email") } Numero: ${form.get("number")} &body=${form.get("message")}`)//llama del html los datos del form
    $buttonMailto.click()//al clickear abre la bandeja de correo
  } //Formulario de envio de correo