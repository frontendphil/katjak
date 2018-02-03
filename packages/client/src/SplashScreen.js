// @flow
import React from 'react'
import { defaultStyle } from './higher-order'

import { Headline } from './components'

function SplashScreen({ style }) {
  return (
    <div {...style}>
      <Headline xlarge>
        <b>katja</b>kuchenbecker
      </Headline>
    </div>
  )
}

const styled = defaultStyle({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',

  height: '100%',
})

export default styled(SplashScreen)
