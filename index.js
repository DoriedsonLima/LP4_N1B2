//biblioteca js para mapeamento das pastas do server.js
require('rootpath')();

//inicializa o node express
var express=require('express');
//bibliotexa parse de mensagens requisitadas que contem JSON
var bodyParser=require('body-parser');

//carrega configurações a partir do config.json
var config = require('config.json');

//criação da API
var api = express();

//decoder para parametros passados pela url
api.use(bodyParser.urlencoded({extended:false}));
//biblioteca para receber as requisições em json
api.use(bodyParser.json());

//api.use('/api'); //continuar aqui - programar API 

//Porta para api
var apiPort = 8092;

//inicia servidor para api "ouvir a porta especificada" 
var serverApi = api.listen(apiPort, function(){
    console.log('Server API listening at http://' + serverApi.address().address + ':' + serverApi.address().port);
})
