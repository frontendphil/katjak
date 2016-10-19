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

function Headline({ children, ...rest }: PropsT) {
  return (
    <div { ...omit(rest, 'small', 'normal', 'large') }>
      { children }
    </div>
  )
}

const styled = defaultStyle(({ font }) => ({
  fontFamily: font.family.headline,

  '&small': {
    fontSize: 20,
  },

  '&normal': {
    fontSize: 30,
    fontWeight: 100,
  },

  '&large': {
    fontSize: 40,
    fontWeight: 100,
  },
}), ({ small, normal, large }: PropsT) => ({
  '&small': small,
  '&normal': normal,
  '&large': large,
}))

export default styled(Headline)
