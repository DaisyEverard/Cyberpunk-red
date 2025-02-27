import { useState } from 'react';

import SingleSkillTypeSetupTable from './SingleSkillTypeSetupTable';

const SkillsSetup = () => {
  const STARTING_SKILL_POINTS = 60;
  const [remainingPoints, setRemainingPoints] = useState(STARTING_SKILL_POINTS);

  return (
    <div className="box flex flex-col gap-1">
      <div className="box flex flex-row gap-1">
        <p>Skill Points: </p>
        <p>{remainingPoints}</p>
      </div>
      <div className="flex gap-1">
        <div className="flex flex-col flex-1">
          <SingleSkillTypeSetupTable
            tableSkillType={'Awareness'}
            remainingPoints={remainingPoints}
            setRemainingPoints={setRemainingPoints}
          />
          <SingleSkillTypeSetupTable
            tableSkillType={'Body'}
            remainingPoints={remainingPoints}
            setRemainingPoints={setRemainingPoints}
          />
          <SingleSkillTypeSetupTable
            tableSkillType={'Control'}
            remainingPoints={remainingPoints}
            setRemainingPoints={setRemainingPoints}
          />
          <SingleSkillTypeSetupTable
            tableSkillType={'Education'}
            remainingPoints={remainingPoints}
            setRemainingPoints={setRemainingPoints}
          />
          <SingleSkillTypeSetupTable
            tableSkillType={'Fighting'}
            remainingPoints={remainingPoints}
            setRemainingPoints={setRemainingPoints}
          />
          <SingleSkillTypeSetupTable
            tableSkillType={'Performance'}
            remainingPoints={remainingPoints}
            setRemainingPoints={setRemainingPoints}
          />
          <SingleSkillTypeSetupTable
            tableSkillType={'Ranged Weapon'}
            remainingPoints={remainingPoints}
            setRemainingPoints={setRemainingPoints}
          />
          <SingleSkillTypeSetupTable
            tableSkillType={'Social'}
            remainingPoints={remainingPoints}
            setRemainingPoints={setRemainingPoints}
          />
          <SingleSkillTypeSetupTable
            tableSkillType={'Technique'}
            remainingPoints={remainingPoints}
            setRemainingPoints={setRemainingPoints}
          />
        </div>
      </div>
    </div>
  );
};

export default SkillsSetup;
