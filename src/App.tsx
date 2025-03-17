import { BrowserRouter, Route, Routes } from 'react-router';

import Combat from './pages/Combat';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import Setup from './pages/Setup';

import Navbar from './components/common/Navbar';

import './style/index.css';

const App = () => {
  return (
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
  );
};

export default App;
