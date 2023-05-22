import { useState } from 'react'
import './App.css'
import Die from './components/Die'

function App() {
    // CONTINUE @ 11:11
    const [dice, setDice] = useState(allNewDice())

    // generate array of 10 numbers between 1 and 6
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push({
                value: Math.ceil(Math.random() * 6), 
                isHeld: false
            })
        }
        return newDice
    }  

    // function to roll new dice
    function rollDice() {
        setDice(allNewDice())
    }

    // create array of Die components (can also be done in return)
    const diceElements = dice.map(die => <Die value={die.value}/>)

    return (
        <main>
            <div className="dice-container">
                {diceElements}
            </div>   
            <button
                onClick={rollDice}
                className="roll-dice"
            >
                Roll
            </button>
        </main>
    )
}

export default App
