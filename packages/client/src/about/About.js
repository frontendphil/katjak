// @flow
import React from 'react'

import { Markdown, Headline } from '../components'

import content from './content.md'

export default function About() {
  return (
    <div>
      <Headline xlarge>About</Headline>
      <Markdown>{content}</Markdown>
    </div>
  )
}
