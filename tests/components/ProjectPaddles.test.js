import React from 'react'
import renderer from 'react-test-renderer'
import ProjectPaddles from '../../components/ProjectPaddles'

const noop = () => {}

describe('ProjectPaddles', () => {
  let component

  beforeEach(() => {
    component = (
      <ProjectPaddles
        onNextDetail={noop}
        onPrevDetail={noop}
      />
    )
  })

  it('shows the correct snapshot for the ProjectPaddles component tree', () => {
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
