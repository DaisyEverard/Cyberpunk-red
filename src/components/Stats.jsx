import HideableDescriptionCell from "../utils/HideableDescriptionCell";
import statsJson from "../data/statsDescription.json"
import { useContext, useState } from "react";
import { StatsContext } from "../App";
import IncrementDecrementStat from "../utils/IncrementDecrementStat";

export default function Stats() {
    const {stats, setStats} = useContext(StatsContext)
    const [remainingPoints, setRemainingPoints] = useState(42)

    const getUsedPoints = (stats) => {
        let total = 0
        for (const key in stats) {
            const value = stats[key]
            total += parseInt(value)
        }
        return total
        
    }

    return (
        <div className="flexRow">
            <div className="flexCol" style={{width: "50vw", flex:1}}>
            {statsJson.map(
                (stat) => {
                    const long_name_string = `Long Name: ${stat['long_name']}\n\n`
                    const group_string = `Group: ${stat['group']}\n\n`
                    const item_description_string = `Description: ${stat['description']}`
                    const descriptionArray = [long_name_string,group_string,item_description_string]

                    const key = stat['id']
                    const item = stat['name']
                    return <HideableDescriptionCell key={key} title={item} descriptionArray={descriptionArray}/>
                }
            )}
            </div>
            <div className="flexCol" style={{width: "50vw", flex: 1}}>
            <div>
                <p><strong>Points Remaining:</strong></p>
                <p>{remainingPoints}</p>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>STAT</th>
                        <th>LEVEL</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(stats).map((statName, index) => {
                            const level = stats[statName]

                            return (
                            <tr key={index}>
                                <th>{statName}</th>
                                <td>{level}</td>
                                <IncrementDecrementStat statName={statName} setRemainingPoints={setRemainingPoints} remainingPoints={remainingPoints}/>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            </div>
        </div>
    )
}