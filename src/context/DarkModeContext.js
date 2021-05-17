import {useState, useContext, createContext } from 'react'

export const DarkModeContext = createContext()

export const DarkModeContextProvider = ({children}) => {
  return(
    <DarkModeDispatchContext.Provider value={{darkMode}}>
          {children}
    </DarkModeDispatchContext.Provider>
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