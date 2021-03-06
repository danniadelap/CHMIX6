//se necesita el objeto miembros con los datos anidados
let gorras =[
    {
        foto1:  "./src/img/Productos/Sombreros/Imagenes redimensionadas/Gorras/1.PNG",
        fotoAlt1 : "Gorra Yawi",
        nombre: "Gorra Yawi",
        precio: "$699.00",
        detalle: "Disfruta de esos conciertos con tu gorra bordada",
    },
    {
        foto1:  "./src/img/Productos/Sombreros/Imagenes redimensionadas/Gorras/2.PNG",
        fotoAlt1 : "Gorra Tatei",
        nombre: "Gorra Tatei",
        precio: "$499.00",
        detalle: "Combinación perfecta para cualquier ocasión",
    },
    {
        foto1:  "./src/img/Productos/Sombreros/Imagenes redimensionadas/Gorras/3.PNG",
        fotoAlt1 : "Gorra Ojo de Dios",
        nombre: "Gorra Ojo de Dios",
        precio: "$579.00",
        detalle: "Proyecta lo mejor de ti en todo momento",
    },
    {
        foto1:  "./src/img/Productos/Sombreros/Imagenes redimensionadas/Gorras/4.PNG",
        fotoAlt1 : "Gorra Xéri",
        nombre: "Gorra Xéri",
        precio: "$659.00",
        detalle: "Contrastante con tu personalidad moderna",
    }
];
//Se setean los productos gorras a localStorage
let jsonGorras = JSON.stringify(gorras);
localStorage.setItem("gorrasStorage", jsonGorras);
  
let productosTutuStorage = localStorage.getItem("gorrasStorage");
console.log(productosTutuStorage);
let arrayProduc = JSON.parse(productosTutuStorage);
console.log(arrayProduc);  

//se necerita funcion que crea los cards
function crearCard(foto1,fotoAlt1,nombre,precio, detalle){
    //crear mi plantilla
    let estilos = "";
    const myCard = `
    <div class="col-lg-4 col-md-6 col-sm-12" >
                <div class="list_card">
                    
                    <div>
                        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                              <div class="carousel-item active">
                                  <img src="${foto1}" class="d-block w-100" alt="${fotoAlt1}">
                              </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 class="estilos_titulo">${nombre}</h4>
                    </div>
                    <div>
                        <p class="estilos_descripcion">${detalle}</p>
                        <p class="estilos_precio"><b>${precio}</b></p>
                    </div>
                    <div>
                        <h5 class="estilo_botones">Añadir a tu outfit</h5>                     
                    </div>
                    
                </div> 
            </div>
    `;
    //regresar mi plantilla
    return myCard;
}

//se necesita funcion que realiza el barrido de dentro del objeto
function mostrarElementos(array){
    const ancla = document.getElementById("anclaGorras");
        ///traer el elemento ancla
    let container = '';
    for(i=0;i<gorras.length;i++){
        let foto1 = gorras[i].foto1;
        let fotoAlt1 = gorras[i].fotoAlt1;
        let nombre = gorras[i].nombre;
        let precio = gorras[i].precio;
        let detalle = gorras[i].detalle;
  
        container += crearCard(foto1,fotoAlt1,nombre,precio, detalle);
        //console.log(container);
    }
    ancla.innerHTML = container;
}

mostrarElementos();