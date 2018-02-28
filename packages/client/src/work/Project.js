// @flow
import React from 'react'

import { defaultStyle } from '../higher-order'

function Project({ time, company, project, children, style }) {
  return (
    <div {...style}>
      <div {...style('time')}>{time}</div>
      <div {...style('company')}>{company}</div>

      <div {...style('content')}>
        {children} {project ? `(${project})` : null}
      </div>
    </div>
  )
}

const styled = defaultStyle(({ padding }) => ({
  display: 'flex',

  paddingBottom: padding.normal,

  time: {
    width: 100,
  },

  company: {
    width: 150,

    paddingLeft: padding.normal,
    paddingRight: padding.normal,
  },

  content: {
    flexGrow: 1,

    width: 'calc(100% - 250px)',

    textTransform: 'uppercase',

    textOverflow: 'ellipsis',
    overflow: 'hidden',

    paddingLeft: padding.normal,
    paddingRight: padding.normal,
  },
}))

export default styled(Project)
