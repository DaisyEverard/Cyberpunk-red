import { useContext } from 'react';

import { CharacterContext } from '../context/Character';
import { Stats } from '../types/types';
import { calculateHPMax, updateHumanity } from './commonMethods';

type IncrementDecrementStatProps = {
  statName: string;
  remainingPoints: number;
  setRemainingPoints: (points: number) => void;
};

const IncrementDecrementStat = ({ statName, remainingPoints, setRemainingPoints }: IncrementDecrementStatProps) => {
  const { getStats, setStats, getHP, setHP, setHumanity } = useContext(CharacterContext);

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
      updateHumanity(setHumanity, newStats);
      setRemainingPoints(remainingPoints - 1);
    }
  };
  const decrement = (
    stats: Stats,
    statName: string,
    remainingPoints: number,
    setRemainingPoints: (points: number) => void,
    HP: number,
    setHP: (HP: number) => void,
    calculateHPMax: (stats: Stats) => number,
  ) => {
    if (stats[statName] > 2) {
      const newStats = { ...stats };
      newStats[statName] -= 1;

      setStats(newStats);
      updateHumanity(setHumanity, newStats);
      setRemainingPoints(remainingPoints + 1);

      const HPMax = calculateHPMax(newStats);
      if (HP > HPMax) {
        setHP(HPMax);
      }
    }
  };

  return (
    <td>
      <button
        onClick={e => {
          e.preventDefault();
          increment(getStats(), statName, remainingPoints, setRemainingPoints);
        }}
      >
        +
      </button>
      <button
        onClick={e => {
          e.preventDefault();
          decrement(getStats(), statName, remainingPoints, setRemainingPoints, getHP(), setHP, calculateHPMax);
        }}
      >
        -
      </button>
    </td>
  );
};

export default IncrementDecrementStat;
