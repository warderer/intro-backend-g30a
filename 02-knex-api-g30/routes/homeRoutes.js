// 1. Importar express y el router de express
const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeControllers')

// 2. Crear las rutas con el router
router.post('/homes', homeController.createHome)
router.get('/homes', homeController.findAllHomes)
router.get('/homes/:idHome', homeController.findOneHome)
router.patch('/homes/:idHome', homeController.updateOneHome)
router.delete('/homes/:idHome', homeController.softDeleteOneHome)
router.delete('/homes/destroy/:idHome', homeController.destroyOneHome)

// 3. Exportar el router
module.exports = router
