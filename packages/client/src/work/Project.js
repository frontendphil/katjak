// @flow
import React from 'react'

import { defaultStyle } from '../higher-order'
import { xs } from '../media'

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

  ...xs({
    flexWrap: 'wrap',

    padding: padding.normal,
  }),

  time: {
    width: 100,

    ...xs({
      width: '50%',
    }),
  },

  company: {
    width: 150,

    paddingLeft: padding.normal,
    paddingRight: padding.normal,

    ...xs({
      width: '50%',
    }),
  },

  content: {
    flexGrow: 1,

    width: 'calc(100% - 250px)',

    textTransform: 'uppercase',

    textOverflow: 'ellipsis',
    overflow: 'hidden',

    paddingLeft: padding.normal,
    paddingRight: padding.normal,

    ...xs({
      width: 'auto',

      paddingLeft: 0,
      paddingRight: 0,

      paddingTop: padding.normal,
    }),
  },
}))

export default styled(Project)
