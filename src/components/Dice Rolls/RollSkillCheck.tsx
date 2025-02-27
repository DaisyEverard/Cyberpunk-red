import { useContext } from 'react';

import { CharacterContext } from '../../context/Character';
import { rollSkillCheck } from '../../utils/commonMethods';

type RollSkillCheckProps = {
  skillName: string;
  skillLevel: number;
};

export const RollSkillCheck = ({ skillName, skillLevel }: RollSkillCheckProps) => {
  const { getCurrentSkills, getStats } = useContext(CharacterContext);
  const baseStatType = getCurrentSkills()[skillName]['stat_type'];
  const statLevel = getStats()[baseStatType];

  const handleButtonOnClick = (skillLevel: number, statLevel: number) => {
    const baseRoll = rollSkillCheck().reduce((x, i) => x + i, 0);
    console.log([baseRoll, skillLevel, statLevel]);
    // need a modal to display
    return baseRoll + skillLevel + statLevel;
  };

  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={e => {
          handleButtonOnClick(skillLevel, statLevel);
        }}
        className="rounded-md bg-main-dark-bg px-2 py-1 text-main-light-text shadow hover:bg-main-dark-bg/80"
      >
        Roll {skillName}
      </button>
      <p>result: Result</p>
    </div>
  );
};
