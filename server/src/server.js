// @flow
import express from 'express'
import path from 'path'

const { PORT = 8080 } = process.env

const cwd = process.cwd()

const app = express()

app.use('/static', express.static(path.join('..', 'static')))

app.get('/*', (req, res) => res.sendFile(path.join('..', 'static', 'index.html')))

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`)
})
