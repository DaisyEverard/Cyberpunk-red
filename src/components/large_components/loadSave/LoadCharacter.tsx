import { useContext } from 'react';

import { CharacterContext } from '../../../context/Character';
import { CharacterType } from '../../../types/types';
import { NameAndID, handleDeleteCharacter, handleGet, handleGetNamesAndIDs } from '../../../utils/apiCalls';
import Button from '../../common/Button';

type LoadCharacterProps = {
  namesAndIDs: NameAndID[];
  setNamesAndIDs: (namesAndIDs: NameAndID[]) => void;
};

const LoadCharacter = ({ namesAndIDs, setNamesAndIDs }: LoadCharacterProps) => {
  const { setState } = useContext(CharacterContext);

  const removeFromNamesAndIDs = (id: string, namesAndIDs: NameAndID[]): NameAndID[] => {
    namesAndIDs.forEach((character, i) => {
      if (character._id == id) {
        namesAndIDs.splice(i, 1);
        return namesAndIDs;
      }
    });
    return namesAndIDs;
  };

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

  const handleCharacterDelete = async (
    id: string,
    setState: (state: CharacterType) => void,
    setNamesAndIDs: (namesAndIDs: NameAndID[]) => void,
  ) => {
    try {
      await handleDeleteCharacter(id);
      const newNamesAndIDs = [...removeFromNamesAndIDs(id, namesAndIDs)];
      setNamesAndIDs(newNamesAndIDs);
      // setState(/*default state */)
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
                        onClick={() => handleCharacterDelete(character._id, setState, setNamesAndIDs)}
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
