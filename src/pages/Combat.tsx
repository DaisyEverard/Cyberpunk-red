import Rolls from '../components/Dice Rolls/Rolls';
import Effects from '../components/Effects';
import Header from '../components/Header';
import Profile from '../components/Profile';

const Combat = () => {
  return (
    <div className="flex flex-col items-center overflow-y-scroll my-1">
      <div className="flex flex-col gap-1 max-w-full">
        <Header />
        <Profile />
        <Effects />
        <Rolls />
      </div>
    </div>
  );
};

export default Combat;
