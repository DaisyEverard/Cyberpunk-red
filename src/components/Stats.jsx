import HideableDescriptionCell from "../utils/HideableDescriptionCell";
import statsJson from "../data/stats.json"

export default function Stats() {
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
            <table>
                <thead>
                    <tr>
                        <th>STAT</th>
                        <th>LEVEL</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>INT</th>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    )
}