import {useState, useContext, createContext } from 'react'

export const DarkModeContext = createContext()

export const DarkModeContextProvider = ({children}) => {
  return(
    <DarkModeContext.Provider value={{darkMode}}>
          {children}
    </DarkModeContext.Provider>
    ) 
}
export const useDarkmodeContext = () => {
  const [darkMode, setDarkMode] = useState(
    () => JSON.parse(localStorage.getItem("my-dark-mode")) || false
  )
  const context = useContext(DarkModeContext)
  if (context === undefined) {
    throw new Error(`You should use DarkModeContextContext.Provider`)
  }
  return context
}