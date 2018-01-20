// @flow
import React, { type Node } from 'react'
import css, { hover } from '../styles/css'

type Props = {
  children: Node,
  href: string,
  isActive: boolean,
}

const style = css(
  {
    display: 'inline-block',
    verticalAlign: 'middle',
    fontSize: 12,
    fontWeight: 'bold',
    textDecoration: 'none',
    textTransform: 'uppercase',
    borderBottom: '1px solid transparent',
    transition: 'color 0.2s',
  },
  hover({ color: '#000' }),
)

const activeStyle = css(
  { ...style },
  { borderBottomColor: 'currentColor' },
)

export default ({ children, href, isActive, ...props }: Props) => (
  <a
    className={`${style} ${isActive ? activeStyle : ''}`}
    href={href}
    {...props}
  >
    {children}
  </a>
)
