import Die from './components/die.jsx'
import React from 'react'

export default function App() {

    let [dice, setDice] = React.useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

    function handleRoll() {
        console.log("rolling")

        // dice random number between 1 and 6
        setDice(dice.map((value) => Math.floor(Math.random() * 6) + 1))
    }

    function handleDieClick(index) {
        console.log("clicked die", index, dice[index])
    }

    return <main>
        <div className="dieContainerRow">
            {dice.map((value, index) => <Die key={index} id={index} value={value} handleDieClick={handleDieClick}></Die>)}
        </div>
        <button onClick={handleRoll}>Roll</button>
    </main>
}