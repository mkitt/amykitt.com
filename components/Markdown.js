// @flow
import React from 'react'
import Markdown from 'react-markdown'
import css, { media3, select } from '../styles/css'

type Props = {
  source: string,
}

// Markdown styles
const style = css(
  {
    fontSize: 14,
    position: 'relative',
    color: '#858585',
  },
  select('& h1, & h2', {
    marginTop: 50,
    lineHeight: 1,
    fontSize: 15,
    fontWeight: 700,
    textTransform: 'uppercase',
  }),
  select('& h3', {
    fontSize: 15,
    fontWeight: 400,
    lineHeight: 1,
    textTransform: 'uppercase',
  }),
  select('& img', {
    maxWidth: '100%',
    height: 'auto',
    fontSize: 12,
    marginBottom: 2,
  }),
  select('& ul', {
    margin: 0,
    padding: 0,
    listStyle: 'none',
  }),
  select('& img[alt="Amy Kitt"]', {
    width: 120,
    height: 120,
    fontSize: 12,
  }),
  media3(select('& img[alt="Amy Kitt"]', {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 240,
    height: 720,
  })),
  media3(select('#about &', {
    paddingLeft: 260,
  })),
  select('#about & h1', {
    fontSize: 18,
  }),
)

export default ({ source, ...props }: Props) => (
  <Markdown
    className={`${style}`}
    source={source}
    {...props}
  />
)
