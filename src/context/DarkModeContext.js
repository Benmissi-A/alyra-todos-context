import {useState, useContext, createContext } from 'react'

export const DarkModeContext = createContext()

export const DarkModeContextProvider = ({children}) => {
  const [darkMode, setDarkMode] = useState(
    () => JSON.parse(localStorage.getItem("my-dark-mode")) || false
  )
  
  return(
    <DarkModeContext.Provider value={{darkMode,setDarkMode}}>
          {children}
    </DarkModeContext.Provider>
    ) 
}
export const useDarkmodeContext = () => {
  const context = useContext(DarkModeContext)
  if (context === undefined) {
    throw new Error(`You should use DarkModeContextContext.Provider`)
  }
  return context
}