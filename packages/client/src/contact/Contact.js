// @flow
import React from 'react'

import { defaultStyle } from '../higher-order'
import { Markdown } from '../components'

import Social from '../social'

import content from './content.md'

function Contact({ style }) {
  return (
    <div {...style('content')} id="contact">
      <Markdown>{content}</Markdown>

      <div {...style('social')}>
        <Social />
      </div>
    </div>
  )
}

const styled = defaultStyle({
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    textAlign: 'center',
  },

  social: {
    marginTop: 100,
  },
})

export default styled(Contact)
