import { useContext } from "react";
import skillsJson from "../data/skills.json"
import IncrementDecrementSkill from "../utils/IncrementDecrementSkill";
import { SkillsContext } from "../App";

type SingleSkillTypeTableProps = {
    tableSkillType: string;
    remainingPoints: number;
    setRemainingPoints: (newPoints: number) => void;
}

const SingleSkillTypeTable = ({tableSkillType, remainingPoints, setRemainingPoints}: SingleSkillTypeTableProps) => {
    const { currentSkills, setCurrentSkills } = useContext(SkillsContext);

    const skillsList = []

    for (const index in skillsJson) {
        const skillType = skillsJson[index]['category']
        if (skillType == tableSkillType) {
            skillsList.push(skillsJson[index])
        }
    }

    return (
        <div className="singleSkillTypeTable">
            <h4>{tableSkillType} Skills:</h4>
            <table>
            <thead>
                <tr>
                <th>Skill Name</th>
                <th>Cost</th>
                <th>Level</th>
                <th>adjuster buttons</th>
                </tr>
            </thead>
            <tbody>
            {
                    skillsList.map((skill) => {
                        // need to deal with skills with options here
                        // one extra row per option
                        // need to be able to change options so cultural origin one can be set
                        // should be able to add/remove? For start can just have the max number of option rows and leave them 0
                        const skillName = skill["name"]
                        const pointCost = skill["x2"] ? 2 : 1
                        const skillLevel = currentSkills[skillName]["level"]
                        const hasOptions = currentSkills[skillName]["has_options"]

                        const mainHTMLRow = <tr key={skillName}>
                        <td>{skillName}</td>
                        <td>{pointCost}</td>
                        <td>{skillLevel}</td>
                        <IncrementDecrementSkill skillName={skillName} remainingPoints={remainingPoints} setRemainingPoints={setRemainingPoints}/>
                        </tr>

                        const optionsButton = hasOptions ? <tr className="font-bold bg-skill-option-bg-1" id="overwrite-nth-of-type-sorry-george"><p>+ Option</p></tr> : null

                        const options = []
                        if (hasOptions) {
                            Object.entries(currentSkills[skillName]["options"]).forEach(([optionName, level]) => {
                                options.push (<tr className="option-tr">
                                    <td>{optionName}</td>
                                    <td>{level}</td>
                                </tr>)
                            })
                        }

                        return (
                            [mainHTMLRow, optionsButton, ...options]
                        )
                    })
                }
            </tbody>
        </table>
        </div>
    )
}

export default SingleSkillTypeTable

