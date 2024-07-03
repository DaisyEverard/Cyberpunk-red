import { createContext, useState } from 'react';

import Effects from './components/Effects';
import Header from './components/Header';
import Profile from './components/Profile';
import RoleAbility from './components/RoleAbility';
import Skills from './components/Skills';
import Stats from './components/Stats';

import { calculateHP, calculateHumanity } from './utils/commonMethods';

import './style/index.css';

import defaultStats from './data/defaultStats.json';
import defaultSkills from "./data/defaultSkills.json";
import defaultEffects from "./data/defaultEffects.json";

export const RoleContext = createContext({});
export const StatsContext = createContext({});
export const HPContext = createContext({});
export const HumanityContext = createContext({});
export const SkillsContext = createContext({});
export const EffectsContext = createContext({});

const App = () => {
  const [name, setName] = useState('Johnny Silverhand');
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
                      <Profile
                        name={name}
                        setName={value => setName(value)}
                        role={role}
                        setRole={value => setRole(value)}
                        healthPoints={HP}
                        humanity={humanity}
                        stats={stats}
                      />
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
