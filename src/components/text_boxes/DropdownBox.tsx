import '../../style/cells.css';

type DropdownCellProps = {
  value: string;
  values: string[];
  onChanged: (value: string) => void;
};

const DropdownBox = ({ value, values, onChanged }: DropdownCellProps) => {
  return (
    <div className="dropdown">
      <p className="px-1 py-1 hover:bg-active-bg-grey">{value}</p>
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

export default DropdownBox;
