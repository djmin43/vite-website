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
        🍅🍇🍈🍉🍊🍋🍌🍍🥝🍎🍏🍐🍑🍒🍓🥑🥥🥭🫐🥕
      </div>
      {children}
      <div
        css={[basicLayout, footer]}
      >
        <p>만든사람: 민동준</p>
        <p>이메일주소: dj.min43@gmail.com</p>
      </div>
    </div>
  )
}

export default MainLayout
