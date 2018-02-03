// @flow
import { mapProps } from 'recompose'

import * as theme from '../theme'

export default mapProps(props => ({ ...props, theme }))
