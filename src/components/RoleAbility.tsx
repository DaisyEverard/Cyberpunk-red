import { useContext } from 'react';

import { CharacterContext } from '../context/Character';
import rolesJson from '../data/roles.json';
import CollapsibleTextBox from './text_boxes/CollapsibleTextBox';

const RoleAbility = () => {
  const { getRole, setRole } = useContext(CharacterContext);
  const abilityObject = rolesJson[getRole()];

  let allSkills: Array<string> = [];
  abilityObject['roleAbilities'].forEach(skill => {
    allSkills.push(skill['name']);
  });

  return (
    <div className="box flex flex-col gap-1">
      <div className="flex justify-center items-center gap-1">
        <h4>Role Name: </h4>
        <p>{abilityObject['roleName']}</p>
      </div>
      <div className="flex gap-1">
        <div className="flex flex-1">
          <div style={{ width: '100%' }}>
            {abilityObject['roleAbilities'].map((ability, index: number) => {
              const name = ability['name'];
              const description = ability['description'];
              return (
                <CollapsibleTextBox
                  key={index}
                  title={name}
                  descriptionArray={[description]}
                />
              );
            })}
          </div>
        </div>
        <div className="flex flex-1">
          <table>
            <thead>
              <tr>
                <th>Ability</th>
                <th>Level</th>
              </tr>
            </thead>
            <tbody>
              {
                // also need level in this skill, doesn't exist yet
                allSkills.map((skill, index) => {
                  return (
                    <tr key={index}>
                      <th>{skill}</th>
                      <td>Level</td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RoleAbility;
