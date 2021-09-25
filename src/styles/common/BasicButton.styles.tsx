/** @jsx jsx */
import { css } from '@emotion/react'

const colorTheme = {
  primary: '#00796b',
  light: '#48a999',
  dark: '#004c40',
  superLight: '#e0f2f1',
  white: '#ffffff',
}

export const bigButton = css({
  width: '30vw',
  height: '5vh',
  padding: '1rem',
  color: '#ffff',
  background: colorTheme.dark,
  border: 'none',
  fontSize: '1rem',
  borderRadius: '4px'
})