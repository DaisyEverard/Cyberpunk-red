import { useContext } from "react"
import { StatsContext } from "../App"

export default function IncrementDecrementStat(props) {
    let statName = props.statName
    const {stats, setStats} = useContext(StatsContext)

    const increment = (stats, statName) => {
        const newStats = {...stats}
        newStats[statName] += 1
        setStats(newStats)
    }
    const decrement = (stats, statName) => {
        if (stats[statName] > 2) {
            const newStats = {...stats}
        newStats[statName] -= 1
        setStats(newStats)
        }
    }

    return (<td>
        <button onClick={(e)=> {increment(stats, statName)}}>+</button>
        <button onClick={(e)=> {decrement(stats, statName)}}>-</button>
    </td>)
}