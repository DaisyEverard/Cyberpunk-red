

const SimpleModal = (props) => {
    const key = props.title.toLowerCase()
    const content = props.content
    let modalDisplay = props.modalDisplays
    const setModalDisplay = props.setModalDisplays
    const toggleModalDisplays = props.toggleModalDisplays
    const iconMap = props.iconMap
    
    return (
        <div style={{display: modalDisplay[key]}}>
        <div className='modalBG' onClick={(e) => {toggleModalDisplays(modalDisplay, setModalDisplay, key)}}>
        </div>
        <div className="modalContainer">
        <div className="modal flexCol">
        <button onClick={(e) => {toggleModalDisplays(modalDisplay, setModalDisplay, key)}} className="closeModalButton">X</button>
        <img 
          src={iconMap[key]} 
          alt={key["alt"]}
          style={{height: "2rem"}}></img>
        <h2>{key.toUpperCase()}</h2>
        <p>{content}</p>
        </div></div></div>
    )
}

export default SimpleModal;