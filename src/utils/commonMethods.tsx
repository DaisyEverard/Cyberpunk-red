import { Effects, Stats } from '../types/types';

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
const calculateHPMax = (stats: Stats) => {
  const bodyWillAverage = Math.ceil((stats['BODY'] + stats['WILL']) / 2);
  return 10 + 5 * bodyWillAverage;
};
const calculateHP = (stats: Stats) => {
  const maxHP = calculateHPMax(stats);
  return maxHP;
};
const calculateHumanity = (stats: Stats) => {
  return 10 * stats['EMP'];
};

// BOOLEAN STAT CHECKS
const isSeriouslyWounded = (stats: Stats, HP: number) => {
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
  effects: Effects,
  setEffects: (newEffects: Effects) => void,
  trueOrFalse: boolean,
  effectName: string,
) => {
  const newEffects = { ...effects };
  newEffects[effectName]['active'] = trueOrFalse;
  setEffects(newEffects);
};

// DERIVED STAT UPDATERS
const updateHP = (setHP: (newHP: number) => void, newStats: Stats) => {
  setHP(calculateHP(newStats));
};
const updateHumanity = (setHumanity: (newHumanity: number) => void, newStats: Stats) => {
  setHumanity(calculateHumanity(newStats));
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
};
