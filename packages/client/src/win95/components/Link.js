// @flow
import React from 'react'

import { defaultStyle } from '../../higher-order'
import { Link as OriginalLink } from '../../components'

import Bevel from './Bevel'

function Link({ style, children, ...rest }) {
  return (
    <Bevel style={style}>
      <OriginalLink {...rest}>{children}</OriginalLink>
    </Bevel>
  )
}

export default defaultStyle(({ padding }) => ({
  display: 'inline-block',

  cursor: 'pointer',

  content: {
    paddingLeft: padding.large,
    paddingRight: padding.large,

    textAlign: 'center',
  },
}))(Link)
