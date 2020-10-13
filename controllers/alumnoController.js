'use strict'

const alumno = require('../models/alumno');
var Alumno = require('../models/alumno');

var controller = {
    home:function(req,res){
        return res.status(200).send({
            message:'Home Alumno'
        });
    },
    test:function(req,res){
        return res.status(200).send({
            message:'Método de test del controlador'
        });
    },
    saveAlumno:function(req,res){
        var alumno = new Alumno();
        var params = req.body;
        alumno.nombre = params.nombre;
        alumno.apellido = params.apellido;
        alumno.edad = params.edad;
        alumno.hobbie = params.hobbie;

        alumno.save((err,alumnoStored)=>{
            if(err)
                return res.status(500).send({message:'Error al guardar'});
            if(!alumnoStored)
                return res.status(400).send({message:'No se ah podido guardar el alumno'});
            return res.status(200).send({alumno:alumnoStored});
        });
    },
    getAlumno:function(req,res){
        var alumnoId = req.params.id;

        if(alumnoId==null) res.status(404).send({message:'El alumno no existe'});

        Alumno.findById(alumnoId,(err,al)=>{
            if(err) return res.status(500).send({message:'Error al devolver datos'});

            if(!al) return res.status(404).send({message:'El alumno no existe'});

            return res.status(200).send({alumno:al});
        })
    },
    listar:function(req,res){
        Alumno.find({}).exec((err,alumnos)=>{
            if(err) return res.status(500).send({message:'Error al devolver datos'});
            
            if(alumnos.length==0) return res.status(404).send({message:'No hay alumnos que mostrar'});

            return res.status(200).send({alumnos});

        })
    }
}
module.exports = controller;