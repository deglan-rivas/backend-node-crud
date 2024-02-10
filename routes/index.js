import express from 'express' 
import { 
  agregarCliente,
  mostrarClientes,
  filtrarCliente,
  actualizarCliente,
  eliminarCliente
 } from '../controllers/clientes.js'

const router = express.Router()

export default function () {
  router.post('/clientes', agregarCliente)
  router.get('/clientes', mostrarClientes)
  router.get('/clientes/:id', filtrarCliente)
  router.put('/clientes/:_id', actualizarCliente)
  router.delete('/clientes/:_id', eliminarCliente)

  return router
}