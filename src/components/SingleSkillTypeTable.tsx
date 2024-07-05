import { useContext } from 'react';

import { SkillsContext } from '../App';
import skillsJson from '../data/skills.json';
import { SkillsType } from '../types/types';
import IncrementDecrementSkill from '../utils/IncrementDecrementSkill';
import SimpleEditableTextCell from '../utils/SimpleEditableTextCell';
import Skills from './Skills';

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
    const newSkills = { ...currentSkills };

    const MAX_SKILL_POINTS = 6;
    let n = 1;
    let success = false;
    while (success == false && n < MAX_SKILL_POINTS) {
      const optionExists =
        newSkills[skillName]['options'][`newOption${n}`] || newSkills[skillName]['options'][`newOption${n}`] == 0;

      if (optionExists) {
        n += 1;
        continue;
      } else {
        success = true;
      }
    }

    newSkills[skillName]['options'][`newOption${n}`] = 0;
    setSkills(newSkills);
  };

  // If you activate this, it moves the box to the bottom of the list of options.
  // It's activated every time you press a key so you basically can't change anything unless it's already at the bottom of the list
  // need to use onBlur or onKeyDown instead of onChange? But then how does the text actually change?

  // Change the data structure so that the options have a numerical indetifier to use as a key, and a name property?
  const setOptionName = (
    target: any,
    skillName: string,
    currentSkills: SkillsType,
    setCurrentSkills: (skills: SkillsType) => void,
  ) => {
    const oldName = target.dataset.originalvalue;
    const newName = target.value;
    if (oldName === newName) {
      return;
    }
    const newSkills = { ...currentSkills };
    newSkills[skillName]['options'][newName] = newSkills[skillName]['options'][oldName];
    delete newSkills[skillName]['options'][oldName];
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
              Object.entries(currentSkills[skillName]['options']).forEach(([optionName, level]) => {
                options.push(
                  <tr className="option-tr">
                    <td>
                      <SimpleEditableTextCell
                        value={optionName}
                        onChange={e => {
                          setOptionName(e.target, skillName, currentSkills, setCurrentSkills);
                        }}
                      />
                    </td>
                    <td>{level}</td>
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
