// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import { StylesAsDataAttributes } from 'substyle-glamor'

import { Router, Switch, Route } from 'react-router'

import createHistory from 'history/createBrowserHistory'

import 'flexboxgrid/dist/flexboxgrid.min.css'
// import 'skeleton-css/css/skeleton.css'

import SplashScreen from './SplashScreen'
import App from './App'

const history = createHistory()

ReactDOM.render(
  <StylesAsDataAttributes>
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={SplashScreen} />
          <Route path="/content" component={App} />
        </Switch>
      </div>
    </Router>
  </StylesAsDataAttributes>,
  document.getElementById('root')
)