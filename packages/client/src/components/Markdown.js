// @flow
import * as React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import marked from 'marked'
import { StylesAsDataAttributes } from 'substyle-glamor'
import { MemoryRouter } from 'react-router-dom'

import Headline from './Headline'
import Link from './Link'

const renderer = new marked.Renderer()

renderer.heading = (text, level) =>
  renderToStaticMarkup(
    <StylesAsDataAttributes>
      <Headline large={level === 1} normal={level === 2} small={level >= 3}>
        {text}
      </Headline>
    </StylesAsDataAttributes>
  )

const youtube = 'youtube'
const vimeo = 'vimeo'

const parseVideoId = (code, type) => {
  switch (type) {
    case youtube:
      return code.replace('https://youtu.be/', '')
    case vimeo:
      return code.replace('https://vimeo.com/', '')
    default:
      return code
  }
}

const getVideoSource = (id, type) => {
  switch (type) {
    case youtube:
      return `https://www.youtube.com/embed/${id}`
    case vimeo:
      return `https://player.vimeo.com/video/${id}`
    default:
      throw new Error(
        `Could not find embed source for type ${type} and id ${id}!`
      )
  }
}

renderer.code = (code, lang) =>
  renderToStaticMarkup(
    <iframe
      title={`youtube-${code}`}
      width="560"
      height="315"
      style={{
        border: 0,
      }}
      src={getVideoSource(parseVideoId(code, lang), lang)}
      frameborder="0"
      allowfullscreen
    />
  )

renderer.link = (href: string, title: string, text: string) =>
  renderToStaticMarkup(
    <StylesAsDataAttributes>
      <MemoryRouter>
        <Link to={href} title={title} target="_blank" rel="noopener">
          {text}
        </Link>
      </MemoryRouter>
    </StylesAsDataAttributes>
  )

marked.setOptions({
  renderer,

  breaks: true,
})

type PropsT = {
  children: string,
}

export default function Markdown({ children }: PropsT) {
  return <div dangerouslySetInnerHTML={{ __html: marked(children) }} />
}
