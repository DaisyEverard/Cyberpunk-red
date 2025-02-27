import Header from '../components/Header';
import Profile from '../components/Profile';
import SkillsSetup from '../components/SkillsSetup';
import StatsSetup from '../components/StatsSetup';

const Setup = () => {
  return (
    <div className="flex flex-col items-center overflow-y-scroll my-1">
      <div className="flex flex-col gap-1 max-w-full">
        <Header />
        <Profile />
        <StatsSetup />
        <SkillsSetup />
      </div>
    </div>
  );
};

export default Setup;
