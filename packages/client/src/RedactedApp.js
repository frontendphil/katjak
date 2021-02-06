// @flow
import React from 'react'

import { defaultStyle } from './higher-order'

import { Headline } from './components'

import Contact from './contact'

import { xs } from './media'

import './main.css'

type PropsT = {}

function App({ match, style }: PropsT) {
  return (
    <div {...style('outer')}>
      <div {...style('inner')} className="container">
        <Headline xlarge>Katja Kuchenbecker</Headline>

        <div {...style('important')}>
          digital concepts. consulting.
          <br />
          editorial and branded content creation & strategy.
        </div>

        <div {...style('contact')}>
          <Contact />
        </div>
      </div>
    </div>
  )
}

const styled = defaultStyle(({ padding, font }) => ({
  outer: {
    display: 'flex',

    justifyContent: 'center',
    alignItems: 'center',

    height: '100%',
  },

  inner: {
    display: 'flex',
    flexDirection: 'column',

    justifyContent: 'center',
    alignItems: 'center',
  },

  contact: {
    marginTop: 100,
  },

  important: {
    display: 'flex',
    alignItems: 'center',

    color: '#ed4a57',

    padding: 50,

    fontWeight: 900,
    fontStyle: 'italic',
    fontSize: font.size.xlarge,

    textAlign: 'center',
    textTransform: 'uppercase',

    ...xs({
      fontSize: font.size.large,

      paddingTop: 50,
      paddingBottom: 50,
    }),
  },
}))

export default styled(App)
