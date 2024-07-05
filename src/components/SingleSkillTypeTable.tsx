import { useContext } from 'react';

import { SkillsContext } from '../App';
import skillsJson from '../data/skills.json';
import { SkillsType } from '../types/types';
import IncrementDecrementSkill from '../utils/IncrementDecrementSkill';
import SimpleEditableTextCell from '../utils/SimpleEditableTextCell';

type SingleSkillTypeTableProps = {
  tableSkillType: string;
  remainingPoints: number;
  setRemainingPoints: (newPoints: number) => void;
};

const SingleSkillTypeTable = ({ tableSkillType, remainingPoints, setRemainingPoints }: SingleSkillTypeTableProps) => {
  const { currentSkills, setCurrentSkills } = useContext(SkillsContext);

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
    if (skillName == 'Martial Arts') {
      return;
    }
    const newSkills = { ...currentSkills };

    // This isn't going to work anymore when you can change the names of the options.
    const MAX_SKILL_POINTS = 6;
    let n = 1;
    let success = false;

    while (success == false && n <= MAX_SKILL_POINTS) {
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

  // If you activate this, it moves the box to the bottom of the list of options.
  // It's activated every time you press a key so you basically can't change anything unless it's already at the bottom of the list
  // need to use onBlur or onKeyDown instead of onChange? But then how does the text actually change?
  // Change the data structure so that the options have a numerical indetifier to use as a key, and a name property?
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
            <th>Cost</th>
            <th>Level</th>
            <th>adjuster buttons</th>
          </tr>
        </thead>
        <tbody>
          {skillsList.map(skill => {
            // need to deal with skills with options here
            // one extra row per option
            // need to be able to change options so cultural origin one can be set
            // should be able to add/remove? For start can just have the max number of option rows and leave them 0
            const skillName = skill['name'];
            const pointCost = skill['x2'] ? 2 : 1;
            const skillLevel = currentSkills[skillName]['level'];
            const hasOptions = currentSkills[skillName]['has_options'];

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

            const optionsButton = hasOptions ? (
              <tr
                className="font-bold bg-skill-option-bg-1"
                id="overwrite-nth-of-type-bg-color"
                onClick={e => {
                  e.preventDefault();
                  addNewOption(currentSkills, setCurrentSkills, skillName);
                }}
              >
                <p>+ Option</p>
              </tr>
            ) : null;

            const options = [];
            if (hasOptions) {
              Object.entries(currentSkills[skillName]['options']).map(option => {
                const optionID = option[0];
                const optionName = option[1]['name'];
                const optionLevel = option[1]['level'];

                let style = 'option-tr hidden';
                if (optionName != '') {
                  style = 'option-tr inline';
                }

                options.push(
                  <tr className={style}>
                    <td>
                      <SimpleEditableTextCell
                        className="bg-transparent"
                        value={optionName}
                        onChange={e => {
                          setOptionName(e.target, skillName, optionID, currentSkills, setCurrentSkills);
                        }}
                      />
                    </td>
                    <td>{optionLevel}</td>
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

export default SingleSkillTypeTable;
