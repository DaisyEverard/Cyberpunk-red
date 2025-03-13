import SingleSkillTypeDisplayTable from './SingleSkillTypeDisplayTable';

const SkillsDisplay = () => {
  return (
    <div className="box flex flex-col gap-1">
      <div className="flex gap-1">
        <div className="flex flex-col flex-1 items-center">
          <SingleSkillTypeDisplayTable tableSkillType={'Awareness'} />
          <SingleSkillTypeDisplayTable tableSkillType={'Body'} />
          <SingleSkillTypeDisplayTable tableSkillType={'Control'} />
          <SingleSkillTypeDisplayTable tableSkillType={'Education'} />
          <SingleSkillTypeDisplayTable tableSkillType={'Fighting'} />
          <SingleSkillTypeDisplayTable tableSkillType={'Performance'} />
          <SingleSkillTypeDisplayTable tableSkillType={'Ranged Weapon'} />
          <SingleSkillTypeDisplayTable tableSkillType={'Social'} />
          <SingleSkillTypeDisplayTable tableSkillType={'Technique'} />
        </div>
      </div>
    </div>
  );
};

export default SkillsDisplay;
