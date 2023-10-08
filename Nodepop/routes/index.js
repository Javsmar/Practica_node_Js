var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    // Obtén los parámetros de consulta de la URL
    const nombre = req.query.nombre;
    const id = req.query.id;
    const precio = req.query.precio;

    // Realiza la solicitud a la API de anuncios
    const response = await axios.get('http://localhost:3000/api/anuncio');
    let anuncios = response.data.results;

    // Aplica los filtros si se proporcionan

if (nombre) {
  anuncios = anuncios.filter(anuncio => anuncio.nombre && anuncio.nombre.toLowerCase().includes(nombre.toLowerCase()));
}

    if (id) {
      anuncios = anuncios.filter(anuncio => anuncio._id === id);
    }

    if (precio) {
      anuncios = anuncios.filter(anuncio => anuncio.precio === parseFloat(precio));
    }

    res.render('index', {
      title: 'Nodepop',
      anuncios: anuncios
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;


