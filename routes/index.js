import express from 'express' 
import { 
  agregarCliente,
  mostrarClientes,
  filtrarCliente
 } from '../controllers/clientes.js'

const router = express.Router()

export default function () {
  router.post('/clientes', agregarCliente)
  router.get('/clientes', mostrarClientes)
  router.get('/clientes/:id', filtrarCliente)

  return router
}