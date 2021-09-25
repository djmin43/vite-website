/** @jsx jsx */
import React, { ReactElement } from 'react'
import { jsx, css, keyframes } from '@emotion/react'

export interface ButtonProps {
  name: String
  buttonType: String
}

const bigButton = css({
  width: '30vw',
  height: '5vh',
  padding: '1rem',
  color: '#ffff',
  background: '#1565c0',
  border: 'none',
  fontSize: '1rem',
  '&:active': {
    background: '#003c8f'
  }
})

const Button = ({name, buttonType}: ButtonProps): ReactElement => {

  return (
    <div>
      <button
        css={`
          ${buttonType}
        `}
      >
        {name}
      </button>
    </div>
  )
}

export default Button
