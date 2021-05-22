import { SlugType } from './data'

/**
 * Returns the next and previous items in the list.
 * When the current items is the first or last in the list, wrapping will occur.
 *
 * @example
 * getNextPrev('1', ['1', '2', '3']) // { next: '2', prev: '3' }
 * getNextPrev('2', ['1', '2', '3']) // { next: '3', prev: '1' }
 * getNextPrev('3', ['1', '2', '3']) // { next: '1', prev: '2' }
 */
function getNextPrev(current: SlugType, items: readonly SlugType[]) {
  const index = items.indexOf(current)
  const last = items.length - 1
  if (index === -1) return { next: undefined, prev: undefined }
  if (index === 0) return { next: items[index + 1], prev: items[last] }
  if (index === last) return { next: items[0], prev: items[index - 1] }
  return { next: items[index + 1], prev: items[index - 1] }
}

export default getNextPrev
