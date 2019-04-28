import styled from '@emotion/styled/macro'
import { memo } from 'react'
import useCss, { useCssType } from '../hooks/useCss'

const Link = styled.a<useCssType>(
  {
    backgroundColor: 'transparent',
    color: 'inherit',
    textDecoration: 'none',
  },
  useCss,
)

export default memo(Link)
