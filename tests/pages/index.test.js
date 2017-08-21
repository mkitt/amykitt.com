import React from 'react'
import renderer from 'react-test-renderer'
import App, { selectAllowableGridWidth, selectProject, selectWorkProjects } from '../../pages/index'

describe('index selectors', () => {
  let props
  let state
  let projects
  let home

  beforeEach(() => {
    home = {
      body: 'Home body',
      id: '2',
      tiles: ['project-1', 'project-2', 'project-3'],
      title: 'Home title',
    }
    projects = [1, 2, 3].map(num => (
      {
        body: `Project ${num} body`,
        id: `project-${num}`,
        tile: `project-${num}-tiles`,
        tileWidth: 600 * num,
        tileHeight: 400 * num,
        title: `Project ${num} title`,
      }
    ))
    props = { home, projects }
    state = { viewportColumnCount: 2, viewportWidth: 375 }
  })

  it('selects a project', () => {
    const project = selectProject(props, state, { id: 'project-2' })
    expect(project).toEqual(projects[1])
  })

  it('selects a work projects', () => {
    const works = selectWorkProjects(props)
    expect(works).toEqual(projects)
  })

  it('selects the allowable grid width', () => {
    const gridWidth = selectAllowableGridWidth(state)
    expect(gridWidth).toEqual(153)
  })
})

describe('/', () => {
  let component

  beforeEach(() => {
    const about = {
      body: 'About **body**',
      id: '1',
      title: 'About title',
    }

    const home = {
      body: 'Home body',
      id: '2',
      tiles: ['project-1', 'project-2', 'project-3'],
      title: 'Home title',
    }

    const projects = [1, 2, 3].map(num => (
      {
        body: `Project ${num} body`,
        id: `project-${num}`,
        tile: `project-${num}-tiles`,
        tileWidth: 600 * num,
        tileHeight: 400 * num,
        title: `Project ${num} title`,
      }
    ))

    component = (
      <App
        about={about}
        home={home}
        projects={projects}
        url={{ pathname: '/' }}
      />
    )
  })

  it('shows the correct snapshot for the index page tree', () => {
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
