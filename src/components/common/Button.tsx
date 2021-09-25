/** @jsx jsx */
import React, { ReactElement } from 'react'
import { jsx, SerializedStyles } from '@emotion/react'

export interface ButtonProps {
  name: String
  buttonType: SerializedStyles
  onClick: () => void
}

const Button = ({name, buttonType, onClick}: ButtonProps): ReactElement => {

  return (
      <button
        onClick={onClick}
        css={buttonType}
      >
        {name}
      </button>
  )
}

export default Button
