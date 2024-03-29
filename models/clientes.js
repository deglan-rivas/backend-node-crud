import mongoose from "mongoose";

const Schema = mongoose.Schema

const clientesSchema = new Schema({
  nombre: {
    type: String,
    trim: true
  },
  apellido: {
    type: String,
    trim: true
  },
  empresa: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    lowercase: true
  },
  telefono: {
    type: String,
    trim: true
  }
})

const clientesModel = mongoose.model('Clientes', clientesSchema)

export {
  clientesModel
}