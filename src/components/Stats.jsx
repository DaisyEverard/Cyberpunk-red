import HideableDescriptionCell from "../utils/HideableDescriptionCell";

export default function Stats() {
    return (
        <div>
            <HideableDescriptionCell/>
            
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
    )
}