// @flow
import React from 'react'
import View from './View'
import ProjectTile from './ProjectTile'
import type { Project } from '../types/app.js.flow'

type Props = {
  onClick: Function,
  projects: Array<Project>,
}

export default class extends React.PureComponent {
  props: Props

  render() {
    const { onClick, projects } = this.props
    return (
      <View>
        { projects.map(project => (
          <ProjectTile
            onClick={onClick}
            key={`Project_${project.title}`}
            project={project}
          />
        ))}
      </View>
    )
  }
}
