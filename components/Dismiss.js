// @flow
import React from 'react'
import css, { hover } from '../styles/css'
import Button from './Button'
import { XIcon } from './Icons'

type Props = {
  className?: string,
  title?: string,
}

const style = css(
  {
    position: 'absolute',
    top: 24,
    right: 24,
    zIndex: 2,
    color: '#fff',
    transition: 'color 0.2s',
  },
  hover({ color: '#000' }),
)

const Dismiss = ({ className, title, ...props }: Props) => (
  <Button
    className={`${className || ''} ${style}`}
    title={title || 'Dismiss'}
    {...props}
  >
    <XIcon />
  </Button>
)

Dismiss.defaultProps = {
  className: '',
  title: null,
}

export default Dismiss
