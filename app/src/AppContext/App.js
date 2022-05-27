import Button  from './Button/Button'
import React, { useContext } from 'react'
import AppContextProvider, { AppContext } from './AppContextProvider'

const App = () => {
    const [theme, toggleTheme] = useContext(AppContext)
  return (
      <>
        <Button text="Button"/>
        <br/>
        <button onClick={toggleTheme}>Toggle</button>
      </>
  )
}

export default App