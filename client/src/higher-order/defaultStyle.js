// @flow
import realSubstyle from 'substyle'
import radium from 'radium'
import { merge } from 'lodash'
import { compose, mapProps } from 'recompose'

import type { StyleT, ThemeT } from '../types'

import provideTheme from './provideTheme'

const substyle = (...args) => ({ ...realSubstyle(...args) })

type StyleFunctionT = (theme: ThemeT) => StyleT;

type ModifiersT = {
  [name: string]: boolean,
};

type SelectModifiersFunctionT = (props: Object) => ModifiersT;

function resolveDefaults(defaults: StyleT | StyleFunctionT, theme: ThemeT): StyleT {
  if (typeof defaults === "function") {
    defaults = defaults(theme)
  }

  return defaults
}

function defaultStyle(
  defaults: StyleT | StyleFunctionT,
  selectModifiers?: SelectModifiersFunctionT = () => undefined
): StyleT {
  return compose(
    provideTheme,
    mapProps(({ theme, style, ...rest}: { theme: ThemeT, style: StyleT }) => ({
      ...rest,
      ...substyle(
        { style: merge({}, resolveDefaults(defaults, theme), style) },
        selectModifiers(rest)
      )
    })),
    radium,
  )
}

export default defaultStyle
