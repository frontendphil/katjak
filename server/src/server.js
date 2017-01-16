// @flow
import express from 'express'
import path from 'path'

const { PORT = 8080 } = process.env

const app = express()

app.use('/static', express.static(path.join(__dirname, '..', 'static')))

app.get('/*', (req, res) => res.sendFile(path.join(__dirname, '..', 'static', 'index.html')))

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`)
})
