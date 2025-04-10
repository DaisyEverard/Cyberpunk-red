import { useContext, useEffect } from 'react';

import { CharacterContext } from '../../../context/Character';
import { APICharacterType, CharacterType } from '../../../types/types';
import { NameAndID, handlePost, handlePut } from '../../../utils/apiCalls';
import { removeFromNamesAndIDs } from '../../../utils/commonMethods';
import {
  convertEffectsToAPIEffects,
  convertSkillsToAPISkills,
  convertStatsToAPIStats,
} from '../../../utils/convertMaps';
import Button from '../../common/Button';

type SaveCharacterProps = {
  namesAndIDs: NameAndID[];
  setNamesAndIDs: (namesAndIDs: NameAndID[]) => void;
};

const SaveCharacter = ({ namesAndIDs, setNamesAndIDs }: SaveCharacterProps) => {
  const { state, setID } = useContext(CharacterContext);

  useEffect(() => {
    console.log('namesAndIDs updated:', namesAndIDs);
  }, [namesAndIDs]);

  const handleSaveNewCharacter = async (
    state: CharacterType,
    setID: (id: string) => void,
    namesAndIDs: NameAndID[],
    setNamesAndIDs: (namesAndIDs: NameAndID[]) => void,
  ) => {
    console.log('creating new character');

    const newAPICharacter: APICharacterType = {
      id: state.id,
      name: state.name,
      role: state.role,
      stats: convertStatsToAPIStats(state.stats),
      hp: state.hp,
      humanity: state.humanity,
      currentSkills: convertSkillsToAPISkills(state.currentSkills),
      currentEffects: convertEffectsToAPIEffects(state.currentEffects),
    };

    console.log(newAPICharacter);

    const [response, err] = await handlePost('character/new', JSON.stringify(newAPICharacter, null, 2));

    if (err) {
      throw err;
    }
    const newNameAndID = { id: response.id, name: state.name };
    namesAndIDs.push(newNameAndID);
    setNamesAndIDs([...namesAndIDs]);

    setID(response.id);
    console.log(response);
  };

  const handleOverwriteCharacter = async (
    state: CharacterType,
    setID: (id: string) => void,
    namesAndIDs: NameAndID[],
    setNamesAndIDs: (namesAndIDs: NameAndID[]) => void,
  ) => {
    const newAPICharacter: APICharacterType = {
      id: state.id,
      name: state.name,
      role: state.role,
      stats: convertStatsToAPIStats(state.stats),
      hp: state.hp,
      humanity: state.humanity,
      currentSkills: convertSkillsToAPISkills(state.currentSkills),
      currentEffects: convertEffectsToAPIEffects(state.currentEffects),
    };

    const [response, err] = await handlePut('character/update', JSON.stringify(newAPICharacter));

    if (err) {
      throw err;
    }

    if (response.id) {
      const newNameAndID = { id: response.id, name: state.name };

      let newNamesAndIDs = [...removeFromNamesAndIDs(response.id, namesAndIDs)];
      newNamesAndIDs.push(newNameAndID);
      setNamesAndIDs([...newNamesAndIDs]);
      setID(response.id);
    }
    console.log(response);
  };
  return (
    <div className="box flex flex-col gap-1">
      <div className="flex gap-1">
        <div className="flex flex-col flex-1 items-center">
          <h4 className="bg-none">Save Character</h4>
          <p>Clicking this will save your local data to the database</p>

          <Button
            onClick={() => {
              handleOverwriteCharacter(state, setID, namesAndIDs, setNamesAndIDs);
            }}
          >
            Overwrite Existing Character
          </Button>
          <Button
            onClick={() => {
              handleSaveNewCharacter(state, setID, namesAndIDs, setNamesAndIDs);
            }}
          >
            Create New Character
          </Button>
          <Button
            onClick={() => {
              console.log(state);
            }}
          >
            Log State To Console
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SaveCharacter;
