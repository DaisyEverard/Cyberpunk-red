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
                        const skillName = skill["name"]
                        const pointCost = skill["x2"] ? 2 : 1
                        const skillLevel = currentSkills[skillName]
                        return (
                            <tr key={skillName}>
                <td>{skillName}</td>
                <td>{pointCost}</td>
                <td>{skillLevel}</td>
                <IncrementDecrementSkill skillName={skillName} remainingPoints={remainingPoints} setRemainingPoints={setRemainingPoints}/>
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

//Characters get 86 Skill points to raise up any Skills they want.

// No skill can be higher than 6.
// The following Skills must be at least Level 2: Athletics, Brawling, Concentration, Conversation, Education, Evasion, First Aid, Human Perception, Language (Streetslang), Local Expert (Your Home), Perception, Persuasion, and Stealth.

// Skills marked in the Master Skill List with a (x2) cost two Skill points to increase in level by one.
//All other Skills cost one Skill point to increase in Level by one.
// Don't forget the 4 Levels of Language you get free based on the Cultural Origin section of you Lifepath (See The Personals).
