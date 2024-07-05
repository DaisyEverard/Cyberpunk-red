import '../style/cells.css';

type TextInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const SimpleEditableTextCell = ({ placeholder, value, onChange, onBlur, disabled }: TextInputProps) => {
  return (
    <input
      data-originalValue={value}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      type="text"
      className={'rounded border px-2'}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};

export default SimpleEditableTextCell;
