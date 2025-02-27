import { Link } from 'react-router-dom';

import '../style/navbar.css';

const Navbar = () => {
  return (
    <div id="navbar">
      <div>
        <Link to="/setup">Setup</Link>
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/inventory">Inventory</Link>
      </div>
      <div>
        <Link to="/combat">Combat</Link>
      </div>
    </div>
  );
};

export default Navbar;
