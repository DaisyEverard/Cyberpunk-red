import { useState } from 'react';

import { handleGet } from '../../../utils/apiCalls';
import Button from '../../common/Button';

const LoadCharacter = () => {
  const [allNames, setAllNames] = useState<string[]>([]);

  const handleCharacterLoad = () => {
    console.log('loaded character');
    // get document
  };

  const handleRefreshList = async (setAllNames: (allNames: string[]) => void) => {
    const [data, err] = await handleGet('characters/names');
    if (err) {
      throw err;
    }

    const dataObj = data as Record<string, string>[];
    const allNames: string[] = [];

    for (const [_, nameObj] of Object.entries(dataObj)) {
      allNames.push(nameObj['name']);
    }

    setAllNames(allNames);
  };

  return (
    <div className="box flex flex-col gap-1">
      <div className="flex gap-1">
        <div className="flex flex-col flex-1 items-center">
          <h4 className="bg-none">Load Character</h4>
          <p>Please click on a character's name to load their data. THIS WILL OVERWRITE THE DATA IN YOUR BROWSER</p>

          <ul>
            {allNames.map(name => {
              return (
                <li key={name}>
                  <Button
                    variant="noBackground"
                    onClick={handleCharacterLoad}
                  >
                    {name}
                  </Button>
                </li>
              );
            })}
          </ul>

          <Button
            onClick={() => {
              handleRefreshList(setAllNames);
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
