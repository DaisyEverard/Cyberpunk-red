import { useContext } from 'react';

import { CharacterContext } from '../../context/Character';
import { StatsType } from '../../types/types';
import { calculateHPMax, updateHumanity } from '../../utils/commonMethods';
import Button from '../common/Button';

type IncrementDecrementStatCellProps = {
  statName: string;
  remainingPoints: number;
  setRemainingPoints: (points: number) => void;
};

const IncrementDecrementStatCell = ({
  statName,
  remainingPoints,
  setRemainingPoints,
}: IncrementDecrementStatCellProps) => {
  const { setStats, setHP, setHumanity, state } = useContext(CharacterContext);

  const increment = (
    stats: StatsType,
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
    stats: StatsType,
    statName: string,
    remainingPoints: number,
    setRemainingPoints: (points: number) => void,
    HP: number,
    setHP: (HP: number) => void,
    calculateHPMax: (stats: StatsType) => number,
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
      <Button
        onClick={e => {
          e.preventDefault();
          increment(state.stats, statName, remainingPoints, setRemainingPoints);
        }}
        variant="round"
      >
        +
      </Button>
      <Button
        variant="round"
        onClick={e => {
          e.preventDefault();
          decrement(state.stats, statName, remainingPoints, setRemainingPoints, state.hp, setHP, calculateHPMax);
        }}
      >
        -
      </Button>
    </td>
  );
};

export default IncrementDecrementStatCell;
