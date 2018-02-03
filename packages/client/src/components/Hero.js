// @flow
import React from 'react'

import { defaultStyle } from '../higher-order'

function Hero({ style, children }) {
  return <div {...style}>{children}</div>
}

const styled = defaultStyle({
  display: 'flex',

  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  height: 300,

  backgroundImage: `url(${require('../assets/hero.jpg')})`,
})

export default styled(Hero)
