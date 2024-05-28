// #1 Llamar a la biblioteca de express (importarla)
const express = require('express');
const petsRouter = require('./api/v1/pets');

// #2 Crear y configurar una aplicación (instancia) de express
const app = express();
app.use(express.json()); // Decirle a express que vamos a usar JSON por defecto.
app.use(express.urlencoded({ extended: true })); // Esto sirve para que express pueda entender los datos que vienen de un formulario.

// #3 Crear o definir las rutas de mi servidor. (Endpoints)
app.get('/', (req, res) => {
  res.send({ mensaje: 'Hola Devf' });
});

app.use(petsRouter); // Importar las rutas de pets para ser usadas en el servidor.

// #4 Levantar el servidor en un puerto, por ejemplo el 3000.
app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000 🚀');
});