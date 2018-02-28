// @flow
import React from 'react'

import { defaultStyle } from '../higher-order'
import { Markdown, Headline, Divider } from '../components'

import since2016 from './since_2016.md'
import f2014t2016 from './2014-2016.md'
import f2013t2014 from './2013-2014.md'
import y2013 from './2013.md'
import y2010 from './2010.md'

function About({ style }) {
  return (
    <div id="about">
      <Headline xlarge>About</Headline>

      <div {...style('container')}>
        <div {...style('section')}>
          <Markdown>{since2016}</Markdown>
        </div>

        <div {...style('section')}>
          <Markdown>{f2014t2016}</Markdown>
        </div>

        <div {...style('section')}>
          <Markdown>{f2013t2014}</Markdown>
        </div>

        <div {...style('section')}>
          <Markdown>{y2013}</Markdown>

          <Divider />

          <Markdown>{y2010}</Markdown>
        </div>
      </div>
    </div>
  )
}

const styled = defaultStyle(({ padding }) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  section: {
    width: `calc(50% - ${padding.normal}px)`,

    backgroundColor: 'rgba(237, 74, 87, 0.1)',

    padding: padding.large,
    marginBottom: padding.large,

    borderRadius: 20,
  },
}))

export default styled(About)
