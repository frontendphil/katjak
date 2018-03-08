// @flow
import React from 'react'

import { Link } from '../components'
import { defaultStyle } from '../higher-order'
import { xs } from '../media'

function Icon({ kind, image, link, style }) {
  return (
    <Link {...style} to={link} target="_blank" rel="noopener">
      <div {...style('container')}>
        <div {...style('icon')} className={`socicon-${kind}`} />
      </div>
    </Link>
  )
}

const styled = defaultStyle(({ colors, padding }, { color }) => ({
  textDecoration: 'none',
  cursor: 'pointer',

  ':hover': {
    borderBottom: '0px solid',
  },

  container: {
    borderRadius: '50%',
    border: `1px solid ${colors.mono.lighter}`,

    padding: padding.normal,
    marginLeft: padding.normal,

    fontSize: 25,

    ...xs({
      padding: padding.small,
      margin: padding.small,

      fontSize: 15,
    }),
  },

  icon: {
    color: color || colors.mono.lighter,
  },
}))

export default styled(Icon)
