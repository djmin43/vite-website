/** @jsx jsx */
import React, { ReactElement } from 'react'
import { jsx, css, keyframes } from '@emotion/react'
import Button from './common/Button'
import { bigButton } from '../styles/common/Button.styles'
import { intro, landingPageLayout } from '../styles/LandingPage.styles'

const LandingPage = (): ReactElement => {

  const handleClick = () => {
    console.log('click')
  }

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
        onClick={handleClick}
        name='시작하기'
        buttonType={bigButton}
      />
  </div>
  )
}

export default LandingPage
