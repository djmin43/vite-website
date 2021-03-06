/** @jsx jsx */
import React, { ReactElement, useCallback } from 'react'
import { useHistory } from 'react-router'
import { jsx } from '@emotion/react'
import { basicLayout, header, footer } from '../../../styles/common/MainLayout.styles'

interface Props {
  children: ReactElement
}

const MainLayout = ({children}: Props) => {

  const history = useHistory()
  const routeToMain = useCallback(() => history.push(`/main`), [history])

  const reloadToMainSite = () => {
    routeToMain()
    location.reload()
  }

  return (
    <div>
      <div
        css={[basicLayout, header]}
        onClick={reloadToMainSite}
      >
        πππππππππ₯πππππππ₯π₯₯π₯­π«π₯
      </div>
      {children}
      <div
        css={[basicLayout, footer]}
      >
        <p>λ§λ μ¬λ: λ―Όλμ€</p>
        <p>μ΄λ©μΌμ£Όμ: dj.min43@gmail.com</p>
      </div>
    </div>
  )
}

export default MainLayout
