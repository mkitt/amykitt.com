// @flow
import React from 'react'
import Link from 'next/link'

const isTestEnv = process.env.NODE_ENV !== 'test'

type Props = {
  as?: string,
  children: React.Element<*>,
  href: string,
}

const Component = ({ as, children, href, ...props }: Props) => (
  href && href.charAt(0) === '/' ?
    <Link
      as={as}
      href={href}
      prefetch={isTestEnv}
    >
      <a {...props} >
        {children}
      </a>
    </Link>
    :
    <a href={href} {...props} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
)

Component.defaultProps = {
  as: null,
}

export default Component
