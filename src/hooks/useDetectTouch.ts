import { useEffect } from 'react'

function useDetectTouch() {
  useEffect(() => {
    if (typeof document === 'undefined') {
      return
    }
    const docElem: Element = document.documentElement
    if (!('ontouchstart' in docElem)) {
      docElem.classList.add('no-touch')
    }
    const onTouchStart = () => {
      document.removeEventListener('touchstart', onTouchStart)
      docElem.classList.remove('no-touch')
      docElem.classList.add('has-touch')
    }
    document.addEventListener('touchstart', onTouchStart)
  }, [])
  return null
}

export default useDetectTouch
