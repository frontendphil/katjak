// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import { StylesAsDataAttributes } from 'substyle-glamor'

import 'flexboxgrid/dist/flexboxgrid.min.css'

import App from './RedactedApp'

ReactDOM.render(
  <StylesAsDataAttributes>
    <App />
  </StylesAsDataAttributes>,
  document.getElementById('root')
)
