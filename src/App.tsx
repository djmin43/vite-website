import React, { ReactElement, useState } from 'react'
import './App.css'

const App= (): ReactElement => {

  const [isButtonActive, setIsButtonActive] = useState(false)

  const toggleButton = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    setIsButtonActive(!isButtonActive)
  }

  return (
    <div>
      {isButtonActive && 
      <p className="title">
        hello world
      </p>
      }
      <button className="button" onClick={toggleButton}>
        toggle
      </button>
    </div>
  )
}

export default App
