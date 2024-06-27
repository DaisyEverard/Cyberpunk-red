

const SimpleModal = (props) => {
    const key = props.title.toLowerCase()
    const content = props.content
    let modalDisplay = props.modalDisplays
    const setModalDisplay = props.setModalDisplays
    const toggleModalDisplays = props.toggleModalDisplays
    
    return (
        <div style={{display: modalDisplay[key]}}>
        <div className='modalBG'>
        </div>
        <div className="modal flexCol">
        <button onClick={(e) => {toggleModalDisplays(modalDisplay, setModalDisplay, key)}}>X</button>
        <h2>{key}</h2>
        <p>{content}</p>
        </div></div>

    )
}

export default SimpleModal;