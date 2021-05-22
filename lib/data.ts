/**
 * A loose way of finding things
 */
const tags = Object.freeze([
  'ads',
  'art',
  'branding',
  'collateral',
  'concept',
  'identity',
  'mobile',
  'package design',
  'print campaign',
  'printed matter',
  'web',
] as const)

/**
 * Ordering of tiles for pages/index.ts
 */
const work = Object.freeze([
  'bighorn',
  'dtr-the-ranches',
  'bristlecone',
  'backyard-soda-company-cbd',
  'duet',
  'instagram-printed-matter',
  'true-blue-syrup',
  'audi-r8',
  'camp-hale',
  'brewin-burro',
  'backyard-soda-company',
  'golfholics',
  'summers-corner-journal',
  'instagram-badges',
  'factory-brand-book-v10',
  'instagram-nyc',
  'factory',
  'corner-house-cafe',
  'fling',
  'laurus',
  'summers-corner-grand-opening',
  'happy-bunny',
  'factory-brand-book-v11',
  'audi-tdi',
  'live-for-this-fitness',
  'wendell',
  'summers-corner-feather',
  'john-huet',
  'cotton-blend',
  'fresh-jets',
  'true-blue',
  'the-barre-standard',
  'aspen-x',
  'callaway-technology-icon-system',
  'summers-corner-brand',
  'muse-studio',
  'oakley-eyewear',
  'roth',
  'elyson',
  'obrien',
  'revo-press-kit',
  'ranch-resort-realty',
  'innofin',
  'revo-brochure',
  'audi-printed-matter',
  'oakley-womens-campaign',
  'summit-sky-ranch',
  'kokos',
  'pressery',
  'revo-jimmy-chin',
  'true-north',
  'spanish-peaks',
  'more-mavericks',
] as const)

type SlugType = typeof work[number]
type TagsType = typeof tags[number]

export type { SlugType, TagsType }
export { tags, work }
