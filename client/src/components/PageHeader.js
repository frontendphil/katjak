// @flow
import React from 'react'

import { defaultStyle } from '../higher-order'

import Headline from './Headline'
import Menu from './Menu'

function PageHeader() {
  return (
    <div>
      <Headline large>
        kuchenbecker.
      </Headline>

      <Menu />
    </div>
  )
}

const styled = defaultStyle()

export default styled(PageHeader)
