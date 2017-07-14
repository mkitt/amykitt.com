import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import App from '../../pages/index'

describe('/', () => {
  let app

  beforeEach(() => {
    app = <App url={{ pathname: '/' }} />
  })

  it('samples a text node from the DOM', () => {
    expect(shallow(app).find('div').text()).toEqual('Blast off.')
  })

  it('shows the correct snapshot', () => {
    const component = renderer.create(app)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

