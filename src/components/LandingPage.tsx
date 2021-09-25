/** @jsx jsx */
import React, { ReactElement } from 'react'
import { jsx, css } from '@emotion/react'

const hotpink = css({
  color: 'hotpink'
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
