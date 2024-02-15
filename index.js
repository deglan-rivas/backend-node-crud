import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

import routes from './routes/index.js'

const app = express()

app.use(express.json());
app.use(express.urlencoded())

const whitelist = [process.env.FRONTEND_URL]
// console.log('whitelist', whitelist)
// (origin, callback) => {
//   if (whitelist.includes(origin)) {
//     callback(null, true)
//   } else {
//     console.log('origin:', origin, 'not allowed')
//     callback(new Error('Not allowed by CORS'))
//   }
// }
app.use(cors({
  origin: '*'
}))
// DE MOMENTO no funciona la whitelist con netlify :c fácil algo enmascara ese www. de netlify
  // origin: whitelist
// Guía 2022 para habilitar cors: https://www.workfall.com/learning/blog/how-to-configure-cors-in-node-js-with-express/
// methods: "POST,PUT,DELETE",
// origin: ['https://www.workfall.com', 'https://www.google.com'],
// origin: 'http://localhost:5173',

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

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

// const HOST = process.env.HOST || '0.0.0.0'
const PORT = process.env.PORT || '5000'
app.listen(PORT, () => console.log(`servidor arrancado en puerto ${PORT}`))

conectarDB()
// console.log(process.env.MONGODB_CONNECTION_STRING)