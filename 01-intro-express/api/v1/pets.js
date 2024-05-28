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

/* QUERY */
// Query URL: /api/v1/pets?age=6&type=dog
// Son similares a Params, pero se suelen usar para filtrar o buscar información. Sobre todo para mandar más de un dato.
// Las Querys son abiertas, no definimos cuántas ni cuáles van a venir.
// La responsabilidad del backend es SOLO tomar en cuenta las querys que le interesan.

router.get('/api/v1/pets', (req, res) => {
    const { age, type } = req.query;

    const filteredPets = petList.pets.filter(pet => {
        return (age ? pet.age === parseInt(age) : true) && (type ? pet.type === type : true);
    });
    res.send(filteredPets);
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