/** @jsx jsx */
import React, { ReactElement } from 'react'
import { jsx } from '@emotion/react'
import { basicLayout, header, footer } from '../../../styles/common/MainLayout.styles'

interface Props {
  children: ReactElement
}

const MainLayout = ({children}: Props) => {
  return (
    <div>
      <div
        css={[basicLayout, header]}
      >
        과일
      </div>
      {children}
      <div
        css={[basicLayout, footer]}
      >
        footer
      </div>
    </div>
  )
}

export default MainLayout
