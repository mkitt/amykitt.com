// @flow
import debounce from 'lodash/debounce'

const inOutSine = n => (
  0.5 * (1 - Math.cos(Math.PI * n))
)

const notifyObservers = (method: string, observers: Array<any>, props: any) => {
  observers.forEach((observer) => {
    if (observer[method]) {
      observer[method](props)
    }
  })
}

export const getPageY = () => (
  typeof window === 'undefined' ? 0 : window.pageYOffset || (document.documentElement && document.documentElement.scrollTop)
)

export const getViewportHeight = () => (
  typeof window === 'undefined' ? 0 : window.innerHeight
)

// ----------------------------------------------

const resizeObservers = []
let isResizeTicking = false
let hasResizeObservers = false

function resized() {
  const styles = window.getComputedStyle(document.body, '::after')
  let zIndex = Number(styles.getPropertyValue('z-index'))
  if (isNaN(zIndex)) { zIndex = 2 }
  const resizeProperties = {
    viewportColumnCount: Number(zIndex),
    viewportHeight: window.innerHeight,
    viewportSize: styles.content,
    viewportWidth: window.innerWidth,
  }
  notifyObservers('onResize', resizeObservers, resizeProperties)
}

function viewportWasResized() {
  if (!isResizeTicking) {
    requestAnimationFrame(() => {
      resized()
      isResizeTicking = false
    })
    isResizeTicking = true
  }
}

const resizeFunc = debounce(viewportWasResized, 100)

export function addResizeObserver(observer: any) {
  if (resizeObservers.indexOf(observer) === -1) {
    resizeObservers.push(observer)
    viewportWasResized()
  }
  if (resizeObservers.length === 1 && !hasResizeObservers) {
    hasResizeObservers = true
    window.addEventListener('resize', resizeFunc)
  }
}

export function removeResizeObserver(observer: any) {
  const index = resizeObservers.indexOf(observer)
  if (index > -1) {
    resizeObservers.splice(index, 1)
  }
  if (resizeObservers.length === 0) {
    hasResizeObservers = false
    window.removeEventListener('resize', resizeFunc)
  }
}

// ----------------------------------------------

export const scrollViewport = (to: number, fn?: Function) => {
  if (typeof window === 'undefined') { return }
  const start = Number(new Date())
  const from = Number(getPageY())
  const ease = inOutSine
  const duration = 350

  if (from === to && fn) {
    fn()
    return
  }

  const animate = () => {
    const now = Number(new Date())
    const time = Math.min(1, ((now - start) / duration))
    const eased = ease(time)
    window.scrollTo(0, (eased * (to - from)) + from)
    time < 1 ? requestAnimationFrame(animate) : (fn && fn()) // eslint-disable-line
  }
  requestAnimationFrame(animate)
}

export const scrollViewportPanel = (position: number, fn?: Function) => {
  scrollViewport(getViewportHeight() * position, fn)
}

// ----------------------------------------------

const scrollObservers = []
let isScrollTicking = false
let hasScrollObservers = false

const scrolled = () => {
  const scrollProperties = {
    scrollY: Math.ceil(window.pageYOffset),
  }
  notifyObservers('onScroll', scrollObservers, scrollProperties)
}

const viewportWasScrolled = () => {
  if (!isScrollTicking) {
    requestAnimationFrame(() => {
      scrolled()
      isScrollTicking = false
    })
    isScrollTicking = true
  }
}

export const addScrollObserver = (observer: any) => {
  if (typeof window === 'undefined') { return }
  if (scrollObservers.indexOf(observer) === -1) {
    scrollObservers.push(observer)
  }
  if (scrollObservers.length === 1 && !hasScrollObservers) {
    hasScrollObservers = true
    window.addEventListener('scroll', viewportWasScrolled)
  }
}

export const removeScrollObserver = (observer: any) => {
  if (typeof window === 'undefined') { return }
  const index = scrollObservers.indexOf(observer)
  if (index > -1) {
    scrollObservers.splice(index, 1)
  }
  if (scrollObservers.length === 0) {
    hasScrollObservers = false
    window.removeEventListener('scroll', viewportWasScrolled)
  }
}

// ----------------------------------------------

const keyObservers = {}
let hasKeyObservers = false

const keyWasTriggered = (e: KeyboardEvent) => {
  const which = e.which || e.keyCode
  const callbacks = keyObservers[which]
  if (!callbacks) { return }
  callbacks.forEach((callback) => {
    if (callback) {
      callback()
    }
  })
}

export const addKeyObserver = (key: number, callback: Function) => {
  if (!keyObservers[key]) {
    keyObservers[key] = []
  }
  keyObservers[key].push(callback)
  if (!hasKeyObservers) {
    hasKeyObservers = true
    window.addEventListener('keydown', keyWasTriggered)
  }
}

export const removeKeyObserver = (key: number, callback: Function) => {
  const index = keyObservers[key].indexOf(callback)
  if (index > -1) {
    keyObservers[key].splice(index, 1)
  }

  if (!keyObservers[key].length) {
    delete keyObservers[key]
  }

  if (!Object.keys(keyObservers).length) {
    hasKeyObservers = false
    window.removeEventListener('keydown', keyWasTriggered)
  }
}

