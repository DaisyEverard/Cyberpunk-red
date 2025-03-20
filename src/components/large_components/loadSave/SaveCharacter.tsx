import { useContext } from 'react';

import { CharacterContext } from '../../../context/Character';
import { CharacterType } from '../../../types/types';
import { handlePost } from '../../../utils/apiCalls';
import Button from '../../common/Button';

const SaveCharacter = () => {
  const { state } = useContext(CharacterContext);

  const handleSaveNewCharacter = async (state: CharacterType) => {
    console.log(state);

    const [response, err] = await handlePost('document', JSON.stringify(state));
    if (err) {
      throw err;
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
              handleSaveNewCharacter(state);
            }}
          >
            Save New Character
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SaveCharacter;
