import { PropsWithChildren, createContext, useState } from 'react';

import defaultEffects from '../data/defaultEffects.json';
import defaultSkills from '../data/defaultSkills.json';
import defaultStats from '../data/defaultStats.json';
import { Role } from '../types/Role';
import { CharacterType, EffectsType, SkillType, StatsType } from '../types/types';
import { calculateHP, calculateHumanity } from '../utils/commonMethods';

type CharacterContextType = {
  state: CharacterType;
  setRole: (role: Role) => void;
  setName: (name: string) => void;
  setHumanity: (humanity: number) => void;
  setHP: (hp: number) => void;
  setStats: (stats: StatsType) => void;
  setCurrentEffects: (effects: EffectsType) => void;
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

type CharacterProviderProps = {
  defaultData: CharacterType;
};

// You touch this perfectly good function declaration, George, and I'mma come beat yo ass!
// Fix It For Ya :)
// Good lad.

// It should go without saying that this is an example of one possible
// method. Feel free to experiment and find what works for you and
// your application.

// Disclaimer: This is probably not production ready code.
export default function CharacterProvider({ defaultData, children }: PropsWithChildren<CharacterProviderProps>) {
  const [character, setCharacter] = useState(defaultData);

  // SETTERS
  function setName(name: string) {
    setCharacter((current: CharacterType) => {
      console.log('setting the name', name);

      const val = current;

      val.name = 'dave';
      return val;
    });
  }

  function setRole(role: Role) {
    setCharacter((current: CharacterType) => {
      console.log('Set Role', role);

      current.role = role;
      return current;
    });
  }

  function setStats(stats: StatsType) {
    setCharacter((current: CharacterType) => {
      current.stats = stats;
      return current;
    });
  }

  function setHP(HP: number) {
    setCharacter((current: CharacterType) => {
      current.HP = HP;
      return current;
    });
  }

  function setHumanity(humanity: number) {
    setCharacter((current: CharacterType) => {
      current.humanity = humanity;
      return current;
    });
  }

  function setCurrentSkills(currentSkills: SkillType) {
    setCharacter((current: CharacterType) => {
      current.currentSkills = currentSkills;
      return current;
    });
  }

  function setCurrentEffects(currentEffects: EffectsType) {
    setCharacter((current: CharacterType) => {
      current.currentEffects = currentEffects;
      return current;
    });
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
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
}
