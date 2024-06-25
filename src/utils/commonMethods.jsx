// CALCULATIONS
const calculateHP = (stats) => {
    const bodyWillAverage = Math.ceil((stats["BODY"] + stats["WILL"])/2)
    return 10 + (5 * bodyWillAverage)
}
const calculateHumanity = (stats) => {
    return 10 * stats["EMP"]
}

// DERIVED STAT UPDATERS
const updateHP = (setHP, newStats) => {
    setHP(calculateHP(newStats))
}
const updateHumanity = (setHumanity, newStats) => {
    setHumanity(calculateHumanity(newStats))
}

export {calculateHP, calculateHumanity, updateHP, updateHumanity}