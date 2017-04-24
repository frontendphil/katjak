// @flow
import React from 'react'

import { Headline, Link } from './components'

export default function SplashScreen() {
  return (
    <Headline
      xlarge
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}
    >
      <Link to="content/about">
        <b>katja</b>kuchenbecker
      </Link>
    </Headline>
  )
}
