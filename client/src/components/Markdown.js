// @flow
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import marked from 'marked'

import Headline from './Headline'

const renderer = new marked.Renderer()

renderer.heading = (text, level) => {
  return renderToStaticMarkup(
    <Headline
      large={ level === 1 }
      normal={ level === 2 }
      small={ level >= 3 }
    >
      { text }
    </Headline>
  )
}

const getVideoSource = (code, type) => {
  switch (type) {
    case 'youtube': return `https://www.youtube.com/embed/${code}`
    case 'vimeo': return `https://player.vimeo.com/video/${code}`
  }
}

renderer.code = (code, lang) => {
  return renderToStaticMarkup(
    <iframe
      width="560"
      height="315"
      style={{
        border: 0,
      }}
      src={ getVideoSource(code, lang) }
      frameborder="0"
      allowfullscreen
    />
  )
}

marked.setOptions({
  renderer,

  breaks: true,
})

export default function Markdown({ children }) {
  return (
    <div dangerouslySetInnerHTML={{ __html: marked(children.toString()) }} />
  )
}
