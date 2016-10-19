// @flow
import React from 'react'
import { compose, mapProps } from 'recompose'
import realSubstyle from 'substyle'

import { defaultStyle, provideTheme } from '../higher-order'

import Link from './Link'

const substyle = (...args) => ({ ...realSubstyle(...args) })

function Menu({ activeStyle, ...rest }) {
  return (
    <div { ...rest }>
      <Link { ...substyle(rest, 'link') } to="/projects" activeStyle={ activeStyle }>
        Projects
      </Link>

      <Link { ...substyle(rest, 'link') } to="/about" activeStyle={ activeStyle }>
        About
      </Link>

      <Link { ...substyle(rest, 'link') } to="/contact" activeStyle={ activeStyle }>
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
