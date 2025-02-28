// When your Character falls to zero Hit Points, they enter the Death State (a measure of how fast they are dying)
// Death save = BODY stat
import { useContext, useState } from 'react';

import bleedSVG from '../assets/icons/bleed.svg';
import blindSVG from '../assets/icons/blind.svg';
import burnSVG from '../assets/icons/burn.svg';
import crippleSVG from '../assets/icons/cripple.svg';
import drunkSVG from '../assets/icons/drunk.svg';
import empSVG from '../assets/icons/emp.svg';
import energizedSVG from '../assets/icons/energized.svg';
import hydrationSVG from '../assets/icons/hydration.svg';
import knockdownSVG from '../assets/icons/knockdown.svg';
import mortallyWoundedSVG from '../assets/icons/mortally wounded.svg';
import nourishmentSVG from '../assets/icons/nourishment.svg';
import poisonSVG from '../assets/icons/poison.svg';
import refreshedSVG from '../assets/icons/refreshed.svg';
import restedSVG from '../assets/icons/rested.svg';
import seriouslyWoundedSVG from '../assets/icons/seriously wounded.svg';
import stunSVG from '../assets/icons/stun.svg';
import { CharacterContext } from '../context/Character';
import effectJson from '../data/effects.json';
import { ModalDisplays } from '../types/types';
import EffectsModal from '../utils/modals/EffectsModal';

const iconMap = {
  bleed: bleedSVG,
  blind: blindSVG,
  burn: burnSVG,
  cripple: crippleSVG,
  drunk: drunkSVG,
  emp: empSVG,
  energized: energizedSVG,
  hydration: hydrationSVG,
  knockdown: knockdownSVG,
  nourishment: nourishmentSVG,
  poison: poisonSVG,
  refreshed: refreshedSVG,
  rested: restedSVG,
  stun: stunSVG,
  'mortally wounded': mortallyWoundedSVG,
  'seriously wounded': seriouslyWoundedSVG,
};

const defaultModalDisplays: ModalDisplays = {
  bleed: 'none',
  blind: 'none',
  burn: 'none',
  cripple: 'none',
  drunk: 'none',
  emp: 'none',
  energized: 'none',
  hydration: 'none',
  knockdown: 'none',
  nourishment: 'none',
  poison: 'none',
  refreshed: 'none',
  rested: 'none',
  stun: 'none',
  'mortally wounded': 'none',
  'seriously wounded': 'none',
};

const Effects = () => {
  const { getCurrentEffects } = useContext(CharacterContext);

  const [modalDisplays, setModalDisplays] = useState(defaultModalDisplays);

  const toggleModalDisplays = (
    modalDisplays: ModalDisplays,
    setModalDisplays: (modalDisplays: ModalDisplays) => void,
    effect: string,
  ) => {
    const effectLowerCase = effect.toLowerCase();
    const currentDisplay = modalDisplays[effectLowerCase];

    if (currentDisplay == 'none') {
      const newModalDisplays = { ...modalDisplays };
      newModalDisplays[effectLowerCase] = 'flex';
      setModalDisplays(newModalDisplays);
    } else {
      const newModalDisplays = { ...modalDisplays };
      newModalDisplays[effectLowerCase] = 'none';
      setModalDisplays(newModalDisplays);
    }
  };

  return (
    <div className="box flex justify-around">
      <div className="flex flex-col gap-2">
        Effects
        <div className="flex">
          {effectJson.map(skill => {
            const skillLowerCase = skill['name'].toLowerCase();
            const svgPath = iconMap[skillLowerCase];
            const isActive = getCurrentEffects()[skillLowerCase]['active'];

            let activeStyles = 'h-9';
            if (skill['category'] == 'Positive' && isActive) {
              activeStyles = 'h-9 bg-heal-green border-2 border-black';
            } else if (isActive) {
              activeStyles = 'h-9 bg-damage-red border-2 border-black';
            }

            return (
              <div
                className="imgContainer"
                key={skill['name']}
              >
                <img
                  src={svgPath}
                  alt={skill['alt']}
                  className={activeStyles}
                  onClick={e => {
                    e.preventDefault();
                    toggleModalDisplays(modalDisplays, setModalDisplays, skill['name']);
                  }}
                ></img>

                <EffectsModal
                  title={skill['name']}
                  content={skill['description']}
                  modalDisplays={modalDisplays}
                  setModalDisplays={setModalDisplays}
                  toggleModalDisplays={toggleModalDisplays}
                  iconMap={iconMap}
                  alt={skill['alt']}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Effects;
