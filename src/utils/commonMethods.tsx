
// INCREMENT / DECREMENT
const incrementHP = (HP: number, setHP: (newHP: number) => void, maxHP: number) => {
  let success = false
  if (HP < maxHP) {
    setHP(HP + 1)
    success = true
  }
  return success
}

const decrementHP = (HP: number, setHP: (newHP: number) => void) => {
  let success = false
  if (HP > 0) {
    setHP(HP - 1)
    success = true
  }
  return success
}

const incrementHumanity = (humanity: number, setHumanity: (newHumanity: number) => void) => {
    setHumanity(humanity + 1)
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
  incrementHP, 
  decrementHP,
  incrementHumanity,
  decrementHumanity,
  calculateHP,
  calculateHPMax, 
  calculateHumanity, 
  updateHP, 
  updateHumanity, 
  isSeriouslyWounded
};
