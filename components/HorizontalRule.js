// @flow
import React from 'react'
import css, { media3 } from '../styles/css'

const style = css(
  {
    maxWidth: 1440,
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

const ruleStyle = css({
  display: 'block',
  height: 1,
  border: 0,
  backgroundColor: '#858585',
  margin: '1em 0',
  padding: 0,
})

export default (props: any) => (
  <div className={style} {...props}>
    <hr className={ruleStyle} />
  </div>
)
