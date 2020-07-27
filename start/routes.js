'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('Productos/menu')
Route.get('product', 'ProductController.index') //muestra los productos
Route.get('client', 'ClientController.index')
Route.get('pedid', 'PedidController.index')

Route.get('product/:id', 'ProductController.show') //muestra un producto  requiere=find() y un id
Route.get('create', 'ProductController.create') //crea un producto  requiere=save()
Route.post('create', 'ProductController.store')
Route.get('editar/:id', 'ProductController.edit')
Route.post('edit/:id', 'ProductController.update')//edita un producto requiere=save()-id
Route.get('delete/:id', 'ProductController.destroy')  //eliminar producto reqiere=delete()-id

Route.get('client/:id', 'ClientController.show') //muestra un producto  requiere=find() y un id
Route.get('createC', 'ClientController.create') //crea un producto  requiere=save()
Route.post('createC', 'ClientController.store')
Route.get('editarC/:id', 'ClientController.edit')
Route.post('editC/:id', 'ClientController.update')//edita un producto requiere=save()-id
Route.get('deleteC/:id', 'ClientController.destroy')  //eliminar producto reqiere=delete()-id

Route.get('pedid/:id', 'PedidController.show') //muestra un producto  requiere=find() y un id
Route.get('createP', 'PedidController.create') //crea un producto  requiere=save()
Route.post('createP', 'PedidController.store')
Route.get('editarP/:id','PedidController.edit')
Route.post('editP/:id', 'PedidController.update')//edita un producto requiere=save()-id
Route.get('deleteP/:id', 'PedidController.destroy')  //eliminar producto reqiere=delete()-id