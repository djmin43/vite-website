/** @jsx jsx */
import React, { ReactElement, useCallback } from 'react'
import {useHistory} from 'react-router-dom';
import { jsx } from '@emotion/react'
import Button from './common/BasicButton'
import { bigButton } from '../../styles/common/BasicButton.styles'
import { intro, landingPageLayout } from '../../styles/landing/WelcomeLanding.styles'

const WelcomeLanding = (): ReactElement => {

  const history = useHistory()
  const routeToMain = useCallback(() => history.push('/main'), [history])

  return (
    <div
      css={landingPageLayout}
    >
    <p
      css={intro}
    >
      맛있는 과일과 신선한 채소를 골라드려요👩‍🌾
    </p>
      <Button
        onClick={routeToMain}
        name='시작하기'
        buttonType={bigButton}
      />
  </div>
  )
}

export default WelcomeLanding
