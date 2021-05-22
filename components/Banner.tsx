import LogoMark from './LogoMark'

function Banner() {
  return (
    <header className="sticky z-20 flex items-center justify-center max-w-7xl mx-auto pt-16 px-2 xl:px-0">
      <LogoMark className="hidden sm:block sm:absolute -bottom-8 left-0 z-20" />
      <p className="uppercase text-xs text-prime-3">
        <strong>Hi.</strong> If you like what you see below perhaps we can work
        together in the future.
      </p>
    </header>
  )
}

export default Banner
