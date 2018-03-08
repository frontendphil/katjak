// @flow
import React from 'react'

import { defaultStyle } from '../higher-order'
import { Markdown, Headline } from '../components'
import { xs } from '../media'

import Social from '../social'

import content from './content.md'

function Contact({ style }) {
  return (
    <div id="contact">
      <Headline xlarge>Contact</Headline>

      <div {...style('content')}>
        <Markdown>{content}</Markdown>

        <Social />
      </div>
    </div>
  )
}

const styled = defaultStyle({
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    ...xs({
      flexDirection: 'column',
    }),
  },
})

export default styled(Contact)
