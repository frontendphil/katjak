// @flow
import React from 'react'

import { defaultStyle } from '../../higher-order'

import { Clearfix } from '../../components'

import Bevel from './Bevel'

function Window({ children, header, buttons, style }) {
  return (
    <Bevel>
      <div {...style('header')}>{header}</div>

      <div {...style('content')}>
        {children}

        <div {...style('buttons')}>{buttons}</div>

        <Clearfix />
      </div>
    </Bevel>
  )
}

export default defaultStyle(({ padding }) => ({
  content: {
    padding: padding.small,
  },

  buttons: {
    float: 'right',

    marginTop: 30,
  },

  header: {
    background: 'linear-gradient(to right, #00006f 0%, #0a6cc8 100%)',

    color: 'white',

    paddingLeft: padding.small,
  },
}))(Window)
