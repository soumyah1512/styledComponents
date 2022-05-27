import React, { useContext } from 'react'
import { AppContext } from '../AppContextProvider'
import style from './Button.module.css'

const Button = ({text}) => {
    
    const [theme] = useContext(AppContext)

  return (
    <button
    className={`${style.buttonLight} ${theme === "light" ? style.buttonLight : style.buttonDark}`}
    >
        {text}
    </button>
  )
}

export default Button