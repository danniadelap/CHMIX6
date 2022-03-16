//se necesita el objeto miembros con los datos anidados
let gorras =[
    {
        foto1:  "./src/img/Productos/gris.jpg",
        fotoAlt1 : "Gorra Tatei",
        nombre: "Gorra Tatei",
        precio: "$699.00",
        detalle: "Disfruta de esos conciertos con tu gorra bordada",
    },
    {
        foto1:  "./src/img/Productos/gorra-rosa-rosa-verde-frente.png",
        fotoAlt1 : "Gorra Tatei",
        nombre: "Gorra Tatei",
        precio: "$699.00",
        detalle: "Gorra rosa perfecta para cualquier ocasión",
    },
    {
        foto1:  "./src/img/Productos/gris.png",
        fotoAlt1 : "Gorra Ojo de Dios",
        nombre: "Gorra Ojo de Dios",
        precio: "$579.00",
        detalle: "El poder de los dioses te acompañara en cualquier ocasión con esta gorra",
    },
    {
        foto1:  "./src/img/Productos/venado.png",
        fotoAlt1 : "Gorra Venado",
        nombre: "Gorra Venado",
        precio: "$780.00",
        detalle: "Esta es la gorra perfecta para ir a cualquier reunión",
    }
];

  

//se necerita funcion que crea los cards
function crearCard(foto1,fotoAlt1,nombre,precio, detalle){
    //crear mi plantilla
    let estilos = "";
    const myCard = `
    <div class="col-lg-4 col-md-6 col-sm-12" >
                <div class="list_card">
                    <div>
                        <h4>${nombre}</h4>
                    </div>
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
                        <p>${detalle}</p>
                        <p>${precio}</p>
                    </div>
                    <div>
                        <button type="button" class="btn btn-outline-success">Comprar</button>
                        <button type="button" class="btn btn-outline-warning">Agregar</button>
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