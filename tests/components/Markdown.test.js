import React from 'react'
import renderer from 'react-test-renderer'
import Markdown from '../../components/Markdown'

describe('Markdown', () => {
  let component

  beforeEach(() => {
    component = <Markdown source="Hello _world_." />
  })

  it('shows the correct snapshot for the Markdown component tree', () => {
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
