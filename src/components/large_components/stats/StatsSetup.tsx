import { useContext, useState } from 'react';

import { CharacterContext } from '../../../context/Character';
import IncrementDecrementStatCell from '../../table_cells/IncrementDecrementStatCell';
import StatsExplaination from './StatsExplaination';

const StatsSetup = () => {
  const { getStats } = useContext(CharacterContext);

  const [remainingPoints, setRemainingPoints] = useState(42);

  return (
    <div className="flex gap-1">
      <StatsExplaination />
      <div className="box flex flex-col flex-1">
        <div>
          <p>
            <strong>Points Remaining:</strong>
          </p>
          <p>{remainingPoints}</p>
        </div>
        <table>
          <thead>
            <tr>
              <th>STAT</th>
              <th>LEVEL</th>
              <th>ADJUST</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(getStats()).map((statName, index) => {
              const level = getStats()[statName];

              return (
                <tr key={index}>
                  <th>{statName}</th>
                  <td>{level}</td>
                  <IncrementDecrementStatCell
                    statName={statName}
                    setRemainingPoints={setRemainingPoints}
                    remainingPoints={remainingPoints}
                  />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StatsSetup;
