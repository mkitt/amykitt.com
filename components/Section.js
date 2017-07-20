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
    outline: '1px dotted blue',
  },
  media3({
    paddingRight: 80,
    paddingLeft: 80,
  }),
)

export default (props: any) => (
  <section className={style} {...props} />
)
