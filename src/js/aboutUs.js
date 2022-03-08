//se necesita el objeto miembros con los datos anidados
let miembros =[
    {
        foto:  "./src/img/Danniatutu.png",
        fotoAlt : "foto de Dannia",
        nombre: "Dannia Roxana de la Peña Torres",
        descripción: "Soy estudiante de la carrera de Gestión Empresarial. Me considero una persona divertida, comprometida, honesta y me apasionan los temas de tecnología y marketing.",
        participación: "Desarrollador Java",
        linkGitHub: "https://github.com/danniadelap",
        linkedIn: "https://www.linkedIn.com/in/danniaroxana-delap/"
    },
    {
        foto:  "./src/img/Emmanueltutu.png",
        fotoAlt : "foto de Emmanuel",
        nombre: "Emmanuel Rosales Sánchez",
        descripción: "Me gusta trabajar en equipo, soy autodidacta, persistente, responsable y siempre tengo ganas de aprender. Creo que la programación es una herramienta muy importante en el presente y en el futuro. Me encantaría formar parte de una empresa en donde pueda colaborar aplicando mis competencias en el desarrollo Frontend y Backend.",
        participación: "Desarrollador",
        linkGitHub: "https://github.com/EmmanuelRoss",
        linkedIn: "https://www.linkedIn.com/in/emmanuel-ross"
    },
    {
        foto: "./src/img/Gustavotutu.png",
        fotoALT : "foto de Gustavo",
        nombre:"Gustavo Adrian Martinez Velazquez",
        descripción:"Soy un desarrollador java full stack Jr, e ingeniero en electrónica, me gusta aplicar mis habilidades las cuales son: trabajo en equipo, responsabilidad, pensamiento analítico, liderazgo y deseos por aprender.",participación: "Desarrollador Java",
        linkGitHub: "https://github.com/GustzvoMtz",
        linkedIn: "www.linkedIn.com/in/mtzgustavo"
    },
    {
        foto : "./src/img/Joeltutu.png",
        fotoAlt : "foto de Joel",
        nombre : "Joel Enrique Espejel Zarate",
        descripción : " Soy feliz desarrollando, aprendiendo y practicando Box, la persistencia es uno de mis soft skills",
        participación : "Desarrollador",
        linkGitHub : "https://github.com/ESZA",
        linkedIn : "https://www.linkedIn.com/in/joel-espejel-65b1901b1"
    },
    {
        foto : "./src/img/Juantutu.png",
        fotoALT : "foto de JuanJo",
        nombre : "Juan José Morales Sevilla",
        descripción : "Soy Ingeniero en Electronica y Desarrollador Java FullStack, al ser muy apacionado a la tecnologia mis ramas de dominio son una extencion de eso, me gusta divertirme en todo lo que hago y no me gusta rendirme.",
        participación : "Desarrollar",
        linkGitHub : "https://github.com/jjms2508",
        linkedIn : "https://www.linkedIn.com/in/jjms2508"
    },
    {
        foto: "./src/img/michtutu.png",
        fotoALT : "foto de Michelle",
        nombre:"Michel Anahí Guerrero Jacuinde",
        descripción:"Me encanta trabajar en el sector administrativo, estar cerca de la tecnología y aprender en el proceso. Me emociona aprender sobre programación,  finanzas, ventas y diseño.",
        participación: "Desarrollador Java",
        linkGitHub: "https://github.com/MichGJ",
        linkedIn:"https://www.linkedIn.com/in/michel-g-706b621b4/"

    },
    {
        foto: "./src/img/Omartutu.png",
        fotoALT : "foto de Omar",
        nombre:  "Omar Saul Resendiz Soto", 
        descripción: "Estudiante de ingeniería mecatrónica, me considero una persona persistente, comprometida, resiliente, y honesta, con gran afición a la tecnología.", 
        participación:"Desarrollador Java",
        linkGitHub:   "https://github.com/OmarSRS",
        linkedIn: "https://www.linkedIn.com/in/omar-resendiz-soto/"
    },
    {
        foto:"./src/img/Sam.png",
        fotoALT : "foto de Samantha",
        nombre: "Samantha Esmeralda Loza Lopez",
        descripción: "Soy egresada de la licenciatura en derecho, estudiante de carrera técnica en electrónica con gusto por las innovaciones tecnológicas y programación.",
        participación:"Desarrolladora Java",
        linkGitHub:"https://github.com/isamloza",
        linkedIn:""
    },
    {
        foto:"./src/img/Sebas.png",
        fotoALT : "foto de Rafael",
        nombre: "Rafael Villaseñor Reyes",
        descripción: "Me gusta trabajar en equipo, soy autodidacta, persistente, responsable y siempre tengo ganas de aprender. Creo que la programación es una herramienta muy importante en el presente y en el futuro. Me encantaría formar parte de una empresa en donde pueda colaborar aplicando mis competencias en el desarrollo Frontend y Backend.",
        participación: "Desarrollador",
        linkGitHub:"",
        linkedIn:""
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