import Header from '../components/common/Header';
import Profile from '../components/common/Profile';

const Inventory = () => {
  return (
    <div className="flex flex-col items-center overflow-y-scroll my-1">
      <div className="flex flex-col gap-1 max-w-full">
        <Header />
        <Profile />
      </div>
    </div>
  );
};

export default Inventory;
