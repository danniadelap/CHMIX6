// Repositorio:  https://github.com/danniadelap/CHMIX6


const PI = 3.14159265;

let barra = 
    {
        products: "./list_of_products.html",
        gorras: "./gorras.html",
        sombreros: "./sombreros.html",
        form: "./form_admin.html",
        logo: "./index.html",
        us: "./aboutUs.html",
        contact: "./contact_us.html",
        nosotros: "./nosotros.html",
        sesion: "./inicioSesion.html",
        carrito: "#"
    };

    const contenidoBarra = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-link">
        <a class="navbar-brand" href="${barra.logo}">
            <img src="./src/img/tutu_logo_sin_fondo.png" width="60" height="40" alt="">
          </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class ="navbar-toggler-icon"></span>
        </button>        
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href=""${barra.logo}">INICIO <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="${barra.products}" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                  PRODUCTOS
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="${barra.products}">TODO</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="${barra.sombreros}">SOMBREROS</a>               
                  <a class="dropdown-item" href="${barra.gorras}">GORRAS</a>
                </div>
              </li>
            <li class="nav-item">
              <a class="nav-link" href="${barra.us}">NOSOTROS</a>
            </li>
            
            <li class="nav-item">
              <a class="nav-link" href=""${barra.contact}">CONTÁCTANOS</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
          <div class="d-flex">
          <a href="${barra.sesion}">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#0E8784" class="bi bi-person-fill sizeIcono " viewBox="0 0 16 16">
             <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          </svg>
          </a>   
          <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#0E8784" class="bi bi-cart-fill sizeIcono" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
          </svg>
        </a>              
        </div>
          </form>
        </div>
      </nav>
    `;

  
     


let anclaBarra = document.getElementById("anclaBarra");
anclaBarra.innerHTML = contenidoBarra;

//FOOTER
const contenidoFooter =`
<footer class="footer-03">
<div class="container">
    <div class="row">
        <div class="col-md-6">
            <div class="row">                        
                <div class="col-md-4 mb-md-0 mb-4">
                    <h2 class="footer-heading">Equipo</h2>
                    <ul class="list-unstyled">
                        <li><a href="aboutUs.html" class="py-1 d-block subtitulo">Nosotros</a></li>
                        <li><a href="form_admin.html" class="py-1 d-block subtitulo">Administrador</a></li>                  
                    </ul>
                </div>
                <div class="col-md-4 mb-md-0 mb-4">
                    <h2 class="footer-heading">Legales</h2>
                    <ul class="list-unstyled">
                        <li><a href="Terminos.html" class="py-1 d-block subtitulo">Términos y Condiciones</a></li>
                        <li><a href="./AvisoDePrivacidad.html" class="py-1 d-block subtitulo">Aviso de privacidad</a></li>   
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="row justify-content-end">
                <div class="col-md-12 col-lg-11 mb-md-0 mb-4">
                    <h2 class="footer-heading">Síguenos</h2>
                    <ul class="ftco-footer-social p-0">

                                        
                        
                    <li class="ftco-animate "><a href="https://www.instagram.com/tutu_wix/?hl=es" data-toggle="tooltip" data-placement="top" title="Instagram"><span class="ion-logo-instagram "><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-instagram sizeIcono" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                    </svg></span></a></li>
                    <li class="ftco-animate "><a href="https://www.facebook.com/tutuwix" data-toggle="tooltip" data-placement="top" title="Facebook"><span class="ion-logo-facebook "><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-facebook sizeIcono" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                    </svg></span></a></li>
                    <li class="ftco-animate "><a href="contact_us.html" data-toggle="tooltip" data-placement="top" title="Correo"><span class="ion-logo-Correo "><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-envelope-fill sizeIcono" viewBox="0 0 16 16">
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                    </svg></span></a></li>

                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="row mt-5 pt-4 border-top">
        <div class="col-md-12">
            <p class="copyright" style="text-align:center"><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                Copyright &copy; Tutú_wix Esta página fue creada con fines didácticos y de aprendizaje</a>
            </p>
        </div>                
    </div>
</div>
</footer>

`;

let anclafooter = document.getElementById("anclafooter");
anclafooter.innerHTML = contenidoFooter;