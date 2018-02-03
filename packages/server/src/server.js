// @flow
import express from 'express'
import path from 'path'

const { PORT = 8080 } = process.env

const app = express()

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
