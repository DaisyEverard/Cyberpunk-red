import { Link } from 'react-router-dom';

import '../../style/navbar.css';
import Button from './Button';

const Navbar = () => {
  return (
    <nav
      id="navbar"
      className="bg-white box flex justify-around"
    >
      <Link to="/setup">
        <Button>Setup</Button>
      </Link>
      <Link to="/">
        <Button>Home</Button>
      </Link>
      <Link to="/inventory">
        <Button>Inventory</Button>
      </Link>
      <Link to="/combat">
        <Button>Combat</Button>
      </Link>
    </nav>
  );
};

export default Navbar;
