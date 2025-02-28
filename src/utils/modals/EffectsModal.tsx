import { useContext, useState } from 'react';

import { CharacterContext } from '../../context/Character';
import { Effects, ModalDisplays } from '../../types/types';

type EffectsModalProps = {
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

const EffectsModal = ({
  title,
  content,
  modalDisplays,
  setModalDisplays,
  toggleModalDisplays,
  iconMap,
  alt,
}: EffectsModalProps) => {
  const { getCurrentEffects, setCurrentEffects } = useContext(CharacterContext);
  const key = title.toLowerCase();
  const isActive = getCurrentEffects()[key]['active'];
  const [activeStateText, setActiveStateText] = useState(isActive ? 'Deactivate' : 'Activate');
  const [buttonStyles, setButtonStyles] = useState(
    isActive ? 'border-damage-red text-damage-red health-button' : 'border-heal-green text-heal-green health-button',
  );

  let buttonDisplay = 'inline';
  if (title == 'Mortally Wounded' || title == 'Seriously Wounded') {
    buttonDisplay = 'hidden';
  }

  const toggleActiveState = (
    currentEffects: Effects,
    setCurrentEffects: (effects: Effects) => void,
    key: string,
    isActive: boolean,
    setActiveStateText: (text: string) => void,
    setButtonStyles: (styles: string) => void,
  ) => {
    const newEffects = { ...currentEffects };
    if (isActive) {
      newEffects[key]['active'] = false;
      setActiveStateText('Activate');
      setButtonStyles('border-heal-green text-heal-green health-button');
    } else {
      newEffects[key]['active'] = true;
      setActiveStateText('Deactivate');
      setButtonStyles('border-damage-red text-damage-red health-button');
    }
    setCurrentEffects(newEffects);
  };

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
          <button
            className={buttonStyles + ' ' + buttonDisplay}
            onClick={e => {
              e.preventDefault;
              toggleActiveState(
                getCurrentEffects(),
                setCurrentEffects,
                key,
                isActive,
                setActiveStateText,
                setButtonStyles,
              );
            }}
          >
            {activeStateText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EffectsModal;
