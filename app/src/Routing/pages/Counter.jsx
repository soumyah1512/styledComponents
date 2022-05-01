import React from 'react'
import { useParams } from 'react-router-dom'

const Counter = () => {
    const params = useParams()
  return (
    <h1>Counter: {params.initialCount}</h1>
  )
}

export default Counter