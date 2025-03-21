import { useContext, useState } from 'react';

import { CharacterContext } from '../../../context/Character';
import { CharacterType } from '../../../types/types';
import { NameAndID, handleGet, handleGetNamesAndIDs } from '../../../utils/apiCalls';
import Button from '../../common/Button';

const LoadCharacter = () => {
  const [namesAndIDs, setNamesAndIDs] = useState<NameAndID[]>([]);
  const { setState } = useContext(CharacterContext);

  const handleCharacterLoad = async (id: string, setState: (state: CharacterType) => void) => {
    const path = 'document/by_id/' + id;
    const [data, err] = await handleGet(path);
    if (err) {
      throw err;
    }

    const dataObj: CharacterType = {
      id: data._id,
      name: data.name,
      role: data.role,
      stats: data.stats,
      hp: data.hp,
      humanity: data.humanity,
      currentSkills: data.currentSkills,
      currentEffects: data.currentEffects,
    };

    setState(dataObj);
    console.log('loaded data set to state:', dataObj);
  };

  const handleRefreshList = async (setNamesAndIDs: (namesAndIDs: NameAndID[]) => void) => {
    try {
      const res = await handleGetNamesAndIDs();
      setNamesAndIDs(res.data);
    } catch (error) {
      throw Error('Bad Tings Happen');
    }
  };

  return (
    <div className="box flex flex-col gap-1">
      <div className="flex gap-1">
        <div className="flex flex-col flex-1 items-center">
          <h4 className="bg-none">Load Character</h4>
          <p>Please click on a character's name to load their data. THIS WILL OVERWRITE THE DATA IN YOUR BROWSER</p>

          <ul>
            {namesAndIDs ? (
              namesAndIDs.map(character => {
                return (
                  <li key={character._id}>
                    <Button
                      variant="noBackground"
                      onClick={() => handleCharacterLoad(character._id, setState)}
                    >
                      {character.name}
                    </Button>
                  </li>
                );
              })
            ) : (
              <li>NO CHARACTERS FOUND</li>
            )}
          </ul>

          <Button
            onClick={() => {
              handleRefreshList(setNamesAndIDs);
            }}
          >
            Refresh Character List
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoadCharacter;
