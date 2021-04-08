import styled from '@emotion/styled/macro'
import { memo } from 'react'
import ReactMarkdown from 'react-markdown'
import Heading from './Heading'
import Img from './Img'
import View from './View'

type HeadingsPropsType = {
  readonly level: number
}

const Root = styled(View)({
  color: '#858585',
  fontSize: '0.875rem',
  position: 'relative',
  '@media (min-width: 47.5em)': {
    '#about &': {
      paddingLeft: 260,
    },
  },
})

const Title = styled(Heading)({
  '#about &': {
    fontSize: '1.125rem',
  },
})

const Subheading = styled(Heading)({
  fontWeight: 400,
})

const StyledImg = styled(Img)({
  marginBottom: '0.25rem',
  '&[alt="Amy Kitt"]': {
    width: 120,
    height: 241,
  },
  '@media (min-width: 47.5em)': {
    '&[alt="Amy Kitt"]': {
      height: 483,
      left: 0,
      position: 'absolute',
      top: 0,
      width: 240,
    },
  },
})

const List = styled('ul')({
  listStyle: 'none',
  margin: 0,
  padding: 0,
})

const Link = styled.a({
  backgroundColor: 'transparent',
  color: 'inherit',
})

const HeadingRenderer = (props: HeadingsPropsType) => {
  const { level } = props
  const headings = [Title, Heading, Subheading]
  const Comp = headings[level - 1] || Heading
  // @ts-ignore
  return <Comp as={`h${level}`} {...props} />
}

const components = {
  heading: (props: any) => <HeadingRenderer {...props} />,
  image: (props: any) => <StyledImg {...props} />,
  link: (props: any) => <Link {...props} />,
  linkReference: (props: any) => <Link {...props} />,
  list: (props: any) => <List {...props} />,
  root: (props: any) => <Root {...props} />,
}

type PropsType = {
  readonly source: string
}

const Markdown = ({ source }: PropsType) => (
  <ReactMarkdown renderers={components} skipHtml source={source} />
)

export default memo(Markdown)
