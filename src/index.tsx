import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

async function loadPolyfills() {
  if (typeof window.IntersectionObserver === 'undefined') {
    await import('intersection-observer')
  }
  if (!('scrollBehavior' in document.documentElement.style)) {
    const smoothscroll = await import('smoothscroll-polyfill')
    smoothscroll.polyfill()
  }
}
loadPolyfills()

const rootElement = document && document.getElementById('root')
const index = rootElement != null && ReactDOM.render(<App />, rootElement)

export default index
