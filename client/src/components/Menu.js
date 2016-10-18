// @flow
import React from 'react'
import realSubstyle from 'substyle'

import { defaultStyle } from '../higher-order'

import Link from './Link'

const substyle = (...args) => ({ ...realSubstyle(...args) })

function Menu(props) {
  return (
    <div className="row">
      <div className="three columns">
        <Link { ...substyle(props, 'link') } to="/about">
          About
        </Link>
      </div>
    </div>
  )
}

const styled = defaultStyle(({ font }) => ({
  link: {
    fontFamily: font.family.headline,
    textAlign: 'center',
  },
}))

export default styled(Menu)
