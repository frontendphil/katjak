// @flow
import React from 'react'

import { Markdown, Headline } from '../components'

import content from './content.md'

export default function About() {
  return (
    <div id="about">
      <Headline xlarge>About</Headline>
      <Markdown>{content}</Markdown>
    </div>
  )
}
