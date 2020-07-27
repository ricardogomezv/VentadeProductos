'use strict'

const Client = use('App/Models/Client');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with products
 */
class ClientController {
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
    //return await Product.all();
    let clients = await Client.all();
    console.log(clients.row);
    return view.render('Clientes/client',{clients: clients.rows})
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
    let clients = await Client.all();
    return view.render('Clientes/createC',{clients: clients.rows})
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

    const client = new Client()
    client.nombre = request.input('nombre')
    client.apellido = request.input('apellido')
    client.email= request.input('email')
    client.telefono = request.input('telefono')
    client.direccion = request.input('direccion')
    client.rfc = request.input('rfc')

    console.log(client);

    await client.save();
    return response.redirect('/client')
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
    const cliente = await Client.find(params.id);
    return view.render('client', {client:cliente})
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
    let cliente = await Client.find(params.id);
    //return view.render('Productos.edit', {product:edit})
    return view.render('/Clientes/editC', {cliente});
   
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
    let cliente = await Client.find(params.id);
    cliente.nombre = request.input('nombre')
    cliente.apellido = request.input('apellido')
    cliente.email= request.input('email')
    cliente.telefono = request.input('telefono')
    cliente.direccion = request.input('direccion')
    cliente.rfc = request.input('rfc')
   
    console.log(cliente);

    await cliente.save();
    return response.redirect('/client')

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
    const cliente = await Client.find(params.id);
    cliente.delete();
    return response.redirect('back')
  }
}

module.exports = ClientController
