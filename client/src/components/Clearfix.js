// @flow
import React from 'react'

export default function Clearfix() {
  return (
    <div style={{
      clear: 'both',
      visibility: 'hidden',
      height: 0,
    }} />
  )
}
