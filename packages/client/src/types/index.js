export type PaddingT = {
  small: number,
  normal: number,
  large: number,
}

export type FontSizeT = {
  size: {
    small: number,
    normal: number,
    large: number,
  },
  family: {
    headline: string,
    normal: string,
  },
}

export type ThemeT = {
  padding: PaddingT,
  fontSize: FontSizeT,
}

export type StyleT = {
  [name: string]: string | number | StyleT,
}
