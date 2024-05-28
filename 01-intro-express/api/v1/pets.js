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

/* PARAMS */
// Obtener parámetros de la URL (dinámicos)
// Params: /api/v1/pets/:petId
// Los : en la ruta quiere decir que es un PARAM, y su valor es dinámico.
router.get('/api/v1/pets/:petId', (req, res) => {
    // console.log(req.params.petId);
    // Recorrer el arreglo de pets y devolver la pet que coincida con el id
    const onePet = petList.pets.find(pet => pet.id === parseInt(req.params.petId));
    // Si la id del pet existe, devolvera un objeto (truthy), si no existe devolvera undefined (falsy)
    onePet
      ? res.status(200).send(onePet)
      : res.status(404).send({ message: 'Pet not found' });
});

// 3. Exportar el router
module.exports = router;