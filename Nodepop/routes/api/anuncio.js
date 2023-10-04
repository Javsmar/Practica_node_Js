const express = require('express');
const router = express.Router();
const Anuncios = require('../../models/Anuncios'); // Importa el modelo de anuncios

// Ruta para manejar la solicitud: GET /api/anuncio
// Devuelve una lista de todos los anuncios
router.get('/', async (req, res, next) => {
    try {
        const anuncios = await Anuncios.find(); // Busca todos los anuncios en la base de datos
        res.json({
            results: anuncios // Devuelve los anuncios como respuesta en formato JSON
        });
    } catch (err) {
        next(err); // Si ocurre un error, pasa el control al siguiente middleware de manejo de errores
    }
});

// Ruta para manejar la solicitud: GET /api/anuncio/(id)
// Devuelve un anuncio específico por su ID
router.get('/:id', async (req, res, next) => {
    try {
        const id = req.params.id; // Obtiene el ID del anuncio de los parámetros de la URL
        const anuncio = await Anuncios.findById(id); // Busca un anuncio por su ID en la base de datos
        res.json({
            result: anuncio // Devuelve el anuncio encontrado como respuesta en formato JSON
        });
    } catch (err) {
        next(err); // Si ocurre un error, pasa el control al siguiente middleware de manejo de errores
    }
});

// Ruta para actulizar los anuncios: PUT /api/anuncio/(_id)
// Actualiza un anuncio
router.put('/:id', async (req, res, next) => {
    try {
        // Obtener el ID del anuncio a actualizar desde los parámetros de la URL
        const id = req.params.id;
        
        // Obtener los datos actualizados del anuncio desde el cuerpo de la solicitud (request body)
        const data = req.body;

        // Utilizar el método findByIdAndUpdate de Mongoose para buscar y actualizar el anuncio por su ID
        // El tercer parámetro { new: true } indica que se debe devolver el anuncio actualizado
        const anuncioActualizado = await Anuncios.findByIdAndUpdate(id, data, { new: true });

        // Responder con el resultado (anuncio actualizado) en formato JSON
        res.json({ result: anuncioActualizado });
    } catch (err) {
        // Manejar cualquier error que ocurra durante la actualización
        next(err);
    }
});

// Ruta para crear un anuncios: PUT /api/anuncio
// Devuelve un anuncio nuevo
router.post('/', async (req, res, next) => {
    try {
        const anuncioData = req.body;

        // Creamos instacia de anuncio en memoria
        const anuncio = new Anuncios(anuncioData)

        // Despues la peresistimos(Guardar) en Base de datos
        const anuncioGuardado = await anuncio.save();

        res.json({result: anuncioGuardado});

    } catch (err) {
        next(err);
    }
})




module.exports = router; // Exporta el enrutador para su uso en la aplicación Express
