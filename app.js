'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var rutas = require('./rutas/alumnoRuta');

//cargar archivos

//middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//rutas
app.use('/alum',rutas);


app.get('/', (req, res)=>{
    res.status(200).send(
        "<h1>Pagina de Inicio</h1>"
    )
})

module.exports=app;