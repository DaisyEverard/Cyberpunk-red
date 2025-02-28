import { Link } from 'react-router-dom';

import { BUTTON_STYLE } from '../../constants';
import '../../style/navbar.css';

const Navbar = () => {
  return (
    <nav
      id="navbar"
      className="bg-white box flex justify-around"
    >
      <Link
        className={BUTTON_STYLE}
        to="/setup"
      >
        Setup
      </Link>
      <Link
        className={BUTTON_STYLE}
        to="/"
      >
        Home
      </Link>
      <Link
        className={BUTTON_STYLE}
        to="/inventory"
      >
        Inventory
      </Link>
      <Link
        className={BUTTON_STYLE}
        to="/combat"
      >
        Combat
      </Link>
    </nav>
  );
};

export default Navbar;
