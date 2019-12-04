var express = require('express');
var app= express();

app.get('/', function (req, res) {
  res.send('Hola Mundo!');
})

app.listen(3000, function (err) {
  if (err) {
    return console.log('Hubo un error'), process.exit(1);
  }
  
  console.log('Kratosgram escuchando en el puerto 3000');
})



// Express.JS es una libreria que permite crear microframeworks web, para hacer servidores web de forma sencilla. 
// Lo corrimos con NPM, el popular gestor de paquetes (como Bower.js y duo.js).