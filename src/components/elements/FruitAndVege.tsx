import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

interface Param {
  id?: string | number
}

const FruitAndVege = () => {
  const { id }: Param = useParams()

  useEffect(() => {
    console.log('i am going to fetch ' + id)
  }, [])

  return (
    <div>
      {id}
    </div>
  )
}

export default FruitAndVege
