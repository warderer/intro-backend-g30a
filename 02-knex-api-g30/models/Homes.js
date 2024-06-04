/* MODELO */
// El modelo trae los datos de la base de datos.
// NO se encarga de validar datos ni resolver promesas,
// eso es trabajo del Controlador en MVC.

// Paso #1 Necesito traer la configuración del entorno de knex y su información de conexión a la base de datos.
const knex = require('../config')

// Paso #2 Crear una función que me permita traer todos los registros de la tabla homes.
const create = (bodyHome) => {
  return knex
    .insert(bodyHome) // ¿Qué datos voy a insertar? { title: 'Casa de playa', address: 'Calle 123', price: 1000000 }
    .into('homes') // ¿En qué tabla? - homes
    .returning(['house_id', 'title', 'description', 'guest', 'address', 'rental_price', 'active', 'created_at']) // ¿Qué quiero que me devuelva? - Todos los campos de la tabla homes.
}

const findAll = () => {
  return knex
    .select('*') // * equivale a todos los campos de la tabla.
    .from('homes')
    .where('active', true) // traemos solo los campos que no hayamos hecho soft delete.
}

const findOne = (houseId) => {
  return knex
    .select(['house_id', 'title', 'description', 'guest', 'address', 'rental_price', 'active', 'created_at'])
    .from('homes')
    .where('house_id', houseId)
    .where('active', true)
}

const update = (houseId, bodyToUpdate) => {
  return knex
    .update(bodyToUpdate) // La información a actualizar.
    .from('homes')
    .where('house_id', houseId) // A qué registro le voy a hacer update.
    .returning(['house_id', 'title', 'description', 'guest', 'address', 'rental_price', 'active', 'created_at']) // ¿Qué quiero que me devuelva? - Todos los campos de la tabla homes.
}

// Voy a borrar un registro de manera real de la base de datos en la
const destroy = (houseId) => {
  return knex
    .delete()
    .from('homes')
    .where('house_id', houseId)
}

// Borrado lógico: Solo cambio active de true a false.
const softDelete = (houseId) => {
  return knex
    .update({ active: false })
    .from('homes')
    .where('house_id', houseId)
}

// Paso #3 Exportar mis funciones para que sean accesibles desde el controlador.
module.exports = {
  create,
  findAll,
  findOne,
  update,
  destroy,
  softDelete
}
