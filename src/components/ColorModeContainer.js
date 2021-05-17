import { useEffect} from "react"
import ColorModeSwitcher from "./ColorModeSwitcher"


const ColorModeContainer = ({ children }) => {
  
  useEffect(() => {
    localStorage.setItem("my-dark-mode", JSON.stringify(darkMode))
  }, [darkMode])

  const modeClass = darkMode ? "bg-dark text-white" : ""

  return (
    <div className={`${modeClass} min-vh-100`}>
      <ColorModeSwitcher darkMode={darkMode} setDarkMode={setDarkMode} />
      {children}
    </div>
  )
}

export default ColorModeContainer
