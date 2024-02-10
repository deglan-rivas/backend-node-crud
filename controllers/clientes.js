import { deleteModel } from "mongoose"
import { clientesModel } from "../models/clientes.js" 

export const agregarCliente = async (req, res, next) => {
  // console.log(req.body)
  // res.send('Gaaa')

  const cliente = new clientesModel(req.body)

  try {
    await cliente.save()
    res.json({ mensaje: 'se agregó nuevo cliente correctamente'})
  } catch (error) {
    console.log(`error: ${error}`)
    next()
  }
}

export const mostrarClientes = async (req, res, next) => {
  try {
    const clientes = await clientesModel.find({})
    res.json(clientes)
  } catch (error) {
    console.log(`error: ${error}`)
    next()
  }
}

export const filtrarCliente = async (req, res, next) => {
  try {
    const { id } = req.params
    // let clienteFiltrado
    // const clienteFiltrado = await clientesModel.findOne({_id: id})
    const clienteFiltrado = await clientesModel.findById(id)
    if (!clienteFiltrado) {
      res.json({mensaje: `no existe ese cliente con id ${id}`})
      // next()
      return
    }
    res.json(clienteFiltrado)
    // console.log('funciona la ruta xd')
    // console.log(req)
  } catch (error) {
    console.log(`error: ${error}`)
    next()
  }
}