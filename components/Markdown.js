// @flow
import React from 'react'
import Markdown from 'react-markdown'
import css, { select } from '../styles/css'

type Props = {
  source: string,
}

// Markdown styles
const style = css(
  {
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
  select('& img[alt="Amy Kitt"]', {
    width: 120,
    height: 120,
    fontSize: 12,
  }),
)

export default ({ source, ...props }: Props) => (
  <Markdown
    className={`${style}`}
    source={source}
    {...props}
  />
)
