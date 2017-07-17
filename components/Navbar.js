// @flow
import React from 'react'
import css from '../styles/css'
import { getPageY, scrollViewport } from '../lib/viewport'
import NavbarBullet from './NavbarBullet'
import NavbarLink from './NavbarLink'
import NavbarLogo from './NavbarLogo'
import NavbarTitle from './NavbarTitle'
import View from './View'

type Props = {
  pathname: string,
}

const navStyle = css({
  position: 'sticky',
  top: 0,
  zIndex: 5,
  height: 160,
  color: '#7c7c7c',
  backgroundColor: '#f6f6f6',
})

const wrapperStyle = css({
  position: 'relative',
  display: 'flex',
  flexFlow: 'row wrap',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: 1440,
  height: '100%',
  marginRight: 'auto',
  marginLeft: 'auto',
  paddingRight: 80,
  paddingLeft: 80,
  outline: '1px dotted magenta',
})

const contentStyle = css({
  flex: 2,
  display: 'flex',
  flexFlow: 'column wrap',
  alignItems: 'center',
  justifyContent: 'center',
})

const onClickToSection = (e: any) => {
  e.preventDefault()
  const href = e.target.getAttribute('href')
  const selector = href.replace('#', '')
  if (selector === '/') {
    scrollViewport(0)
    return
  }
  const element = document.getElementById(selector)
  const top = element && element.getBoundingClientRect().top + getPageY()
  scrollViewport(top || 0)
}

export default class extends React.PureComponent {
  props: Props

  render() {
    const { pathname } = this.props
    return (
      <nav className={navStyle}>
        <View className={wrapperStyle}>
          <NavbarLogo
            href="/"
            isActive={pathname === '/'}
            onClick={onClickToSection}
          />
          <View className={contentStyle}>
            <NavbarTitle />
            <View>
              <NavbarLink
                href="/"
                isActive={pathname === '/'}
                onClick={onClickToSection}
              >
                Work
              </NavbarLink>
              <NavbarBullet />
              <NavbarLink
                href="#about"
                isActive={pathname === '#about'}
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
