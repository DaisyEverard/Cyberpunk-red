import { useContext } from 'react';

import { CharacterContext } from '../../../context/Character';
import skillsJson from '../../../data/skills.json';
import { SkillsType } from '../../../types/types';
import IncrementDecrementSkill from '../../table_cells/IncrementDecrementSkill';
import EditableTextBox from '../../text_boxes/EditableTextBox';

type SingleSkillTypeSetupTableProps = {
  tableSkillType: string;
  remainingPoints: number;
  setRemainingPoints: (newPoints: number) => void;
};

const SingleSkillTypeSetupTable = ({
  tableSkillType,
  remainingPoints,
  setRemainingPoints,
}: SingleSkillTypeSetupTableProps) => {
  const { getCurrentSkills, setCurrentSkills } = useContext(CharacterContext);

  const skillsList = [];

  for (const index in skillsJson) {
    const skillType = skillsJson[index]['category'];
    if (skillType == tableSkillType) {
      skillsList.push(skillsJson[index]);
    }
  }

  const addNewOption = (
    currentSkills: SkillsType,
    setSkills: (currentSkills: SkillsType) => void,
    skillName: string,
  ) => {
    let max_skill_points = 5;
    if (skillName == 'Play Instrument') {
      max_skill_points = 6;
    }
    const newSkills = { ...currentSkills };
    let n = 1;
    let success = false;

    while (success == false && n <= max_skill_points) {
      const optionExists =
        newSkills[skillName]['options'][n]['name'] && newSkills[skillName]['options'][n]['name'] != '';

      if (optionExists) {
        n += 1;
        continue;
      } else {
        newSkills[skillName]['options'][n]['name'] = 'New Option';
        setSkills(newSkills);
        success = true;
      }
    }
  };

  const setOptionName = (
    target: any,
    skillName: string,
    optionID: number,
    currentSkills: SkillsType,
    setCurrentSkills: (skills: SkillsType) => void,
  ) => {
    const newName = target.value;
    const newSkills = { ...currentSkills };

    newSkills[skillName]['options'][optionID]['name'] = newName;
    setCurrentSkills(newSkills);
  };

  return (
    <div className="singleSkillTypeTable">
      <h4>{tableSkillType} Skills:</h4>
      <table>
        <thead>
          <tr>
            <th>Skill Name</th>
            <th>Cost</th>
            <th>Level</th>
            <th>Adjust</th>
          </tr>
        </thead>
        <tbody>
          {skillsList.map(skill => {
            // need to handle cultural origin rows. At least 4 points over 1-4 languages.
            const skillName = skill['name'];
            const pointCost = skill['x2'] ? 2 : 1;
            const skillLevel = getCurrentSkills()[skillName]['level'];
            const hasOptions = getCurrentSkills()[skillName]['has_options'];

            const mainHTMLRow = (
              <tr key={skillName}>
                <td>{skillName}</td>
                <td>{pointCost}</td>
                <td>{skillLevel}</td>
                <IncrementDecrementSkill
                  skillName={skillName}
                  remainingPoints={remainingPoints}
                  setRemainingPoints={setRemainingPoints}
                />
              </tr>
            );

            const optionsButton =
              hasOptions && skillName != 'Martial Arts' ? (
                <tr
                  className="font-bold bg-skill-option-bg-1"
                  id="overwrite-nth-of-type-bg-color"
                  onClick={e => {
                    e.preventDefault();
                    addNewOption(getCurrentSkills(), setCurrentSkills, skillName);
                  }}
                >
                  <td colSpan={4}>
                    <p>+ Option</p>
                  </td>
                </tr>
              ) : null;

            const options = [];
            if (hasOptions) {
              Object.entries(getCurrentSkills()[skillName]['options']).map(option => {
                const optionID = option[0];
                const optionName = option[1]['name'];
                const optionLevel = option[1]['level'];

                let style = 'option-tr hidden';
                if (optionName != '') {
                  style = 'option-tr';
                }

                options.push(
                  <tr className={style}>
                    <td>
                      <EditableTextBox
                        className="bg-transparent"
                        value={optionName}
                        onChange={e => {
                          setOptionName(e.target, skillName, optionID, getCurrentSkills(), setCurrentSkills);
                        }}
                      />
                    </td>
                    <td></td>
                    <td>{optionLevel}</td>
                    <td></td>
                  </tr>,
                );
              });
            }

            return [mainHTMLRow, optionsButton, ...options];
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SingleSkillTypeSetupTable;
