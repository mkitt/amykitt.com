// @flow
import React from 'react'
import Markdown from './Markdown'
import View from './View'
import type { About } from '../types/app.js.flow'

type Props = {
  about: About,
}

export default ({ about, ...props }: Props) => (
  <View {...props} >
    <Markdown
      source={about.body}
    />
  </View>
)
