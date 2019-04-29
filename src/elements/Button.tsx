import styled from '@emotion/styled/macro'
import { memo } from 'react'
import useCss, { useCssType } from '../hooks/useCss'

const Button = styled.button<useCssType>(
  {
    background: 'transparent',
    border: 0,
    borderRadius: 0,
    color: 'inherit',
    cursor: 'pointer',
    font: 'inherit',
    margin: 0,
    outline: 0,
    padding: 0,
    position: 'relative',
    textAlign: 'left',
    textTransform: 'none',
    WebkitAppearance: 'button',
  },
  useCss,
)

Button.defaultProps = {
  type: 'button',
}

export default memo(Button)
