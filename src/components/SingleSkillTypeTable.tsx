const SingleSkillTypeTable = (props) => {
    const skillType = props.skillType

    return (
        <div>
            <h4>{skillType} Skills:</h4>
            <table>
            <thead>
                <tr>
                <th>Skill Name</th>
                <th>Level</th>
                <th>adjuster buttons</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>name</td>
                    <td>0</td>
                    <td>+-</td>
                </tr>
            </tbody>
        </table>
        </div>
    )
}

export default SingleSkillTypeTable