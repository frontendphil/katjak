// @flow
import * as React from 'react'
import { Switch, Route } from 'react-router'

import { PageHeader, Divider } from './components'

import Contact from './contact'
import About from './about'

import './main.css'

type PropsT = {}

function App({ match }: PropsT) {
  return (
    <div className="container">
      <PageHeader />

      <Divider />

      <Switch>
        <Route path={`${match.url}/contact`} component={Contact} />
        <Route path={`${match.url}/about`} component={About} />
      </Switch>
    </div>
  )
}

export default App
