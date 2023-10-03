const mongoose = require('mongoose');

//Definimos el schema de los anuncios
const anuncioSchema = mongoose.Schema({
    name: String,
    sale: Boolean,
    price: Number,
    photo: String,
    tags: [String]
});


// Creamos el modelo de anuncio
const Anuncio = mongoose.model('Anuncio', anuncioSchema)



//Exportamos el modelo de anuncio
module.exports = Anuncio;