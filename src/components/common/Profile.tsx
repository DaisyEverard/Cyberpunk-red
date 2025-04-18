import React, { useContext } from 'react';
import { useRef } from 'react';

import { CharacterContext } from '../../context/Character';
import { Role } from '../../types/Role';
import { StatsType } from '../../types/types';
import {
  calculateHPMax,
  decrementAnyNumericalState,
  incrementAnyNumericalState,
  isMortallyWounded,
  isSeriouslyWounded,
  setEffect,
} from '../../utils/commonMethods';
import DropdownBox from '../text_boxes/DropdownBox';
import EditableTextBox from '../text_boxes/EditableTextBox';
import Button from './Button';

const allRoles = Object.values(Role);

// COMPONENT START
const Profile = () => {
  const { state, setRole, setName, setHP, setHumanity, setStats, setCurrentEffects } = useContext(CharacterContext);
  const HPInputRef = useRef<HTMLInputElement>(null);
  const humanityInputRef = useRef<HTMLInputElement>(null);

  // HEAL METHOD
  const heal = (HP: number, setHP: (newHP: number) => void) => {
    const HPMax = calculateHPMax(state.stats);
    let HPChangeString = '';
    if (HPInputRef.current) {
      HPChangeString = HPInputRef.current.value;
    }

    if (HPChangeString == '') {
      incrementAnyNumericalState(HP, setHP, HPMax);
      HP += 1;
    } else {
      let HPChange = parseInt(HPChangeString);

      let success = true;
      while (HPChange > 0 && success) {
        success = incrementAnyNumericalState(HP, setHP, HPMax);
        HPChange -= 1;
        HP += 1;
      }
    }

    if (HPInputRef.current) {
      HPInputRef.current.value = '';
    }
  };

  // TAKE DAMAGE METHOD
  const takeDamage = (HP: number, setHP: (newHP: number) => void) => {
    let HPChangeString = '';
    if (HPInputRef.current) {
      HPChangeString = HPInputRef.current.value;
    }

    if (HPChangeString == '') {
      decrementAnyNumericalState(HP, setHP);
      HP -= 1;
    } else {
      let HPChange = parseInt(HPChangeString);

      let success = true;
      while (HPChange > 0 && success) {
        success = decrementAnyNumericalState(HP, setHP);
        HPChange -= 1;
        HP -= 1;
      }
    }

    if (isSeriouslyWounded(state.stats, HP)) {
      setEffect(state.currentEffects, setCurrentEffects, true, 'seriously wounded');
    }
    if (isMortallyWounded(HP)) {
      setEffect(state.currentEffects, setCurrentEffects, true, 'mortally wounded');
    }

    if (HPInputRef.current) {
      HPInputRef.current.value = '';
    }
  };

  // INCREMENT HUMANITY METHOD
  const incrementHumanity = (
    humanity: number,
    setHumanity: (newHumanity: number) => void,
    stats: StatsType,
    setStats: (stats: StatsType) => void,
  ) => {
    let humanityChangeString = '';
    let humanityChange = 0;
    if (humanityInputRef.current) {
      humanityChangeString = humanityInputRef.current.value;
    }
    humanityChange = parseInt(humanityChangeString);

    if (humanityChangeString == '') {
      humanityChange = 1;
    }

    while (humanityChange > 0) {
      const humanityModTen = humanity % 10;

      if (humanityModTen == 9) {
        let newStats = { ...stats };
        newStats['EMP'] += 1;
        setStats(newStats);
      }
      setHumanity(humanity + 1);
      humanity += 1;
      humanityChange -= 1;
    }

    if (humanityInputRef.current) {
      humanityInputRef.current.value = '';
    }
  };

  // DECREMENT HUMANITY METHOD
  const decrementHumanity = (
    humanity: number,
    setHumanity: (newHumanity: number) => void,
    stats: StatsType,
    setStats: (stats: StatsType) => void,
  ) => {
    let humanityChangeString = '';
    let humanityChange = 0;

    if (humanityInputRef.current) {
      humanityChangeString = humanityInputRef.current.value;
    }

    humanityChange = parseInt(humanityChangeString);

    if (humanityChangeString == '') {
      humanityChange = 1;
    }

    let success = true;

    while (humanityChange > 0 && success == true) {
      const humanityModTen = humanity % 10;
      success = false;

      if (humanity > 0 && humanityModTen == 0) {
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

    if (humanityInputRef.current) {
      humanityInputRef.current.value = '';
    }
  };

  const handleNameTextBoxOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
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
          <EditableTextBox
            className="rounded border"
            value={state.name}
            onChange={handleNameTextBoxOnChange}
          />
        </div>
        <div className=" px-2 flex gap-2 items-center">
          <div>Role:</div>
          <DropdownBox
            value={state.role}
            values={allRoles}
            onChanged={value => {
              setRole(value as Role);
            }}
          />
        </div>
      </div>

      <div className="box  flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <div
            className="text-2xl"
            data-testid="HP-display"
          >
            {state.hp} / {calculateHPMax(state.stats)}
          </div>
          <div>Health Points (HP)</div>
        </div>
        <div className="flex flex-col justify-center items-center ml-3">
          <Button
            className="text-heal-green border-heal-green bg-none"
            variant="noBackground"
            onClick={e => {
              e.preventDefault();
              heal(state.hp, setHP);
            }}
          >
            HEAL
          </Button>
          {/* don't allow negative input */}
          <input
            data-testid="HP-input"
            className="box w-20 h-10"
            type="number"
            ref={HPInputRef}
            min={0}
          ></input>
          <Button
            variant="noBackground"
            onClick={e => {
              e.preventDefault();
              takeDamage(state.hp, setHP);
            }}
          >
            DAMAGE
          </Button>
        </div>
      </div>

      <div className="box flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <div
            className="text-2xl"
            data-testid="humanity-display"
          >
            {state.humanity}
          </div>
          <div>Humanity (HUM)</div>
        </div>
        <div className="flex flex-col justify-center items-center ml-3">
          <Button
            className="text-heal-green border-heal-green bg-none"
            variant="noBackground"
            onClick={e => {
              e.preventDefault();
              incrementHumanity(state.humanity, setHumanity, state.stats, setStats);
            }}
          >
            ADD
          </Button>
          {/* don't allow negative input */}
          <input
            className="box w-20 h-10"
            type="number"
            ref={humanityInputRef}
            min={0}
            data-testid="humanity-input"
          ></input>
          <Button
            variant="noBackground"
            onClick={e => {
              e.preventDefault();
              decrementHumanity(state.humanity, setHumanity, state.stats, setStats);
            }}
          >
            REMOVE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
