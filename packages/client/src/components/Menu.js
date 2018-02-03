// @flow
import React from 'react'
import { compose } from 'recompose'

import { defaultStyle } from '../higher-order'

import Link from './Link'

function Menu({ activeStyle, style, ...rest }) {
  return (
    <div {...style} {...rest}>
      <div {...style('link')}>
        <Link to="/content/projects">Projects</Link>
      </div>

      <div {...style('link')}>
        <Link to="/content/about">About</Link>
      </div>

      <div {...style('link')}>
        <Link to="/content/contact">Contact</Link>
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

      marginRight: padding.large,
    },
  }))
)(Menu)
