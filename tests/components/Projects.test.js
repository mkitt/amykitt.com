import React from 'react'
import renderer from 'react-test-renderer'
import Projects from '../../components/Projects'

const noop = () => {}

describe('Projects', () => {
  let component

  beforeEach(() => {
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
      <Projects
        allowableWidth={1440}
        columnCount={4}
        onClick={noop}
        projects={projects}
      />
    )
  })

  it('shows the correct snapshot for the Projects component tree', () => {
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
