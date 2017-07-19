// @flow
import { css } from 'glamor'

type JSO = {
  [key: string]: string | number | null,
}

export default css

export const media = (query: string, ...styles: Array<JSO>) => (
  css({ [`@media ${query}`]: styles })
)

// 400 / 16
export const media2 = (...styles: Array<JSO>) => (
  css({ '@media (min-width: 25em)': styles })
)

// 760 / 16
export const media3 = (...styles: Array<JSO>) => (
  css({ '@media (min-width: 47.5em)': styles })
)

// 1020 / 16
export const media4 = (...styles: Array<JSO>) => (
  css({ '@media (min-width: 63.75em)': styles })
)

// 1290 / 16
export const media5 = (...styles: Array<JSO>) => (
  css({ '@media (min-width: 80.625em)': styles })
)

export const select = (selector: string, ...styles: Array<JSO>) => (
  css({ [selector]: styles })
)

export const hover = (...styles: Array<JSO>) => (
  select('.no-touch &:hover', ...styles)
)

export const active = (...styles: Array<JSO>) => (
  select(':active', ...styles)
)

export const before = (...styles: Array<JSO>) => (
  select('::before', ...styles)
)

export const after = (...styles: Array<JSO>) => (
  select('::after', ...styles)
)
