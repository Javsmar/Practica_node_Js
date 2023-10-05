var express = require('express');
var router = express.Router();
const axios = require('axios');
const { response } = require('../app');

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const response = await axios.get('http://localhost:3000/api/anuncio');
    const anuncios = response.data.results;
    
    res.render('index', {
      title: 'Nodepop',
      anuncios: anuncios
    })
  } catch (err) {
      next(err)
  }
});


module.exports = router;

