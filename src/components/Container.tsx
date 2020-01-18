import styled from '@emotion/styled/macro'
import { memo } from 'react'
import Grid from './Grid'

const Container = styled(Grid)({
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: '82rem',
  paddingLeft: '1rem',
  paddingRight: '1rem',
  width: '100%',
})

export default memo(Container)
