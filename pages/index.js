// @flow
import 'isomorphic-fetch'
import React from 'react'
import { createSelector } from 'reselect'
import { indexPath } from '../networking/api'
import AboutView from '../components/AboutView'
import Layout from '../components/Layout'
import Section from '../components/Section'
import Projects from '../components/Projects'
import ProjectModal from '../components/ProjectModal'
import type { About, Home, Project, Url } from '../types/app.js.flow'

export type Props = {
  about: About,
  home: Home,
  projects: Array<Project>,
  url: Url,
}

type State = {
  project: Project | null | void,
}

const selectId = (props, state, vo) => vo.id
const selectProjects = props => props.projects

const selectProject = createSelector(
  [selectId, selectProjects], (id, projects) => (
    projects.find(project => project.id === id)
  ),
)

export default class extends React.PureComponent {
  props: Props
  // eslint-disable-next-line
  state: State = {
    project: null,
  }

  static async getInitialProps() {
    const res = await fetch(indexPath())
    const json = await res.json()
    return { ...json }
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

  setProject = (id: string | null | void) => {
    const project = selectProject(this.props, this.state, { id })
    if (project !== this.state.project) {
      this.setState({ project })
    }
  }

  render() {
    const { about, projects, url } = this.props
    const { project } = this.state
    return (
      <Layout pathname={url.pathname} title="Hello.">
        <Section id="work">
          <Projects
            onClick={this.onClickProject}
            projects={projects}
          />
        </Section>
        <Section id="about">
          <AboutView
            about={about}
          />
        </Section>
        <ProjectModal
          onCloseModal={this.onCloseModal}
          project={project}
        />
      </Layout>
    )
  }
}
