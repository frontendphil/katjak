// @flow
import React from 'react'

import { Link } from '../components'
import { defaultStyle } from '../higher-order'
import { xs } from '../media'

function Icon({ kind, image, link, style }) {
  return (
    <Link {...style} to={link} target="_blank" rel="noopener">
      <div {...style('container')}>
        <div {...style('icon')} />
      </div>
    </Link>
  )
}

const styled = defaultStyle(({ colors, padding }, { color, image }) => ({
  textDecoration: 'none',
  cursor: 'pointer',

  ':hover': {
    borderBottom: '0px solid',
  },

  container: {
    display: 'flex',

    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: '50%',

    width: 32,
    height: 32,

    backgroundColor: '#ed4a57',

    fontSize: 25,

    ...xs({
      padding: padding.small,

      fontSize: 15,
    }),
  },

  icon: {
    width: 24,
    height: 24,

    backgroundSize: 'contain',
    backgroundImage: `url(${image})`,
  },
}))

export default styled(Icon)
