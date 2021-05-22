import Link, { LinkProps } from 'next/link'
import React from 'react'

type NextLinkType = React.PropsWithChildren<
  LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>
>

// Workaround for https://github.com/vercel/next.js/issues/5533
const NextLink = React.forwardRef((props: NextLinkType, ref: any) => {
  const {
    // Link props
    as,
    href,
    locale,
    passHref,
    prefetch,
    replace,
    scroll,
    shallow,
    // Anchor props
    children,
    ...rest
  } = props
  return (
    <Link
      {...{ as, href, locale, passHref, prefetch, replace, scroll, shallow }}
    >
      <a {...rest} ref={ref}>
        {children}
      </a>
    </Link>
  )
})

export type { NextLinkType }
export default NextLink
