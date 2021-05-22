import NextLink from './NextLink'
import X from './X'

function WorkBar() {
  return (
    <nav className="flex items-center justify-end sticky top-0 z-10 max-w-7xl mx-auto px-2 py-4 bg-white text-xs text-prime-3 font-bold uppercase xl:px-0">
      <NextLink
        className="transition-colors duration-300 hover:text-black"
        href="/"
        title="Home"
      >
        <X />
      </NextLink>
    </nav>
  )
}

export default WorkBar
