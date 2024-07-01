
// INCREMENT / DECREMENT

const incrementAnyNumericalState = (currentState: number, setState: (newState: number) => void, max: number = 999) => {
  let success = false

  const stateUnderMax = (max != 999) && (currentState < max)
  const noMax = (max == 999)

  if (stateUnderMax || noMax) {
    setState(currentState + 1)
    success = true
  }

  return success
}


const decrementAnyNumericalState = (currentState: number, setState: (newState: number) => void, min: number = 0) => {
  let success = false

  if (currentState > min) {
    setState(currentState - 1)
    success = true
  }

  return success
}

const decrementHumanity = (humanity: number, setHumanity: (newHumanity: number) => void, stats:  Record<string, number>, setStats: (stats:  Record<string, number>) => void) => {
  let success = false
  const startHumanityModulusTen = humanity % 10

  if (humanity > 0 && startHumanityModulusTen == 0) {
    // subtract one from emp
    let newStats = {...stats}
    newStats["EMP"] -= 1 
    setStats(newStats)
  }
  if (humanity > 0) {
    setHumanity(humanity - 1)
    success = true
  }
  return success
}

// CALCULATIONS
const calculateHPMax = (stats: Record<string, number>) => {
  const bodyWillAverage = Math.ceil((stats['BODY'] + stats['WILL']) / 2);
  return 10 + (5 * bodyWillAverage);
};
const calculateHP = (stats:  Record<string, number>) => {
  const maxHP = calculateHPMax(stats)
  return maxHP
};
const calculateHumanity = (stats:  Record<string, number>) => {
  return 10 * stats['EMP'];
};

// BOOLEAN STAT CHECKS
const isSeriouslyWounded = (stats:  Record<string, number>, HP:number) => {
  const HPMax = calculateHPMax(stats)
  const seriouslyWoundedThreshold = Math.ceil(HPMax/2)
  if (HP <= seriouslyWoundedThreshold) {
    return true
  } else {
    return false
  }
}

// DERIVED STAT UPDATERS
const updateHP = (setHP: (newHP: number) => void, newStats:  Record<string, number>) => {
  setHP(calculateHP(newStats));
};
const updateHumanity = (setHumanity: (newHumanity: number) => void, newStats:  Record<string, number>) => {
  setHumanity(calculateHumanity(newStats));
};

export { 
  decrementAnyNumericalState,
  incrementAnyNumericalState,
  decrementHumanity,
  calculateHP,
  calculateHPMax, 
  calculateHumanity, 
  updateHP, 
  updateHumanity, 
  isSeriouslyWounded,
};
