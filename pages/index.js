// @flow
import 'isomorphic-fetch'
import React from 'react'
import { createSelector } from 'reselect'
import { indexPath } from '../networking/api'
import AboutView from '../components/AboutView'
import HorizontalRule from '../components/HorizontalRule'
import Layout from '../components/Layout'
import Section from '../components/Section'
import Projects from '../components/Projects'
import ProjectModal from '../components/ProjectModal'
import {
  addKeyObserver,
  removeKeyObserver,
  addResizeObserver,
  removeResizeObserver,
} from '../lib/viewport'
import type { About, Home, Project, ResizeProps, Url } from '../types/app.js.flow'

export type Props = {
  about: About,
  home: Home,
  projects: Array<Project>,
  url: Url,
}

type State = {
  project: Project | null | void,
  viewportColumnCount: number,
  viewportHeight: number,
  viewportSize: string,
  viewportWidth: number,
}

const ESC = 27

const selectId = (props, state, vo) => vo.id
const selectProjects = props => props.projects
const selectHomeTiles = props => props.home.tiles

const selectProject = createSelector(
  [selectId, selectProjects], (id, projects) => (
    projects.find(project => project.id === id)
  ),
)

const selectWorkProjects = createSelector(
  [selectProjects, selectHomeTiles], (projects, tiles) => (
    tiles.map(id => projects.find(project => project.id === id))
  ),
)

const selectViewportColumnCount = state => state.viewportColumnCount || 2
const selectViewportWidth = state => state.viewportWidth || 0
const selectAllowableGridWidth = createSelector(
  [selectViewportColumnCount, selectViewportWidth], (columnCount, viewportWidth) => {
    const columnPadding = 10
    const vw = viewportWidth - (columnCount < 3 ? 40 : 160) // site padding :(
    const width = Math.min(vw, 1310)
    return Math.round((width - ((columnCount + 1) * columnPadding)) / columnCount)
  },
)

export default class extends React.PureComponent {
  props: Props
  // eslint-disable-next-line
  state: State = {
    project: null,
    viewportColumnCount: 5,
    viewportHeight: 768,
    viewportSize: 'xlarge',
    viewportWidth: 1440,
  }

  static async getInitialProps() {
    const res = await fetch(indexPath())
    const json = await res.json()
    return { ...json }
  }

  componentDidMount() {
    addResizeObserver(this)
    addKeyObserver(ESC, this.setProject)
  }

  componentWillUnmount() {
    removeResizeObserver(this)
    removeKeyObserver(ESC, this.setProject)
  }

  onClickProject = ({ currentTarget }: any) => {
    const id = currentTarget && currentTarget.dataset && currentTarget.dataset.id
    if (id) {
      this.setProject(id)
    }
  }

  onCloseModal = () => {
    this.setProject()
  }

  onResize = (props: ResizeProps) => {
    this.setState({ ...props })
  }

  onPrevDetail = () => {
    const { project } = this.state
    if (!project || !project.id) { return }
    const works = selectWorkProjects(this.props)
    const currentIndex = works.indexOf(project)
    const prevIndex = currentIndex === 0 ? works.length - 1 : currentIndex - 1
    const prevProject = works[prevIndex]
    if (prevProject) {
      this.setState({ project: prevProject })
    }
  }

  onNextDetail = () => {
    const { project } = this.state
    if (!project || !project.id) { return }
    const works = selectWorkProjects(this.props)
    const currentIndex = works.indexOf(project)
    const nextIndex = currentIndex === works.length - 1 ? 0 : currentIndex + 1
    const nextProject = works[nextIndex]
    if (nextProject) {
      this.setState({ project: nextProject })
    }
  }

  setProject = (id: string | null | void) => {
    const project = selectProject(this.props, this.state, { id })
    if (project !== this.state.project) {
      this.setState({ project })
    }
  }

  render() {
    const { about, url } = this.props
    const { project, viewportColumnCount } = this.state
    const allowableGridWidth = selectAllowableGridWidth(this.state)
    const works = selectWorkProjects(this.props)
    return (
      <Layout pathname={url.pathname} title="Hello.">
        <Section id="work" style={{ marginBottom: 80 }}>
          <Projects
            allowableWidth={allowableGridWidth}
            columnCount={viewportColumnCount}
            onClick={this.onClickProject}
            projects={works}
          />
        </Section>
        <HorizontalRule />
        <Section id="about">
          <AboutView
            about={about}
          />
        </Section>
        <ProjectModal
          onCloseModal={this.onCloseModal}
          onNextDetail={this.onNextDetail}
          onPrevDetail={this.onPrevDetail}
          project={project}
        />
      </Layout>
    )
  }
}
