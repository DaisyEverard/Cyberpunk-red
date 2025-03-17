import { useContext, useState } from 'react';

import { CharacterContext } from '../../context/Character';
import { EffectsType, ModalDisplays } from '../../types/types';
import Button from '../common/Button';

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
  const [buttonStyles, setButtonStyles] = useState(isActive ? '' : 'border-heal-green text-heal-green');

  let buttonDisplay = 'inline';
  if (title == 'Mortally Wounded' || title == 'Seriously Wounded') {
    buttonDisplay = 'hidden';
  }

  const toggleActiveState = (
    currentEffects: EffectsType,
    setCurrentEffects: (effects: EffectsType) => void,
    key: string,
    isActive: boolean,
    setActiveStateText: (text: string) => void,
    setButtonStyles: (styles: string) => void,
  ) => {
    const newEffects = { ...currentEffects };
    if (isActive) {
      newEffects[key]['active'] = false;
      setActiveStateText('Activate');
      setButtonStyles('border-heal-green text-heal-green');
    } else {
      newEffects[key]['active'] = true;
      setActiveStateText('Deactivate');
      setButtonStyles('');
    }
    setCurrentEffects(newEffects);
  };

  return (
    <div style={{ display: modalDisplays[key] }}>
      <div
        className="fixed top-0 left-0 z-1 opacity-50 bg-white w-full h-full"
        onClick={e => {
          e.preventDefault();
          toggleModalDisplays(modalDisplays, setModalDisplays, key);
        }}
      ></div>
      <div className="px-2 py-2 rounded-lg bg-main-dark-bg fixed w-[400px] top-[20px] left-[50%] ml-[-200px]">
        <div className="flex flex-col px-2 py-2 rounded-l bg-white border-black border-[2px] max-h-[80vh] overflow-y-scroll">
          <Button
            variant="round"
            onClick={e => {
              e.preventDefault();
              toggleModalDisplays(modalDisplays, setModalDisplays, key);
            }}
          >
            X
          </Button>
          <img
            src={iconMap[key]}
            alt={alt}
            style={{ height: '2rem' }}
          ></img>
          <h2 className="font-bold">{key.toUpperCase()}</h2>
          <p>{content}</p>
          <Button
            className={buttonStyles + ' ' + buttonDisplay}
            variant="noBackground"
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
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EffectsModal;
