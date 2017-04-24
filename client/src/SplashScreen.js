// @flow
import React from 'react'

import { Headline, Link } from './components'

import { Window, Link as Win95Link } from './win95'

export default function SplashScreen() {
  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}
    >
      <Headline xlarge>
        <Link to="content/about">
          <b>katja</b>kuchenbecker
        </Link>
      </Headline>

      <Window
        header="Welcome"
        buttons={
          <Win95Link to="content/about">
            Enter
          </Win95Link>
        }
      >
        Let's get started :D
      </Window>
    </div>
  )
}
