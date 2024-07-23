import { useContext } from 'react';

import { CharacterContext } from '../context/Character';
import skillsJson from '../data/skills.json';
import { SkillsType } from '../types/types';

type IncrementDecrementSkillProps = {
  skillName: string;
  remainingPoints: number;
  setRemainingPoints: (newPoints: number) => void;
};

const IncrementDecrementSkill = ({ skillName, remainingPoints, setRemainingPoints }: IncrementDecrementSkillProps) => {
  const { getCurrentSkills, setCurrentSkills } = useContext(CharacterContext);

  const skillStats = skillsJson.filter(skill => skill['name'] == skillName);
  const cost = skillStats[0]['x2'] ? 2 : 1;

  const increment = (
    currentSkills: SkillsType,
    setSkills: (currentSkills: SkillsType) => void,
    skillName: string,
    remainingPoints: number,
    setRemainingPoints: (newPoints: number) => void,
    cost: number,
  ) => {
    const MAX_SKILL_LEVEL = 6;

    if (currentSkills[skillName]['level'] < MAX_SKILL_LEVEL && remainingPoints > 0) {
      const newSkills = { ...currentSkills };
      newSkills[skillName]['level'] += 1;
      setSkills(newSkills);

      setRemainingPoints(remainingPoints - cost);
    }
  };

  const decrement = (
    currentSkills: SkillsType,
    setSkills: (currentSkills: SkillsType) => void,
    skillName: string,
    remainingPoints: number,
    setRemainingPoints: (newPoints: number) => void,
    cost: number,
  ) => {
    const MIN_LEVEL_TWO_SKILLS = [
      'Athletics',
      'Brawling',
      'Concentration',
      'Conversation',
      'Education',
      'Evasion',
      'First Aid',
      'Human Perception',
      'Language',
      'Local Expert',
      'Perception',
      'Persuasion',
      'Stealth',
    ];
    let min_skill_level = 0;
    if (MIN_LEVEL_TWO_SKILLS.includes(skillName)) {
      min_skill_level = 2;
    }

    if (currentSkills[skillName]['level'] > min_skill_level) {
      const newSkills = { ...currentSkills };
      newSkills[skillName]['level'] -= 1;
      setSkills(newSkills);
      setRemainingPoints(remainingPoints + cost);
    }
  };

  return (
    <td>
      <button
        onClick={e => {
          e.preventDefault();
          increment(getCurrentSkills(), setCurrentSkills, skillName, remainingPoints, setRemainingPoints, cost);
        }}
      >
        +
      </button>
      <button
        onClick={e => {
          e.preventDefault();
          decrement(getCurrentSkills(), setCurrentSkills, skillName, remainingPoints, setRemainingPoints, cost);
        }}
      >
        -
      </button>
    </td>
  );
};

export default IncrementDecrementSkill;

// Don't forget the 4 Levels of Language you get free based on the Cultural Origin section of you Lifepath (See The Personals).

// Skills where you have to choose options:
// Language - at least 2 in Language (Streetslang)
// dealing with cultural origin. Must be at least 4 points, but they don't necessarily have to be in one language
// provide 4 default options, total must be at least 4

// Local Expert - at least 2 in Local Expert (Your Home)
// Instrument - choose an instrument
// Martial Arts - (Karate, Taekwondo, Judo, aikido) - restrict only to these options?
