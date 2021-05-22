import { useEffect, useState } from 'react'

const getWidth = (ref: any) => {
  const width =
    ref.current &&
    ref.current.firstChild &&
    ref.current.firstChild.getBoundingClientRect().width
  return Number(width)
}

/**
 * Captures resize events to measure the row width in a masonry layout.
 */
function useRowWidth(ref: any) {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const handleResize = () => setWidth(getWidth(ref))
    globalThis.addEventListener('resize', handleResize)
    setWidth(getWidth(ref))
    return () => {
      globalThis.removeEventListener('resize', handleResize)
    }
  }, [ref])
  return width
}

export default useRowWidth
