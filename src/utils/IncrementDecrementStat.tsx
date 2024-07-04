import { useContext } from 'react';

import { HPContext, HumanityContext, StatsContext } from '../App';
import { Stats } from '../types/types';
import { updateHP, updateHumanity } from './commonMethods';

type IncrementDecrementStatProps = {
  statName: string;
  remainingPoints: number;
  setRemainingPoints: (points: number) => void;
};

const IncrementDecrementStat = ({ statName, remainingPoints, setRemainingPoints }: IncrementDecrementStatProps) => {
  const { HP, setHP } = useContext(HPContext);
  const { stats, setStats } = useContext(StatsContext);
  const { humanity, setHumanity } = useContext(HumanityContext);

  const increment = (
    stats: Stats,
    statName: string,
    remainingPoints: number,
    setRemainingPoints: (points: number) => void,
  ) => {
    if (remainingPoints > 0 && stats[statName] < 8) {
      const newStats = { ...stats };
      newStats[statName] += 1;

      setStats(newStats);
      updateHP(setHP, newStats);
      updateHumanity(setHumanity, newStats);
      setRemainingPoints(remainingPoints - 1);
    }
  };
  const decrement = (
    stats: Stats,
    statName: string,
    remainingPoints: number,
    setRemainingPoints: (points: number) => void,
  ) => {
    if (stats[statName] > 2) {
      const newStats = { ...stats };
      newStats[statName] -= 1;

      setStats(newStats);
      updateHP(setHP, newStats);
      updateHumanity(setHumanity, newStats);
      setRemainingPoints(remainingPoints + 1);
    }
  };

  return (
    <td>
      <button
        onClick={e => {
          e.preventDefault();
          increment(stats, statName, remainingPoints, setRemainingPoints);
        }}
      >
        +
      </button>
      <button
        onClick={e => {
          e.preventDefault();
          decrement(stats, statName, remainingPoints, setRemainingPoints);
        }}
      >
        -
      </button>
    </td>
  );
};

export default IncrementDecrementStat;
