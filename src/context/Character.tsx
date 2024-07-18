import { PropsWithChildren, createContext, useState } from 'react';

import defaultEffects from '../data/defaultEffects.json';
import defaultSkills from '../data/defaultSkills.json';
import defaultStats from '../data/defaultStats.json';
import { calculateHP, calculateHumanity } from '../utils/commonMethods';

export const CharacterContext = createContext<any>(null);

// You touch this perfectly good function declaration, George, and I'mma come beat yo ass!
// Fix It For Ya :)
export default function CharacterProvider({ children }: PropsWithChildren) {
  const [name, setName] = useState('Johnny Silverhand');
  const [role, setRole] = useState('Medtech');
  const [stats, setStats] = useState(defaultStats);
  const [HP, setHP] = useState(calculateHP(stats));
  const [humanity, setHumanity] = useState(calculateHumanity(stats));
  const [currentSkills, setCurrentSkills] = useState(defaultSkills);
  const [currentEffects, setCurrentEffects] = useState(defaultEffects);

  function getName() {
    return name;
  }
  function getRole() {
    return role;
  }
  function getStats() {
    return stats;
  }
  function getHP() {
    return HP;
  }
  function getHumanity() {
    return humanity;
  }
  function getCurrentSkills() {
    return currentSkills;
  }
  function getCurrentEffects() {
    return currentEffects;
  }

  function someOtherPublicFunction(message: string) {
    aPrivateFunction(message);
  }

  function aPrivateFunction(message: string) {
    console.log(message);
  }

  return (
    <CharacterContext.Provider
      value={{
        getName,
        setName,
        getRole,
        setRole,
        getStats,
        setStats,
        getHP,
        setHP,
        getHumanity,
        setHumanity,
        setCurrentSkills,
        getCurrentSkills,
        getCurrentEffects,
        setCurrentEffects,

        someOtherPublicFunction,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
}
