import React from 'react'
import css from '../styles/css'

const style = css({
  fontSize: 12,
  fontWeight: 700,
  paddingRight: 10,
  paddingLeft: 10,
  textTransform: 'uppercase',
})

export default() => (
  <span className={style}>&bull;</span>
)
