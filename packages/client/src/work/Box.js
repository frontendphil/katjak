// @flow
import React from 'react'
import { withHandlers, withState, compose } from 'recompose'

import { defaultStyle, omitProps } from '../higher-order'

function Box({ style, image, title, ...rest }) {
  return (
    <div {...rest} {...style}>
      <img {...style('image')} src={image} alt={title} />

      <div {...style('title')}>{title}</div>
    </div>
  )
}

export default compose(
  withState('hover', 'toggleHover', false),
  withHandlers({
    onMouseOver: ({ toggleHover }) => () => toggleHover(true),
    onMouseOut: ({ toggleHover }) => () => toggleHover(false),
  }),
  defaultStyle(
    ({ colors, font }) => ({
      position: 'relative',
      display: 'flex',

      justifyContent: 'center',
      alignItems: 'center',

      width: 150,
      height: 150,

      filter: 'grayscale(1)',

      transitionProperty: 'filter',
      transitionDuration: '0.5s',

      title: {
        position: 'absolute',
        display: 'flex',

        alignItems: 'center',
        justifyContent: 'center',

        bottom: 0,

        fontSize: font.size.small,

        height: 0,
        width: '100%',

        backgroundColor: 'white',

        overflow: 'hidden',

        transitionProperty: 'height',
        transitionDuration: '0.5s',
      },

      image: {
        maxWidth: '100%',
        maxHeight: '100%',
      },

      '&hover': {
        filter: 'grayscale(0)',

        title: {
          height: 30,
        },
      },
    }),
    ({ hover }) => ({
      '&hover': hover,
    })
  ),
  omitProps(['hover', 'toggleHover'])
)(Box)
