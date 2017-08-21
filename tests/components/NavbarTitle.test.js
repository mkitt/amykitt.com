import React from 'react'
import renderer from 'react-test-renderer'
import NavbarTitle from '../../components/NavbarTitle'

describe('NavbarTitle', () => {
  let component

  beforeEach(() => {
    component = (
      <NavbarTitle />
    )
  })

  it('shows the correct snapshot for the NavbarTitle component tree', () => {
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
