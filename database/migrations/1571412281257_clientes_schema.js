'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClientesSchema extends Schema {
  up () {
    this.table('clientes', (table) => {
      table.string('direccion',100).notNullable()
      table.string('rfc',50).notNullable()
    })
  }

  down () {
    this.table('clientes', (table) => {
      // reverse alternations
    })
  }
}

module.exports = ClientesSchema
