import { CSSObject } from '@emotion/styled/macro'

const noob = Object.freeze({})

export type useCssType = {
  readonly css?: CSSObject
}

const useCss = ({ css }: useCssType) => ({
  ...(css != null ? css : noob),
})

export default useCss
