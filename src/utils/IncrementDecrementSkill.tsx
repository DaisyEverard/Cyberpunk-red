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
        const MAX_SKILL_LEVEL = 6

        if ((currentSkills[skillName] < MAX_SKILL_LEVEL) && (remainingPoints > 0)) {
          const newSkills = {...currentSkills};
          newSkills[skillName] += 1;
          setSkills(newSkills);

          setRemainingPoints(remainingPoints - cost)
        }
    }

    const decrement = (currentSkills: Record<string, number>,
      setSkills: (currentSkills: Record<string, number>) => void,
      skillName: string,
      remainingPoints: number,
      setRemainingPoints: (newPoints: number) => void,
      cost: number) => {
        const MIN_SKILL_LEVEL = 0

        if (currentSkills[skillName] > MIN_SKILL_LEVEL) {
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
//Characters get 86 Skill points to raise up any Skills they want.
// The following Skills must be at least Level 2: Athletics, Brawling, Concentration, Conversation, Education, Evasion, First Aid, Human Perception, Language (Streetslang), Local Expert (Your Home), Perception, Persuasion, and Stealth.

// Skills marked in the Master Skill List with a (x2) cost two Skill points to increase in level by one.
//All other Skills cost one Skill point to increase in Level by one.
// Don't forget the 4 Levels of Language you get free based on the Cultural Origin section of you Lifepath (See The Personals).
