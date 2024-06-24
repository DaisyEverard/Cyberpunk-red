import { useContext } from "react"
import { HPContext, StatsContext } from "../App"

export default function IncrementDecrementStat(props) {
    let statName = props.statName
    const remainingPoints = props.remainingPoints
    const setRemainingPoints = props.setRemainingPoints
    
    const {HP} = useContext(HPContext)
    const {stats, setStats} = useContext(StatsContext)

    const increment = (stats, statName, remainingPoints, setRemainingPoints) => {
        if (remainingPoints > 0 && stats[statName] < 8) {
            const newStats = {...stats}
        newStats[statName] += 1
        setStats(newStats)
        setRemainingPoints(remainingPoints - 1)
        }
    }
    const decrement = (stats, statName, remainingPoints, setRemainingPoints) => {
        if (stats[statName] > 2) {
            const newStats = {...stats}
        newStats[statName] -= 1
        setStats(newStats)
        setRemainingPoints(remainingPoints + 1)
        }
    }

    return (<td>
        <button onClick={(e)=> {increment(stats, statName, remainingPoints, setRemainingPoints)}}>+</button>
        <button onClick={(e)=> {decrement(stats, statName, remainingPoints, setRemainingPoints)}}>-</button>
    </td>)
}