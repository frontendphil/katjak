// @flow
import React from 'react'

import { defaultStyle } from '../higher-order'

import facebook from '../assets/social/facebook.png'
import twitter from '../assets/social/twitter.png'
import linkedIn from '../assets/social/linkedin.png'
import instagram from '../assets/social/instagram.png'
import spotify from '../assets/social/spotify.png'
import xing from '../assets/social/xing.png'

import Icon from './Icon'

function About({ style }) {
  return (
    <div {...style}>
      <Icon
        kind="facebook"
        color="rgb(62, 91, 152)"
        image={facebook}
        link="https://facebook.com/katja.kuchenbecker"
      />
      <Icon
        kind="twitter"
        color="rgb(77, 167, 222)"
        image={twitter}
        link="https://twitter.com/thisiskuchi"
      />
      <Icon
        kind="linkedin"
        color="rgb(51, 113, 183)"
        image={linkedIn}
        link="https://linkedin.com/in/katja-kuchenbecker-8360863b"
      />
      <Icon
        kind="instagram"
        color="rgb(0, 0, 0)"
        image={instagram}
        link="https://instagram.com/thisiskuchii"
      />
      <Icon
        kind="spotify"
        color="rgb(123, 179, 66)"
        image={spotify}
        link="https://open.spotify.com/user/spotify/playlist/37i9dQZEVXcNLcp6kTEqyR "
      />
      <Icon
        kind="xing"
        color="rgb(0, 90, 96)"
        image={xing}
        link="https://xing.de/profile/Katja_Kuchenbecker"
      />
    </div>
  )
}

const styled = defaultStyle({
  display: 'grid',

  gridTemplateColumns: 'auto auto auto auto auto auto',
  gridGap: 10,

  justifyItems: 'center',
})

export default styled(About)
