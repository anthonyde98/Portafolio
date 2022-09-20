const btnToTop = document.getElementById('btnToTop');
const btn = btnToTop.getElementsByTagName('button')[0];
const anchors = document.getElementById('header').getElementsByTagName('a');

onscroll = () => {
    scrollTop();
    editarFondoMenuHeader();
}

onload = () => {
    getpath();
}

const getpath = () => {
    let path = location.pathname;
    path = path.slice(1);
    opcionMenuHeaderSelected(path === "" ? "index" : path)
}

const opcionMenuHeaderSelected = (path) => {
    let rutaPosicion = {
        index: 1,
        portfolio: 2,
        about: 3
    } 

    anchors[rutaPosicion[path]].style.backgroundColor = "white";
    anchors[rutaPosicion[path]].style.color = "black";
    anchors[rutaPosicion[path]].style.borderRadius = "5px";
    anchors[rutaPosicion[path]].style.boxShadow = "0 2px 3px rgba(0, 0, 0, 0.7)";

}

btn.addEventListener("click", () => {
    goTo(0);
})

const editarFondoMenuHeader = () => {
    const convertir = (type) => {
        anchors[0].style.color = type === 'grey' ? 'black' : 'white';
        for(let i = 1; i < anchors.length; i++){
            anchors[i].style.backgroundColor = type;
            anchors[i].style.borderRadius = "5px"
        }
    }
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        convertir('grey')
    } else {
        convertir('transparent')
    }

    getpath();
}

const scrollTop = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btnToTop.style.display = "block";
    } else {
        btnToTop.style.display = "none";
    }
}

const goTo = (direccionY) => {
    document.body.scrollTop = direccionY; 
    document.documentElement.scrollTop = direccionY;
}