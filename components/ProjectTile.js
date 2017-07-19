// @flow
import React from 'react'
import Button from './Button'
import TileImage from './TileImage'
import type { Project } from '../types/app.js.flow'

type Props = {
  allowableWidth: number,
  project: Project,
}

export default ({ allowableWidth, project, ...props }: Props) => (
  <Button
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
