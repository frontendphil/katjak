// @flow
import React from 'react'

import { Headline } from '../components'
import { defaultStyle } from '../higher-order'
import { xs } from '../media'

import gutenMorgenInternet from '../assets/guten-morgen-internet.jpg'
import planLos from '../assets/plan-los.jpg'
import loadStudios from '../assets/load-studios.jpg'
import piSpirit from '../assets/pi-spirit.jpg'
import funkWG from '../assets/funk-wg.jpg'
import aco from '../assets/aco.png'

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
              <Box title="Guten Morgen Internet" image={gutenMorgenInternet} />
              <Box title="Plan&Los" image={planLos} />

              <Box title="Load Studios" image={loadStudios} />

              <Box title="PI spirit Productions" image={piSpirit} />
              <Box title="Funk WG" image={funkWG} />
              <Box title="ACO" image={aco} />
            </div>
          </div>
        </div>

        <div className="col-md-7">
          <Project time="2018" company="Load Studios">
            Content Strategy & Concept Development for commercial clients
          </Project>

          <Project time="2018" company="United Creators">
            [How to
            Music](https://www.youtube.com/channel/UCiaWvawn0rvka5INNSpCjJg)
            (funk), Director
          </Project>

          <Project
            time="2018"
            project="[Plan&Los (funk)](https://www.youtube.com/channel/UC494xOMNWa9zlCuGqLT5Rog)"
            company="Studio71"
          >
            , Script
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
            Director + Editorial Lead
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
