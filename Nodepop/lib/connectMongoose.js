const mongoose = require('mongoose');

mongoose.connection.on('error', err => {
    console.log('Error de conexión', err)
});

mongoose.connection.once('open', () => {
    console.log('Conectado en mongodb en', mongoose.connection.name);
})

mongoose.connect('mongodb://127.0.0.1/dbnodepop')

module.exports = mongoose.connection;