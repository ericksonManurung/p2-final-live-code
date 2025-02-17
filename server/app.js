require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const routes = require('./routes')
const cors = require('cors')
const errorHandler = require('./middlewares/errorHandler')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(routes)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})