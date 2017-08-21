import React from 'react'
import renderer from 'react-test-renderer'
import Svg from '../../components/Svg'

describe('Svg', () => {
  it('shows the correct snapshot for the Svg component tree (width/height)', () => {
    const component = (
      <Svg width={24} height={24} viewBox="0 0 24 24">
        <g stroke="currentColor">
          <line x1="2" y1="2" x2="22" y2="22" />
          <line x1="22" y1="2" x2="2" y2="22" />
        </g>
      </Svg>
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('shows the correct snapshot for the Svg component tree (size)', () => {
    const component = (
      <Svg size={24} viewBox="0 0 24 24">
        <g stroke="currentColor">
          <line x1="2" y1="2" x2="22" y2="22" />
          <line x1="22" y1="2" x2="2" y2="22" />
        </g>
      </Svg>
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
