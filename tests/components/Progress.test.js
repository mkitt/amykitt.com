import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import Progress from '../../components/Progress'

describe('Progress', () => {
  let progress
  let shallowProgress

  beforeEach(() => {
    progress = <Progress />
    shallowProgress = shallow(progress)
  })

  it('sets up with a null progress bar', () => {
    expect(shallowProgress.find('div').length).toBe(0)
  })

  it('sets up with a requesting progress bar', () => {
    shallowProgress.setState({ isRequesting: true })
    expect(shallowProgress.find('div').length).toBe(2)
  })

  it('shows the correct snapshot', () => {
    const component = renderer.create(progress)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

