'use strict'

var express = require('express');
var AlumnoController = require('../controllers/AlumnoController');

var router = express.Router();

router.get('/home',AlumnoController.home);
router.post('/test',AlumnoController.test);
router.post('/registrar',AlumnoController.saveAlumno);
router.get('/buscar/id?',AlumnoController.getAlumno);
router.get('/listar',AlumnoController.listar);

module.exports = router;