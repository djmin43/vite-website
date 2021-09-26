import React, { useEffect, useCallback } from 'react'
import { useHistory } from 'react-router'

const NotFound = () => {

  const history = useHistory()
  const redirectToHome = useCallback(() => history.push('/'), [history])

  useEffect(() => {
    setTimeout(() => redirectToHome(), 3000)
  }, [])

  return (
    <div>
      not found!
      redirecting to home
    </div>
  )
}

export default NotFound
