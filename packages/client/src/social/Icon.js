// @flow
import React from 'react'

import { Link } from '../components'
import { defaultStyle } from '../higher-order'

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

  container: {
    borderRadius: '50%',
    border: `1px solid ${colors.mono.lighter}`,

    padding: padding.normal,
    marginLeft: padding.normal,

    fontSize: 25,
  },

  icon: {
    color: color || colors.mono.lighter,
  },
}))

export default styled(Icon)
