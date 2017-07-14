// @flow
import React from 'react'
import css from '../styles/css'
import Link from './Link'
import { AKIcon } from './Icons'

type Props = {
  href: string,
  isActive: boolean,
}

const style = css({
  marginRight: 'auto',
})

const activeStyle = css(
  { ...style },
  { pointerEvents: 'none' },
)

const classNames = isActive => ([
  ...(isActive ? [activeStyle] : [style]),
].join(' '))

export default ({ isActive, ...props }: Props) => (
  <Link
    className={classNames(isActive)}
    title="AK Design"
    {...props}
  >
    <AKIcon />
  </Link>
)

