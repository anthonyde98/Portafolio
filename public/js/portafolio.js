import { PROYECTOS } from "./dummy.js";

let entornos;
let btnActual = "web";

const menuBtns = {
    web: document.getElementById('web-btn'),
    desktop: document.getElementById('desktop-btn'),
    mobile:  document.getElementById('mobile-btn'),
    config: document.getElementById('config-btn')
}

const espacios = {
    produccion: document.getElementById('proyectos-produccion'),
    noProduccion: document.getElementById('proyectos-no-produccion')
}

const listas = {
    produccion: espacios.produccion.getElementsByClassName('proyectos')[0],
    noProduccion: espacios.noProduccion.getElementsByClassName('proyectos')[0]
}

menuBtns.web.addEventListener("click", (e) => {
    llenarSecciones('web')
})
menuBtns.desktop.addEventListener("click", (e) => {
    llenarSecciones('desktop')
})
menuBtns.mobile.addEventListener("click", (e) => {
    llenarSecciones('mobile')
})
menuBtns.config.addEventListener("click", (e) => {
    llenarSecciones('config')
})

onload = () => {
    getpath();
    entornos = {
        web: {
            prod: false,
            data: [],
        },
        desktop: {
            prod: false,
            data: [],
        },
        mobile: {
            prod: false,
            data: [],
        },
        config: {
            prod: false,
            data: [],
        },
    }

    PROYECTOS.forEach(proyecto => {
        entornos[proyecto.entorno].data.push(proyecto);

        if(proyecto.produccion){
            entornos[proyecto.entorno].prod = true;
        }
    })

    llenarSecciones('web');
}


const selectBtn = btn => {
    menuBtns[btnActual].removeAttribute('style')
    
    menuBtns[btn].style.color = "blue";
    menuBtns[btn].style.boxShadow = "2px 2px 3px rgba(0, 0, 0, 0.713)";

    btnActual = btn;
}

const llenarSecciones = (entorno) => {
    selectBtn(entorno);

    if(entornos[entorno].prod){
        llenarSeccion(entorno, 'produccion');
    }
    else{
        espacios.produccion.style.display = "none";
    }

    llenarSeccion(entorno, 'noProduccion');
}

const llenarSeccion = (entorno, tipo) => {
    espacios[tipo].style.display = "block";

    const proyectos = () => {
        let proyectos = ``;

        const agregar = (proyecto) => {
            proyectos += `
            <div class="proyecto" title='${proyecto.nombre}'>
                <div class="imagen">
                    <img src="http://drive.google.com/uc?export=view&id=${proyecto.imagen}" alt="${proyecto.nombre}">
                </div>
                <div class="descripcion sec-proyec">
                    <p class="des">${proyecto.descripcion}</p>
                    <p class="tec">${proyecto.tecnologias}</p>
                </div>
                <div class="btns">
                    <a class=" btn ${proyecto.type ? proyecto.type : ''}" href="${proyecto.enlace}" title='Ir a ${proyecto.nombre}' style='display: ${proyecto.enlace !== "" ? 'block' : 'none'}' target="_blank"><i class="fad ${proyecto.icon}"></i></a>
                    <a class="btn git" href="${proyecto.github}" title="Repositorio" target="_blank"><i class="fab fa-github"></i></a>
                </div>
            </div>`;
        }

        entornos[entorno].data.forEach(proyecto => {
           if(proyecto[tipo]){
                agregar(proyecto);
           }
           else if(tipo === 'noProduccion' && !proyecto.produccion){
                agregar(proyecto);
           }
        })

        return proyectos;
    }

    listas[tipo].innerHTML = proyectos();
}