// @flow
import React from 'react'
import Svg from './Svg'

export const AKIcon = ({ ...props }: any) => (
  <Svg width={43} height={47} {...props} viewBox="0 0 73 80">
    <g>
      <path fill="#7c7c7c" d="M0,37.4468085 L0,29.5421277 L7.6313703,29.5421277 C19.0775814,28.9514894 25.2042934,24.9957447 25.2042934,8.90893617 L25.2042934,0 L33.7745975,0 L33.7745975,37.4468085 L0,37.4468085 Z" />
      <path fill="#7c7c7c" d="M33.7745975,80 L33.7745975,72.0953191 L26.1432272,72.0953191 C14.6970161,71.506383 8.57030411,67.5506383 8.57030411,51.4621277 L8.57030411,42.5531915 L0,42.5531915 L0,80 L33.7745975,80 Z" />
      <path fill="#e1aee8" d="M72.6153846,37.4468085 L72.6153846,29.5421277 L64.9840143,29.5421277 C53.5378032,28.9514894 47.4110912,24.9957447 47.4110912,8.90893617 L47.4110912,0 L38.8407871,0 L38.8407871,37.4468085 L72.6153846,37.4468085 Z" />
    </g>
  </Svg>
)

export const XIcon = ({ ...props }: any) => (
  <Svg width={24} height={24} {...props} viewBox="0 0 24 24">
    <g stroke="currentColor">
      <line x1="2" y1="2" x2="22" y2="22" />
      <line x1="22" y1="2" x2="2" y2="22" />
    </g>
  </Svg>
)

type Props = {
  kind: string,
}

export default ({ kind, ...props }: Props) => {
  switch (kind) {
    case 'XIcon':
      return <XIcon {...props} />
    case 'AKIcon':
    default:
      return <AKIcon {...props} />
  }
}
