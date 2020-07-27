'use strict'

const Product = use('App/Models/Product');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with products
 */
class ProductController {
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
    let products = await Product.all();
    console.log(products.row);
    return view.render('Productos/product',{products: products.rows})
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
    return view.render('Productos/create',{products: products.rows})
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

    const product = new Product()
    product.nombre = request.input('nombre')
    product.precio = request.input('precio')
    product.existencia = request.input('existencia')
    product.codigo = request.input('codigo')

    console.log(product);

    await product.save();
    return response.redirect('/product')
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
    const producto = await Product.find(params.id);
    return view.render('product', {product:producto})
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
    let producto = await Product.find(params.id);
    //return view.render('Productos.edit', {product:edit})
    return view.render('/Productos/edit', {producto});
   
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
    let producto = await Product.find(params.id);
    producto.nombre = request.input('nombre')
    producto.precio = request.input('precio')
    producto.existencia = request.input('existencia')
    producto.codigo = request.input('codigo')
   
    console.log(producto);

    await producto.save();
    return response.redirect('/product')

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
    const producto = await Product.find(params.id);
    producto.delete();
    return response.redirect('back')
  }
}

module.exports = ProductController
