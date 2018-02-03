// @flow
import express from 'express'
import path from 'path'

const { PORT = 8080 } = process.env

const app = express()

app.use(
  '/build',
  express.static(path.join(process.env.PWD, '..', 'client', 'build'))
)

app.get('/*', (req, res) =>
  res.sendFile(
    path.resolve(process.env.PWD, '..', 'client', 'build', 'index.html')
  )
)

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`)
})
