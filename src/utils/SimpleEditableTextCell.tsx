import '../style/cells.css';

type TextInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const SimpleEditableTextCell = ({ placeholder, value, onChange, disabled, className }: TextInputProps) => {
  const styles = 'px-2 ' + className;
  return (
    <input
      value={value}
      onChange={onChange}
      type="text"
      className={styles}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};

export default SimpleEditableTextCell;
