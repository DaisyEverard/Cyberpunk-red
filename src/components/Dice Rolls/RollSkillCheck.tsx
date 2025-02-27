import { rollSkillCheck } from '../../utils/commonMethods';

type RollSkillCheckProps = {
  skillName: string;
  skillLevel: number;
};

export const RollSkillCheck = ({ skillName, skillLevel }: RollSkillCheckProps) => {
  const handleButtonOnClick = (skillLevel: number) => {
    const baseRoll = rollSkillCheck().reduce((x, i) => x + i, 0);
    console.log(baseRoll + skillLevel);
    return baseRoll + skillLevel;
    // return rollSkillCheck() + stat + skill
  };

  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={e => {
          handleButtonOnClick(skillLevel);
        }}
        className="rounded-md bg-main-dark-bg px-2 py-1 text-main-light-text shadow hover:bg-main-dark-bg/80"
      >
        Roll {skillName}
      </button>
      <p>result: Result</p>
    </div>
  );
};
