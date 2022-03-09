//se necesita el objeto miembros con los datos anidados
let productos =[
    {
        foto:  "./src/img/Productos/Gorras/Gorra-negra/gorra_negra.jpg",
        fotoAlt : "foto de gorra negra",
        nombre: "Gorra Negra",
        precio: "$"
        descripción: "Gorro con correa amarilla",
    },
    {
        foto:  ".",
        fotoAlt : "foto de sombrero amarillo",
        nombre: "   Sombrero amarillo",
        precio: "$"
        descripción: "Gorro con correa amarilla",
    },
    {
        foto:  ".",
        fotoAlt : "foto de sombrero amarillo",
        nombre: "   Sombrero amarillo",
        precio: "$"
        descripción: "Gorro con correa amarilla",
    },
    {
        foto:  ".",
        fotoAlt : "foto de sombrero amarillo",
        nombre: "   Sombrero amarillo",
        precio: "$"
        descripción: "Gorro con correa amarilla",
    },
    {
        foto:  ".",
        fotoAlt : "foto de sombrero amarillo",
        nombre: "   Sombrero amarillo",
        precio: "$"
        descripción: "Gorro con correa amarilla",
    },
    {
        foto:  ".",
        fotoAlt : "foto de sombrero amarillo",
        nombre: "   Sombrero amarillo",
        precio: "$"
        descripción: "Gorro con correa amarilla",

    },
    {
        foto:  ".",
        fotoAlt : "foto de sombrero amarillo",
        nombre: "   Sombrero amarillo",
        precio: "$"
        descripción: "Gorro con correa amarilla",
    },
    {
        foto:  ".",
        fotoAlt : "foto de sombrero amarillo",
        nombre: "   Sombrero amarillo",
        precio: "$"
        descripción: "Gorro con correa amarilla",
    },
    {
        foto:  ".",
        fotoAlt : "foto de sombrero amarillo",
        nombre: "   Sombrero amarillo",
        precio: "$"
        descripción: "Gorro con correa amarilla",
    }
];

  

//se necerita funcion que crea los cards
function crearCard(foto,fotoAlt,nombre,descripción,participación,linkGitHub,linkedIn){
    //crear mi plantilla
    let estilos = "";
    const myCard = `
    <div class="col-lg-6 col-md-12 col-sm-12">
        <div class="tarjetas">
            <div>
                <img src="${foto}" class="img-fluid" alt="${fotoAlt}">
            </div>
            <div>
                <h5>${nombre}</h5>
                <p>${participación}</p>
                <p class="altura_descrip">${descripción}</p>
            </div>
            <div class="cards_">
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <a href="${linkGitHub}"><img src="./src/img/GitHub.png" class="ajuste_icono" alt=""></a>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6" >
                    <a href="${linkedIn}"><img src="./src/img/LinkedIn.png" class="ajuste_icono" alt=""></a>
                </div>
            </div>
        </div>
    </div>
    `;
    //regresar mi plantilla
    return myCard;
}

//se necesita funcion que realiza el barrido de dentro del objeto
function mostrarElementos(array){
    const ancla = document.getElementById("ancla");
        ///traer el elemento ancla
    let container = '';
    for(i=0;i<miembros.length;i++){
        let foto = miembros[i].foto;
        let fotoAlt = miembros[i].fotoAlt;
        let nombre = miembros[i].nombre;
        let descripción = miembros[i].descripción;
        let participación = miembros[i].participación;
        let linkGitHub = miembros[i].linkGitHub;
        let linkedIn = miembros[i].linkedIn;
  
        container += crearCard(foto,fotoAlt,nombre,descripción,participación,linkGitHub,linkedIn);
        //console.log(container);
    }
    ancla.innerHTML = container;
}

mostrarElementos();