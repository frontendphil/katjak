// @flow
import React from 'react'

import { defaultStyle } from '../../higher-order'

function Bevel({ style, children }) {
  return (
    <div { ...style }>
      <div { ...style('content') }>
        { children }
      </div>
    </div>
  )
}

export default defaultStyle(({ padding }) => ({
  borderTop: '2px solid #d7d7d7',
  borderLeft: '2px solid #d7d7d7',

  borderRight: '2px solid #000',
  borderBottom: '2px solid #000',

  backgroundColor: '#b3b3b3',

  content: {
    borderTop: '2px solid #fff',
    borderLeft: '2px solid #fff',

    borderRight: '2px solid #6d6d6d',
    borderBottom: '2px solid #6d6d6d',
  },
}))(Bevel)
