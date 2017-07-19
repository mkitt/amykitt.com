// @flow
import React from 'react'
import { createSelector } from 'reselect'
import css, { media3, media4, media5 } from '../styles/css'
import View from './View'
import ProjectTile from './ProjectTile'
import type { Project } from '../types/app.js.flow'

type Props = {
  allowableWidth: number,
  columnCount: number,
  onClick: Function,
  projects: Array<Project>,
}

const wrapperStyles = css({
  marginLeft: -10,
})

const columnStyles = css(
  {
    display: 'inline-block',
    verticalAlign: 'top',
    width: 'calc(50% - 10px)',
    marginLeft: 10,
    overflow: 'hidden',
  },
  media3({ width: 'calc(33.33333% - 10px)' }),
  media4({ width: 'calc(25% - 10px)' }),
  media5({ width: 'calc(20% - 10px)' }),
)

const selectProjects = props => props.projects
const selectColumnCount = props => props.columnCount

const selectProjectsInColumns = createSelector(
  [selectProjects, selectColumnCount], (projects, columnCount) => {
    const columns = []
    for (let i = 0; i < columnCount; i += 1) { columns.push([]) }
    projects.forEach((item, index) => columns[index % columnCount].push(item))
    return columns
  },
)

export default class extends React.PureComponent {
  props: Props

  render() {
    const { allowableWidth, columnCount, projects, onClick } = this.props
    if (!projects || !projects.length) {
      return (
        <View>
          <p>Loading...</p>
        </View>
      )
    }
    const columns = selectProjectsInColumns({ projects, columnCount })
    return (
      <View className={wrapperStyles}>
        {columns.map((columnProjects, columnIndex) => (
          <View className={`Column ${columnStyles}`} key={`Column_${columnIndex + 1}`}>
            { columnProjects.map(project => (
              <ProjectTile
                allowableWidth={allowableWidth}
                onClick={onClick}
                key={`Project_${project.title}`}
                project={project}
              />
            ))}
          </View>
        ))}
      </View>
    )
  }
}
