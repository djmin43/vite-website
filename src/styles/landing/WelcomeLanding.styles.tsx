/** @jsx jsx */
import { css } from '@emotion/react'
import { landingPageTitleAnimation } from '../animation/Keyframe.styles'

export const intro = css({
  color: 'hotpink',
  fontSize: `100px`,
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
  flexDirection: 'column'
})

