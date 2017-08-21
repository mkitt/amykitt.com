import React from 'react'
import renderer from 'react-test-renderer'
import View from '../../components/View'

describe('View', () => {
  let component

  beforeEach(() => {
    component = (
      <View data-stuff="view" />
    )
  })

  it('shows the correct snapshot for the View component tree', () => {
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
