const express = require('express');
const router = express.Router();
const Anuncios = require('../../models/Anuncios'); // Importa el modelo de anuncios



// Ruta para manejar la solicitud: GET /api/anuncio
// Devuelve una lista de todos los anuncios
/**
 * @openapi
 * /api/anuncio:
 *  get:
 *   description: Devuelve una lista de todos los anuncios
 *   responses:
 *    200:
 *     descriptions: devuelve json
 */
router.get('/', async (req, res, next) => {
    try {
        // Obtén el valor del parámetro de consulta 'nombre' de la solicitud
        const filterByNombre = req.query.nombre;
        // Obtén el valor del parámetro de consulta 'precio' de la solicitud
        const filterByPrecio = req.query.precio;

        // Paginación
        const skip = req.query.skip;
        const limit = req.query.limit;

        // Ordenación (se ordena por orden asendente y -1 para desendente  )
        const sort = req.query.sort;

        // SEleccion de campos fields selections
        const fields = req.query.fields;

        // Crea un objeto vacío para el filtro
        const filtro = {};

        // Verifica si 'nombre' está presente en la consulta
        if (filterByNombre) {
            // Si 'nombre' está presente, establece el campo 'nombre' en el filtro
            filtro.nombre = { $regex: `^${filterByNombre}`, $options: 'i' };;
        }

        if(filterByPrecio) {
            filtro.precio = filterByPrecio;
        }

        // Usa el método 'lista' definido en el modelo 'Anuncios' para buscar anuncios con el filtro
        const anuncios = await Anuncios.lista(filtro, skip, limit, sort, fields);

        // Devuelve la lista de anuncios encontrados como respuesta en formato JSON
        res.json({
            results: anuncios
        });
    } catch (err) {
        // Si ocurre un error, pasa el control al siguiente middleware de manejo de errores
        next(err);
    }
});


// Ruta para manejar la solicitud: GET /api/anuncio/(id)
// Devuelve un anuncio específico por su ID

/**
 * @openapi
 * /api/anuncio/id:
 *  get:
 *   description: Devuelve una lista de todos los anuncios por id
 *   responses:
 *    200:
 *     descriptions: devuelve json
 */

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

/**
 * @openapi
 * /api/anuncio/id
 *  put:
 *   description: Actualiza  los anuncios
 *   responses:
 *    200:
 *     descriptions: devuelve json
 */

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

// Ruta para crear un anuncios: Post /api/anuncio
// Devuelve un anuncio nuevo

/**
 * @openapi
 * /api/anuncio/id
 *  post:
 *   description: crea un nuevo anuncios
 *   responses:
 *    200:
 *     descriptions: devuelve json
 */

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
    };
});

// Ruta para borrar un anuncios: DELETE /api/anuncio/(id)
// ELImina un anuncio

router.delete('/:id', async (req, res, next) => {
    try {
        
        const id = req.params.id;
        await Anuncios.deleteOne({_id: id});

        res.json();

    } catch (error) {
        next(err);
    }
});



module.exports = router; 
