import { useContext } from 'react';

import { RoleContext } from '../App';
import rolesJson from '../data/roles.json';
import '../style/roleAbility.css';
import HideableDescriptionCell from '../utils/HideableDescriptionCell';

const RoleAbility = () => {
  const { role, setRole } = useContext(RoleContext);
  const abilityObject = rolesJson[role];

  let allSkills: Array<string> = [];
  abilityObject['roleAbilities'].forEach(skill => {
    allSkills.push(skill['name']);
  });

  return (
    <div id="roleAbility">
      <div className="flexRow">
        <h4>Role Name: </h4>
        <p>{abilityObject['roleName']}</p>
      </div>

      <div className="flexRow">
        <div
          className="flexCol"
          style={{ width: '100%' }}
        >
          {abilityObject['roleAbilities'].map((ability, index: number) => {
            const name = ability['name'];
            const description = ability['description'];
            return (
              <HideableDescriptionCell
                key={index}
                title={name}
                descriptionArray={[description]}
              />
            );
          })}
        </div>
      </div>
      <div className="flexRow">
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
  );
};

export default RoleAbility;
