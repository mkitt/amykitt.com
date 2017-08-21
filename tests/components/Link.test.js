import React from 'react'
import renderer from 'react-test-renderer'
import Link from '../../components/Link'

describe('Link', () => {
  it('shows the correct snapshot for the Link component tree (next.js)', () => {
    const component = (
      <Link
        as="/projects/project-1"
        href="/projects?id=project-1"
      >
        Next.js Link
      </Link>
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('shows the correct snapshot for the Link component tree (external link)', () => {
    const component = (
      <Link
        href="https://www.google.com/"
      >
        External Link
      </Link>
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
