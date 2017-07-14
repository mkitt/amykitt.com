// @flow
import { css } from 'glamor'

type JSO = {
  [key: string]: string | number | null,
}

export default css

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
