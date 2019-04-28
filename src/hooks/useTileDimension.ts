type PropsType = {
  readonly allowableWidth: number
  readonly naturalWidth: number
  readonly naturalHeight: number
}

function useTileDimension({
  allowableWidth,
  naturalWidth,
  naturalHeight,
}: PropsType) {
  const ratio = naturalWidth ? naturalWidth / naturalHeight : NaN
  const widthConstrainedRelativeHeight = Math.round(
    allowableWidth * (1 / ratio),
  )
  const height = Math.min(widthConstrainedRelativeHeight, naturalHeight, 1200)
  const width = Math.round(height * ratio)
  return { width, height }
}

export default useTileDimension
