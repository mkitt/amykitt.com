// @flow
import React from 'react'
import css from '../styles/css'
import View from './View'

type Props = {
  className?: string,
}

const style = css({
  position: 'relative',
  maxWidth: 1440,
  marginRight: 'auto',
  marginLeft: 'auto',
  paddingRight: 80,
  paddingLeft: 80,
  outline: '1px dotted magenta',
})

const Wrapper = ({ className, ...props }: Props) => (
  <View className={`${style} ${className || ''}`} {...props} />
)

Wrapper.defaultProps = {
  className: '',
}

export default Wrapper
