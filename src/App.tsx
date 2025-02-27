import { BrowserRouter, Route, Routes } from 'react-router';

import Combat from './pages/Combat';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import Setup from './pages/Setup';

import Navbar from './components/Navbar';

import './style/index.css';

import CharacterProvider from './context/Character';

const App = () => {
  return (
    <CharacterProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            index
            element={<Home />}
          />
          <Route
            path="setup"
            element={<Setup />}
          />
          <Route
            path="inventory"
            element={<Inventory />}
          />
          <Route
            path="combat"
            element={<Combat />}
          />
        </Routes>
      </BrowserRouter>
    </CharacterProvider>
  );
};

export default App;
