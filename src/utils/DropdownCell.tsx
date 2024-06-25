import '../style/cells.css';

const DropdownCell = props => {
  let currentItem = props.currentItem;
  const itemSetter = props.itemSetter;
  const optionsList = props.optionsList;

  return (
    <div className="dropdown">
      <p className="dropbtn">{currentItem}</p>
      <div className="dropdown-content">
        {optionsList.map(role => {
          return (
            <p
              key={role}
              onClick={e => {
                itemSetter(role);
              }}
            >
              {role}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default DropdownCell;
