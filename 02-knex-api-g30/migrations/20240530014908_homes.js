/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable('homes').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('homes', function (table) {
        table.increments('house_id').primary()
        table.string('title').notNullable()
        table.text('description')
        table.integer('guest')
        table.text('address')
        table.decimal('rental_price', 12, 2)
        table.boolean('active').notNullable().defaultTo(true)
        table.timestamp('created_at').defaultTo(knex.fn.now())
      })
    }
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.hasTable('homes').then(function (exists) {
    if (exists) {
      return knex.schema.dropTable('homes')
    }
  })
}

/* GUÍA DE USO RÁPIDO DE KNEX */

// ** CREAR UNA MIGRACIÓN **
// knex migrate:make nombre_de_la_migracion
// Esto crea una carpeta llamada migrations en la raíz del proyecto y dentro de ella un archivo JS con el nombre de la migración.

// ** EJECUTAR LAS MIGRACIONES (EXPORTS.UP) **
// Al ejecutar una migración sobre exports.up estamos creando o modificando la tabla en la base de datos.
// Ejecutar las migraciones (up): knex migrate:latest
// Ejecutar una migración específica (up): knex migrate:up nombre_de_la_migracion.js (ejemplo: knex migrate:up 20240530014908_homes.js)

// ** DESHACER LAS MIGRACIONES (EXPORTS.DOWN) **
// Al ejecutar una migración sobre exports.down estamos deshaciendo el cambio realizo por exports.up en la base de datos.
// Deshacer la última migración (down): knex migrate:rollback
// Deshacer una migración específica: knex migrate:down nombre_de_la_migracion.js (ejemplo: knex migrate:down 20240530014908_homes.js)
