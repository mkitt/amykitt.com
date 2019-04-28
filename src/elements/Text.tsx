import styled from '@emotion/styled/macro'
import { memo } from 'react'
import useCss, { useCssType } from '../hooks/useCss'

type PropsType = {
  readonly as?: 'span' | 'h1' | 'p'
} & useCssType

const Text = styled.span<PropsType>(
  {
    margin: 0,
  },
  useCss,
)

export default memo(Text)
