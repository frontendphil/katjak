// @flow
import React from 'react'

import { Markdown } from '../components'

import content from './content.md'

export default function About() {
  return <Markdown>{content}</Markdown>
}
