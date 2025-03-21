import { useContext, useState } from 'react';

import { AxiosError } from 'axios';

import { CharacterContext } from '../../../context/Character';
import { CharacterType } from '../../../types/types';
import { NameAndID, handleDeleteCharacter, handleGet, handleGetNamesAndIDs } from '../../../utils/apiCalls';
import Button from '../../common/Button';

const LoadCharacter = () => {
  const [namesAndIDs, setNamesAndIDs] = useState<NameAndID[]>([]);
  const { setState } = useContext(CharacterContext);

  const handleCharacterLoad = async (id: string, setState: (state: CharacterType) => void) => {
    try {
      const path = 'document/by_id/' + id;
      const [data, _] = await handleGet(path);
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
    } catch (error) {
      throw error;
    }
  };

  const handleCharacterDelete = async (id: string, setState: (state: CharacterType) => void) => {
    try {
      const res = await handleDeleteCharacter(id);
      // setState(/*default state */)
      // remove deleted from namesAndIDs list
    } catch (error) {
      throw error;
    }
  };

  const handleRefreshList = async (setNamesAndIDs: (namesAndIDs: NameAndID[]) => void) => {
    try {
      const res = await handleGetNamesAndIDs();
      setNamesAndIDs(res.data);
    } catch (error) {
      throw Error('Something went wrong refreshing list');
    }
  };

  return (
    <div className="box flex flex-col gap-1">
      <div className="flex gap-1">
        <div className="flex flex-col flex-1 items-center">
          <h4 className="bg-none">Load Character</h4>

          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Load</th>
                <th>Delete</th>
              </tr>
            </thead>
          </table>
          <tbody>
            {namesAndIDs ? (
              namesAndIDs.map(character => {
                return (
                  <tr key={character._id}>
                    <td>{character.name}</td>
                    <td>
                      <Button
                        variant="noBackground"
                        onClick={() => handleCharacterLoad(character._id, setState)}
                      >
                        LOAD
                      </Button>
                    </td>
                    <td>
                      <Button
                        variant="noBackground"
                        onClick={() => handleCharacterDelete(character._id, setState)}
                      >
                        DELETE
                      </Button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>NO CHARACTERS FOUND</tr>
            )}
          </tbody>

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
