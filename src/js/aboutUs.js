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
        articipación: "Desarrolladora Java",
        linkGitHub:"https://github.com/isamloza",
        linkedIn:""
    },
    {
        foto:"./src/img/Sebas.png",
        fotoALT : "foto de Rafael",
        nombre: "Rafael Villaseñor Reyes",
        descripción: "Me gusta trabajar en equipo, soy autodidacta, persistente, responsable y siempre tengo ganas de aprender. Creo que la programación es una herramienta muy importante en el presente y en el futuro. Me encantaría formar parte de una empresa en donde pueda colaborar aplicando mis competencias en el desarrollo Frontend y Backend.",
        articipación: "Desarrollador",
        linkGitHub:"",
        linkedIn:""
    }
];

  

//se necerita funcion que crea los cards
function crearCard(foto,fotoAlt,nombre,descripción,participación,linkGitHub,linkedIn){
    //crear mi plantilla
    let estilos = "";
    const myCard = `
        <div class="card mb-3 ajuste fondo_card" style="max-width: 540px;">
            <div class="row no-guttersk flex_img">
                <div class="col-lg-4 img_center">
                    <img src="${foto}" class="img-fluid" alt="${fotoAlt}">
                </div>
                <div class="col-lg-8">
                    <div class="card-body">
                        <h5 class="card-title">${nombre}</h5>
                        <p class="card-text">${descripción}</p>
                        <p class="card-text">${participación}</p>
                        <div>
                            <a href="${linkGitHub}" sclass="card-text" target="_blank" style="margin: .5rem .5rem .5rem 0rem;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                          </svg></a>
                            <a href="${linkedIn}" sclass="card-text" target="_blank" style="margin: .5rem .5rem .5rem 0rem"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                          </svg></a>
                        </div>    
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