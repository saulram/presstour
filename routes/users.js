'use strict'
var express = require('express');
var express = require ('express');
var UserController = require('../controllers/users');
var api = express.Router();

api.get('/probando-controlador',UserController.pruebas);

module.exports = api;

