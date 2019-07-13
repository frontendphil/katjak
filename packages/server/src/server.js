// @flow
import path from 'path'

import compression from 'compression'
import express from 'express'

const { PORT = 8080 } = process.env

const app = express()
app.use(compression())

console.log('App launched in: ', __dirname)

app.use(
  '/build',
  express.static(path.join(__dirname, '..', '..', 'client', 'build'))
)

app.get('/*', (req, res) =>
  res.sendFile(
    path.resolve(__dirname, '..', '..', 'client', 'build', 'index.html')
  )
)

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`)
})
