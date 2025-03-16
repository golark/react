import Die from './components/die.jsx'
import React from 'react'

export default function App() {

    let [dice, setDice] = React.useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    let [diceOutOfGame, setDiceOutOfGame] = React.useState([false, false, false, false, false, false, false, false, false, false])
    let [tenzieNumber, setTenzieNumber] = React.useState(0)


    function handleRoll() {
        console.log("rolling")

        // dice random number between 1 and 6 if not out of game
        setDice(dice.map((value, index) => diceOutOfGame[index] ? value : Math.floor(Math.random() * 6) + 1))
    }

    function handleReset() {
        console.log("resetting")

        setDice(dice.map((value) => Math.floor(Math.random() * 6) + 1))
        setDiceOutOfGame([false, false, false, false, false, false, false, false, false, false])
        setTenzieNumber(0)
    }

    function handleDieClick(index) {

        if (tenzieNumber === 0) {
            setTenzieNumber(dice[index])
            setDiceOutOfGame(diceOutOfGame.map((value, i) => i === index ? true : value))
            return
        }

        if (dice[index] === tenzieNumber) {
            setDiceOutOfGame(diceOutOfGame.map((value, i) => i === index ? true : value))
        }


        // if all dice are out of game
        if (diceOutOfGame.every((value) => value === true)) {
            setDice(dice.map((value) => Math.floor(Math.random() * 6) + 1))
            setDiceOutOfGame([false, false, false, false, false, false, false, false, false, false])
            setTenzieNumber(0)
        }
    }

    return <main>
        <div className="dieContainerRow">
            {dice.map((value, index) => <Die key={index} id={index} value={value} outOfGame={diceOutOfGame[index]}
                                             handleDieClick={handleDieClick}></Die>)}
        </div>
        <div>
            <button className="control-button" onClick={handleRoll}>Roll</button>
            <button className="control-button" onClick={handleReset}>Reset</button>
        </div>
    </main>
}