import { useState } from 'react';

import Header from '../components/common/Header';
import LoadCharacter from '../components/large_components/loadSave/LoadCharacter';
import SaveCharacter from '../components/large_components/loadSave/SaveCharacter';
import { NameAndID } from '../utils/apiCalls';

const LoadSave = () => {
  const [namesAndIDs, setNamesAndIDs] = useState<NameAndID[]>([]);
  return (
    <div className="flex flex-col items-center overflow-y-scroll my-1">
      <div className="flex flex-col gap-1 max-w-full">
        <Header />
        <SaveCharacter
          namesAndIDs={namesAndIDs}
          setNamesAndIDs={setNamesAndIDs}
        />
        <LoadCharacter
          namesAndIDs={namesAndIDs}
          setNamesAndIDs={setNamesAndIDs}
        />
        {/* see a list of characters and choose one to load data */}
        {/* save a character to the DB, get the ID returned? */}
      </div>
    </div>
  );
};

export default LoadSave;
