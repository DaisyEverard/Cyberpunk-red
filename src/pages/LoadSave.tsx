import Header from '../components/common/Header';
import CallAPI from '../components/large_components/CallAPI';

const LoadSave = () => {
  return (
    <div className="flex flex-col items-center overflow-y-scroll my-1">
      <div className="flex flex-col gap-1 max-w-full">
        <Header />
        <CallAPI />
      </div>
    </div>
  );
};

export default LoadSave;
