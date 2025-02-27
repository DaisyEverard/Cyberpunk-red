import { useState } from 'react';

import SingleSkillTypeDisplayTable from './SingleSkillTypeDisplayTable';

const SkillsDisplay = () => {
  const STARTING_SKILL_POINTS = 60;
  const [remainingPoints, setRemainingPoints] = useState(STARTING_SKILL_POINTS);

  return (
    <div className="box flex flex-col gap-1">
      <div className="flex gap-1">
        <div className="flex flex-col flex-1">
          <SingleSkillTypeDisplayTable tableSkillType={'Awareness'} />
          <SingleSkillTypeDisplayTable tableSkillType={'Body'} />
          <SingleSkillTypeDisplayTable tableSkillType={'Control'} />
        </div>
        <div className="flex flex-col flex-1">
          <SingleSkillTypeDisplayTable tableSkillType={'Education'} />
          <SingleSkillTypeDisplayTable tableSkillType={'Fighting'} />
        </div>
        <div className="flex flex-col flex-1">
          <SingleSkillTypeDisplayTable tableSkillType={'Performance'} />
          <SingleSkillTypeDisplayTable tableSkillType={'Ranged Weapon'} />
          <SingleSkillTypeDisplayTable tableSkillType={'Social'} />
        </div>
        <div className="flex flex-col flex-1">
          <SingleSkillTypeDisplayTable tableSkillType={'Technique'} />
        </div>
      </div>
    </div>
  );
};

export default SkillsDisplay;
