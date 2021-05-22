import { SlugType, TagsType, work } from './data'
import getNextPrev from './getNextPrev'
import tagsToWords from './tagsToWords'

/**
 * Derives and populates an object representing a piece of work
 *
 * @example
 * deriveWork('factory', ['branding', 'identity'])
 * returns ...
  {
    next: '/work/corner-house-cafe',
    prev: '/work/instagram-nyc',
    slug: 'factory',
    tags: ['branding', 'identity'],
    tagz: 'branding and identity',
    tile: 'factory-tile.jpg',
  }
 */
function derivedWork(slug: SlugType, tags: TagsType[]) {
  const { next, prev } = getNextPrev(slug, work)
  const tagz = tagsToWords(tags)
  const tile = `${slug}-tile.jpg`
  return { next, prev, slug, tags, tagz, tile }
}

export default derivedWork
