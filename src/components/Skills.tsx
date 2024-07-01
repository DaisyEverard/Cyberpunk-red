import { useState } from 'react';
import SingleSkillTypeTable from './SingleSkillTypeTable';

const Skills = () => {
  const [remainingPoints, setRemainingPoints] = useState(86);

  const incrementRemainingPoints = (remainingPoints: number, setRemainingPoints: (newPoints: number) => void) => {
    setRemainingPoints(remainingPoints + 1)
  }
  const decrementRemainingPoints = (remainingPoints: number, setRemainingPoints: (newPoints: number) => void) => {
    setRemainingPoints(remainingPoints - 1)
  }

  return (
    <div className="box flex gap-1">
      <div className="flex flex-col flex-1">
        <SingleSkillTypeTable tableSkillType={'Awareness'} />
        <SingleSkillTypeTable tableSkillType={'Body'} />
        <SingleSkillTypeTable tableSkillType={'Control'} />
      </div>
      <div className="flex flex-col flex-1">
        <SingleSkillTypeTable tableSkillType={'Education'} />
        <SingleSkillTypeTable tableSkillType={'Fighting'} />
      </div>
      <div className="flex flex-col flex-1">
        <SingleSkillTypeTable tableSkillType={'Performance'} />
        <SingleSkillTypeTable tableSkillType={'Ranged Weapon'} />
        <SingleSkillTypeTable tableSkillType={'Social'} />
      </div>
      <div className="flex flex-col flex-1">
        <SingleSkillTypeTable tableSkillType={'Technique'} />
      </div>
    </div>
  );
};

export default Skills;

//Characters get 86 Skill points to raise up any Skills they want.
// No skill can be higher than 6.
// The following Skills must be at least Level 2: Athletics, Brawling, Concentration, Conversation, Education, Evasion, First Aid, Human Perception, Language (Streetslang), Local Expert (Your Home), Perception, Persuasion, and Stealth.

// Skills marked in the Master Skill List with a (x2) cost two Skill points to increase in level by one.
//All other Skills cost one Skill point to increase in Level by one.
// Don't forget the 4 Levels of Language you get free based on the Cultural Origin section of you Lifepath (See The Personals).
