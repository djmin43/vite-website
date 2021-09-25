import React, { ReactElement } from 'react'

interface Props {
  children: ReactElement
}

const MainLayout = ({children}: Props) => {
  return (
    <div>
      header
      {children}
      footer
    </div>
  )
}

export default MainLayout
