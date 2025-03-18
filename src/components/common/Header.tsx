import { useLocation } from 'react-router-dom';

import { getPageName } from '../../utils/commonMethods';

const Header = () => {
  const location = useLocation(); // Type is correctly inferred

  return (
    <h1
      id="header"
      className="bg-gradient-to-br from-gradient-dark-bg to-gradient-light-bg text-main-light-text px-4 py-2"
    >
      {getPageName(location)}
    </h1>
  );
};

export default Header;
