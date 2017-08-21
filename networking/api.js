// @flow
// flowlint-next-line sketchy-null:off
const domain = process.env.DOMAIN || `http://localhost:${process.env.PORT || 3000}`

const getAPIPath = (path: string) => (
  `${domain}/static/api/${path.replace(/^\//, '')}.json`
)

export const indexPath = () => getAPIPath('all')
export const projectsPath = () => getAPIPath('projects')
