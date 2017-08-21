import * as api from '../../networking/api'

describe('api', () => {
  it('gets the index (all) path', () => {
    expect(api.indexPath()).toBe('http://localhost:3000/static/api/all.json')
  })

  it('gets the projects path', () => {
    expect(api.projectsPath()).toBe('http://localhost:3000/static/api/projects.json')
  })
})
