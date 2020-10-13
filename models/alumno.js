'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AlumnoSchema = Schema({
    nombre:String,
    apellido:String,
    edad:Number,
    hobbie:String
});

module.exports = mongoose.model('alumnos',AlumnoSchema);