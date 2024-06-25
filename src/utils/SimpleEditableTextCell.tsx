import '../style/cells.css';

export default function SimpleEditableTextCell(props) {
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
}
