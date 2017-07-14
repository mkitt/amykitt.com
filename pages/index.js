// @flow
import React from 'react'
import css from '../styles/css'
import Layout from '../components/Layout'
import Wrapper from '../components/Wrapper'
import type { PageProps } from '../types/app.js.flow'

const titleStyle = css({
  fontSize: '1rem',
})

export default (props: PageProps) => (
  <Layout pathname={props.url.pathname} title="Hello.">
    <Wrapper>
      <h1 className={titleStyle}>Blast off.</h1>
    </Wrapper>
  </Layout>
)
