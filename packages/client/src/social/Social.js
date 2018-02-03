// @flow
import React from 'react'

import { defaultStyle } from '../higher-order'

import Icon from './Icon'

function About({ style }) {
  return (
    <div {...style}>
      <Icon
        kind="facebook"
        color="rgb(62, 91, 152)"
        image={require('../assets/social/facebook.png')}
        link="https://facebook.com/katja.kuchenbecker"
      />
      <Icon
        kind="twitter"
        color="rgb(77, 167, 222)"
        image={require('../assets/social/twitter.png')}
        link="https://twitter.com/thisiskuchi"
      />
      <Icon
        kind="linkedin"
        color="rgb(51, 113, 183)"
        image={require('../assets/social/linkedin.png')}
        link="https://linkedin.com/in/katja-kuchenbecker-8360863b"
      />
      <Icon
        kind="instagram"
        color="rgb(0, 0, 0)"
        image={require('../assets/social/instagram.png')}
        link="https://instagram.com/thisiskuchii"
      />
      <Icon
        kind="spotify"
        color="rgb(123, 179, 66)"
        image={require('../assets/social/spotify.png')}
        link="https://spotify.com/user/katja.kuchenbecker"
      />
      <Icon
        kind="xing"
        color="rgb(0, 90, 96)"
        image={require('../assets/social/xing.png')}
        link="https://xing.de/profile/Katja_Kuchenbecker"
      />
    </div>
  )
}

const styled = defaultStyle({
  display: 'flex',

  justifyContent: 'center',
})

export default styled(About)
