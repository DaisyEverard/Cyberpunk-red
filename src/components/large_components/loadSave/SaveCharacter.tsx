import { useContext } from 'react';

import { CharacterContext } from '../../../context/Character';
import { CharacterType } from '../../../types/types';
import { handlePost } from '../../../utils/apiCalls';
import Button from '../../common/Button';

const SaveCharacter = () => {
  const { state, setID } = useContext(CharacterContext);

  const handleSaveNewCharacter = async (state: CharacterType, setID: (id: string) => void) => {
    console.log('creating new character');
  };

  const handleOverwriteCharacter = async (state: CharacterType, setID: (id: string) => void) => {
    const [response, err] = await handlePost('document/existing', JSON.stringify(state));

    if (err) {
      throw err;
    }

    if (response.Id) {
      setID(response.Id);
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
              handleSaveNewCharacter(state, setID);
            }}
          >
            Overwrite Existing Character
          </Button>
          <Button
            onClick={() => {
              handleOverwriteCharacter(state, setID);
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
