// @flow
import React from 'react'
import { compose } from 'recompose'

import { defaultStyle } from '../higher-order'

import Link from './Link'

function Menu({ activeStyle, style, ...rest }) {
  return (
    <div {...style} {...rest}>
      <div {...style('link')}>
        <Link href="#work">Work</Link>
      </div>

      <div {...style('link')}>
        <Link href="#about">About</Link>
      </div>

      <div {...style('link')}>
        <Link href="#contact">Contact</Link>
      </div>
    </div>
  )
}

export default compose(
  defaultStyle(({ font, padding }) => ({
    display: 'flex',

    link: {
      fontFamily: font.family.headline,
      textAlign: 'center',
      textTransform: 'uppercase',

      marginRight: padding.large,
    },
  }))
)(Menu)
