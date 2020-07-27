'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PedidosSchema extends Schema {
  up () {
    this.table('pedidos', (table) => {
      table.string('entregado',50).notNullable()
    })
  }

  down () {
    this.table('pedidos', (table) => {
      // reverse alternations
    })
  }
}

module.exports = PedidosSchema
