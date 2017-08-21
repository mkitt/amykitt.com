import React from 'react'
import renderer from 'react-test-renderer'
import Dismiss from '../../components/Dismiss'

const noop = () => {}

describe('Dismiss', () => {
  let component

  beforeEach(() => {
    component = (
      <Dismiss
        className="DismissClassName"
        onClick={noop}
      />
    )
  })

  it('shows the correct snapshot for the Dismiss component tree', () => {
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
