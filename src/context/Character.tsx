import { PropsWithChildren, createContext, useState } from 'react';

import defaultEffects from '../data/defaultEffects.json';
import defaultSkills from '../data/defaultSkills.json';
import defaultStats from '../data/defaultStats.json';
import { calculateHP, calculateHumanity } from '../utils/commonMethods';

export const CharacterContext = createContext<any>(null);

// You touch this perfectly good function declaration, George, and I'mma come beat yo ass!
// Fix It For Ya :)
// Good lad.

// It should go without saying that this is an example of one possible
// method. Feel free to experiment and find what works for you and
// your application.

// Disclaimer: This is probably not production ready code.
export default function CharacterProvider({ children }: PropsWithChildren) {
  const [name, setName] = useState('Johnny Silverhand');
  const [role, setRole] = useState('Medtech');
  const [stats, setStats] = useState(defaultStats);
  const [HP, setHP] = useState(calculateHP(stats));
  const [humanity, setHumanity] = useState(calculateHumanity(stats));
  const [currentSkills, setCurrentSkills] = useState(defaultSkills);
  const [currentEffects, setCurrentEffects] = useState(defaultEffects);

  function getName() {
    // Maybe not strictly necessary to have getters and setters like this, but
    // a bit more explicit. Obviously these can do other things besides just
    // returning the state values above.

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
