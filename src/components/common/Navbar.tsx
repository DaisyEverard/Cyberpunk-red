import { Link } from 'react-router-dom';

import '../../style/navbar.css';

const Navbar = () => {
  return (
    <nav
      id="navbar"
      className="bg-white box flex justify-around"
    >
      <Link
        className="button"
        to="/setup"
      >
        Setup
      </Link>
      <Link
        className="button"
        to="/"
      >
        Home
      </Link>
      <Link
        className="button"
        to="/inventory"
      >
        Inventory
      </Link>
      <Link
        className="button"
        to="/combat"
      >
        Combat
      </Link>
    </nav>
  );
};

export default Navbar;
