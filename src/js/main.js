// Repositorio:  https://github.com/danniadelap/CHMIX6


const PI = 3.14159265;

let barra = 
    {
        products: "./list_of_products.html",
        form: "./form_admin.html",
        logo: "./index.html",
        us: "./aboutUs.html",
        contact: "./contact_us.html",
        nosotros: "./nosotros.html",
        sesion: "./inicioSesion.html",
        carrito: "#"
    };



    const contenidoBarra =`
    <div>
      
<nav class="navbar navbar-expand-lg <nav class="navbar navbar-light">
    <!--<a class="navbar-brand" href="./index.html">Navbar</a>-->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto">
        <li class="nav-item">
                <a class="nav-link" href="${barra.logo}">INICIO <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="${barra.products}" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                    PRODUCTOS
                </a>                    
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="${barra.products}">Todo</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Sombreros</a>
                    <a class="dropdown-item" href="#">Gorras</a>
                </div>
            </li>
            
            <li class="nav-item">                    
                <a class="navbar-brand" href="${barra.logo}">
                    <img src="./src/img/tutuLogo.png" width="50" height="30" class="d-inline-block align-top" alt="Logo tutu_wix">
                </a>
            </li>        
            <li class="nav-item">
                <a class="nav-link" href="${barra.us}">NOSOTROS</a>
            </li>            
            <li class="nav-item">
                <a class="nav-link" href="${barra.contact}">CONTÁCTANOS</a>
            </li>                      
        </ul>
    <!--<form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>-->
    </div>
    <div class="d-flex">
      <a href="${barra.sesion}">
        <img src="./src/img/iconosRedes/user.png" class="mr-2" width="30" height="30" alt="Logo"> 
      </a>   
      <a href="#">
      <img src="./src/img/iconosRedes/cart.png" class="mr-2" width="30" height="30" src="./carrito-compras.png" alt="Carrito"> 
    </a>              
    </div>
</nav>
</div>
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
                        <li><a href="aboutUs.html" class="py-1 d-block">Nosotros</a></li>
                        <li><a href="form_admin.html" class="py-1 d-block">Administrador</a></li>                  
                    </ul>
                </div>
                <div class="col-md-4 mb-md-0 mb-4">
                    <h2 class="footer-heading">Legales</h2>
                    <ul class="list-unstyled">
                        <li><a href="#" class="py-1 d-block">Términos y Condiciones</a></li>
                        <li><a href="#" class="py-1 d-block">Aviso de privacidad</a></li>   
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="row justify-content-end">
                <div class="col-md-12 col-lg-11 mb-md-0 mb-4">
                    <h2 class="footer-heading">Siguenos</h2>
                    <ul class="ftco-footer-social p-0">

                        <li class="ftco-animate "><a href="https://www.instagram.com/tutu_wix/?hl=es" data-toggle="tooltip" data-placement="top" title="Instagram"><span class="ion-logo-instagram "><img src="./src/img/iconosRedes/instagram-brands-fontawesome.svg" alt="icono instagram" class="sizeIcono"></span></a></li>
                        <li class="ftco-animate "><a href="https://www.facebook.com/tutuwix" data-toggle="tooltip" data-placement="top" title="Facebook"><span class="ion-logo-facebook "><img src="./src/img/iconosRedes/facebook-square-fontawesome-facebook.svg" alt="icono facebook" class="sizeIcono"></span></a></li>
                        <li class="ftco-animate "><a href="contact_us.html" data-toggle="tooltip" data-placement="top" title="Correo"><span class="ion-logo-Correo "><img src="./src/img/iconosRedes/correo-regular-fontawesome.svg" alt="icono correo" class="sizeIcono"></span></a></li>

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