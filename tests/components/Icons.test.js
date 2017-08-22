import React from 'react'
import renderer from 'react-test-renderer'
import Icon from '../../components/Icons'

describe('Icons', () => {
  it('shows the correct snapshot for the XIcon component tree', () => {
    const tree = renderer.create(<Icon kind="XIcon" />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('shows the correct snapshot for the AKIcon component tree', () => {
    const tree = renderer.create(<Icon kind="AKIcon" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
