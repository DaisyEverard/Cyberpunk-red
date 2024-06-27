

const SimpleModal = (props) => {
    const key = props.title.toLowerCase()
    const content = props.content
    let modalDisplay = props.modalDisplays
    const setModalDisplay = props.setModalDisplays
    const toggleModalDisplays = props.toggleModalDisplays
    
    return (
        <div className='simpleModal' style={{display: modalDisplay[key]}}>
            <button onClick={(e) => {toggleModalDisplays(modalDisplay, setModalDisplay, key)}}>X</button>
            <h2>{key}</h2>
            <p>{content}</p>
        </div>
    )
}

export default SimpleModal;