'use strict'

var mongoose = require('mongoose')
var app = require('./app.js');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/GOVEA_FLORES')
    .then(()=>{
        console.log("Conexión a la base de datos establecida con éxito");

        app.listen(port,()=>{
            console.log("Servidor levantado en: localhost:"+port);
        })
            
    }).catch(err=>console.error(err));