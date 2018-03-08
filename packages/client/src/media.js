export const lgMin = 1200

export const mdMin = 992
export const mdMax = lgMin - 1

export const smMin = 768
export const smMax = mdMin - 1

export const xsMin = 0
export const xsMax = smMin - 1

function makeRule(maxValue, minValue) {
  return (rules = {}, { strict } = {}) => ({
    [`@media ${
      strict ? `(min-width: ${minValue}px) and ` : ''
    }(max-width: ${maxValue}px)`]: rules,
  })
}

export const xs = makeRule(xsMax, xsMin)
export const sm = makeRule(smMax, smMin)
export const md = makeRule(mdMax, mdMin)
export const lg = makeRule(Infinity, lgMin)

export function print(rules = {}) {
  return {
    '@media print': rules,
  }
}
