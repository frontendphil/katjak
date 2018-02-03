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

const youtube = 'youtube'
const vimeo = 'vimeo'

const parseVideoId = (code, type) => {
  switch (type) {
    case youtube: return code.replace('https://youtu.be/', '')
    case vimeo: return code.replace('https://vimeo.com/', '')
    default: return code
  }
}

const getVideoSource = (id, type) => {
  switch (type) {
    case youtube: return `https://www.youtube.com/embed/${id}`
    case vimeo: return `https://player.vimeo.com/video/${id}`
    default: throw new Error(`Could not find embed source for type ${type} and id ${id}!`)
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
      src={ getVideoSource(parseVideoId(code, lang), lang) }
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
