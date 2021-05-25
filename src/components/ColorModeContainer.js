import { useEffect } from "react"
import ColorModeSwitcher from "./ColorModeSwitcher"
import {useDarkmodeContext} from "../context/DarkModeContext"

const ColorModeContainer = ({ children }) => {
const {darkMode} = useDarkmodeContext()


  useEffect(() => {
    localStorage.setItem("my-dark-mode", JSON.stringify(darkMode))
  }, [darkMode])

  const modeClass = darkMode ? "bg-dark text-white" : ""

  return (
    <div className={`${modeClass} min-vh-100`}>
      <ColorModeSwitcher />
      {children}
    </div>
  )
}

export default ColorModeContainer