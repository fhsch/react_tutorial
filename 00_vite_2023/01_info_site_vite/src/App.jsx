import { useState } from 'react'
import Navbar from "./components/Navbar.jsx"
import Main from "./components/Main.jsx"
import './App.css'

function App() {

  const [darkMode, setDarkMode] = useState(true)

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

export default App
