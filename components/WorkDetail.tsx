import { HTMLAttributes } from 'react'
import { SlugType } from '../lib/data'
import Meta from './Meta'
import NextLink from './NextLink'
import WorkBar from './WorkBar'

type WorkType = HTMLAttributes<HTMLDivElement> & {
  readonly label: string
  readonly slug: SlugType
  readonly tagz: string
  readonly tile: string
  readonly next?: string
  readonly prev?: string
}

function WorkDetail(props: WorkType) {
  const title = `${props.label}  | Amy Kitt Design`
  const description = `Check out ${props.tagz} work created by Amy Kitt Design for ${props.label}.`
  return (
    <>
      <Meta title={title} description={description} image={props.tile} />
      <WorkBar />
      <main className="max-w-7xl mx-auto px-2 xl:px-0" role="main">
        <article className="text-prime-1 py-4">{props.children}</article>
        {(props.next || props.prev) && (
          <footer className="flex justify-end py-4 text-prime-1 uppercase">
            {props.prev && (
              <NextLink className="hover:text-prime-2" href={props.prev}>
                Prev
              </NextLink>
            )}
            {props.next && props.prev && <span className="px-2">/</span>}
            {props.next && (
              <NextLink className="hover:text-prime-2" href={props.next}>
                Next
              </NextLink>
            )}
          </footer>
        )}
      </main>
    </>
  )
}

const styles = Object.freeze({
  h1: 'mr-16 sticky top-5 z-20 uppercase font-bold leading-none text-sm sm:text-base truncate',
  h2: 'uppercase text-sm sm:text-base',
  p: 'mt-4 text-sm',
  imgs: 'space-y-2 mt-4',
})

export { styles }
export type { WorkType }
export default WorkDetail
