import React from 'react'
import renderer from 'react-test-renderer'
import ProjectModal from '../../components/ProjectModal'

const noop = () => {}

describe('ProjectModal', () => {
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
      <ProjectModal
        onCloseModal={noop}
        onNextDetail={noop}
        onPrevDetail={noop}
        project={project}
      />
    )
  })

  it('shows the correct snapshot for the ProjectModal component tree', () => {
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
