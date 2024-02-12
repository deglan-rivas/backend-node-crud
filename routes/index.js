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
  eliminarProducto
} from '../controllers/productos.js'

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

  

  return router
}