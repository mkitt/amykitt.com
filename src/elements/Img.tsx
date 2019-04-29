import styled from '@emotion/styled/macro'
import { memo } from 'react'
import useCss, { useCssType } from '../hooks/useCss'

const Img = styled.img<useCssType>(
  {
    border: 0,
    fontSize: '0.75em',
    height: 'auto',
    maxWidth: '100%',
    outline: 0,
    verticalAlign: 'middle',
  },
  useCss,
)

export default memo(Img)
