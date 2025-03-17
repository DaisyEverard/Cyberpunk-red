import { useContext } from 'react';

import { CharacterContext } from '../../../context/Character';
import skillsJson from '../../../data/skills.json';
import { SkillsType } from '../../../types/types';
import { RollSkillCheck } from '../../dice_rolls/RollSkillCheck';
import EditableTextBox from '../../text_boxes/EditableTextBox';

type SingleSkillTypeDisplayTableProps = {
  tableSkillType: string;
};

const SingleSkillTypeDisplayTable = ({ tableSkillType }: SingleSkillTypeDisplayTableProps) => {
  const { state, setCurrentSkills } = useContext(CharacterContext);
  const skillsList = [];

  for (const index in skillsJson) {
    const skillType = skillsJson[index]['category'];
    if (skillType == tableSkillType) {
      skillsList.push(skillsJson[index]);
    }
  }

  const setOptionName = (
    target: any,
    skillName: string,
    optionID: number,
    currentSkills: SkillsType,
    setCurrentSkills: (skills: SkillsType) => void,
  ) => {
    if (skillName == 'Martial Arts') {
      return;
    }

    const newName = target.value;
    const newSkills = { ...currentSkills };

    newSkills[skillName]['options'][optionID]['name'] = newName;
    setCurrentSkills(newSkills);
  };

  return (
    <div className="singleSkillTypeTable max-w-[1000px]">
      <h4>{tableSkillType} Skills:</h4>
      <table className="table-fixed">
        <thead>
          <tr>
            <th>Skill Name</th>
            <th>Level</th>
            <th>Roll</th>
          </tr>
        </thead>
        <tbody>
          {skillsList.map(skill => {
            const skillName = skill['name'];
            const skillLevel = state.currentSkills[skillName]['level'];
            const hasOptions = state.currentSkills[skillName]['has_options'];

            const mainHTMLRow = (
              <tr key={skillName}>
                <td>{skillName}</td>
                <td>{skillLevel}</td>
                <td>
                  <RollSkillCheck
                    skillName={skillName}
                    skillLevel={skillLevel}
                  />
                </td>
              </tr>
            );

            const options = [];
            if (hasOptions) {
              Object.entries(state.currentSkills[skillName]['options']).map(option => {
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
                          setOptionName(e.target, skillName, optionID, state.currentSkills, setCurrentSkills);
                        }}
                      />
                    </td>
                    <td>{optionLevel}</td>
                    <td>
                      <RollSkillCheck
                        skillName={skillName}
                        skillLevel={optionLevel}
                      />
                    </td>
                  </tr>,
                );
              });
            }

            return [mainHTMLRow, ...options];
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SingleSkillTypeDisplayTable;
