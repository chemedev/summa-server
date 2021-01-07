const cors = require('cors')
const express = require('express')

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

app.get('/', (_req, res) => res.send('Challenge API ready.'))
// app.get('/companies', require('./routes/Company'))
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
