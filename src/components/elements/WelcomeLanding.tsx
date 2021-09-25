/** @jsx jsx */
import React, { ReactElement, useCallback } from 'react'
import {useHistory} from 'react-router-dom';
import { jsx } from '@emotion/react'
import Button from './common/BasicButton'
import { bigButton } from '../../styles/common/Button.styles'
import { intro, landingPageLayout } from '../../styles/landing/WelcomeLanding.styles'

const WelcomeLanding = (): ReactElement => {

  const history = useHistory()

  const routeToHome = useCallback(() => history.push('/main'), [history])

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
        onClick={routeToHome}
        name='시작하기'
        buttonType={bigButton}
      />
  </div>
  )
}

export default WelcomeLanding
