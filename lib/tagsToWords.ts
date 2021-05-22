import { TagsType } from './data'

/**
 * Takes an array of strings and returns them as a list for humans
 *
 * @example
 * tagsToWords(['1', '2', '3']) // "1, 2 and 3"
 * tagsToWords(['1', '2'])      // "1 and 2"
 * tagsToWords(['1'])           // "1"
 */
function tagsToWords(tags: TagsType[]) {
  return tags.join(', ').replace(/,(?=[^,]*$)/, ' and')
}

export default tagsToWords
