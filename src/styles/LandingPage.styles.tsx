/** @jsx jsx */
import { css } from '@emotion/react'
import { fade } from './animation/Keyframe.styles'

export const intro = css({
  color: 'hotpink',
  fontSize: `100px`,
  padding: '10vw',
  textAlign: 'center',
  animation: `${fade} 2s ease-in`,
  '&:hover': {
  }
})

export const landingPageLayout = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column'
})

