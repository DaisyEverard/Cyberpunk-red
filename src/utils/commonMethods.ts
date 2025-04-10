import { NameAndID } from './apiCalls';

import { EffectsType, StatsType } from '../types/types';

// INCREMENT / DECREMENT
const incrementAnyNumericalState = (currentState: number, setState: (newState: number) => void, max: number = 999) => {
  let success = false;

  const stateUnderMax = max != 999 && currentState < max;
  const noMax = max == 999;

  if (stateUnderMax || noMax) {
    setState(currentState + 1);
    success = true;
  }

  return success;
};

const decrementAnyNumericalState = (currentState: number, setState: (newState: number) => void, min: number = 0) => {
  let success = false;

  if (currentState > min) {
    setState(currentState - 1);
    success = true;
  }

  return success;
};

// CALCULATIONS
const calculateHPMax = (stats: StatsType) => {
  const bodyWillAverage = Math.ceil((stats['BODY'] + stats['WILL']) / 2);
  return 10 + 5 * bodyWillAverage;
};
const calculateHP = (stats: StatsType) => {
  const maxHP = calculateHPMax(stats);
  return maxHP;
};
const calculateHumanity = (stats: StatsType) => {
  return 10 * stats['EMP'];
};

// BOOLEAN STAT CHECKS
const isSeriouslyWounded = (stats: StatsType, HP: number) => {
  const HPMax = calculateHPMax(stats);
  const seriouslyWoundedThreshold = Math.ceil(HPMax / 2);
  if (HP <= seriouslyWoundedThreshold) {
    return true;
  } else {
    return false;
  }
};

const isMortallyWounded = (HP: number) => {
  const mortallyWoundedThreshold = 1;
  if (HP < mortallyWoundedThreshold) {
    return true;
  } else {
    return false;
  }
};

// TOGGLE EFFECTS
const setEffect = (
  effects: EffectsType,
  setEffects: (newEffects: EffectsType) => void,
  trueOrFalse: boolean,
  effectName: string,
) => {
  const newEffects = { ...effects };
  newEffects[effectName]['active'] = trueOrFalse;
  setEffects(newEffects);
};

// DERIVED STAT UPDATERS
const updateHP = (setHP: (newHP: number) => void, newStats: StatsType) => {
  setHP(calculateHP(newStats));
};
const updateHumanity = (setHumanity: (newHumanity: number) => void, newStats: StatsType) => {
  setHumanity(calculateHumanity(newStats));
};

// GET PAGE NAME
const getPageName = (location: Location): string => {
  let title = location.pathname.replace('/', ''); // Remove the leading '/'
  let titleWordArray = title.toLowerCase().split(' ');

  let formattedTitle = titleWordArray
    .map(word => (word ? word[0].toUpperCase() + word.substring(1) : '')) // Handle empty words
    .join(' '); // Join back into a string

  return formattedTitle || 'Home';
};

// DICE ROLLING
const rollDice = (maxNumber: number) => {
  const random = Math.random() * maxNumber;
  return Math.ceil(random);
};

const rollSkillCheck = (): number[] => {
  const baseRoll = rollDice(10);

  if (baseRoll == 1) {
    return [baseRoll, rollDice(10) * -1];
  }
  if (baseRoll == 10) {
    return [baseRoll, rollDice(10)];
  }
  return [baseRoll, 0];
};

// Names And IDs
const removeFromNamesAndIDs = (id: string, namesAndIDs: NameAndID[]): NameAndID[] => {
  namesAndIDs.forEach((character, i) => {
    if (character.id == id) {
      namesAndIDs.splice(i, 1);
      return namesAndIDs;
    }
  });
  return namesAndIDs;
};

export {
  decrementAnyNumericalState,
  incrementAnyNumericalState,
  calculateHP,
  calculateHPMax,
  calculateHumanity,
  updateHP,
  updateHumanity,
  isSeriouslyWounded,
  isMortallyWounded,
  setEffect,
  getPageName,
  rollDice,
  rollSkillCheck,
  removeFromNamesAndIDs,
};
