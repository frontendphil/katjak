// @flow
import * as React from 'react'

import { PageHeader, Divider, Hero, Headline } from './components'

import Work from './work'
import About from './about'
import Contact from './contact'
import Social from './social'

import './main.css'

type PropsT = {}

function App({ match }: PropsT) {
  return (
    <div className="container">
      <Hero>
        <Headline xlarge>Katja Kuchenbecker</Headline>
        <img src={require('./assets/banner.gif')} />
      </Hero>

      <PageHeader />

      <Divider />

      <Work />
      <About />
      <Contact />
      <Social />
    </div>
  )
}

export default App
