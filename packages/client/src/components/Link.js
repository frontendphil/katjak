// @flow
import * as React from 'react'
import { Link } from 'react-router-dom'
import { compose } from 'recompose'

import { defaultStyle } from '../higher-order'

type PropsT = {
  children: React.Node,
}

function AppLink({ children, style, ...rest }: PropsT) {
  return (
    <Link {...rest} {...style}>
      {children}
    </Link>
  )
}

export default compose(
  defaultStyle(({ colors }) => ({
    borderBottom: '0 solid',
    textDecoration: 'none',

    color: colors.mono.ultradark,

    ':hover': {
      borderBottom: `1px solid ${colors.mono.ultradark}`,
    },
  }))
)(AppLink)
