// @flow
/* eslint-disable react/no-danger */
import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { renderStatic } from 'glamor-server'

const globalStyles = `
  *, *::before, *::after { box-sizing: border-box; -webkit-font-smoothing: antialiased; }
  html {
    font: normal 400 100% / 1.5 Montserrat, -apple-system, sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  body { position: relative; margin: 0; overflow-x: hidden; background-color: #fff; }
  ::selection { color: #fff; text-shadow: none; background: #000; }
  h1, h2, h3, h4, h5, h6 { margin: 0; line-height: 1.25; }
  a { color: inherit; background-color: transparent; -webkit-text-decoration-skip: objects; }
`.replace(/\n/g, '')

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const page = renderPage()
    const styles = renderStatic(() => page.html)
    return { ...page, ...styles }
  }

  constructor(props: any) {
    super(props)
    const { __NEXT_DATA__, ids } = props
    if (ids) {
      __NEXT_DATA__.ids = this.props.ids
    }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet"/>
          <style>{globalStyles}</style>
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
