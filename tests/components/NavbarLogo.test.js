import React from 'react'
import renderer from 'react-test-renderer'
import NavbarLogo from '../../components/NavbarLogo'

const noop = () => {}

describe('NavbarLogo', () => {
  let component

  beforeEach(() => {
    component = (
      <NavbarLogo
        href="/"
        isActive
        onClick={noop}
      />
    )
  })

  it('shows the correct snapshot for the NavbarLogo component tree', () => {
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
