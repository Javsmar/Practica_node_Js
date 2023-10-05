'use strict';

// Importar el módulo readline para interactuar con la consola
const readline = require('node:readline')

// Importar la conexión a la base de datos y el modelo de Anuncio
const connection = require('./lib/connectMongoose');
const Anuncio = require('./models/Anuncios');
const initData = require('./init-db-data.json');

// Importar módulos adicionales
const { rejects } = require('node:assert');
const { stdout } = require('node:process');

// Función principal asincrónica
async function main (){

    // Espero a que se conecte a la base de datos
    await new Promise(resolve => connection.once('open', resolve));

    // Confirmar si se debe borrar la base de datos y cargar datos iniciales
    const borrar = await confirmar('¿Está seguro de borrar la base de datos y cargar datos iniciales?');

    if(!borrar){
        process.exit();
    }

    // Inicializar la colección de anuncios
    await initAnuncios();

    // Cerrar la conexión a la base de datos
    connection.close();
}

// Función asincrónica para inicializar la colección de anuncios
async function initAnuncios(){
    // Borrar todos los documentos de la colección de anuncios
    const deleted = await Anuncio.deleteMany();
    console.log(`Eliminados ${deleted.deletedCount} anuncios`);

    // Después, crear anuncios iniciales
    const inserted = await Anuncio.insertMany(initData.anuncios);
    console.log(`Creados ${inserted.length} anuncios`)
};

// Función para confirmar acciones en la consola
function confirmar(text){
    return new Promise((resolve, rejects) => {
        // Conectar readline con la consola
        const interfac = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        interfac.question(text, respuesta => {
            interfac.close();
            resolve(respuesta.toLocaleLowerCase() === 'si');
        })
    });
}

// Ejecutar la función principal
main().catch(err => console.log('Hubo un error', err));
