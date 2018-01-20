// @flow
/* eslint-disable no-underscore-dangle */
import React, { type Node } from 'react'
import Head from 'next/head'
import { rehydrate } from 'glamor'
import FeatureDetection from './FeatureDetection'
import Navbar from './Navbar'

// Adds server generated styles to glamor cache.
// Has to run before any calls to glamor (load Layout first)
if (typeof window !== 'undefined') {
  if (window.__NEXT_DATA__ && window.__NEXT_DATA__.ids) {
    rehydrate(window.__NEXT_DATA__.ids)
  }
}

type Props = {
  children?: Node,
  pathname: string,
  title?: string,
}

const title = 'Amy Kitt Design'
const url = 'https://amykitt.com/'
const favicon = '/static/favicon.png'
const description = 'hello. I am a freelance designer with a focus on branding + identity.'

const Layout = (props: Props) => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{props.title}</title>
      <meta name="referrer" content="always" />
      <meta name="application-name" content={props.title} />
      <meta name="subject" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={title} />
      <meta property="og:image" content={favicon} />
      <meta property="og:description" content={description} />
      <meta name="twitter:site" content="@amykitt" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="name" itemProp="name" content={props.title} />
      <meta name="url" itemProp="url" content={url} />
      <meta name="image" itemProp="image" content={favicon} />
      <meta name="description" itemProp="description" content={description} />
      <link href="/static/favicon.ico" rel="shortcut icon" type="image/x-icon" />
      <link href="/static/favicon.svg" color="#000" rel="mask-icon" />
    </Head>
    <FeatureDetection />
    <Navbar pathname={props.pathname} />
    <main>
      {props.children}
    </main>
  </div>
)

Layout.defaultProps = {
  children: null,
  title,
}

export default Layout
