import Navbar from "./components/Navbar"
import Main from "./components/Main"
import React from "react"

export default function App() {

  const [darkMode, setDarkMode] = React.useState(true)

  function toggle() {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  return (
      <div className="container">
          <Navbar 
            darkMode={darkMode}
            toggleDarkMode={toggle}
          />
          <Main 
            darkMode={darkMode}
          />
      </div>
  )
}


