'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PedidosSchema extends Schema {
  up () {
    this.create('pedidos', (table) => {
      table.increments()
      table.date('fecha')
      table.integer('cantidad')
      table.integer('producto_id').unsigned().references('id').inTable('productos')
      table.integer('cliente_id').unsigned().references('id').inTable('clientes')
      table.float('total', 2)
      table.timestamps()
    })
  }

  down () {
    this.drop('pedidos')
  }
}

module.exports = PedidosSchema
