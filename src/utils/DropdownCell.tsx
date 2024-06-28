import '../style/cells.css';

type DropdownCellProps = {
  value: string;
  values: string[];
  onChanged: (value: string) => void;
};

const DropdownCell = ({ value, values, onChanged }: DropdownCellProps) => {
  return (
    <div className="dropdown">
      <p className="dropbtn">{value}</p>
      <div className="dropdown-content">
        {values.map(role => {
          return (
            <p
              key={role}
              onClick={() => onChanged(role)}
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
