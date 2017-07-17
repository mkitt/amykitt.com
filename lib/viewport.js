// @flow
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
