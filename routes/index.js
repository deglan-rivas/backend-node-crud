import express from 'express' 
import { 
  agregarCliente,
  mostrarClientes
 } from '../controllers/clientes.js'

const router = express.Router()

export default function () {
  router.post('/clientes', agregarCliente)
  router.get('/clientes', mostrarClientes)

  return router
}