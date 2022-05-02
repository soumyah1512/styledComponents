import React, { useContext, useState } from 'react'
import { addCounter, reduceCounter } from '../Redux/action'
import { ADD_COUNTER } from '../Redux/actionTypes'
import { AppContext } from '../Redux/AppContext.Provider'
import { store } from '../Redux/store'


const Counter = () => {
    const {dispatch,getState} = useContext(AppContext)
    const {counter} = getState()

    const handleAdd = () => {
        dispatch(addCounter(1))
    }

    const handleReduce= () => {
        dispatch(reduceCounter(1))
    }
  return (
  <>
    <h1>Counter: {counter}</h1>
    <button onClick={handleAdd}>ADD</button>
    <button onClick={handleReduce}>REDUCE</button>
  </>)
}

export {Counter}