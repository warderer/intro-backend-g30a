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
const findAllHomes = (req, res) => {
  ModelHomes.findAll().then((home) => {
    res.status(200).send(home)
  })
    .catch((error) => {
      res.status(400).send(error.message)
    })
}

const findOneHome = (req, res) => {
  ModelHomes.findOne(req.params.idHome).then((home) => {
    res.status(200).send(home)
  })
    .catch((error) => {
      res.status(400).send(error.message)
    })
}

// Update

// Delete

module.exports = {
  createHome,
  findAllHomes,
  findOneHome
}
