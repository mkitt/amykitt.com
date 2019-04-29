import { useCallback, SyntheticEvent } from 'react'

function useScrollToAnchor() {
  return useCallback((e: SyntheticEvent) => {
    e.preventDefault()
    const href = e.currentTarget.getAttribute('href') || ''
    const selector = href.replace('#', '')
    if (selector === '/') {
      window.scroll({ behavior: 'smooth', left: 0, top: 0 })
      return
    }
    const element = document.getElementById(selector)
    if (element != null) element.scrollIntoView({ behavior: 'smooth' })
  }, [])
}

export default useScrollToAnchor
