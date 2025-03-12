import '../../style/styles.css';

type DropdownCellProps = {
  value: string;
  values: string[];
  onChanged: (value: string) => void;
};

const DropdownBox = ({ value, values, onChanged }: DropdownCellProps) => {
  return (
    <div className="reveal-trigger">
      <p className="px-1 py-1 hover:bg-active-bg-grey">{value}</p>
      <div className="hidden-item absolute bg-[#f1f1f1] z-1 shadow-[0px_8px_16px_0px_rgba(0,0,0,0.2)]">
        {values.map(role => {
          return (
            <p
              className="hover:bg-[#ddd] px-6 py-2"
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
