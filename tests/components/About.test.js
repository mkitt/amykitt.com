import React from 'react'
import renderer from 'react-test-renderer'
import AboutView from '../../components/AboutView'

describe('AboutView', () => {
  let component

  beforeEach(() => {
    const about = {
      body: 'About _body_',
      id: '1',
      title: 'About title',
    }

    component = <AboutView about={about} />
  })

  it('shows the correct snapshot for the About component tree', () => {
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
