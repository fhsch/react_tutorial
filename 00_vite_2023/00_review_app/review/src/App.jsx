import { useState } from 'react'
import './App.css'
import Profile from "./components/Profile"
import Country from "./components/Country"
import countries from "./countries"

// just random stuff to review different React concepts
function App() {
  // age state (currently unused)
  const [year, setYear] = useState(2023)
  // create country components from imported data via mapping
  const countryItems = countries.map(item => {
    return (
      <Country
        // pass in id seperately
        id={item.id}
        // pass other properties together and access in component
        item={item} 
      />
    )
  })
  // return Profile component and component list of countries
  return (
    <>
      <Profile 
        name="Felix"
        year={year}
        img="balkans"
      />
      {countryItems}
    </>
  )
}

export default App
