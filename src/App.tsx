import Effects from './components/Effects';
import Header from './components/Header';
import Profile from './components/Profile';
import RoleAbility from './components/RoleAbility';
import Skills from './components/Skills';
import Stats from './components/Stats';

import './style/index.css';

import CharacterProvider from './context/Character';

const App = () => {
  return (
    <CharacterProvider>
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
    </CharacterProvider>
  );
};

export default App;
