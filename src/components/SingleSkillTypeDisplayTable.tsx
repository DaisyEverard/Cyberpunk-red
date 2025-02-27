import { useContext } from 'react';

import { CharacterContext } from '../context/Character';
import skillsJson from '../data/skills.json';
import { SkillsType } from '../types/types';
import SimpleEditableTextCell from '../utils/SimpleEditableTextCell';

type SingleSkillTypeDisplayTableProps = {
  tableSkillType: string;
};

const SingleSkillTypeDisplayTable = ({ tableSkillType }: SingleSkillTypeDisplayTableProps) => {
  const { getCurrentSkills, setCurrentSkills } = useContext(CharacterContext);

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
    <div className="singleSkillTypeTable">
      <h4>{tableSkillType} Skills:</h4>
      <table>
        <thead>
          <tr>
            <th>Skill Name</th>
            <th>Level</th>
          </tr>
        </thead>
        <tbody>
          {skillsList.map(skill => {
            const skillName = skill['name'];
            const skillLevel = getCurrentSkills()[skillName]['level'];
            const hasOptions = getCurrentSkills()[skillName]['has_options'];

            const mainHTMLRow = (
              <tr key={skillName}>
                <td>{skillName}</td>
                <td>{skillLevel}</td>
              </tr>
            );

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
                      <SimpleEditableTextCell
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

            return [mainHTMLRow, ...options];
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SingleSkillTypeDisplayTable;
