// @flow
import React from 'react'
import css, { after, hover } from '../styles/css'
import Button from './Button'
import TileImage from './TileImage'
import type { Project } from '../types/app.js.flow'

type Props = {
  allowableWidth: number,
  project: Project,
}

const partWhite = 'rgba(255, 255, 255, 0.4)'
const zeroWhite = 'rgba(255, 255, 255, 0)'

const style = css(
  {
    marginBottom: 10,
    fontSize: 0,
    letterSpacing: 0,
    wordSpacing: 0,
    whiteSpace: 'nowrap',
  },
  after({
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 2,
    opacity: 0,
    transition: 'opacity 0.25s',
    backgroundImage: `linear-gradient(45deg, ${partWhite} 0%, ${partWhite} 50%, ${zeroWhite} 50%, ${zeroWhite} 100%)`,
  }),
  hover(after({
    opacity: 1,
  })),
)

export default ({ allowableWidth, project, ...props }: Props) => (
  <Button
    className={style}
    title={project.title}
    data-id={project.id}
    {...props}
  >
    <TileImage
      src={project.tile}
      allowableWidth={allowableWidth}
      naturalWidth={Number(project.tileWidth)}
      naturalHeight={Number(project.tileHeight)}
    />
  </Button>
)
