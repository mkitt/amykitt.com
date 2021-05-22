function X(props: React.SVGAttributes<SVGElement>) {
  return (
    <svg aria-hidden width={24} height={24} viewBox="0 0 24 24" {...props}>
      <g stroke="currentColor">
        <line x1="2" y1="2" x2="22" y2="22" />
        <line x1="22" y1="2" x2="2" y2="22" />
      </g>
    </svg>
  )
}

export default X
