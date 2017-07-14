import React from 'react'
import css from '../styles/css'

const style = css({
  fontSize: 12,
  margin: '0 auto',
  textTransform: 'uppercase',
})

const bold = css({
  fontWeight: 700,
})

const normal = css({
  fontWeight: 400,
})

export default() => (
  <h1 className={style}>
    <span className={bold}>Hi. </span>
    <span className={normal}>
      If you like what you see below perhaps we can work together in the
      future.
    </span>
  </h1>
)
