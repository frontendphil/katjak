// @flow
import React from 'react'

import { Markdown, Headline } from '../components'

import content from './content.md'

export default function About() {
  return (
    <div>
      <Headline xlarge>Social</Headline>
      <Markdown>{content}</Markdown>
    </div>
  )
}
