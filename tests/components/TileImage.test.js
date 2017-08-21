import React from 'react'
import renderer from 'react-test-renderer'
import TileImage from '../../components/TileImage'

const noop = () => {}

describe('TileImage', () => {
  let component

  beforeEach(() => {
    component = (
      <TileImage
        allowableWidth={1440}
        className="TileImageClassName"
        src="/static/favicon.png"
        naturalHeight={600}
        naturalWidth={800}
        onLoadSuccess={noop}
        onLoadFailure={noop}
      />
    )
  })

  it('shows the correct snapshot for the TileImage component tree', () => {
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
