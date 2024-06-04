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
const updateOneHome = (req, res) => {
  ModelHomes.update(req.params.idHome, req.body)
    .then(home => res.status(200).send(home))
    .catch(error => res.status(400).send(error.message))
}

// Delete
const destroyOneHome = (req, res) => {
  ModelHomes.destroy(req.params.idHome)
    .then(home => res.status(204).send())
    .catch(error => res.status(400).send(error.message))
}

const softDeleteOneHome = (req, res) => {
  ModelHomes.softDelete(req.params.idHome)
    .then(home => res.status(204).send())
    .catch(error => res.status(400).send(error.message))
}

module.exports = {
  createHome,
  findAllHomes,
  findOneHome,
  updateOneHome,
  destroyOneHome,
  softDeleteOneHome
}
