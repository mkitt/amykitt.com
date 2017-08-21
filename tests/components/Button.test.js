import React from 'react'
import renderer from 'react-test-renderer'
import Button from '../../components/Button'

const noop = () => {}

describe('Button', () => {
  let component

  beforeEach(() => {
    component = (
      <Button
        className="ButtonClassName"
        onClick={noop}
      />
    )
  })

  it('shows the correct snapshot for the Button component tree', () => {
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
