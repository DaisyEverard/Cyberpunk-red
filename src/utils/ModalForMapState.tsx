
type ModalForMapStateProps = {
  title: string;
  content: string;
  modalDisplays: Record<string, string>;
  setModalDisplays: (newModalDisplays: Record<string, string>) => void;
  toggleModalDisplays: (modalDisplays: Record<string, string>, setModalDisplays: (newModalDisplays: Record<string, string>) => void, key: string) => void;
  iconMap: any;
  alt: string;
}

const ModalForMapState = ({title, content, modalDisplays, setModalDisplays, toggleModalDisplays, iconMap, alt}: ModalForMapStateProps) => {
    const key = title.toLowerCase()
    console.log(iconMap[key])
    
    return (
        <div style={{display: modalDisplays[key]}}>
        <div className='modalBG' onClick={(e) => {e.preventDefault(); toggleModalDisplays(modalDisplays, setModalDisplays, key)}}>
        </div>
        <div className="modalContainer">
        <div className="modal flexCol">
        <button onClick={(e) => {e.preventDefault(); toggleModalDisplays(modalDisplays, setModalDisplays, key)}} className="closeModalButton">X</button>
        <img 
          src={iconMap[key]} 
          alt={alt}
          style={{height: "2rem"}}></img>
        <h2>{key.toUpperCase()}</h2>
        <p>{content}</p>
        </div></div></div>
    )
}

export default ModalForMapState;