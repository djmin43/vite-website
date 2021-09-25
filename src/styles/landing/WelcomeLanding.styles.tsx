/** @jsx jsx */
import { css } from '@emotion/react'
import { landingPageTitleAnimation } from '../animation/Keyframe.styles'

const colorTheme = {
  primary: '#00796b',
  light: '#48a999',
  dark: '#004c40',
  superLight: '#e0f2f1',
  white: '#ffffff',
}

export const intro = css({
  color: colorTheme.white,
  fontSize: `30px`,
  fontWeight: 'bold',
  padding: '10vw',
  textAlign: 'center',
  animation: `${landingPageTitleAnimation} 1s ease-in-out`,
  '&:hover': {
  }
})

export const landingPageLayout = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  height: '100vh',
  background: colorTheme.primary,
})

