// @flow
import React from 'react'
import css from '../styles/css'
import NavbarBullet from './NavbarBullet'
import NavbarLink from './NavbarLink'
import NavbarLogo from './NavbarLogo'
import NavbarTitle from './NavbarTitle'
import View from './View'
import Wrapper from './Wrapper'

const navStyle = css({
  position: 'sticky',
  top: 0,
  height: 160,
  paddingRight: 80,
  paddingLeft: 80,
  color: '#7c7c7c',
  backgroundColor: '#f6f6f6',
})

const wrapperStyle = css({
  display: 'flex',
  flexFlow: 'row wrap',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
})

const contentStyle = css({
  flex: 2,
  display: 'flex',
  flexFlow: 'column wrap',
  alignItems: 'center',
  justifyContent: 'center',
})

type Props = {
  pathname: string,
}

export default (props: Props) => (
  <nav className={navStyle}>
    <Wrapper className={wrapperStyle}>
      <NavbarLogo href="/" isActive={props.pathname === '/'} />
      <View className={contentStyle}>
        <NavbarTitle />
        <View>
          <NavbarLink href="/" isActive={props.pathname === '/'} >
            Work
          </NavbarLink>
          <NavbarBullet />
          <NavbarLink href="/#about" isActive={props.pathname === '/#about'} >
            About
          </NavbarLink>
        </View>
      </View>
    </Wrapper>
  </nav>
)
