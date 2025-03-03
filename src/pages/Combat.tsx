import Effects from '../components/common/Effects';
import Header from '../components/common/Header';
import Profile from '../components/common/Profile';
import Rolls from '../components/dice_rolls/Rolls';

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
