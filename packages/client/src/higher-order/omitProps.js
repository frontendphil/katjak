// @flow
import { omit } from 'lodash/fp'
import { compose, mapProps } from 'recompose'

export default compose(mapProps, omit)
