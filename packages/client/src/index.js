// @flow
import React from 'react'
import ReactDOM from 'react-dom'

import { Router, Switch } from 'react-router'
import { Route } from 'react-router-dom'

import createHistory from 'history/createBrowserHistory'

// import 'skeleton-css/css/skeleton.css'

import SplashScreen from './SplashScreen'
import App from './App'

const history = createHistory()

ReactDOM.render(
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={SplashScreen} />
        <Route path="/content" component={App} />
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
)
