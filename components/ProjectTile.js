// @flow
import React from 'react'
import Button from './Button'
import type { Project } from '../types/app.js.flow'

type Props = {
  project: Project,
}

export default ({ project, ...props }: Props) => (
  <Button
    title={project.title}
    data-id={project.id}
    {...props}
  >
    <img alt={project.title} src={project.tile} width={100} />
  </Button>
)
