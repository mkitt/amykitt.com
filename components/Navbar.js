// @flow
import React from 'react'
import { createSelector } from 'reselect'
import css, { media3 } from '../styles/css'
import {
  addResizeObserver,
  addScrollObserver,
  getPageY,
  removeResizeObserver,
  removeScrollObserver,
  scrollViewport,
} from '../lib/viewport'
import NavbarBullet from './NavbarBullet'
import NavbarLink from './NavbarLink'
import NavbarLogo from './NavbarLogo'
import NavbarTitle from './NavbarTitle'
import View from './View'
import type { ResizeProps, ScrollProps } from '../types/app.js.flow'

type Props = {
  pathname: string,
}

type State = {
  isAboutActive: boolean,
  viewportColumnCount: number,
  viewportHeight: number,
}

const navStyle = css({
  position: 'sticky',
  top: 0,
  zIndex: 5,
  height: 160,
  color: '#7c7c7c',
  backgroundColor: '#f6f6f6',
})

const wrapperStyle = css(
  {
    position: 'relative',
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 1440,
    height: '100%',
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingRight: 20,
    paddingLeft: 20,
    outline: '1px dotted magenta',
  },
  media3({
    paddingRight: 80,
    paddingLeft: 80,
  }),
)

const contentStyle = css({
  flex: 2,
  display: 'flex',
  flexFlow: 'column wrap',
  alignItems: 'center',
  justifyContent: 'center',
})

const selectViewportHeight = state => state.viewportHeight || 0

const selectAboutY = createSelector(
  [selectViewportHeight], (height) => {
    const element = document.getElementById('about')
    return element && height ? (element.offsetTop - 160) : NaN
  },
)

const onClickToSection = (e: any) => {
  e.preventDefault()
  const href = e.target.getAttribute('href')
  const selector = href.replace('#', '')
  if (selector === '/') {
    scrollViewport(0)
    return
  }
  const element = document.getElementById(selector)
  const top = element && (element.getBoundingClientRect().top + getPageY()) - 160
  scrollViewport(top || 0)
}

export default class extends React.PureComponent {
  props: Props
  state: State = {
    isAboutActive: false,
    viewportColumnCount: 5,
    viewportHeight: 768,
  }

  componentDidMount() {
    addResizeObserver(this)
    addScrollObserver(this)
  }

  componentWillUnmount() {
    removeResizeObserver(this)
    removeScrollObserver(this)
  }

  onResize = ({ viewportColumnCount, viewportHeight }: ResizeProps) => {
    this.setState({ viewportColumnCount, viewportHeight })
  }

  onScroll = (props: ScrollProps) => {
    const aboutY = selectAboutY(this.state)
    const isAboutActive = !isNaN(aboutY) && props.scrollY >= aboutY
    if (this.state.isAboutActive !== isAboutActive) {
      this.setState({ isAboutActive })
    }
  }

  render() {
    const { isAboutActive, viewportColumnCount } = this.state
    return (
      <nav className={navStyle}>
        <View className={wrapperStyle}>
          { viewportColumnCount > 2 &&
            <NavbarLogo
              href="/"
              isActive={!isAboutActive}
              onClick={onClickToSection}
            />
          }
          <View className={contentStyle}>
            <NavbarTitle />
            <View>
              <NavbarLink
                href="/"
                isActive={!isAboutActive}
                onClick={onClickToSection}
              >
                Work
              </NavbarLink>
              <NavbarBullet />
              <NavbarLink
                href="#about"
                isActive={isAboutActive}
                onClick={onClickToSection}
              >
                About
              </NavbarLink>
            </View>
          </View>
        </View>
      </nav>
    )
  }
}
