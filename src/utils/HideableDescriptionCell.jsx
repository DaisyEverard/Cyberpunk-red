import { useState } from "react"
import "../style/hideableBoxDisplay.css"

export default function HideableDescriptionCell() {

    const [plusMinus, setPlusMinus] = useState("+")
    const [boxDisplay, setBoxDisplay] = useState('none')

    const toggleDescription = () => {
        if (plusMinus == '+') {
            setPlusMinus('-')
            setBoxDisplay("inline")
        }
        else {
            setPlusMinus('+')
            setBoxDisplay('none')
        }
    }

    return (
        <div id="hideableBoxDisplay">
            <h4>Data
                <button onClick={(e) => {toggleDescription()}}>{plusMinus}</button>
            </h4>
            <p style={{display: boxDisplay}}>Description</p>
        </div>
    )
}