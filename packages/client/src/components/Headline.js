// @flow
import * as React from 'react'
import { compose } from 'recompose'

import { defaultStyle, omitProps } from '../higher-order'

type PropsT = {
  children: React.Node,

  small?: boolean,
  normal?: boolean,
  large?: boolean,
  xlarge?: boolean,
}

function Headline({ children, style, ...rest }: PropsT) {
  return <div {...style}>{children}</div>
}

export default compose(
  defaultStyle(
    ({ font, padding }) => ({
      fontFamily: font.family.headline,
      fontWeight: 400,
      fontStyle: 'italic',

      '&small': {
        fontSize: 20,

        paddingLeft: 15,
      },

      '&normal': {
        fontSize: 25,

        paddingLeft: 15,
      },

      '&large': {
        fontSize: 30,

        paddingLeft: 15,
      },

      '&xlarge': {
        fontSize: 40,

        marginBottom: padding.large,
      },
    }),
    ({ small, normal, large, xlarge }: PropsT) => ({
      '&small': small,
      '&normal': normal,
      '&large': large,
      '&xlarge': xlarge,
    })
  ),
  omitProps(['small', 'normal', 'large', 'xlarge'])
)(Headline)
