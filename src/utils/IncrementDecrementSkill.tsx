import { useContext } from "react"
import { SkillsContext } from "../App"
import { incrementAnyNumericalState } from "./commonMethods"
import skillsJson from "../data/skills.json"

type IncrementDecrementSkillProps = {
    skillName: string;
    remainingPoints: number;
    setRemainingPoints: (newPoints: number) => void;
}


const IncrementDecrementSkill = ({skillName, remainingPoints, setRemainingPoints}: IncrementDecrementSkillProps) => {
    const {currentSkills, setCurrentSkills} = useContext(SkillsContext)

    const skillStats = skillsJson.filter(skill => skill["name"] == skillName)
    const cost = skillStats[0]["x2"] ? 2 : 1

    const increment = (currentSkills: Record<string, number>, setSkills: 
      (currentSkills: Record<string, number>) => void, 
      skillName: string,
      remainingPoints: number,
      setRemainingPoints: (newPoints: number) => void,
      cost: number) => {
        const newSkills = {...currentSkills};
        newSkills[skillName] += 1;
        setSkills(newSkills);

        setRemainingPoints(remainingPoints - cost)
    }

    const decrement = (currentSkills: Record<string, number>,
      setSkills: (currentSkills: Record<string, number>) => void,
      skillName: string,
      remainingPoints: number,
      setRemainingPoints: (newPoints: number) => void,
      cost: number) => {
        if (currentSkills[skillName] > 0) {
            const newSkills = {...currentSkills};
        newSkills[skillName] -= 1;
        setSkills(newSkills);
        setRemainingPoints(remainingPoints + cost)
        }
    }
    

      return (
        <td>
          <button
            onClick={e => {
              e.preventDefault()
              increment(currentSkills, setCurrentSkills, skillName, remainingPoints, setRemainingPoints, cost);
            }}
          >
            +
          </button>
          <button
            onClick={e => {
              e.preventDefault()
              decrement(currentSkills, setCurrentSkills, skillName, remainingPoints, setRemainingPoints, cost);
            }}
          >
            -
          </button>
        </td>
      );
}

export default IncrementDecrementSkill;