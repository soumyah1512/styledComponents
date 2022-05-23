import React from 'react'
import { useParams } from 'react-router-dom';

let data = {
    1: "Mouse",  
    2: "Keyboard",
    3: "Monitor",
};

const Product = () => {
    const {id} = useParams()
  return (
    <div>Product: {data[id]} </div>
  )
}

export default Product