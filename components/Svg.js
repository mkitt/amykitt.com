// @flow
import React from 'react'

type SvgProps = {
  children?: React.Element<*>,
  width?: number,
  height?: number,
  size?: number,
  viewBox: string,
}

const Svg = ({ children, size, width, height, viewBox, ...props }: SvgProps) => (
  <svg
    aria-hidden
    height={size != null ? size : height}
    width={size != null ? size : width}
    viewBox={viewBox}
    {...props}
  >
    {children}
  </svg>
)

Svg.defaultProps = {
  children: null,
  width: 32,
  height: 32,
  size: null,
}

export default Svg
