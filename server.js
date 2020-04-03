const express = require('express');
const app = express();


const hbs = require('hbs');
require('./hbs/helpers');

const port = process.allowedNodeEnvironmentFlags.PORT || 3000;


app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

// helpers 



app.get('/', function(req, res) {

    res.render('home', {
        adejtivo: 'Guapa',
    });

});

app.get('/about', function(req, res) {
    res.render('about');
});






app.listen(port, () => {

    console.log(`Escuchando peticiones en el puerto ${ port }`);
});