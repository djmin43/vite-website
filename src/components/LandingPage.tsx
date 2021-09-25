/** @jsx jsx */
import React, { ReactElement } from 'react'
import { jsx, css, keyframes } from '@emotion/react'
import Button from './common/Button'

const fade = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`

const intro = css({
  color: 'hotpink',
  fontSize: `100px`,
  padding: '10vw',
  textAlign: 'center',
  animation: `${fade} 2s ease-in`,
  '&:hover': {
  }
})

const landingPageLayout = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column'
})

const LandingPage = (): ReactElement => {
  return (
    <div
      css={landingPageLayout}
    >
    <p
      css={intro}
    >
      안녕하세요 좋은 과일을 골라드립니다👩‍🌾
    </p>
      <Button
        name='시작하기'
        buttonType='bigButton'
      />
  </div>
  )
}

export default LandingPage
