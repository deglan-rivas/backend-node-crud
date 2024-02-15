import express from 'express' 
import { 
  agregarCliente,
  mostrarClientes,
  filtrarCliente,
  actualizarCliente,
  eliminarCliente
} from '../controllers/clientes.js'
import { 
  subirArchivo,
  nuevoProducto,
  mostrarProducto,
  mostrarProductos,
  actualizarProducto,
  eliminarProducto,
  buscarProducto
} from '../controllers/productos.js'
import { 
  nuevoPedido,
  mostrarPedidos,
  mostrarPedido,
  actualizarPedido,
  eliminarPedido
} from '../controllers/pedidos.js'

const router = express.Router()

export default function () {
  router.post('/clientes', agregarCliente)
  router.get('/clientes', mostrarClientes)
  router.get('/clientes/:id', filtrarCliente)
  router.put('/clientes/:_id', actualizarCliente)
  router.delete('/clientes/:_id', eliminarCliente)

  router.post('/productos', 
        subirArchivo,
        nuevoProducto
    );
  router.get('/productos', mostrarProductos);
  router.get('/productos/:idProducto', mostrarProducto);
  router.put('/productos/:idProducto', 
      subirArchivo,
      actualizarProducto
  );
  router.delete('/productos/:idProducto', eliminarProducto);
  router.post('/productos/busqueda/:query', buscarProducto)

  router.post('/pedidos/nuevo/:idUsuario', nuevoPedido);
  router.get('/pedidos', mostrarPedidos);
  router.get('/pedidos/:idPedido', mostrarPedido);
  router.put('/pedidos/:idPedido', actualizarPedido);
  router.delete('/pedidos/:idPedido', eliminarPedido);

  return router
}