'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Pedid extends Model {
    static get table(){
        return 'pedidos'
    }
    productos(){
        return this.belongsTo('App/Models/Product', 'producto_id')
    }
    
    clientes(){
        return this.belongsTo('App/Models/Client', 'cliente_id')
    }
}



module.exports = Pedid
