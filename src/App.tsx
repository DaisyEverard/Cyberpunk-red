import Effects from './components/Effects';
import Header from './components/Header';
import Profile from './components/Profile';
import RoleAbility from './components/RoleAbility';
import Skills from './components/Skills';
import Stats from './components/Stats';

import './style/index.css';

import CharacterProvider from './context/Character';

// return (
//   // Clenaer code.
//   // Less nested shit.
//   // Happy Rob.
//   <CharacterProvider>
//     <div className="flex flex-col h-screen w-screen overflow-hidden">
//       <Header />
//       <div className="flex flex-col items-center overflow-y-scroll my-1">
//         <div className="flex flex-col gap-1 max-w-7xl">
//           <Profile />
//           <Effects />
//           <RoleAbility />
//           <Stats />
//           <Skills />
//         </div>
//       </div>
//     </div>
//   </CharacterProvider>

const App = () => {
  const [role, setRole] = useState('Medtech');
  const [stats, setStats] = useState(defaultStats);
  const [HP, setHP] = useState(calculateHP(stats));
  const [humanity, setHumanity] = useState(calculateHumanity(stats));
  const [currentSkills, setCurrentSkills] = useState(defaultSkills);
  const [currentEffects, setCurrentEffects] = useState(defaultEffects);

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      <StatsContext.Provider value={{ stats, setStats }}>
        <HPContext.Provider value={{ HP, setHP }}>
          <HumanityContext.Provider value={{ humanity, setHumanity }}>
            <SkillsContext.Provider value={{ currentSkills, setCurrentSkills }}>
              <EffectsContext.Provider value={{ currentEffects, setCurrentEffects }}>
                <div className="flex flex-col h-screen w-screen overflow-hidden">
                  <Header />
                  <div className="flex flex-col items-center overflow-y-scroll my-1">
                    <div className="flex flex-col gap-1 max-w-7xl">
                      <Profile />
                      <Effects />
                      <RoleAbility />
                      <Stats />
                      <Skills />
                    </div>
                  </div>
                </div>
              </EffectsContext.Provider>
            </SkillsContext.Provider>
          </HumanityContext.Provider>
        </HPContext.Provider>
      </StatsContext.Provider>
    </RoleContext.Provider>
  );
};

export default App;
