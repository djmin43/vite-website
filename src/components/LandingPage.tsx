/** @jsx jsx */
import React, { ReactElement } from 'react'
import { jsx, css, keyframes } from '@emotion/react'

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
    opacity: 0.5;
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
    opacity: 1;
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`

const hotpink = css({
  color: 'hotpink',
  fontSize: `100px`,
  '&:hover': {
    animation: `${bounce} 1s ease infinite`
  }
})

const LandingPage = (): ReactElement => {
  return (
    <p
      css={hotpink}
    >
      hello world
    </p>
  )
}

export default LandingPage
