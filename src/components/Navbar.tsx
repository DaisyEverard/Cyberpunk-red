import { Link } from 'react-router-dom';

import '../style/navbar.css';

const Navbar = () => {
  return (
    <nav id="navbar">
      <Link to="/setup">Setup</Link>
      <Link to="/">Home</Link>
      <Link to="/inventory">Inventory</Link>
      <Link to="/combat">Combat</Link>
    </nav>
  );
};

export default Navbar;
