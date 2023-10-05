const auth = require('basic-auth'); // Importa el módulo 'basic-auth' para manejar la autenticación básica

module.exports = (req, res, next) => {
    const user = auth(req); // Intenta obtener las credenciales de autenticación del encabezado 'Authorization' de la solicitud

    // Comprueba si no hay credenciales o si las credenciales no coinciden con 'admin' y '1234'
    if (!user || user.name !== 'admin' || user.pass !== '12345') {
        res.set('WWW-Authenticate', 'Basic realm=Authorization required'); // Establece el encabezado 'WWW-Authenticate' para solicitar autenticación básica
        res.sendStatus(401); // Envía una respuesta con estado 401 (No autorizado)
        return;
    }

    next(); // Si las credenciales son válidas, permite que la solicitud continúe al siguiente middleware o controlador
}
