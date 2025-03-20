import { useContext, useState } from 'react';

import { CharacterContext } from '../../../context/Character';
import { CharacterType } from '../../../types/types';
import { NameAndID, handleGet, handleGetNamesAndIDs } from '../../../utils/apiCalls';
import Button from '../../common/Button';

const LoadCharacter = () => {
  const [namesAndIDs, setNamesAndIDs] = useState<NameAndID[]>([]);
  const { setState } = useContext(CharacterContext);

  const handleCharacterLoad = async (id: string, setState: (state: CharacterType) => void) => {
    console.log('loaded character');
    const path = 'document/by_id/' + id;
    const [data, err] = await handleGet(path);
    if (err) {
      throw err;
    }

    const dataObj = data as CharacterType;
    setState(dataObj);
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
            {namesAndIDs.map(character => {
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
            })}
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
