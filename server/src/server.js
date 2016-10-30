// @flow
import express from 'express'

const app = express()

app.use(express.static(`${__dirname}/static`))

app.listen(8080, () => {
  console.log('App running on port 8080')
})
