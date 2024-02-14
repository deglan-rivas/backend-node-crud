import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

import routes from './routes/index.js'

const app = express()

app.use(express.json());
app.use(express.urlencoded())

app.use(cors({
  origin: '*',
  methods: "GET,POST,PUT,DELETE",
}))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', routes())

app.use(express.static('uploads'));

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