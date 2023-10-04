# Nodepop
Webside and API application

## Install
```npm install: Este comando se utiliza para instalar todas las dependencias definidas en el archivo package.json. Después de clonar un proyecto o después de que alguien agregue nuevas dependencias al proyecto, debes ejecutar este comando para instalar esas dependencias.

npm install nodemon --save-dev: Instala nodemon como una dependencia de desarrollo. nodemon es una herramienta que reinicia automáticamente el servidor Node.js cuando se detectan cambios en el código, lo que facilita el desarrollo.

"dev": "DEBUG=myapp:* nodemon ./bin/www": Esto define un script personalizado llamado "dev" en el archivo package.json. Cuando ejecutas npm run dev, se inicia el servidor Node.js con nodemon y también se configura la variable de entorno DEBUG para habilitar la depuración.

npm i cross-env: se utiliza para instalar el paquete cross-env como una dependencia de desarrollo en tu proyecto de Node.js. El paquete cross-env es útil cuando necesitas establecer variables de entorno de manera consistente en diferentes plataformas (Windows, Linux, macOS) y sistemas de shell.

El comando `cross-env DEBUG=myapp:* nodemon ./bin/www` combina el uso de dos paquetes, `cross-env` y `nodemon`, para iniciar una aplicación Node.js con un entorno de depuración activado.
```
## En produccion
```
npm start 
```

## En desarrollo
```
npm run dev
```
## API Endpoints

### Ruta para manejar la solicitud: GET /api/anuncio
### Devuelve una lista de todos los anuncios

```
json
{
    "_id": "651c258308673af420c805b5",
    "nombre": "Portátil HP",
    "venta": true,
    "precio": 599.99,
    "foto": "ordenador-portatil-hp-15s-fq2161ns.jpg",
    "tags": [
    "work",
    "lifestyle",
    "mobile"
]
}
```
