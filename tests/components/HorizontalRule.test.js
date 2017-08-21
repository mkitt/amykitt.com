import React from 'react'
import renderer from 'react-test-renderer'
import HorizontalRule from '../../components/HorizontalRule'

describe('HorizontalRule', () => {
  let component

  beforeEach(() => {
    component = (
      <HorizontalRule />
    )
  })

  it('shows the correct snapshot for the HorizontalRule component tree', () => {
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
