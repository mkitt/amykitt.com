import { InferGetStaticPropsType } from 'next'
import { useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import About from '../components/About'
import Banner from '../components/Banner'
import Meta from '../components/Meta'
import NavBar from '../components/NavBar'
import WorkTile, { WorkTileType } from '../components/WorkTile'
import { work } from '../lib/data'
import useRowWidth from '../lib/useRowWidth'

type PropsType = InferGetStaticPropsType<typeof getStaticProps>

function Index(props: PropsType) {
  const rowRef = useRef(null)
  const [aboutRef, isAboutActive] = useInView({ threshold: 0.75 })
  const rowWidth = useRowWidth(rowRef)

  return (
    <>
      <Meta title="Amy Kitt Design" />
      <Banner />
      <NavBar isAboutActive={isAboutActive} />
      <main className="max-w-7xl mx-auto px-2 xl:px-0" role="main">
        <section id="work" className="screen-with-nav">
          <div
            className="grid grid-cols-auto-16 grid-row auto-rows-auto"
            ref={rowRef}
          >
            {props.set.map((t) => (
              <WorkTile key={t.slug} {...t} rowWidth={rowWidth} />
            ))}
          </div>
        </section>
        <hr className="h-px mt-20 mb-28 border-prime-1" />
        <section
          id="about"
          className="screen-with-nav flex items-center"
          ref={aboutRef}
        >
          <About />
        </section>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const fs = require('fs')
  const path = require('path')
  const dir = path.join(process.cwd(), './pages/work')
  const filez: string[] = fs.readdirSync(dir)
  const files = filez.filter((f) => /tsx/gi.test(f))
  const promises = files.map((f) => require(`./work/${f}`).getStaticProps())
  const results = (await Promise.all(promises)).map((p) => ({ ...p.props }))
  const set = work.map((slug) =>
    results.find((p) => p.slug === slug),
  ) as WorkTileType[]
  return { props: { set } }
}

export default Index
