var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.locals.anuncios = [
    {
      "nombre": "Portátil HP",
      "venta": true,
      "precio": 599.99,
      "foto": "ordenador-portatil-hp-15s-fq2161ns.jpg",
      "tags": ["work", "lifestyle", "mobile"]
    },
    {
      "nombre": "Bicicleta de Montaña",
      "venta": true,
      "precio": 249.99,
      "foto": "bicicleta-de-montana-29-xr-trail-900-24v-portada.jpg",
      "tags": ["lifestyle", "motor"]
    },
    {
      "nombre": "iPhone 12 Pro",
      "venta": true,
      "precio": 999.99,
      "foto": "apple_iphone-12.jpg",
      "tags": ["mobile"]
    },
    {
      "nombre": "Herramientas de Jardín",
      "venta": true,
      "precio": 89.99,
      "foto": "herramientas de jardin.jpg",
      "tags": ["motor"]
    },
    {
      "nombre": "Escritorio de Oficina",
      "venta": true,
      "precio": 199.99,
      "foto": "escritorio.jpg",
      "tags": ["work", "lifestyle"]
    },
    {
      "nombre": "PlayStation 5",
      "venta": true,
      "precio": 499.99,
      "foto": "playstation-5.jpg",
      "tags": ["lifestyle", "mobile"]
    },
    {
      "nombre": "Motorbike Yamaha",
      "venta": true,
      "precio": 2999.99,
      "foto": "yamaha-SR500.jpg",
      "tags": ["motor"]
    }
  ]

  

  res.render('index');
});




module.exports = router;

