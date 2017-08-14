// @flow
import React from 'react'
import css, { media3 } from '../styles/css'
import Dismiss from './Dismiss'
import Markdown from './Markdown'
import ProjectPaddles from './ProjectPaddles'
import View from './View'
import type { Project } from '../types/app.js.flow'

type Props = {
  onCloseModal: Function,
  onNextDetail: Function,
  onPrevDetail: Function,
  project: Project | null | void,
}

const style = css({
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 20,
  transition: 'opacity 0.4s ease, background-color 0.4s ease',
})

const inactiveStyle = css({
  opacity: 0,
  pointerEvents: 'none',
  backgroundColor: 'transparent',
})

const activeStyle = css({
  opacity: 1,
  WebkitOverflowScrolling: 'touch',
  overflowY: 'auto',
  backgroundColor: 'rgba(124, 124, 129, 0.5)',
})

const markdownStyle = css(
  {
    position: 'relative',
    maxWidth: 1292,
    minHeight: 'calc(100vh - 160px)',
    paddingTop: 15,
    paddingRight: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    marginTop: 160,
    marginRight: 'auto',
    marginLeft: 'auto',
    backgroundColor: '#fff',
    border: '5px solid #fff',
  },
  media3({
    paddingRight: 80,
    paddingBottom: 80,
    paddingLeft: 80,
  }),
)

let modalElement = null

export default class extends React.PureComponent {
  props: Props

  componentDidUpdate() {
    const { project } = this.props
    if (!(document && document.body)) { return }
    if (project) {
      document.body.classList.add('isModalActive')
    } else if (!project) {
      modalElement = null
      document.body.classList.remove('isModalActive')
    }
    if (modalElement) {
      modalElement.scrollTop = 0
    }
  }

  onClickModal = (e: any) => {
    const classList = e.target.classList
    if (classList.contains('Modal') || classList.contains('jsDismissModal')) {
      this.props.onCloseModal()
    }
  }

  render() {
    const { onNextDetail, onPrevDetail, project } = this.props
    if (!project) {
      return <View className={`Modal ${style} ${inactiveStyle}`} />
    }
    return (
      <View
        className={`Modal ${style} ${activeStyle}`}
        onClick={this.onClickModal}
        ref={(el) => { modalElement = el }}
      >
        <View className={markdownStyle}>
          <Markdown
            source={project.body}
          />
          <ProjectPaddles
            onNextDetail={onNextDetail}
            onPrevDetail={onPrevDetail}
          />
        </View>
        <Dismiss className="jsDismissModal" />
      </View>
    )
  }
}
