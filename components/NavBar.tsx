import NextLink from './NextLink'

function NavBar({ isAboutActive = false }) {
  const cn = 'transition-colors duration-300 hover:text-black'
  const wn = isAboutActive ? '' : ' border-b border-current '
  const an = isAboutActive ? ' border-b border-current' : ''

  return (
    <nav className="flex items-center justify-center sticky top-0 z-10 max-w-7xl mx-auto px-2 py-4 bg-white text-xs text-prime-3 font-bold uppercase xl:px-0">
      <NextLink className={cn + wn} href="/" title="View Work">
        Work
      </NextLink>
      <span className="mx-2">&bull;</span>
      <NextLink className={cn + an} href="#about" title="About AK Design">
        About
      </NextLink>
      <span className="mx-2">&bull;</span>
      <a className={cn} href="mailto:amy.kitt@gmail.com" title="Say hello!">
        Contact
      </a>
    </nav>
  )
}

export default NavBar
