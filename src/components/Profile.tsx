import { useContext } from 'react';

import { CharacterContext } from '../context/Character';
import rolesJson from '../data/roles.json';
import { Stats } from '../types/types';
import DropdownCell from '../utils/DropdownCell';
import SimpleEditableTextCell from '../utils/SimpleEditableTextCell';
import {
  calculateHPMax,
  decrementAnyNumericalState,
  incrementAnyNumericalState,
  isMortallyWounded,
  isSeriouslyWounded,
  setEffect,
} from '../utils/commonMethods';

type ProfileProps = {
  name: string;
  setName: (value: string) => void;
  role: string;
  setRole: (value: string) => void;
  healthPoints: number;
};

const allRoles = Object.keys(rolesJson);

// COMPONENT START
const Profile = () => {
  const {
    getName,
    setName,
    getRole,
    setRole,
    getStats,
    setStats,
    getHP,
    setHP,
    getHumanity,
    setHumanity,
    getCurrentEffects,
    setCurrentEffects,
  } = useContext(CharacterContext);

  // HEAL METHOD
  const heal = (stats: Stats, HP: number, setHP: (newHP: number) => void) => {
    const HPChangeInput = document.querySelector('#HPChangeInput');
    const HPMax = calculateHPMax(stats);
    let HPChange = HPChangeInput.value;

    if (HPChange == '') {
      incrementAnyNumericalState(HP, setHP, HPMax);
      HP += 1;
    } else {
      HPChange = parseInt(HPChange);

      let success = true;
      while (HPChange > 0 && success) {
        success = incrementAnyNumericalState(HP, setHP, HPMax);
        HPChange -= 1;
        HP += 1;
      }
    }

    if (!isSeriouslyWounded(stats, HP)) {
      setEffect(getCurrentEffects(), setCurrentEffects, false, 'seriously wounded');
    }
    if (!isMortallyWounded(HP)) {
      setEffect(getCurrentEffects(), setCurrentEffects, false, 'mortally wounded');
    }

    HPChangeInput.value = null;
  };

  // TAKE DAMAGE METHOD
  const takeDamage = (HP: number, setHP: (newHP: number) => void) => {
    const HPChangeInput = document.querySelector('#HPChangeInput');
    let HPChange = HPChangeInput.value;

    if (HPChange == '') {
      decrementAnyNumericalState(HP, setHP);
      HP -= 1;
    } else {
      HPChange = parseInt(HPChange);

      let success = true;
      while (HPChange > 0 && success) {
        success = decrementAnyNumericalState(HP, setHP);
        HPChange -= 1;
        HP -= 1;
      }
    }

    if (isSeriouslyWounded(getStats(), HP)) {
      setEffect(getCurrentEffects(), setCurrentEffects, true, 'seriously wounded');
    }
    if (isMortallyWounded(HP)) {
      setEffect(getCurrentEffects(), setCurrentEffects, true, 'mortally wounded');
    }

    HPChangeInput.value = null;
  };

  // INCREMENT HUMANITY METHOD
  const incrementHumanity = (
    humanity: number,
    setHumanity: (newHumanity: number) => void,
    stats: Stats,
    setStats: (stats: Stats) => void,
  ) => {
    const humanityChangeInput = document.querySelector('#HumanityChangeInput');
    let humanityChange = humanityChangeInput.value;
    if (humanityChange == '') {
      humanityChange = 1;
    }
    humanityChange = parseInt(humanityChange);

    let success = false;
    const startHumanityModulusTen = humanity % 10;

    if (startHumanityModulusTen == 9) {
      let newStats = { ...stats };
      newStats['EMP'] += 1;
      setStats(newStats);
    }
    setHumanity(humanity + humanityChange);
    success = true;
    return success;
  };

  // DECREMENT HUMANITY METHOD
  const decrementHumanity = (
    humanity: number,
    setHumanity: (newHumanity: number) => void,
    stats: Stats,
    setStats: (stats: Stats) => void,
  ) => {
    const humanityChangeInput = document.querySelector('#HumanityChangeInput');
    let humanityChange = humanityChangeInput.value;
    if (humanityChange == '') {
      humanityChange = 1;
    }
    humanityChange = parseInt(humanityChange);

    const startHumanityModulusTen = humanity % 10;
    let success = true;

    while (humanityChange > 0 && success == true) {
      success = false;
      if (humanity > 0 && startHumanityModulusTen == 0) {
        let newStats = { ...stats };
        newStats['EMP'] -= 1;
        setStats(newStats);
      }
      if (humanity > 0) {
        setHumanity(humanity - 1);
        humanity -= 1;
        success = true;
      }
      humanityChange -= 1;
    }
  };

  // COMPONENT BODY
  return (
    <div className="flex gap-1">
      <div className="flex box">
        <div className="h-32 w-32 rounded-full bg-neutral-200"></div>
      </div>

      <div className="box flex flex-col justify-center flex-1">
        <div className="px-2 flex gap-2 items-center">
          <div>Name:</div>
          <SimpleEditableTextCell
            className="rounded border"
            value={getName()}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className=" px-2 flex gap-2 items-center">
          <div>Role:</div>
          <DropdownCell
            value={getRole()}
            values={allRoles}
            onChanged={value => setRole(value)}
          />
        </div>
      </div>

      <div className="box  flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="text-2xl">
            {getHP()} / {calculateHPMax(getStats())}
          </div>
          <div>Health Points (HP)</div>
        </div>
        <div className="flex flex-col justify-center items-center ml-3">
          <p
            className="health-button text-heal-green border-heal-green"
            onClick={e => {
              e.preventDefault();
              heal(getStats(), getHP(), setHP);
            }}
          >
            HEAL
          </p>
          {/* don't allow negative input */}
          <input
            className="box w-20 h-10"
            type="number"
            id="HPChangeInput"
            min={0}
          ></input>
          <p
            className="health-button text-damage-red border-damage-red"
            onClick={e => {
              e.preventDefault();
              takeDamage(getHP(), setHP);
            }}
          >
            DAMAGE
          </p>
        </div>
      </div>

      <div className="box flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="text-2xl">{getHumanity()}</div>
          <div>Humanity (HUM)</div>
        </div>
        <div className="flex flex-col justify-center items-center ml-3">
          <p
            className="health-button text-heal-green border-heal-green"
            onClick={e => {
              e.preventDefault();
              incrementHumanity(getHumanity(), setHumanity, getStats(), setStats);
            }}
          >
            ADD
          </p>
          {/* don't allow negative input */}
          <input
            className="box w-20 h-10"
            type="number"
            id="HumanityChangeInput"
            min={0}
          ></input>
          <p
            className="health-button text-damage-red border-damage-red"
            onClick={e => {
              e.preventDefault();
              decrementHumanity(getHumanity(), setHumanity, getStats(), setStats);
            }}
          >
            REMOVE
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
