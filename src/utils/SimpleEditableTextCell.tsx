import '../style/cells.css';

type TextInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const SimpleEditableTextCell = ({ placeholder, value, onChange, disabled }: TextInputProps) => {
  return (
    <input
      value={value}
      onChange={onChange}
      type="text"
      className={'rounded border px-2'}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};

export default SimpleEditableTextCell;
