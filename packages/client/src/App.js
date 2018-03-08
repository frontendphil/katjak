// @flow
import * as React from 'react'

import { defaultStyle } from './higher-order'

import { Menu, Divider, Hero } from './components'

import Work from './work'
import About from './about'
import Contact from './contact'

import { xs } from './media'

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

      <div {...style('important')}>
        <img
          {...style('catImportant')}
          alt="Katzi"
          src={require('./assets/KatziWatermelon.png')}
        />
        digital concepts. consulting.<br />editorial and branded content
        creation & strategy.
      </div>

      <div {...style('section')}>
        <Work />
      </div>

      <div {...style('section')}>
        <About />
      </div>

      <div {...style('section')}>
        <Contact />
      </div>
    </div>
  )
}

const styled = defaultStyle(({ padding, font }) => ({
  menu: {
    marginTop: padding.normal,
  },

  section: {
    marginBottom: 2 * padding.large,
  },

  catImportant: {
    position: 'absolute',

    left: 30,
    top: '50%',

    width: 37,

    transform: 'translate(0, -50%)',
  },

  important: {
    position: 'relative',

    fontWeight: 900,
    fontStyle: 'italic',
    fontSize: font.size.xlarge,

    textAlign: 'center',
    textTransform: 'uppercase',

    padding: 50,
    paddingTop: 130,
    paddingBottom: 130,

    ...xs({
      fontSize: font.size.large,

      paddingTop: 50,
      paddingBottom: 50,
    }),
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

    ...xs({
      fontSize: font.size.normal,
    }),
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
