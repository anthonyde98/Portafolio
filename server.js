const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// Paths 
const publicDirectoryPath = path.join(__dirname, '/public');
const viewsPath = path.join(__dirname, 'src/views');
const partialsPath = path.join(__dirname, 'src/partials'); 

// Definición del Path
app.use(express.static(publicDirectoryPath))

// Handlebars
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Routes
app.get("/", (req, res) => {
    res.render('index');
});

app.get("/about", (req, res) => {
    res.render('about')
});

app.get("/portfolio", (req, res) => {
    res.render('portfolio');
});

app.get("/download", (req, res) => {
    res.download('public/docs/CELL IT - TALENDIG - CV Anthony Peralta -v1.1.pdf')
})

app.get("**", (req, res) => {
    res.redirect('/')
});

app.listen(4000, () => {
    console.log('Server corriendo http://localhost:4000');
});
