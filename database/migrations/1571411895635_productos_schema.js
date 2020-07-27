'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductosSchema extends Schema {
  up () {
    this.table('productos', (table) => {
      table.string('codigo', 50).notNullable()
    })
  }

  down () {
    this.table('productos', (table) => {
      // reverse alternations
    })
  }
}

module.exports = ProductosSchema
