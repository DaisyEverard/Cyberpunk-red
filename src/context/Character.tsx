import { PropsWithChildren, createContext, useState } from 'react';

import defaultEffects from '../data/defaultEffects.json';
import defaultSkills from '../data/defaultSkills.json';
import defaultStats from '../data/defaultStats.json';
import { Role } from '../types/Role';
import { CharacterType, EffectsType, SkillType, SkillsType, StatsType } from '../types/types';
import {
  calculateHP,
  calculateHumanity,
  isMortallyWounded,
  isSeriouslyWounded,
  setEffect,
} from '../utils/commonMethods';

type CharacterContextType = {
  state: CharacterType;
  setRole: (role: Role) => void;
  setName: (name: string) => void;
  setHumanity: (humanity: number) => void;
  setHP: (hp: number) => void;
  setStats: (stats: StatsType) => void;
  setCurrentEffects: (effects: EffectsType) => void;
  setCurrentSkills: (skills: SkillsType) => void;
};

export const CharacterContext = createContext<CharacterContextType>({} as CharacterContextType);

export const CharacterFactory = (): CharacterType => {
  const stats = defaultStats;
  const hp = calculateHP(stats);
  const humanity = calculateHumanity(stats);

  return {
    name: 'Bob',
    role: Role.Fixer,
    stats,
    HP: hp,
    humanity,
    currentEffects: defaultEffects,
    currentSkills: defaultSkills,
  };
};

export default function CharacterProvider({ children }: PropsWithChildren) {
  const [character, setCharacter] = useState(CharacterFactory());

  function setName(name: string) {
    setCharacter(current => ({ ...current, name }));
  }

  function setRole(role: Role) {
    setCharacter(current => ({ ...current, role }));
  }

  function setStats(stats: StatsType) {
    setCharacter(current => ({ ...current, stats }));
  }

  function setHP(HP: number) {
    setCharacter(current => {
      if (!isSeriouslyWounded(current.stats, HP)) {
        setEffect(current.currentEffects, setCurrentEffects, false, 'seriously wounded');
      }
      if (!isMortallyWounded(HP)) {
        setEffect(current.currentEffects, setCurrentEffects, false, 'mortally wounded');
      }

      return { ...current, HP };
    });
  }

  function setHumanity(humanity: number) {
    setCharacter(current => ({ ...current, humanity }));
  }

  function setCurrentSkills(currentSkills: SkillsType) {
    setCharacter(current => ({ ...current, currentSkills }));
  }

  function setCurrentEffects(currentEffects: EffectsType) {
    setCharacter(current => ({ ...current, currentEffects }));
  }

  // OTHER
  // function someOtherPublicFunction(message: string) {
  //   aPrivateFunction(message);
  // }

  // function aPrivateFunction(message: string) {
  //   console.log(message);
  // }

  return (
    <CharacterContext.Provider
      value={{
        state: character,
        setName,
        setRole,
        setHP,
        setHumanity,
        setStats,
        setCurrentEffects,
        setCurrentSkills,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
}
