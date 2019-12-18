'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//aqui van las rutas
var user_routes = require('./routes/users');


//configuracion de bodyparser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//configurar cabeceras

//rutas base
app.use('/api',user_routes);


module.exports = app;