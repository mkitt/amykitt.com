import LogoMark from '../components/LogoMark'
import Meta from '../components/Meta'
import NextLink from '../components/NextLink'

function Custom404() {
  return (
    <>
      <Meta title="Amy Kitt Design | 500 Server-side error occurred" />
      <main className="max-w-7xl mx-auto px-2 xl:px-0" role="main">
        <section className="h-screen flex items-center justify-center text-prime-1">
          <div className="flex items-center">
            <h1 className="uppercase font-bold border-r pr-4 mr-4">500</h1>
            <p className=" text-sm">Server-side error occurred.</p>
          </div>
        </section>
      </main>
      <NextLink
        className="absolute bottom-0 right-0 p-8"
        href="/"
        title="Home Page"
      >
        <LogoMark />
        <span className="sr-only">amykitt.com</span>
      </NextLink>
    </>
  )
}

export default Custom404
