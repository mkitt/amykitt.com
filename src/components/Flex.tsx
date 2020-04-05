import styled from '@emotion/styled/macro'
import { memo } from 'react'
import useCss, { useCssType } from '../hooks/useCss'

type PropsType = {
  readonly as?: 'div' | 'nav' | 'section'
} & useCssType

const Flex = styled.div<PropsType>({ display: 'flex' }, useCss)

export default memo(Flex)
