// @flow
import React from 'react'

import { defaultStyle } from '../higher-order'
import { xs } from '../media'

import hero from '../assets/hero.jpg'

function Hero({ style, children }) {
  return <div {...style}>{children}</div>
}

const styled = defaultStyle(({ padding }) => ({
  position: 'relative',
  display: 'flex',

  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',

  paddingLeft: '33%',

  height: 300,

  backgroundImage: `url(${hero})`,
  backgroundPosition: '50%',
  backgroundSize: 'cover',

  ...xs({
    alignItems: 'center',
    justifyContent: 'flex-end',

    paddingLeft: padding.normal,
    paddingRight: padding.normal,
    paddingBottom: padding.normal,

    backgroundPosition: 'initial',
  }),
}))

export default styled(Hero)
