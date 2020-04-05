import React, { memo, SyntheticEvent } from 'react'
import Button from './Button'
import Img from './Img'

type PropsType = {
  readonly allowableWidth: number
  readonly handleClick: (e: SyntheticEvent) => void
  readonly id: string
  readonly src: string
  readonly title: string
  readonly width: number
  readonly height: number
}

const partWhite = 'rgba(255, 255, 255, 0.4)'
const zeroWhite = 'rgba(255, 255, 255, 0)'

const rowSpan = (height: number, rowGap = 4) =>
  Math.ceil((height + rowGap) / rowGap)

const Tile = (props: PropsType) => {
  return (
    <Button
      css={{
        gridRowEnd: `span ${rowSpan(props.height)}`,
        '&::after': {
          backgroundImage: `linear-gradient(45deg, ${partWhite} 0%, ${partWhite} 50%, ${zeroWhite} 50%, ${zeroWhite} 100%)`,
          bottom: 0,
          content: '""',
          left: 0,
          opacity: 0,
          position: 'absolute',
          right: 0,
          top: 0,
          transition: 'opacity 0.25s',
          zIndex: 2,
        },
        '.no-touch &:hover::after': {
          opacity: 1,
        },
      }}
      id={props.id}
      onClick={props.handleClick}
      title={props.title}
    >
      <Img
        alt={props.title}
        src={props.src}
        width={props.width}
        height={props.height}
      />
    </Button>
  )
}

export default memo(Tile)
