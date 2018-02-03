// @flow
import React from 'react'

import { defaultStyle } from '../higher-order'

import Headline from './Headline'
import Menu from './Menu'
import Link from './Link'

function PageHeader() {
  return (
    <div>
      <Headline xlarge>
        <Link to="/">
          kuchenbecker.
        </Link>
      </Headline>

      <Menu />
    </div>
  )
}

const styled = defaultStyle()

export default styled(PageHeader)
