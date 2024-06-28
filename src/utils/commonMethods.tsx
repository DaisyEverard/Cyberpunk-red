// CALCULATIONS
const calculateHPMax = (stats) => {
  const bodyWillAverage = Math.ceil((stats['BODY'] + stats['WILL']) / 2);
  return 10 + (5 * bodyWillAverage);
};
const calculateHP = (stats) => {
  const maxHP = calculateHPMax(stats)
  return maxHP
};
const calculateHumanity = (stats) => {
  return 10 * stats['EMP'];
};

// BOOLEAN STAT CHECKS
const isSeriouslyWounded = (stats, HP) => {
  const HPMax = calculateHPMax(stats)
  const seriouslyWoundedThreshold = Math.ceil(HPMax/2)
  if (HP <= seriouslyWoundedThreshold) {
    return true
  } else {
    return false
  }
}

// DERIVED STAT UPDATERS
const updateHP = (setHP, newStats) => {
  setHP(calculateHP(newStats));
};
const updateHumanity = (setHumanity, newStats) => {
  setHumanity(calculateHumanity(newStats));
};

export { calculateHP, calculateHumanity, updateHP, updateHumanity, isSeriouslyWounded};
