// Para crear archivos independientes con rutas, se debe seguir el siguiente proceso:

//1. Importar express y el router de express
const express = require('express');
const router = express.Router();

const petList = {
    "pets": [
        { "id": 1, "name": "Firulais", "age": 3, "type": "dog" },
        { "id": 2, "name": "Michi", "age": 2, "type": "cat" },
        { "id": 3, "name": "Scooby Doo", "age": 6, "type": "dog"}
    ]
}

// 2. Crear las rutas con el router

router.get('/api/v1/pets', (req, res) => {
    res.send(petList);
});

// 3. Exportar el router
module.exports = router;