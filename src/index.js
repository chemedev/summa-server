//? set env variables
const dotEnv = require('dotenv')
dotEnv.config()

//? imports
const cors = require('cors')
const express = require('express')

//? express
const app = express()
const PORT = process.env.PORT || 3001

//? middlewares
app.use(cors())
app.use(express.json())

//? routes
app.get('/', (_req, res) => res.send('Challenge API ready.'))
app.use('/companies', require('./routes/companies'))
// app.get('/employees', require('./routes/Employee'))

async function server() {
  try {
    await app.listen(PORT)
    console.log(`API running on http://localhost:${PORT}`)
  } catch (error) {
    console.error(error)
  }
}

server()
