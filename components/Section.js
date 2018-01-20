// @flow
import React from 'react'
import css, { media3 } from '../styles/css'

const style = css(
  {
    position: 'relative',
    maxWidth: 1440,
    minHeight: 'calc(100vh - 160px)',
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingRight: 20,
    paddingLeft: 20,
  },
  media3({
    paddingRight: 80,
    paddingLeft: 80,
  }),
)

type Props = {
}

export default (props: Props) => (
  <section className={style} {...props} />
)
