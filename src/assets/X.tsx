import React, { memo } from 'react'

const X = () => (
  <svg width={24} height={24} viewBox="0 0 24 24">
    <g stroke="currentColor">
      <line x1="2" y1="2" x2="22" y2="22" />
      <line x1="22" y1="2" x2="2" y2="22" />
    </g>
  </svg>
)

export default memo(X)
