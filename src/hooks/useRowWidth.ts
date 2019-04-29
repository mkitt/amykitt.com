import { useEffect, useState } from 'react'

const getWidth = (ref: any) => {
  const width =
    ref.current &&
    ref.current.firstChild &&
    ref.current.firstChild.getBoundingClientRect().width
  return Number(width)
}

function useRowWidth(ref: any) {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const handleResize = () => setWidth(getWidth(ref))
    window.addEventListener('resize', handleResize)
    setWidth(getWidth(ref))
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [ref])
  return width
}

export default useRowWidth
