'use strict'

const Pedid = use('App/Models/Pedid');
const Product = use('App/Models/Product');
const Client = use('App/Models/Client');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with products
 */
class PedidController {
  /**
   * Show a list of all products.
   * GET products
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    //let products = await Product.all();
    //return await Product.all();
    let pedids = await Pedid.query().with('productos').with('clientes').fetch();
    console.log(pedids.toJSON());
    return view.render('Pedidos/pedid',{pedids: pedids.toJSON()})
  }

  /**
   * Render a form to be used for creating a new product.
   * GET products/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    let products = await Product.all();
    let clients = await Client.all();
    //let pedids = await Pedid.all();
    return view.render('Pedidos/createP',{products: products.toJSON(), clients:clients.toJSON()})
  }

  /**
   * Create/save a new product.
   * POST products
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    //const nombre = request.input('nombre')
    //const precio = request.input('precio')
   // const existencia = request.input('existencia')

    const pedid = new Pedid()
    pedid.fecha = request.input('fecha')
    pedid.cantidad = request.input('cantidad')
    pedid.producto_id = request.input('producto_id')
    pedid.cliente_id = request.input('cliente_id')
    pedid.total = request.input('total')
    pedid.entregado = request.input('entregado')

    console.log(pedid);

    await pedid.save();
    return response.redirect('/pedid')
  }

  /**
   * Display a single product.
   * GET products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const pedido = await Pedid.find(params.id);
    return view.render('pedid', {pedid:pedido})
  }

  /**
   * Render a form to update an existing product.
   * GET products/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    let pedido = await Pedid.find(params.id);
    let products = await Product.all();
    let clients = await Client.all();
    return view.render('/Pedidos/editP',{products: products.toJSON(), clients:clients.toJSON(), pedido});
    //return view.render('Productos.edit', {product:edit})
    //return view.render(, {pedido});
   
  }

  /**
   * Update product details.
   * PUT or PATCH products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    let pedido = await Pedid.find(params.id);
    pedido.fecha = request.input('fecha')
    pedido.cantidad = request.input('cantidad')
    pedido.producto_id = request.input('producto_id')
    pedido.cliente_id = request.input('cliente_id')
    pedido.total = request.input('total')
    pedido.entregado = request.input('entregado')
   
    console.log(pedido);

    await pedido.save();
    return response.redirect('/pedid')

  }

  /**
   * Delete a product with id.
   * DELETE products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response, view }) {
    const pedido = await Pedid.find(params.id);
    pedido.delete();
    return response.redirect('back')
  }
}

module.exports = PedidController
