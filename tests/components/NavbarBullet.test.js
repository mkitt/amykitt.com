import React from 'react'
import renderer from 'react-test-renderer'
import NavbarBullet from '../../components/NavbarBullet'

describe('NavbarBullet', () => {
  let component

  beforeEach(() => {
    component = <NavbarBullet />
  })

  it('shows the correct snapshot for the NavbarBullet component tree', () => {
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
