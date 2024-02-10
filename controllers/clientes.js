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
    // console.log(clientes)
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

export const actualizarCliente = async (req, res, next) => {
  try {
    // console.log(req)
    const filter = req.params
    const nuevoCliente = req.body
    const clienteViejo = await clientesModel.findOneAndUpdate(filter, nuevoCliente)
    // console.log(clienteViejo)
    if (!clienteViejo) {
      res.json({mensaje: `no se encontró un cliente con ese filtro ${JSON.stringify(filter)}`})
      return
    }
    res.json({mensaje: 'cliente actualizado correctamente'})
  } catch (error) {
    console.log(`error: ${error}`)
    next()
  }
}

export const eliminarCliente = async (req, res, next) => {
  try {
    const filter = req.params
    // console.log(filter)
    const ga = await clientesModel.findOneAndDelete(filter)
    // console.log(ga)
    res.json({mensaje: 'cliente eliminado correctamente'})
  } catch (error) {
    console.log(`error: ${error}`)
    next()
  }
}