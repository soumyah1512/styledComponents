import React, { createContext, useState } from 'react'

export const AppContext = createContext()

export const AppContextProvider = ({children, store}) => {
    const {dispatch, getState} = store
    const value = { dispatch, getState}
    const [state, setState] = useState(0)

    const forceUpdate = () => setState(prev => prev + 1)

    store.subscribe(forceUpdate)

    return (<AppContext.Provider value = {value}>{children}</AppContext.Provider>)
}

// 1. state
// 2. getState
// 3. dispatch
// 4. subscribe
// store.subscribe