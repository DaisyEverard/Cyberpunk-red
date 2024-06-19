export default function SimpleEditableTextCell(props) {
    let text = props.startText
    let setText = props.setText

    return (
        <p contentEditable="True" onBlur={(e) => {setText(text)}}>{text}</p>
    )
}