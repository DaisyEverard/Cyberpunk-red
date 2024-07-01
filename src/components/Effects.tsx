// When your Character falls to zero Hit Points, they enter the Death State (a measure of how fast they are dying)
// Death save = BODY stat
import { useContext, useState } from 'react';

import { HPContext, StatsContext } from '../App';
import bleedSVG from '../assets/icons/bleed.svg';
import blindSVG from '../assets/icons/blind.svg';
import burnSVG from '../assets/icons/burn.svg';
import crippleSVG from '../assets/icons/cripple.svg';
import drunkSVG from '../assets/icons/drunk.svg';
import empSVG from '../assets/icons/emp.svg';
import energizedSVG from '../assets/icons/energized.svg';
import hydrationSVG from '../assets/icons/hydration.svg';
import knockdownSVG from '../assets/icons/knockdown.svg';
import nourishmentSVG from '../assets/icons/nourishment.svg';
import poisonSVG from '../assets/icons/poison.svg';
import refreshedSVG from '../assets/icons/refreshed.svg';
import restedSVG from '../assets/icons/rested.svg';
import stunSVG from '../assets/icons/stun.svg';
import effectJson from '../data/effects.json';
import ModalForMapState from '../utils/ModalForMapState';
import { isSeriouslyWounded } from '../utils/commonMethods';

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
};

const defaultModalDisplays: Record<string, string> = {
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
};

const Effects = () => {
  const { HP, setHP } = useContext(HPContext);
  const { stats, setStats } = useContext(StatsContext);

  const [modalDisplays, setModalDisplays] = useState(defaultModalDisplays);

  const toggleModalDisplays = (
    modalDisplays: Record<string, string>,
    setModalDisplays: (modalDisplays: Record<string, string>) => void,
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

            return (
              <div
                className="imgContainer"
                key={skill['name']}
              >
                <img
                  src={svgPath}
                  alt={skill['alt']}
                  className='h-9'
                  onClick={e => {
                    e.preventDefault();
                    toggleModalDisplays(modalDisplays, setModalDisplays, skill['name']);
                  }}
                ></img>

                <ModalForMapState
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
          {isSeriouslyWounded(stats, HP) ? (
            <p className="text-damage-red">Seriously Wounded</p>
          ) : (
            <p className="text-inactive-grey">Seriously Wounded</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Effects;
