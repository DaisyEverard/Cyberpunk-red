import { useContext, useEffect } from 'react';

import { CharacterContext } from '../../../context/Character';
import { CharacterType } from '../../../types/types';
import { NameAndID, handlePost } from '../../../utils/apiCalls';
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

    const [response, err] = await handlePost('document/new', JSON.stringify(state));

    if (err) {
      throw err;
    }
    const newNameAndID = { _id: response.Id, name: state.name };
    namesAndIDs.push(newNameAndID);
    setNamesAndIDs([...namesAndIDs]);

    setID(response.Id);
    console.log(response);
  };

  const handleOverwriteCharacter = async (
    state: CharacterType,
    setID: (id: string) => void,
    namesAndIDs: NameAndID[],
    setNamesAndIDs: (namesAndIDs: NameAndID[]) => void,
  ) => {
    const [response, err] = await handlePost('document/existing', JSON.stringify(state));

    if (err) {
      throw err;
    }

    if (response.Id) {
      const newNameAndID = { _id: response.Id, name: state.name };
      namesAndIDs.push(newNameAndID);
      setNamesAndIDs([...namesAndIDs]);

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
