// @flow
import React from 'react'
import css, { hover, media3 } from '../styles/css'
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
    color: '#7c7c7c',
    transition: 'color 0.2s',
  },
  hover({ color: '#000' }),
  media3({ position: 'fixed' }),
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
