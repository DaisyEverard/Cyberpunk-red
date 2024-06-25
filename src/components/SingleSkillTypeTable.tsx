import skillsJson from "../data/skills.json"

const SingleSkillTypeTable = (props) => {
    const tableSkillType = props.skillType
    const skillsList = []

    for (const index in skillsJson) {
        const skillType = skillsJson[index]['category']
        if (skillType == tableSkillType) {
            skillsList.push(skillsJson[index])
        }
    }

    return (
        <div>
            <h4>{tableSkillType} Skills:</h4>
            <table>
            <thead>
                <tr>
                <th>Skill Name</th>
                <th>Level</th>
                <th>adjuster buttons</th>
                </tr>
            </thead>
            <tbody>
            {
                    skillsList.map((skill, index) => {
                        return (
                            <tr>
                <td>{skill["name"]}</td>
                <td>0</td>
                <td>+-</td>
                </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </div>
    )
}

export default SingleSkillTypeTable