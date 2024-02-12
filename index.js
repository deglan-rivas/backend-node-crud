import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

import routes from './routes/index.js'

const app = express()

app.use(express.json());
app.use(express.urlencoded())
app.use('/', routes())

const conectarDB = async () => {
  try {
    mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
    console.log('conexión exitosa')
  } catch (error) {
    console.log(`error encontrado ${error}`)
  }
}

let PORT = '5000'
app.listen(PORT, () => console.log(`servidor arrancado en puerto ${PORT}`))

conectarDB()
// console.log(process.env.MONGODB_CONNECTION_STRING)