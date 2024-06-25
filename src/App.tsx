import { createContext, useState } from 'react';

import Effects from './components/Effects';
import Footer from './components/Footer';
import Header from './components/Header';
import Profile from './components/Profile';
import RoleAbility from './components/RoleAbility';
import Stats from './components/Stats';

import { calculateHP, calculateHumanity } from './utils/commonMethods';

import './style/App.css';
import './style/index.css';

import defaultStats from './data/defaultStats.json';

export const RoleContext = createContext({});
export const StatsContext = createContext({});
export const HPContext = createContext({});
export const HumanityContext = createContext({});

function App() {
  const [role, setRole] = useState('Medtech');
  const [stats, setStats] = useState(defaultStats);
  const [HP, setHP] = useState(calculateHP(stats));
  const [humanity, setHumanity] = useState(calculateHumanity(stats));

  return (
    <>
      <RoleContext.Provider value={{ role, setRole }}>
        <StatsContext.Provider value={{ stats, setStats }}>
          <HPContext.Provider value={{ HP, setHP }}>
            <HumanityContext.Provider value={{ humanity, setHumanity }}>
              <Header />
              <Profile />
              <Effects />
              <RoleAbility />
              <Stats />
              <Footer />
            </HumanityContext.Provider>
          </HPContext.Provider>
        </StatsContext.Provider>
      </RoleContext.Provider>
    </>
  );
}

export default App;
