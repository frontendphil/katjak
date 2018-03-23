// @flow
import React from 'react'

import { Headline } from '../components'
import { defaultStyle } from '../higher-order'
import { xs } from '../media'

import Box from './Box'
import Project from './Project'

function Work({ style }) {
  return (
    <div id="work">
      <Headline xlarge>Work</Headline>

      <div className="row">
        <div className="col-md-5">
          <div {...style('reelContainer')}>
            <div {...style('reel')}>
              <Box
                title="Guten Morgen Internet"
                image={require('../assets/guten-morgen-internet.jpg')}
              />
              <Box title="Plan&Los" image={require('../assets/plan-los.jpg')} />

              <Box
                title="Load Studios"
                image={require('../assets/load-studios.jpg')}
              />

              <Box
                title="PI spirit Productions"
                image={require('../assets/pi-spirit.jpg')}
              />
              <Box title="Funk WG" image={require('../assets/funk-wg.jpg')} />
              <Box title="ACO" image={require('../assets/aco.png')} />
            </div>
          </div>
        </div>

        <div className="col-md-7">
          <Project time="2018" company="Load Studios">
            Content Strategy & Concept Development for commercial clients
          </Project>

          <Project time="2018" company="United Creators">
            "[How to
            Music](https://www.youtube.com/channel/UCiaWvawn0rvka5INNSpCjJg)",
            Director
          </Project>

          <Project
            time="2018"
            project="[Plan&Los (funk)](https://www.youtube.com/channel/UC494xOMNWa9zlCuGqLT5Rog)"
            company="Studio71"
          >
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
            project="[Guten Morgen Internet](https://www.youtube.com/channel/UChiU8ch1Y0pE4gYFbSOA2Iw) (funk), 350+ episodes"
            company="Studio71"
          >
            Editorial Design, Production, Postproduction
          </Project>
        </div>
      </div>
    </div>
  )
}

const styled = defaultStyle({
  content: {
    display: 'flex',
  },

  reelContainer: {
    display: 'flex',

    justifyContent: 'center',
  },

  reel: {
    display: 'flex',
    flexWrap: 'wrap',

    ...xs({
      justifyContent: 'center',
    }),
  },
})

export default styled(Work)
