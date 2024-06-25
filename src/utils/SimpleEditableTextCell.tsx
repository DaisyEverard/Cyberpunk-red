import '../style/cells.css';

const SimpleEditableTextCell = props => {
  let text = props.startText;
  let setText = props.setText;

  return (
    <p
      className="simpleEditableTextCell"
      contentEditable="True"
      onBlur={e => {
        setText(text);
      }}
    >
      {text}
    </p>
  );
};

export default SimpleEditableTextCell;
