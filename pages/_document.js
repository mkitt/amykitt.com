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
  body.isModalActive { overflow: hidden; }
  body::after {
    position: absolute;
    z-index: 2;
    display: none !important;
    width: 0;
    height: 0;
    visibility: hidden;
    content: "xsmall";
  }
  @media (min-width: 25em) {
    body::after { z-index: 2; content: "small"; }
  }
  @media (min-width: 47.5em) {
    body::after { z-index: 3; content: "medium"; }
  }
  @media (min-width: 63.75em) {
    body::after { z-index: 4; content: "large"; }
  }
  @media (min-width: 80.625em) {
    body::after { z-index: 5; content: "xlarge"; }
  }
  ::selection { color: #fff; text-shadow: none; background: #000; }
  h1, h2, h3, h4, h5, h6 { margin: 0; line-height: 1.25; }
  a { color: inherit; background-color: transparent; -webkit-text-decoration-skip: objects; }
  button {
    position: relative;
    display: inline-block;
    padding: 0;
    margin: 0;
    font: inherit;
    color: inherit;
    text-transform: none;
    vertical-align: middle;
    background: transparent;
    border: 0;
    border-radius: 0;
    outline: 0;
    cursor: pointer;
    -webkit-appearance: button;
  }
  input::-moz-focus-inner,
  button::-moz-focus-inner {
    padding: 0;
    border: 0;
  }
  img { font-size: 0.75em; border: 0; outline: 0; }
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
          <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" />
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
