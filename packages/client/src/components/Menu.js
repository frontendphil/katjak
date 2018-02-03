// @flow
import React from 'react'
import { compose, mapProps } from 'recompose'

import { defaultStyle, provideTheme } from '../higher-order'

import Link from './Link'

function Menu({ activeStyle, style, ...rest }) {
  return (
    <div { ...style } { ...rest }>
      <Link style={ style('link') } to="/content/projects" activeStyle={ activeStyle }>
        Projects
      </Link>

      <Link style={ style('link') } to="/content/about" activeStyle={ activeStyle }>
        About
      </Link>

      <Link style={ style('link') } to="/content/contact" activeStyle={ activeStyle }>
        Contact
      </Link>
    </div>
  )
}

export default compose(
  defaultStyle(({ font, padding }) => ({
    link: {
      fontFamily: font.family.headline,
      textAlign: 'center',

      marginRight: padding.large,
    },
  })),
  provideTheme,
  mapProps(({ theme: { colors, padding }, ...rest }) => ({
    ...rest,

    activeStyle: {
      borderBottom: `1px solid ${colors.mono.ultradark}`,
      paddingBottom: padding.small,
    },
  }))
)(Menu)
