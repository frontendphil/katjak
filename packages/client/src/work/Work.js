// @flow
import React from 'react'

import { Headline, Divider } from '../components'
import { defaultStyle } from '../higher-order'

import Box from './Box'
import Project from './Project'

function Work({ style }) {
  return (
    <div>
      <Headline xlarge>Work</Headline>

      <div {...style('reelContainer')}>
        <div {...style('reel')}>
          <Box
            title="Guten Morgen Internet"
            image={require('../assets/guten-morgen-internet.jpg')}
          />
          <Box
            title="Load Studios"
            image={require('../assets/load-studios.jpg')}
          />
          <Box title="Plan&Los" image={require('../assets/plan-los.jpg')} />
          <Box
            title="PI spirit Productions"
            image={require('../assets/pi-spirit.jpg')}
          />
          <Box title="Funk WG" image={require('../assets/funk-wg.jpg')} />
          <Box title="ACO" image={require('../assets/aco.png')} />
        </div>
      </div>

      <Divider />

      <Project time="2018" company="Load Studios">
        Content Strategy & Concept Development for commercial clients
      </Project>

      <Project time="2018" company="United Creators">
        Director
      </Project>

      <Project time="2018" project="Plan&Los (funk)" company="Studio 71">
        Script
      </Project>

      <Project time="2017" company="Load Studios">
        Concept development for commercial clients
      </Project>

      <Project time="2017" company="PI spirit Productions">
        Concept & Script for commercial image films
      </Project>

      <Project time="2017" company="ACO">
        Social Media workshop for marketing and sales departments
      </Project>

      <Project
        time="2016 - 2018"
        project="Guten Morgen Internet (funk), 350+ episodes"
        company="Studio71"
      >
        Editorial Design, Production, Postproduction
      </Project>
    </div>
  )
}

const styled = defaultStyle({
  reelContainer: {
    display: 'flex',

    justifyContent: 'center',
  },

  reel: {
    display: 'flex',
    flexWrap: 'wrap',

    width: '50%',
  },
})

export default styled(Work)
