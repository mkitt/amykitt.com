type PropsType = {
  readonly alt: string
  readonly className?: string
  readonly src: string
  readonly width?: number
  readonly height?: number
}

function WorkImage(props: PropsType) {
  const { alt, className, src, width = 1540, height = 1155 } = props
  return (
    <img
      alt={alt}
      className={className}
      src={`/assets/work/${src}`}
      width={width}
      height={height}
    />
  )
}

export default WorkImage
