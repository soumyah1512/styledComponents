import React from 'react'
import { Div } from './AppOne.styled'
import { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'

const Navbar = () => {
    const [theme, toggleTheme] = useContext(ThemeContext)
  return (
      <Div color={theme}>
        <h1>ABCD</h1>{theme}
        <button onClick={toggleTheme}>Toggle</button>
      </Div>
    
  )
}

export default Navbar