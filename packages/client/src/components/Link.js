// @flow
import * as React from 'react'
import { Link } from 'react-router-dom'

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

const styled = defaultStyle(({ colors }) => ({
  textDecoration: 'none',

  color: colors.mono.ultradark,

  ':hover': {
    textDecoration: 'underline',
  },
}))

export default styled(AppLink)
