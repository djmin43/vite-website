/** @jsx jsx */
import { css } from '@emotion/react'

export const bigButton = css({
  width: '30vw',
  height: '5vh',
  padding: '1rem',
  color: '#ffff',
  background: '#1565c0',
  border: 'none',
  fontSize: '1rem',
  '&:active': {
    background: '#003c8f'
  }
})