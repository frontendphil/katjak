// @flow
import React, { Element } from 'react'
import { omit } from 'lodash'

import { defaultStyle } from '../higher-order'

type PropsT = {
  children: Element,

  small: boolean,
  normal: boolean,
  large: boolean,
};

function Headline({ children, style, ...rest }: PropsT) {
  return (
    <div { ...omit(rest, 'small', 'normal', 'large', 'xlarge') } { ...style }>
      { children }
    </div>
  )
}

const styled = defaultStyle(({ font }) => ({
  fontFamily: font.family.headline,
  fontWeight: 100,

  '&small': {
    fontSize: 20,

    paddingLeft: 15,

    borderLeft: '4px solid #a7dbe8',
  },

  '&normal': {
    fontSize: 25,

    paddingLeft: 15,

    borderLeft: '4px solid #c9de85',
  },

  '&large': {
    fontSize: 30,

    paddingLeft: 15,

    borderLeft: '4px solid #f0cc84',
  },

  '&xlarge': {
    fontSize: 40,
  },
}), ({ small, normal, large, xlarge }: PropsT) => ({
  '&small': small,
  '&normal': normal,
  '&large': large,
  '&xlarge': xlarge,
}))

export default styled(Headline)
