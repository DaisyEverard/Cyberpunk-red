import Header from '../components/Header';
import Profile from '../components/Profile';

const Setup = () => {
  return (
    <div className="flex flex-col items-center overflow-y-scroll my-1">
      <div className="flex flex-col gap-1 max-w-full">
        <Header />
        <Profile />
      </div>
    </div>
  );
};

export default Setup;
