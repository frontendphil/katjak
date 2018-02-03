// @flow
import { defaultStyle as substyleDefaultStyle } from 'substyle'
import { compose } from 'recompose'

import provideTheme from './provideTheme'
import omitProps from './omitProps'

type ModifiersT = {
  [name: string]: boolean,
};

const defaultStyle = (defaultStyles: DefaultStylesT, modifiers: ModifiersT) => compose(
  provideTheme,
  substyleDefaultStyle(
    typeof defaultStyles === 'function' ?
      ({ theme, ...rest }: Object) => defaultStyles(theme, rest) :
      defaultStyles,
    modifiers
  ),
  omitProps(['theme'])
)

export default defaultStyle
