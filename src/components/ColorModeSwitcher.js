import React from "react"
import { useEffect } from "react"
import {useDarkmodeContext} from "../context/DarkModeContext"

const ColorModeSwitcher = () => {
  const {darkMode,setDarkMode} = useDarkmodeContext()
  const handleModeChange = () => {
    setDarkMode((mode) => !mode)
  }
  console.log(darkMode)

  // useEffect(() => {
  //   localStorage.setItem("my-dark-mode", JSON.stringify(darkMode))
  // }, [darkMode])

  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        id="activate"
        onChange={handleModeChange}
        checked={darkMode}
      />
      <label className="form-check-label" htmlFor="activate">
        Mode Sombre
      </label>
    </div>
  )
}

export default ColorModeSwitcher