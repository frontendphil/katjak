// @flow
import React from 'react'

import { Markdown, Headline } from '../components'

import content from './content.md'

export default function Contact() {
  return (
    <div>
      <Headline xlarge>Contact</Headline>
      <Markdown>{content}</Markdown>
    </div>
  )
}
