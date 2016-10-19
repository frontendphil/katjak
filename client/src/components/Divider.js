// @flow
import React from 'react'
import { omit } from 'lodash'

import { defaultStyle } from '../higher-order'

function Divider(props) {
  return <div { ...omit(props, 'dense', 'normal', 'wide') } />
}

const styled = defaultStyle(({ colors, padding }) => ({
  height: 1,

  backgroundColor: colors.mono.light,

  '&dense': {
    marginTop: padding.small,
    marginBottom: padding.small,
  },

  '&normal': {
    marginTop: padding.normal,
    marginBottom: padding.normal,
  },

  '&wide': {
    marginTop: padding.large,
    marginBottom: padding.large,
  }
}), ({ dense, normal, wide }) => ({
  '&dense': dense,
  '&normal': normal || (!dense && !wide),
  '&wide': wide,
}))

export default styled(Divider)
