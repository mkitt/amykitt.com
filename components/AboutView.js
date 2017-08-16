// @flow
import React from 'react'
import css from '../styles/css'
import Markdown from './Markdown'
import View from './View'
import type { About } from '../types/app.js.flow'

type Props = {
  about: About,
}

const style = css({
  paddingTop: 20,
  paddingBottom: 20,
})

export default class extends React.PureComponent {
  props: Props

  render() {
    const { about, ...props } = this.props
    return (
      <View className={style} {...props} >
        <Markdown
          source={about.body}
        />
      </View>
    )
  }
}
