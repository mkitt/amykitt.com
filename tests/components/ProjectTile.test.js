import React from 'react'
import renderer from 'react-test-renderer'
import ProjectTile from '../../components/ProjectTile'

describe('ProjectTile', () => {
  let component

  beforeEach(() => {
    const project = {
      body: 'Project 1 _body_',
      id: 'project-1',
      tile: 'project-1-tiles',
      tileWidth: 600,
      tileHeight: 400,
      title: 'Project 1 title',
    }

    component = (
      <ProjectTile
        allowableWidth={1440}
        project={project}
      />
    )
  })

  it('shows the correct snapshot for the ProjectTile component tree', () => {
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
