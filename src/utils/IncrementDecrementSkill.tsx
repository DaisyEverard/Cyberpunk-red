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

    const increment = (currentSkills: Record<string, Record<string, any>>, setSkills: 
      (currentSkills: Record<string, Record<string, any>>) => void, 
      skillName: string,
      remainingPoints: number,
      setRemainingPoints: (newPoints: number) => void,
      cost: number) => {
        const MAX_SKILL_LEVEL = 6

        if ((currentSkills[skillName]["level"] < MAX_SKILL_LEVEL) && (remainingPoints > 0)) {
          const newSkills = {...currentSkills};
          newSkills[skillName]["level"] += 1;
          setSkills(newSkills);

          setRemainingPoints(remainingPoints - cost)
        }
    }

    const decrement = (currentSkills: Record<string, Record<string, any>>,
      setSkills: (currentSkills: Record<string, Record<string, any>>) => void,
      skillName: string,
      remainingPoints: number,
      setRemainingPoints: (newPoints: number) => void,
      cost: number) => {
        const MIN_LEVEL_TWO_SKILLS = ["Athletics", "Brawling", "Concentration", "Conversation", "Education", "Evasion", "First Aid", "Human Perception", "Language", "Local Expert", "Perception", "Persuasion", "Stealth"]
        let min_skill_level = 0
        if (MIN_LEVEL_TWO_SKILLS.includes(skillName)) {
          min_skill_level = 2
        }

        if (currentSkills[skillName]["level"] > min_skill_level) {
            const newSkills = {...currentSkills};
        newSkills[skillName]["level"] -= 1;
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

// Don't forget the 4 Levels of Language you get free based on the Cultural Origin section of you Lifepath (See The Personals).

// Skills where you have to choose options: 
// Language - at least 2 in Language (Streetslang)
// Local Expert - at least 2 in Local Expert (Your Home)
// Instrument - choose an instrument
// Martial Arts - (Karate, Taekwondo, Judo, aikido)