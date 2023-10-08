const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const options = {
    swaggerDefinition: {
        info:{
            tittle: 'Nodeapp',
            version: '0.1',
            description: 'API de Anuncios'
        }
    },
    apis:['./routes/**/*.js']
}

const especificacion = swaggerJSDoc(options);

module.exports = [swaggerUI.serve, swaggerUI.setup(especificacion)];