type PropsType = {
  readonly allowableWidth: number
  readonly naturalWidth: number
  readonly naturalHeight: number
}

/**
 * Calculates dimensions for a tile in a masonry layout
 */
function getTileDimension(props: PropsType) {
  const { allowableWidth, naturalWidth, naturalHeight } = props
  const ratio = naturalWidth ? naturalWidth / naturalHeight : NaN
  const widthConstrainedRelativeHeight = Math.round(
    allowableWidth * (1 / ratio),
  )
  const height = Math.min(widthConstrainedRelativeHeight, naturalHeight, 1200)
  const width = Math.round(height * ratio)
  const rowSpan = Math.ceil((height + 4) / 4)
  return { width, height, rowSpan }
}

export default getTileDimension
