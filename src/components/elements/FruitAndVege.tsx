import React from 'react'
import { useParams } from 'react-router-dom'

interface Param {
  id?: string | number
}

const FruitAndVege = () => {

  const { id }: Param = useParams()

  return (
    <div>
      {id}
    </div>
  )
}

export default FruitAndVege
