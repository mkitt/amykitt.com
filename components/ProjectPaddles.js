// @flow
import React from 'react'
import css, { hover } from '../styles/css'
import Button from './Button'
import View from './View'

type Props = {
  onNextDetail: Function,
  onPrevDetail: Function,
}

const style = css({
  position: 'relative',
  textAlign: 'right',
  marginTop: 40,
})

const textStyle = css({
  fontSize: 14,
  color: '#858585',
})

const buttonStyle = css(
  {
    fontSize: 14,
    color: '#858585',
    textTransform: 'uppercase',
    transition: 'color 0.2s',
  },
  hover({ color: '#000' }),
)

export default (props: Props) => (
  <View className={style}>
    <Button className={buttonStyle} onClick={props.onPrevDetail}>
      Prev
    </Button>
    <span className={textStyle}> / </span>
    <Button className={buttonStyle} onClick={props.onNextDetail}>
      Next
    </Button>
  </View>
)
