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
  justifyContent: 'flex-end',
  alignItems: 'flex-end',

  paddingRight: 50,
  paddingBottom: 50,

  height: 300,

  backgroundImage: `url(${require('../assets/hero2.jpg')})`,
  backgroundPosition: '50%',
  backgroundSize: 'cover',
})

export default styled(Hero)
