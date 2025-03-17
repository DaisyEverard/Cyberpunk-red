import { PropsWithChildren, createContext, useState } from 'react';

import defaultEffects from '../data/defaultEffects.json';
import defaultSkills from '../data/defaultSkills.json';
import defaultStats from '../data/defaultStats.json';
import { Role } from '../types/Role';
import { CharacterType, EffectsType, SkillType, StatsType } from '../types/types';
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
  setCurrentSkills: (skills: SkillType) => void;
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

// You touch this perfectly good function declaration, George, and I'mma come beat yo ass!
// Fix It For Ya :)
// Good lad.

// It should go without saying that this is an example of one possible
// method. Feel free to experiment and find what works for you and
// your application.

// Disclaimer: This is probably not production ready code.
export default function CharacterProvider({ children }: PropsWithChildren) {
  const [character, setCharacter] = useState(CharacterFactory());

  // SETTERS
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
    // set dead and critically wounded here instead
  }

  function setHumanity(humanity: number) {
    setCharacter(current => ({ ...current, humanity }));
  }

  function setCurrentSkills(currentSkills: SkillType) {
    setCharacter(current => ({ ...current, currentSkills }));
  }

  function setCurrentEffects(currentEffects: EffectsType) {
    setCharacter(current => ({ ...current, currentEffects }));
  }

  // OTHER
  function someOtherPublicFunction(message: string) {
    // Obviously you're not limited to just gaving getters and setters.
    // You can also export other methods (to stick with our "class" anaology) which
    // anything else you might need a consuming component to do.

    aPrivateFunction(message);
  }

  function aPrivateFunction(message: string) {
    // "Private" in that were're just not exporting it.
    // Good for the nuts and bolts that you don't want to expose to your
    // comsuming components.

    // If you want things a bit neater you can put it outside this
    // function and just call it from there, passing in any data
    // you need it to consume etc.

    // Whatever. Get an egg. Suck it.

    console.log(message);
  }

  return (
    <CharacterContext.Provider
      value={{
        // Here we export the methods and variables we want to expose
        // to the components consuming this context. Anything inside
        // the provider will be able to access these with the useContext
        // hook.
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
