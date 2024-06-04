/* CONTROLADORES */
// Los controladores tienen la lógica de negocio de la aplicación.

// Importar el modelo que voy a usar - Homes
const ModelHomes = require('../models/Homes')

// Create
const createHome = (req, res) => {
  ModelHomes.create(req.body).then((home) => {
    res.status(201).send(home)
  })
    .catch((error) => {
      res.status(400).send(error.message)
    })
}

// Read

// Update

// Delete

module.exports = {
  createHome
}
