// @flow
import * as React from 'react'

import { PageHeader, Divider, Hero } from './components'

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
        <p>KATJA KUCHENBECKER</p>
        <p>
          <span
            style={{
              backgroundColor: 'red',
              color: 'white',
              padding: 10,
              fontStyle: 'italic',
            }}
          >
            Creative development & social media
          </span>
        </p>
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
