import { ModalDisplays } from '../types/types';

type DerivedEffectsModalProps = {
  title: string;
  content: string;
  modalDisplays: ModalDisplays;
  setModalDisplays: (newModalDisplays: ModalDisplays) => void;
  toggleModalDisplays: (
    modalDisplays: ModalDisplays,
    setModalDisplays: (newModalDisplays: ModalDisplays) => void,
    key: string,
  ) => void;
  iconMap: any;
  alt: string;
};

const DerivedEffectsModal = ({
  title,
  content,
  modalDisplays,
  setModalDisplays,
  toggleModalDisplays,
  iconMap,
  alt,
}: DerivedEffectsModalProps) => {
  const key = title.toLowerCase();

  return (
    <div style={{ display: modalDisplays[key] }}>
      <div
        className="modalBG"
        onClick={e => {
          e.preventDefault();
          toggleModalDisplays(modalDisplays, setModalDisplays, key);
        }}
      ></div>
      <div className="modalContainer">
        <div className="modal flex flex-col">
          <button
            onClick={e => {
              e.preventDefault();
              toggleModalDisplays(modalDisplays, setModalDisplays, key);
            }}
            className="closeModalButton"
          >
            X
          </button>
          <img
            src={iconMap[key]}
            alt={alt}
            style={{ height: '2rem' }}
          ></img>
          <h2>{key.toUpperCase()}</h2>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default DerivedEffectsModal;
