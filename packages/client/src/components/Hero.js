// @flow
import React from 'react'

import { defaultStyle } from '../higher-order'

function Hero({ style, children }) {
  return <div {...style}>{children}</div>
}

const styled = defaultStyle({
  position: 'relative',
  display: 'flex',

  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',

  paddingLeft: '33%',

  height: 300,

  backgroundImage: `url(${require('../assets/hero.jpg')})`,
  backgroundPosition: '50%',
  backgroundSize: 'cover',
})

export default styled(Hero)
