import React, { createContext, useState } from 'react'

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("white");

    const toggleTheme = () => {
        setTheme(theme === "white" ? "black" : "white")
    };

    return (
        <ThemeContext.Provider value={[theme,toggleTheme]}>
            {children}
        </ThemeContext.Provider>
    )
}