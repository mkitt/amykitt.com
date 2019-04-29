import styled from '@emotion/styled/macro'
import { memo } from 'react'
import useCss, { useCssType } from '../hooks/useCss'

type PropsType = {
  readonly as?: 'div' | 'main'
} & useCssType

const View = styled.div<PropsType>({}, useCss)

export default memo(View)
