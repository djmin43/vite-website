import React, { ReactElement } from 'react'

interface Props {
  children: ReactElement
}

const MainLayout = ({children}: Props) => {
  return (
    <div>
      <div>
        header
      </div>
      {children}
      <div>
        footer
      </div>
    </div>
  )
}

export default MainLayout
