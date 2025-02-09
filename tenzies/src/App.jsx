import Die from './components/die.jsx'

export default function App() {

    // list of die values
    let dice = [1, 2, 3, 4, 5]

    return <main>
            <div className="dieContainer">
                {dice.map((value, index) => <Die key={index} value={value}></Die>)}
            </div>
           </main>
}