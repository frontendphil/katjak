export type PaddingT = {
  small: number,
  normal: number,
  large: number,
};

export type FontSizeT = {
  small: number,
  normal: number,
  large: number,
};

export type ThemeT = {
  padding: PaddingT,
  fontSize: FontSizeT,
};

export type StyleT = {
  [name: string]: string | number | StyleT,
};
