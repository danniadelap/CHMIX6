// Repositorio:  https://github.com/danniadelap/CHMIX6


const PI = 3.14159265;

let barra = 
    {

        products: "./list_of_products.html",
        form: "./form_admin.html",
        logo: "./index.html",
        us: "./aboutUs.html",
        contact: "./contact_us.html"
    };



    const contenidoBarra =`
    <div>
      
<nav class="navbar navbar-expand-lg navbar-dark bg-dark" >
    <!--<a class="navbar-brand" href="./index.html">Navbar</a>-->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="${barra.products}" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                    Productos
                </a>                    
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="${barra.products}">Todo</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Sombreros</a>
                    <a class="dropdown-item" href="#">Gorras</a>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="${barra.form}">Formulario<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">                    
                <a class="navbar-brand" href="${barra.logo}">
                    <img src="./src/img/tutu_logo_sin_fondo.png" width="80" height="32" class="d-inline-block align-top" alt="Logo tutu_wix">
                </a>
            </li>        
            <li class="nav-item">
                <a class="nav-link" href="${barra.us}">Nosotros</a>
            </li>            
            <li class="nav-item">
                <a class="nav-link" href="${barra.contact}">Contactanos</a>
            </li>                      
        </ul>
    <!--<form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>-->
    </div>
    <div class="d-flex">
      <a href="./login.html">
        <img src="./src/img/usuario.png" class="mr-2" width="30" height="30" src="./usuario.png" alt="Logo">
      </a>                
    </div>
</nav>

</div>
    `;
     


let anclaBarra = document.getElementById("anclaBarra");
anclaBarra.innerHTML = contenidoBarra;
