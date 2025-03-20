import Header from '../components/common/Header';
import CallAPI from '../components/large_components/loadSave/CallAPI';
import LoadCharacter from '../components/large_components/loadSave/LoadCharacter';
import SaveCharacter from '../components/large_components/loadSave/SaveCharacter';

const LoadSave = () => {
  return (
    <div className="flex flex-col items-center overflow-y-scroll my-1">
      <div className="flex flex-col gap-1 max-w-full">
        <Header />
        <CallAPI />
        <SaveCharacter />
        <LoadCharacter />
        {/* see a list of characters and choose one to load data */}
        {/* save a character to the DB, get the ID returned? */}
      </div>
    </div>
  );
};

export default LoadSave;
