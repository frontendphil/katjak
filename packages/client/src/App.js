// @flow
import * as React from 'react'

import { defaultStyle } from './higher-order'

import { Menu, Divider, Hero } from './components'

import Work from './work'
import About from './about'
import Contact from './contact'
import Social from './social'

import './main.css'

type PropsT = {}

function App({ match, style }: PropsT) {
  return (
    <div className="container">
      <Hero>
        <div {...style('claim')}>
          CREATIVE CONTENT DEVELOPMENT<br /> & SOCIAL MEDIA
        </div>

        <div {...style('cat')} />
      </Hero>

      <div {...style('menu')}>
        <Menu />
      </div>

      <Divider />

      <Work />
      <About />
      <Contact />
      <Social />
    </div>
  )
}

const styled = defaultStyle(({ padding, font }) => ({
  menu: {
    marginTop: padding.normal,
  },

  claim: {
    fontFamily: font.family.headline,
    fontWeight: 400,
    fontStyle: 'italic',
    fontSize: font.size.xlarge,

    padding: padding.normal,

    borderRadius: 20,

    color: 'white',

    backgroundColor: '#ed4a57',
  },

  cat: {
    position: 'absolute',

    bottom: 10,
    right: 10,

    height: 26,
    width: 35,

    backgroundImage: `url(${require('./assets/Katzi.png')})`,
    backgroundSize: 'cover',
  },
}))

export default styled(App)
