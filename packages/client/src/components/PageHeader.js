// @flow
import React from 'react'

import { defaultStyle } from '../higher-order'

import Menu from './Menu'

function PageHeader() {
  return <Menu />
}

const styled = defaultStyle()

export default styled(PageHeader)
