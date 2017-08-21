import React from 'react'
import renderer from 'react-test-renderer'
import Section from '../../components/Section'

describe('Section', () => {
  let component

  beforeEach(() => {
    component = (
      <Section />
    )
  })

  it('shows the correct snapshot for the Section component tree', () => {
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
