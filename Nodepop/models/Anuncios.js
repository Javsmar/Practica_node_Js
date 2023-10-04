const mongoose = require('mongoose');

//Definimos el schema de los anuncios
const anuncioSchema = mongoose.Schema({
    nombre: String,
    venta: Boolean,
    precio: Number,
    foto: String,
    tags: [String]
});

// Metodo statico 
anuncioSchema.statics.lista = function(filtro, skip, limit, sort, fields){
    const query = Anuncio.find(filtro); // devuelve un objeto de tipo query que es un thenable
    query.skip(skip);
    query.limit(limit);
    query.sort(sort);
    query.select(fields);//Para añadirlo a la query ponemos select
    return query.exec();
}

// Creamos el modelo de anuncio
const Anuncio = mongoose.model('Anuncio', anuncioSchema)



//Exportamos el modelo de anuncio
module.exports = Anuncio;