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