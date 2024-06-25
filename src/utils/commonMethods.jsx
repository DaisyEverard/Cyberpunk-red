const calculateHP = (stats) => {
    const bodyWillAverage = Math.ceil((stats["BODY"] + stats["WILL"])/2)
    return 10 + (5 * bodyWillAverage)
}

const setStatsAndHP = (setHP, setStats, newStats) => {
    setHP(calculateHP(newStats))
    setStats(newStats)
}

export {calculateHP, setStatsAndHP}