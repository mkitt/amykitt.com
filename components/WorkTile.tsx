import { SlugType } from '../lib/data'
import getTileDimension from '../lib/getTileWidth'
import NextLink from './NextLink'

const dimensions = Object.freeze({
  xs: { width: 600, height: 450, span: 4 },
  sm: { width: 600, height: 548, span: 5 },
  md: { width: 600, height: 675, span: 6 },
  lg: { width: 600, height: 975, span: 9 },
})

type WorkTileType = {
  readonly label: string
  readonly rowWidth: number
  readonly slug: SlugType
  readonly tile: string
  readonly tileSize?: keyof typeof dimensions
}

function WorkTile(props: WorkTileType) {
  const { label, rowWidth, slug, tile, tileSize = 'xs' } = props
  const { width, height, span } = dimensions[tileSize]

  const td = getTileDimension({
    allowableWidth: rowWidth,
    naturalWidth: width,
    naturalHeight: height,
  })

  return (
    <NextLink
      id={slug}
      className={`tile relative span-${span} p-1 text-xs`}
      style={{ gridRowEnd: `span ${td.rowSpan}` }}
      href={`/work/${slug}`}
      title={label}
    >
      <img
        alt={slug}
        src={`/assets/work/${tile}`}
        width={td.width}
        height={td.height}
      />
      <span className="sr-only">{label}</span>
    </NextLink>
  )
}

export type { WorkTileType }
export default WorkTile
