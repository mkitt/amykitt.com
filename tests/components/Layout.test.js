import React from 'react'
import renderer from 'react-test-renderer'
import Layout from '../../components/Layout'

describe('Layout', () => {
  let component

  beforeEach(() => {
    component = (
      <Layout
        pathname="/"
        title="Layout Title"
      >
        <div>Layout child</div>
      </Layout>
    )
  })

  it('shows the correct snapshot for the Layout component tree', () => {
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
