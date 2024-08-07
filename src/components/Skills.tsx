import { useState } from 'react';

import SingleSkillTypeTable from './SingleSkillTypeTable';

const Skills = () => {
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
          <SingleSkillTypeTable
            tableSkillType={'Awareness'}
            remainingPoints={remainingPoints}
            setRemainingPoints={setRemainingPoints}
          />
          <SingleSkillTypeTable
            tableSkillType={'Body'}
            remainingPoints={remainingPoints}
            setRemainingPoints={setRemainingPoints}
          />
          <SingleSkillTypeTable
            tableSkillType={'Control'}
            remainingPoints={remainingPoints}
            setRemainingPoints={setRemainingPoints}
          />
        </div>
        <div className="flex flex-col flex-1">
          <SingleSkillTypeTable
            tableSkillType={'Education'}
            remainingPoints={remainingPoints}
            setRemainingPoints={setRemainingPoints}
          />
          <SingleSkillTypeTable
            tableSkillType={'Fighting'}
            remainingPoints={remainingPoints}
            setRemainingPoints={setRemainingPoints}
          />
        </div>
        <div className="flex flex-col flex-1">
          <SingleSkillTypeTable
            tableSkillType={'Performance'}
            remainingPoints={remainingPoints}
            setRemainingPoints={setRemainingPoints}
          />
          <SingleSkillTypeTable
            tableSkillType={'Ranged Weapon'}
            remainingPoints={remainingPoints}
            setRemainingPoints={setRemainingPoints}
          />
          <SingleSkillTypeTable
            tableSkillType={'Social'}
            remainingPoints={remainingPoints}
            setRemainingPoints={setRemainingPoints}
          />
        </div>
        <div className="flex flex-col flex-1">
          <SingleSkillTypeTable
            tableSkillType={'Technique'}
            remainingPoints={remainingPoints}
            setRemainingPoints={setRemainingPoints}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
