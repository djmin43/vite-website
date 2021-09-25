/** @jsx jsx */
import {keyframes } from '@emotion/react'

export const landingPageTitleAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(5%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`
