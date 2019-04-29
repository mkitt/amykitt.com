import styled from '@emotion/styled/macro'
import { memo } from 'react'
import useCss, { useCssType } from '../hooks/useCss'

type PropsType = {
  readonly as?: 'div' | 'nav' | 'section'
} & useCssType

const Grid = styled.div<PropsType>({ display: 'grid' }, useCss)

export default memo(Grid)
