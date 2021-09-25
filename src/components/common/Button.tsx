/** @jsx jsx */
import React, { ReactElement } from 'react'
import { jsx, SerializedStyles } from '@emotion/react'

export interface ButtonProps {
  name: String
  buttonType: SerializedStyles
}

const Button = ({name, buttonType}: ButtonProps): ReactElement => {

  return (
    <div>
      <button
        css={buttonType}
      >
        {name}
      </button>
    </div>
  )
}

export default Button
