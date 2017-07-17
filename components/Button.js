// @flow
import React from 'react'
import css, { before } from '../styles/css'

type Props = {
  className?: string,
}

const style = css(
  before({
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 2,
    content: '""',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  }),
)


const Button = ({ className, ...props }: Props) => (
  <button
    className={`${style} ${className || ''}`}
    {...props}
    type="button"
  />
)

Button.defaultProps = {
  className: '',
}

export default Button
