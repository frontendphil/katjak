// @flow
import React, { Element } from 'react'
import { Link } from 'react-router'

import { defaultStyle } from '../higher-order'

type PropsT = {
  children: Element,
};

function AppLink({ children, style, ...rest }: PropsT) {
  return (
    <Link { ...rest } { ...style }>
      { children }
    </Link>
  )
}

const styled = defaultStyle(({ colors }) => ({
  textDecoration: 'none',

  color: colors.mono.ultradark,

  ':hover': {
    textDecoration: 'underline',
  }
}))

export default styled(AppLink)
