//se necesita el objeto miembros con los datos anidados
let sombreros =[
    {
        foto1:  "./src/img/Productos/Sombreros/Imagenes redimensionadas/sombrero-rojo-final.jpg",
        fotoAlt1 : "Sombrero Xeta",
        nombre: "Sombrero Xeta",
        precio: "$699.00",
        detalle: "Nada como un rojo vibrante",
    },
    {
        foto1:  "./src/img/Productos/Sombreros/Imagenes redimensionadas/sombrero-negro-final.jpg",
        fotoAlt1 : "Sombrero Yivíme",
        nombre: "Sombrero Yivíme",
        precio: "$699.00",
        detalle: "Un toque de elegancia que va contigo",
    },
    {
        foto1:  "./src/img/Productos/Sombreros/Imagenes redimensionadas/sombrero_rosa.jpg",
        fotoAlt1 : "Sombrero Iyarí",
        nombre: "Sombrero Iyarí",
        precio: "$579.00",
        detalle: "Siéntete en contacto con la naturaleza",
    },
    {
        foto1:  "./src/img/Productos/Sombreros/sombrero_amarillo.jpg",
        fotoAlt1 : "Sombrero Tau",
        nombre: "Sombrero Tau",
        precio: "$789.00",
        detalle: "Radiante y vibrante",
    },
    {
        foto1:  "./src/img/Productos/Sombreros/Imagenes redimensionadas/sombrero_azul.jpg",
        fotoAlt1 : "Sombrero Yuavíme",
        nombre: "Sombrero Yuavíme",
        precio: "$799.00",
        detalle: "Se un espíritu libre",
    },
{
    foto1:  "./src/img/Productos/Sombreros/Imagenes redimensionadas/sombrero-verde-final.jpg",
    fotoAlt1 : "Sombrero Haaraweri",
    nombre: "Sombrero Haaraweri",
    precio: "$699.00",
    detalle: "Se un espíritu libre",
}
];

  

//se necesita funcion que crea los cards
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
    const ancla = document.getElementById("anclaSombreros");
        ///traer el elemento ancla
    let container = '';
    for(i=0;i<sombreros.length;i++){
        let foto1 = sombreros[i].foto1;
        let fotoAlt1 = sombreros[i].fotoAlt1;
        let nombre = sombreros[i].nombre;
        let precio = sombreros[i].precio;
        let detalle = sombreros[i].detalle;
  
        container += crearCard(foto1,fotoAlt1,nombre,precio, detalle);
        //console.log(container);
    }
    ancla.innerHTML = container;
}

mostrarElementos();