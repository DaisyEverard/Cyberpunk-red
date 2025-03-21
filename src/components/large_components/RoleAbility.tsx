import { useContext } from 'react';

import { CharacterContext } from '../../context/Character';
import { exec } from '../../data/roles/exec';
import { fixer } from '../../data/roles/fixer';
import { lawman } from '../../data/roles/lawman';
import { media } from '../../data/roles/media';
import { medtech } from '../../data/roles/medtech';
import { netrunner } from '../../data/roles/netrunner';
import { nomad } from '../../data/roles/nomad';
import { rockerboy } from '../../data/roles/rockerboy';
import { solo } from '../../data/roles/solo';
import { tech } from '../../data/roles/tech';
import { Role } from '../../types/Role';
import { RoleAbilities } from '../../types/types';
import CollapsibleTextBox from '../text_boxes/CollapsibleTextBox';

const GetRoleAbility = (role: Role): RoleAbilities => {
  switch (role) {
    case Role.Exec:
      return exec;
    case Role.Fixer:
      return fixer;
    case Role.Lawman:
      return lawman;
    case Role.Media:
      return media;
    case Role.Medtech:
      return medtech;
    case Role.Netrunner:
      return netrunner;
    case Role.Nomad:
      return nomad;
    case Role.Rockerboy:
      return rockerboy;
    case Role.Solo:
      return solo;
    case Role.Tech:
      return tech;
    default:
      return solo;
  }
};

const RoleAbilityPanel = () => {
  const { state: character } = useContext(CharacterContext);
  const abilityObject = GetRoleAbility(character.role);

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

export default RoleAbilityPanel;
