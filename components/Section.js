// @flow
import React from 'react'
import css from '../styles/css'

const style = css({
  position: 'relative',
  maxWidth: 1440,
  minHeight: 'calc(100vh - 160px)',
  marginRight: 'auto',
  marginLeft: 'auto',
  paddingRight: 80,
  paddingLeft: 80,
  outline: '1px dotted blue',
})

export default (props: any) => (
  <section className={style} {...props} />
)
