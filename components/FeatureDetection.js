import { Component } from 'react'

export default class extends Component {
  componentDidMount() {
    if (typeof document === 'undefined') { return }
    const cl = document.documentElement.classList
    if (!('ontouchstart' in document.documentElement)) {
      cl.add('no-touch')
    }
    const onTouchStart = () => {
      document.removeEventListener('touchstart', onTouchStart)
      cl.remove('no-touch')
      cl.add('has-touch')
    }
    document.addEventListener('touchstart', onTouchStart)
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    return null
  }
}
