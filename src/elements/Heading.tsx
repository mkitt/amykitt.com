import styled from '@emotion/styled/macro'
import { memo } from 'react'
import useCss, { useCssType } from '../hooks/useCss'

type PropsType = {
  readonly as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
} & useCssType

const Heading = styled.h2<PropsType>(
  {
    fontSize: '0.9375rem',
    fontWeight: 700,
    lineHeight: 1,
    margin: 0,
    textTransform: 'uppercase',
  },
  useCss,
)

export default memo(Heading)
