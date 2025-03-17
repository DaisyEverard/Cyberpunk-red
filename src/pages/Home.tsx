import Effects from '../components/common/Effects';
import Header from '../components/common/Header';
import Profile from '../components/common/Profile';
import Rolls from '../components/dice_rolls/Rolls';
import RoleAbilityPanel from '../components/large_components/RoleAbility';
import SkillsDisplay from '../components/large_components/skills/SkillsDisplay';
import StatsDipslay from '../components/large_components/stats/StatsDisplay';

const Home = () => {
  return (
    <div className="flex flex-col items-center overflow-y-scroll my-1">
      <div className="flex flex-col gap-1 max-w-full">
        <Header />
        <Profile />
        <Effects />
        <Rolls />
        <RoleAbilityPanel />
        <StatsDipslay />
        <SkillsDisplay />
      </div>
    </div>
  );
};

export default Home;
