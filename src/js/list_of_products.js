/*
precio
producto
*
*
ESTE JS ES SOLO DE EJEMPLO Y TEORIA DE LO QUE PODRIAMOS HACER PARA LOS PRODUCTOS 
*
*
ir agregando prodcutos 
funcion del boton
*/

// cards de prodcutos

/*
let producto_nuevo =[
    {
        foto:  ".",
        fotoAlt : "foto de sombrero amarillo",
        nombre: "   Sombrero amarillo",
        precio: "$"
        descripción: "Gorro con correa amarilla",
       
    },

    function crearCard(foto,fotoAlt,nombre,precio,descripción,){
    //crear mi plantilla
    let estilos = "";
    const myCard = `
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row no-guttersk">
                <div class="col-md-4">
                    <img src="${foto}" class="img-fluid" alt="${fotoAlt}">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${nombre}</h5>
                         <p class="card-text">${precio}</p>
                        <p class="card-text">${descripción}</p>
                       
                        
                    </div>
                </div>
            </div>
        </div>
    `;
    //regresar mi plantilla
    return myCard;
}
