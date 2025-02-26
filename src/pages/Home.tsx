import Rolls from '../components/Dice Rolls/Rolls';
import Effects from '../components/Effects';
import Header from '../components/Header';
import Profile from '../components/Profile';
import RoleAbility from '../components/RoleAbility';
import SkillsDisplay from '../components/SkillsDisplay';
import StatsDipslay from '../components/StatsDisplay';

const Home = () => {
  return (
    <div className="flex flex-col items-center overflow-y-scroll my-1">
      <div className="flex flex-col gap-1 max-w-full">
        <Header />
        <Profile />
        <Effects />
        <Rolls />
        <RoleAbility />
        <StatsDipslay />
        <SkillsDisplay />
      </div>
    </div>
  );
};

export default Home;
