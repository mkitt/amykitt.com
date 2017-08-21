import React from 'react'
import renderer from 'react-test-renderer'
import NavbarLink from '../../components/NavbarLink'

const noop = () => {}

describe('NavbarLink', () => {
  let component

  beforeEach(() => {
    component = (
      <NavbarLink
        href="/projects"
        isActive
        onMouseover={noop}
      >
        NavbarLink
      </NavbarLink>
    )
  })

  it('shows the correct snapshot for the NavbarLink component tree', () => {
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
