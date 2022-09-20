const PROYECTOS = [
    {
        nombre: "Credit Scoring App",
        imagen: "credit.png",
        descripcion: "Aplicación web front-end para gestionar los puntajes de credito de los clientes del Banco Fihogar.",
        tecnologias: "Angular",
        github: "https://github.com/anthonyde98/credit-scoring-app-frontend",
        enlace: "https://credscoringapp.herokuapp.com/",
        produccion: true,
        entorno: "web",
        icon: "fad fa-tachometer-alt-fast",
        type: 'credit'
    },
    {
        nombre: "Contact List App",
        imagen: "contact.png",
        descripcion: "Aplicación web de lista de contactos, ésta está conectada con una aplicación móvil.",
        tecnologias: "Angular, Firebase",
        github: "https://github.com/anthonyde98/contact-list-webapp",
        enlace: "https://contact-list-web.herokuapp.com/",
        produccion: true,
        entorno: "web",
        icon: "fad fa-address-book",
        type: 'contact'
    },
    {
        nombre: "ToDo List App",
        imagen: "todo.png",
        descripcion: "Aplicación web para gestionar tareas, ésta está conectada con una aplicación móvil.",
        tecnologias: "Angular, Firebase",
        github: "https://github.com/anthonyde98/ToDoList",
        enlace: "https://todo-list-appwebb.herokuapp.com/",
        produccion: true,
        entorno: "web",
        icon: "fa-list-ul",
        type: 'todo'
    },
    {
        nombre: "Credit Scoring App mobile",
        imagen: "creditmobile.png",
        descripcion: "Aplicación móvil para mostrar los puntajes de credito de los clientes del Banco Fihogar.",
        tecnologias: "Angular, Ionic, Capacitor",
        github: "https://github.com/anthonyde98/cred-scoring-app-mobile-menu",
        enlace: "",
        produccion: false,
        entorno: "mobile",
        icon: ""
    },
    {
        nombre: "Contact List App mobile",
        imagen: "contactmobile.png",
        descripcion: "Aplicación móvil de lista de contactos.",
        tecnologias: "Angular, Ionic, Capacitor, Firebase",
        github: "https://github.com/anthonyde98/contact-list",
        enlace: "",
        produccion: false,
        entorno: "mobile",
        icon: ""
    },
    {
        nombre: "ToDo List App mobile",
        imagen: "todomobile.png",
        descripcion: "Aplicación móvil de lista de tareas.",
        tecnologias: "Angular, Ionic, Capacitor, Firebase",
        github: "https://github.com/anthonyde98/ToDo-list-mobile",
        enlace: "",
        produccion: false,
        entorno: "mobile",
        icon: ""
    },
    {
        nombre: "Tarea Word",
        imagen: "nodejsimage.png",
        descripcion: "Aplicación en nodejs para crear cartas o certificados usando un template y enviarlos por correo.",
        tecnologias: "Nodejs",
        github: "https://github.com/anthonyde98/Tarea-Word",
        enlace: "",
        produccion: false,
        entorno: "desktop",
        icon: ""
    },
    {
        nombre: "Registro de estudiantes",
        imagen: "estudiantes.png",
        descripcion: "Aplicación para gestionar un registro de estudiantes.",
        tecnologias: "HTML, JS, CSS",
        github: "https://github.com/anthonyde98/Ejercicio-estudiantes",
        enlace: "",
        produccion: false,
        entorno: "web",
        icon: ""
    },
    {
        nombre: "APIBooks",
        imagen: "apibook.png",
        descripcion: "API para gestionar libros.",
        tecnologias: "ASP.Net, C#",
        github: "https://github.com/anthonyde98/APIBooks",
        enlace: "",
        produccion: false,
        entorno: "config",
        icon: ""
    },
    {
        nombre: "Credit Scoring API",
        imagen: "api.jpg",
        descripcion: "API o backend para gestionar y evaluar la data proporcionada por el CORE del Banco Fihogar.",
        tecnologias: "Nodejs, Express, MongoDB",
        github: "https://github.com/Nizar4790k/cred-scoring-app-backend",
        enlace: "",
        produccion: true,
        entorno: "config",
        icon: ""
    },
    {
        nombre: "Books Application",
        imagen: "book.png",
        descripcion: "Aplicación web frontend para gestionar libros.",
        tecnologias: "Angular",
        github: "https://github.com/anthonyde98/books-application",
        enlace: "",
        produccion: false,
        entorno: "web",
        icon: ""
    },
    {
        nombre: "Tarea Final Clientes-Paises",
        imagen: "cp.png",
        descripcion: "Aplicación web tipo CRUD de clientes y paises.",
        tecnologias: "ASP.Net, Sql Server, Razor",
        github: "https://github.com/anthonyde98/TareaFinal",
        enlace: "",
        produccion: false,
        entorno: "web",
        icon: ""
    },
    {
        nombre: "Aplicacion de elecciones",
        imagen: "elecciones.png",
        descripcion: "Aplicación web para mostrar la información electoral de un grupo de personas.",
        tecnologias: "Angular, Firebase",
        github: "https://github.com/anthonyde98/info-eleccion-uasd",
        enlace: "",
        produccion: false,
        entorno: "web",
        icon: ""
    },
    {
        nombre: "Blue Chat",
        imagen: "chat.png",
        descripcion: "Aplicación móvil de chat.",
        tecnologias: "Angular, Ionic, Capacitor, Firebase",
        github: "https://github.com/anthonyde98/blue-chat",
        enlace: "",
        produccion: false,
        entorno: "mobile",
        icon: ""
    },
    {
        nombre: "Film Magic",
        imagen: "film.png",
        descripcion: "Aplicación para gestionar tienda de renta de peliculas.",
        tecnologias: "C#, Sql Server",
        github: "https://github.com/anthonyde98/FilmMagic",
        enlace: "",
        produccion: false,
        entorno: "desktop",
        icon: ""
    },
    {
        nombre: "Prestamos App",
        imagen: "prestamos.png",
        descripcion: "Aplicación para gestionar prestamos.",
        tecnologias: "C#, Sql Server",
        github: "https://github.com/anthonyde98/Proyectos-CSharp/tree/master/Proyecto%20Prestamos",
        enlace: "",
        produccion: false,
        entorno: "desktop",
        icon: ""
    },
    {
        nombre: "Manejo de viajes - Gestión de libreria",
        imagen: "vl.png",
        descripcion: "Aplicación para gestionar un aeropuerto y una tienda de libros.",
        tecnologias: "C#, Sql Server",
        github: "https://github.com/anthonyde98/Proyectos-CSharp/tree/master/Proyecto%20Viajes%20-%20Tienda",
        enlace: "",
        produccion: false,
        entorno: "desktop",
        icon: ""
    },
    {
        nombre: "Login",
        imagen: "loginphp.png",
        descripcion: "Una app para manejar el logueo de usuarios.",
        tecnologias: "PHP, MySQL",
        github: "https://github.com/anthonyde98/Proyectos-Web/tree/master/Proyecto%20Login",
        enlace: "",
        produccion: false,
        entorno: "web",
        icon: ""
    },
    {
        nombre: "Creación de facturas",
        imagen: "javac.jpg",
        descripcion: "Una app para crear facturas.",
        tecnologias: "Java",
        github: "https://github.com/anthonyde98/Proyectos-Java/tree/master/Proyecto%20Facturas",
        enlace: "",
        produccion: false,
        entorno: "desktop",
        icon: ""
    },
    {
        nombre: "Manejo de participantes",
        imagen: "javac.jpg",
        descripcion: "Una app para manejar participantes.",
        tecnologias: "Java",
        github: "https://github.com/anthonyde98/Proyectos-Java/tree/master/Proyecto%20Participantes",
        enlace: "",
        produccion: false,
        entorno: "desktop",
        icon: ""
    },
    {
        nombre: "Proyectos en PowerShell",
        imagen: "power.png",
        descripcion: "Apps realizadas en PowerShell: correos, procesos, calculadora y subida de archivos a la nube.",
        tecnologias: "PowerShell",
        github: "https://github.com/anthonyde98/Proyectos-PowerShell",
        enlace: "",
        produccion: false,
        entorno: "desktop",
        icon: ""
    },
    {
        nombre: "Manejo de empleados",
        imagen: "empleados.png",
        descripcion: "Aplicación web tipo CRUD de empleados.",
        tecnologias: "Angular, Firebase",
        github: "https://github.com/anthonyde98/Empleado",
        enlace: "",
        produccion: false,
        entorno: "web",
        icon: ""
    },
    {
        nombre: "API Ventas",
        imagen: "api.jpg",
        descripcion: "API que maneja la manipulación de datos de una base de datos de ventas de productos.",
        tecnologias: "ASP.Net, Sql Server",
        github: "https://github.com/anthonyde98/APIVentas",
        enlace: "",
        produccion: false,
        entorno: "config",
        icon: ""
    },
    {
        nombre: "Food Shot",
        imagen: "food.png",
        descripcion: "Juego sobre un granjero que debe de alimentar animales disparandole comida antes que lleguen a el.",
        tecnologias: "Unity, C#",
        github: "https://github.com/anthonyde98/Food-Shot",
        enlace: "",
        produccion: false,
        entorno: "desktop",
        icon: ""
    },
]

export {
    PROYECTOS
};